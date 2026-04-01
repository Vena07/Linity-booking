<script>
  import { page } from '$app/stores';
  import { Menu, X } from 'lucide-svelte';

  let isMenuOpen = false;

  const navItems = [
    { name: 'O nás', href: '/o_nas' },
    { name: 'Služby', href: '/sluzby' },
    { name: 'Booking', href: '/booking' },
    { name: 'Kontakt', href: '/kontakt' }
  ];

  const leftNav = navItems.slice(0, 2);
  const rightNav = navItems.slice(2, 5);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (typeof document !== 'undefined') {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    }
  }

  function closeMenu() {
    isMenuOpen = false;
    if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
    }
  }
</script>

<header class="site-header">
  <div class="header-inner">
    
    <nav class="desktop-nav left">
      {#each leftNav as item}
        <a href={item.href} class:active={$page.url.pathname === item.href}>
          {item.name}
        </a>
      {/each}
    </nav>

    <div class="logo">
      <a href="/" on:click={closeMenu}>
        <img src="/logohe.png" alt="Linity Agency" class="logo-img" />
      </a>
    </div>

    <nav class="desktop-nav right">
      {#each rightNav as item}
        <a href={item.href} class:active={$page.url.pathname === item.href}>
          {item.name}
        </a>
      {/each}
    </nav>

    <button class="hamburger" on:click={toggleMenu} aria-label="Menu">
      <Menu size={24} color="#000000" />
    </button>
  </div>
</header>

<div class="mobile-menu {isMenuOpen ? 'open' : ''}">
  <button class="close-btn" on:click={toggleMenu}>
    <X size={24} color="#000000" />
  </button>
  <nav class="mobile-links">
    {#each navItems as item}
      <a href={item.href} on:click={closeMenu}>{item.name}</a>
    {/each}
  </nav>
</div>

{#if isMenuOpen}
  <div class="backdrop" on:click={closeMenu} role="button" tabindex="0"></div>
{/if}

{#if $page.url.pathname !== '/'}
  <div class="spacer"></div>
{/if}

<style>
  /* --- NASTAVENÍ -- */
  :root {
    --header-radius: 40px; 
    --header-bg-color: 255, 255, 255; 
    --header-opacity: 0.85; 
  }

  * { box-sizing: border-box; }

  .site-header {
    position: fixed;
    top: 0; left: 50%; 
    transform: translateX(-50%);
    
    width: auto; max-width: 95%; 
    height: var(--header-height, 80px);
    
    background: rgba(var(--header-bg-color), var(--header-opacity));
    backdrop-filter: blur(12px);
    
    /* Zaoblení jen dole */
    border-bottom-left-radius: var(--header-radius); 
    border-bottom-right-radius: var(--header-radius);
    
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.5); 
    border-top: none; 
    
    z-index: 1000; 
    display: flex; align-items: center; justify-content: center;
    padding: 0 40px;
    
    overflow: visible; 
  }

  /* --- LEVÝ ROH (OTOČENÝ NAHORU) --- */
  .site-header::before {
    content: "";
    position: absolute;
    top: 0;
    left: calc(var(--header-radius) * -1); /* Posun doleva */
    width: var(--header-radius);
    height: var(--header-radius);
    
    /* ZMĚNA: circle at 0 100% (vlevo dole) - barva zůstane vpravo nahoře */
    background: radial-gradient(
      circle at 0 100%, 
      transparent calc(var(--header-radius) - 1px), 
      rgba(var(--header-bg-color), var(--header-opacity)) var(--header-radius)
    );
    z-index: 1000;
    pointer-events: none; 
  }

  /* --- PRAVÝ ROH (OTOČENÝ NAHORU) --- */
  .site-header::after {
    content: "";
    position: absolute;
    top: 0;
    right: calc(var(--header-radius) * -1); /* Posun doprava */
    width: var(--header-radius);
    height: var(--header-radius);
    
    /* ZMĚNA: circle at 100% 100% (vpravo dole) - barva zůstane vlevo nahoře */
    background: radial-gradient(
      circle at 100% 100%, 
      transparent calc(var(--header-radius) - 1px), 
      rgba(var(--header-bg-color), var(--header-opacity)) var(--header-radius)
    );
    z-index: 1000;
    pointer-events: none;
  }
  
  .header-inner {
    display: flex; justify-content: space-between; align-items: center; 
    gap: 30px; width: 100%;
  }

  .logo { display: flex; justify-content: center; align-items: center; }
  .logo-img { height: 45px; width: auto; display: block; transition: transform 0.2s; }
  .logo a:hover .logo-img { transform: scale(1.05); }

  .desktop-nav { display: flex; gap: 30px; white-space: nowrap; }
  .desktop-nav a {
    text-transform: uppercase; font-weight: 900; font-size: 0.9rem; 
    letter-spacing: 0.5px; color: var(--color-black, #000);
    text-decoration: none; transition: color 0.3s;
  }
  .desktop-nav a:hover { color: var(--color-primary-dark, #555); }
  .desktop-nav a.active { color: var(--color-primary-dark, #555); }

  .hamburger { display: none; }
  .mobile-menu { display: none; }
  .backdrop { display: none; }
  .spacer { height: var(--header-height, 80px); }

  @media (max-width: 900px) {
    .site-header { width: 90%; padding: 0 20px; justify-content: space-between; }
    
    .desktop-nav { display: none; }
    .hamburger { 
        display: flex; width: 44px; height: 44px; border-radius: 50%;
        background: white; border: 2px solid var(--color-black, #000);
        cursor: pointer; align-items: center; justify-content: center; padding: 0;
    }
    .mobile-menu {
        display: flex; position: fixed; top: 0; right: 0; bottom: 0; 
        width: 85%; max-width: 350px; height: 100vh; 
        background: white; z-index: 2000; 
        transform: translateX(100%); transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
        padding: 100px 30px; flex-direction: column;
        box-shadow: -10px 0 30px rgba(0,0,0,0.15);
    }
    .mobile-menu.open { transform: translateX(0); }
    .close-btn {
        position: absolute; top: 25px; right: 25px; 
        width: 44px; height: 44px; border-radius: 50%; background: #f1f1f1; 
        border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 2001;
    }
    .mobile-links { display: flex; flex-direction: column; gap: 25px; }
    .mobile-links a { 
        font-size: 1.5rem; font-weight: 900; text-transform: uppercase; 
        color: var(--color-black, #000); border-bottom: 1px solid #f0f0f0;
        padding-bottom: 10px; text-decoration: none;
    }
    .backdrop {
        display: block; position: fixed; top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.4); z-index: 1500; backdrop-filter: blur(4px);
    }
  }
</style>