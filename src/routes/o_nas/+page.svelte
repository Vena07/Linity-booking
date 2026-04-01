<script>
  import { onMount } from 'svelte';
  import { MapPin, ArrowRight, Activity } from 'lucide-svelte';

  const clubs = ['Fenix Music Club', 'Bílej Medvěd', 'Watt Music Club', 'Urbex club', 'Mko Music Club', 'Summer City Festival', 'Bolevák Festival'];
  const galleryImages = ['/foto1.jpg', '/foto3.jpg', '/foto4.jpg'];

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
  });
</script>

<svelte:head><title>O nás | Linity Booking</title></svelte:head>

<div class="page-padding">
  
  <section class="story-section container">
    <div class="story-grid">
      <div class="story-left animate-on-scroll">
        <span class="badge">Linity DNA</span>
        <h1 class="page-title">Nehrajeme si na agenturu.<br><span class="highlight">My tu scénu žijeme.</span></h1>
        
        <div class="stats-mini">
          <div class="stat-mini">
            <strong>50k+</strong>
            <span>Bavících se lidí</span>
          </div>
          <div class="stat-mini">
            <strong>250+</strong>
            <span>Odehraných eventů</span>
          </div>
        </div>
      </div>

      <div class="story-right animate-on-scroll" style="--delay: 150ms">
        <div class="story-card">
          <Activity size={32} color="var(--color-primary-dark)" style="margin-bottom: 20px;" />
          <p class="lead-text">Vznikli jsme z jednoduché potřeby: zvednout úroveň klubové zábavy v ČR.</p>
          <p>Už nás nebavilo koukat na promotéry, kteří se trápí s výpadky DJs, špatnou technikou a nulovým promelem. Vzali jsme to do vlastních rukou.</p>
          <p>Dnes máme pod sebou desítky talentů a špičkovou techniku. Ať už děláme malý páteční warmup, nebo vyprodanou halu, jedeme na 100 %.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="clubs-section container animate-on-scroll">
    <div class="section-header">
      <h2>Organizujeme pravidelně <br>v těchto prostorech:</h2>
      <p>Lokace, kde jsme nechali kus srdce a potu.</p>
    </div>
    
    <div class="bento-clubs">
      {#each clubs as club, i}
        <div class="bento-item" style="--delay: {i * 50}ms">
          <MapPin size={18} color="var(--color-primary-dark)" class="bento-icon" />
          <span>{club}</span>
        </div>
      {/each}
      <div class="bento-item bento-highlight">
        <span>+ 8 dalších</span>
      </div>
    </div>
  </section>

  <section class="gallery-section container">
    <div class="section-header text-center animate-on-scroll">
      <h2>Jak to vypadá <span class="highlight">v praxi</span></h2>
    </div>
    
    <div class="modern-gallery">
      {#each galleryImages as image, i}
        <div class="gallery-item-wrapper animate-on-scroll img-{i + 1}" style="--delay: {i * 100}ms;">
          <div class="gallery-item" style="background-image: url('{image}');"></div>
        </div>
      {/each}
    </div>
    
    <div class="text-center animate-on-scroll" style="margin-top: 40px; --delay: 400ms;">
      <a href="https://instagram.com/linityagency" target="_blank" class="btn-instagram">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
        </svg> 
        <span>Sleduj náš Instagram</span>
      </a>
    </div>
  </section>

  <section class="bottom-cta container animate-on-scroll">
    <div class="cta-content">
      <h2>Chceš tenhle vibe <span class="highlight">i ve svém klubu?</span></h2>
      <p>Nečekej, ozvi se nám a něco vymyslíme.</p>
      <a href="/booking" class="btn-main">
        NAPIŠ NÁM <ArrowRight size={20} />
      </a>
    </div>
  </section>
</div>

<style>
  /* ANIMACE A ZÁKLAD */
  .animate-on-scroll { opacity: 0; transform: translateY(30px); transition: 0.8s cubic-bezier(0.25, 1, 0.5, 1); }
  :global(.animate-on-scroll.visible) { opacity: 1; transform: translateY(0); transition-delay: var(--delay, 0ms); }
  
  .page-padding { padding: 160px 0 80px; }
  .highlight { color: var(--color-primary-dark); }
  .text-center { text-align: center; }
  .section-header { margin-bottom: 40px; }
  .section-header h2 { font-size: 2.8rem; font-weight: 900; text-transform: uppercase; margin-bottom: 10px; line-height: 1.1; }
  .section-header p { color: #64748b; font-size: 1.1rem; }

  /* STORY SECTION (Asymetrický Layout) */
  .story-section { margin-bottom: 120px; }
  .badge { display: inline-block; background: #f0fdf4; color: var(--color-primary-dark); padding: 6px 16px; border-radius: 50px; font-weight: 800; font-size: 0.85rem; border: 1px solid rgba(74, 222, 128, 0.4); text-transform: uppercase; margin-bottom: 25px; }
  
  .story-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
  .page-title { font-size: 4rem; font-weight: 900; text-transform: uppercase; line-height: 1.05; letter-spacing: -1px; margin-bottom: 40px; }
  
  .stats-mini { display: flex; gap: 40px; border-top: 1px solid #e2e8f0; padding-top: 30px; }
  .stat-mini strong { display: block; font-size: 2.5rem; font-weight: 900; color: var(--color-black); line-height: 1; margin-bottom: 5px; }
  .stat-mini span { font-size: 0.9rem; font-weight: 700; text-transform: uppercase; color: #64748b; }

  .story-card { background: white; padding: 50px; border-radius: 32px; border: 1px solid #e2e8f0; box-shadow: 0 20px 40px -10px rgba(0,0,0,0.05); position: relative; overflow: hidden; }
  .story-card::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 6px; background: linear-gradient(90deg, var(--color-primary), var(--color-primary-dark)); }
  .lead-text { font-size: 1.3rem; font-weight: 800; color: var(--color-black); margin-bottom: 20px; line-height: 1.5; }
  .story-card p:not(.lead-text) { font-size: 1.1rem; color: #475569; line-height: 1.7; margin-bottom: 15px; }
  .story-card p:last-child { margin-bottom: 0; }

  /* BENTO CLUBS */
  .clubs-section { margin-bottom: 120px; }
  .bento-clubs { display: flex; flex-wrap: wrap; gap: 15px; }
  .bento-item { background: white; border: 1px solid #e2e8f0; padding: 18px 24px; border-radius: 16px; font-weight: 800; font-size: 1.1rem; display: flex; align-items: center; gap: 12px; color: var(--color-black); transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1); flex-grow: 1; justify-content: center; }
  .bento-item:hover { transform: translateY(-4px) scale(1.02); border-color: var(--color-primary-dark); box-shadow: 0 10px 20px -5px rgba(74, 222, 128, 0.15); z-index: 2; }
  .bento-highlight { background: #f8fafc; color: #64748b; border-style: dashed; border-width: 2px; }
  .bento-highlight:hover { transform: none; border-color: #cbd5e1; box-shadow: none; }

  /* MODERN GALLERY (Masonry-like) */
  .gallery-section { margin-bottom: 100px; }
  .modern-gallery { display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(2, 250px); gap: 20px; }
  .gallery-item-wrapper { overflow: hidden; border-radius: 24px; border: 1px solid #e2e8f0; }
  .gallery-item { width: 100%; height: 100%; background-size: cover; background-position: center; transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1); }
  .gallery-item-wrapper:hover .gallery-item { transform: scale(1.05); }
  
  /* Specifické rozměry pro fotky, aby to nebylo nudné */
  .img-1 { grid-column: span 2; grid-row: span 2; } /* Velká hlavní fotka */
  .img-2 { grid-column: span 1; grid-row: span 1; }
  .img-3 { grid-column: span 1; grid-row: span 1; }
  .img-4 { display: none; } /* Čtvrtou fotku schováme pro tento layout, nebo ji můžeš přidat dál */

  /* TLAČÍTKA */
  .btn-instagram { display: inline-flex; align-items: center; gap: 12px; padding: 16px 32px; border: 2px solid #e2e8f0; border-radius: 50px; font-weight: 800; text-transform: uppercase; background: white; transition: all 0.3s; color: var(--color-black); text-decoration: none; font-size: 0.95rem; }
  .btn-instagram:hover { border-color: var(--color-primary-dark); color: var(--color-primary-dark); transform: translateY(-3px); box-shadow: 0 10px 20px -5px rgba(74, 222, 128, 0.15); }

  .btn-main { display: inline-flex; align-items: center; gap: 10px; background: var(--color-primary); color: #000; font-weight: 900; padding: 18px 35px; border-radius: 16px; text-transform: uppercase; transition: all 0.3s; box-shadow: 0 10px 25px -5px rgba(74, 222, 128, 0.4); text-decoration: none; }
  .btn-main:hover { transform: translateY(-4px); background: var(--color-primary-dark); color: white; box-shadow: 0 15px 30px -5px rgba(74, 222, 128, 0.6); }

  /* BOTTOM CTA */
  .bottom-cta { margin-top: 120px; }
  .cta-content { background: #111827; padding: 80px 40px; border-radius: 32px; text-align: center; color: white; position: relative; overflow: hidden; box-shadow: 0 20px 40px -10px rgba(0,0,0,0.2); }
  .cta-content::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle at center, rgba(34, 197, 94, 0.1) 0%, transparent 50%); pointer-events: none; }
  .cta-content h2 { font-size: 3rem; font-weight: 900; text-transform: uppercase; margin-bottom: 15px; position: relative; z-index: 1; }
  .cta-content p { font-size: 1.2rem; color: #94a3b8; margin-bottom: 35px; position: relative; z-index: 1; }

  /* RESPONSIVE */
  @media (max-width: 900px) { 
    .story-grid { grid-template-columns: 1fr; gap: 40px; }
    .page-title { font-size: 3rem; } 
    .stats-mini { flex-direction: column; gap: 20px; }
    
    .modern-gallery { grid-template-columns: 1fr; grid-template-rows: auto; }
    .img-1 { grid-column: span 1; grid-row: span 1; aspect-ratio: 4/3; }
    .img-2, .img-3 { aspect-ratio: 4/3; }
    
    .cta-content { padding: 50px 20px; }
    .cta-content h2 { font-size: 2.2rem; }
  }
</style>