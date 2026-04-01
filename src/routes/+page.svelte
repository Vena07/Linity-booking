<script>
  import { onMount } from 'svelte';
  import { ArrowRight, Users, Calendar, Star, Mic, Music, Building2 } from 'lucide-svelte';

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { 
        if (e.isIntersecting) { 
          e.target.classList.add('visible'); 
          observer.unobserve(e.target); 
        } 
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
  });
</script>

<svelte:head>
  <title>Linity Booking | B2B Produkce pro kluby</title>
</svelte:head>

<section class="hero-section">
  <div class="container hero-content animate-on-scroll">
    <div class="hero-image-wrapper">
      <img src="/logohero.png" alt="Linity B2B" class="hero-img" />
    </div>
    <h1 class="hero-title">
      Posuneme tvůj klub <br><span class="highlight">na další level.</span>
    </h1>
    <p class="hero-subtitle">
      Nabízíme kompletní produkci a exkluzivní booking pro tvůj podnik. Máme čísla a víme, co lidi baví.
    </p>
    <div class="cta-wrapper">
      <a href="/booking" class="btn-main">
        NEZÁVAZNÁ POPTÁVKA
        <ArrowRight size={24} strokeWidth={3} />
      </a>
      <a href="/sluzby" class="btn-secondary">
        Co všechno umíme?
      </a>
    </div>
  </div>
</section>

<section class="home-stats-section">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-box animate-on-scroll" style="--delay: 100ms">
        <Users size={32} color="var(--color-primary-dark)" class="stat-icon" />
        <div class="stat-number">6,5k+</div>
        <div class="stat-label">Návštěvníků</div>
      </div>
      <div class="stat-box animate-on-scroll" style="--delay: 200ms">
        <Calendar size={32} color="var(--color-primary-dark)" class="stat-icon" />
        <div class="stat-number">180+</div>
        <div class="stat-label">Odehraných eventů</div>
      </div>
      <div class="stat-box animate-on-scroll" style="--delay: 300ms">
        <Star size={32} color="var(--color-primary-dark)" class="stat-icon" />
        <div class="stat-number">99,9%</div>
        <div class="stat-label">Spokojenost klubů</div>
      </div>
    </div>
  </div>
</section>

<section class="home-services-section">
  <div class="container">
    <div class="section-header text-center animate-on-scroll">
      <h2>Co pro váš klub <span class="highlight">zařídíme?</span></h2>
      <p>Profesionální přístup od bookingu jednoho DJe až po produkci na klíč.</p>
    </div>

    <div class="services-grid">
      <div class="service-card animate-on-scroll" style="--delay: 100ms">
        <div class="icon-circle"><Mic size={32} color="#000" /></div>
        <h3>Booking DJs</h3>
        <p>Ty nejlepší jména pro tvůj klub, od lokálních talentů po headlinery.</p>
      </div>
      <div class="service-card animate-on-scroll" style="--delay: 200ms">
        <div class="icon-circle"><Music size={32} color="#000" /></div>
        <h3>Kompletní produkce</h3>
        <p>Postavíme line-up, vymyslíme koncept a zajistíme hladký průběh noci.</p>
      </div>
      <div class="service-card animate-on-scroll" style="--delay: 300ms">
        <div class="icon-circle"><Building2 size={32} color="#000" /></div>
        <h3>Technický support</h3>
        <p>Profesionální DJ technika a spolehlivý technický dozor po celou akci.</p>
      </div>
    </div>

    <div class="text-center animate-on-scroll" style="margin-top: 40px; --delay: 400ms">
      <a href="/sluzby" class="link-more">Prohlédnout všechny služby <ArrowRight size={18} /></a>
    </div>
  </div>
</section>

<section class="bottom-cta-section">
  <div class="container text-center animate-on-scroll">
    <h2>Připraveni to <span class="highlight">rozjet?</span></h2>
    <p>Nečekej, až tě konkurence předežene. Zabookuj si termín ještě dnes.</p>
    <a href="/booking" class="btn-main" style="margin-top: 30px;">
      CHCI NABÍDKU NA MÍRU <ArrowRight size={24} />
    </a>
  </div>
</section>

<style>
  /* --- ANIMACE --- */
  .animate-on-scroll { opacity: 0; transform: translateY(40px); transition: opacity 0.8s, transform 0.8s cubic-bezier(0.25, 1, 0.5, 1); }
  :global(.animate-on-scroll.visible) { opacity: 1; transform: translateY(0); transition-delay: var(--delay, 0ms); }

  /* --- GLOBÁLNÍ TŘÍDY --- */
  .text-center { text-align: center; }
  .highlight { color: var(--color-primary-dark); }
  .section-header { margin-bottom: 50px; }
  .section-header h2 { font-size: 2.8rem; font-weight: 900; text-transform: uppercase; margin-bottom: 15px; }
  .section-header p { font-size: 1.15rem; color: #6b7280; }

  /* --- HERO SEKCE --- */
  .hero-section { position: relative; padding: 190px 20px 230px; text-align: center; min-height: 90vh; display: flex; align-items: center; justify-content: center;}
  .hero-section::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url('/foto2.jpg'); background-position: bottom center; background-size: cover; transform: scale(1.05); z-index: -1; }
  .hero-content { position: relative; z-index: 2; max-width: 800px; }
  .hero-img { height: 150px; object-fit: contain; filter: drop-shadow(0 10px 20px rgba(255,255,255,0.3)); margin-bottom: 20px; }
  .badge { display: inline-block; background: #f0fdf4; color: var(--color-primary-dark); padding: 8px 20px; border-radius: 50px; font-weight: 800; font-size: 0.9rem; border: 1px solid rgba(74, 222, 128, 0.4); text-transform: uppercase; margin-bottom: 20px; }
  .hero-title { font-size: 4rem; font-weight: 900; line-height: 1.1; margin-bottom: 20px; text-transform: uppercase; color: white; text-shadow: 0 4px 20px rgba(0,0,0,0.5); }
  .hero-subtitle { font-size: 1.2rem; color: #f1f5f9; margin-bottom: 40px; line-height: 1.6; text-shadow: 0 2px 10px rgba(0,0,0,0.5); }
  
  .cta-wrapper { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; }
  .btn-main { display: inline-flex; align-items: center; gap: 12px; background: var(--color-primary); color: #000; font-weight: 900; padding: 18px 35px; border-radius: 16px; text-transform: uppercase; transition: all 0.3s; box-shadow: 0 10px 25px -5px rgba(74, 222, 128, 0.5); text-decoration: none;}
  .btn-main:hover { transform: translateY(-4px) scale(1.02); background: var(--color-primary-dark); color: white; box-shadow: 0 20px 35px -5px rgba(74, 222, 128, 0.7); }
  .btn-secondary { display: inline-flex; align-items: center; background: rgba(255,255,255,0.1); color: white; font-weight: 800; padding: 18px 35px; border-radius: 16px; text-transform: uppercase; border: 1px solid rgba(255,255,255,0.3); transition: all 0.3s; backdrop-filter: blur(8px); text-decoration: none;}
  .btn-secondary:hover { background: rgba(255,255,255,0.2); transform: translateY(-4px); }

  /* --- RYCHLÉ STATISTIKY --- */
  .home-stats-section { background: white; padding: 80px 0; border-bottom: 1px solid #e5e7eb; }
  .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
  .stat-box { text-align: center; padding: 30px; background: #f8fafc; border-radius: 20px; border: 1px solid #e2e8f0; transition: transform 0.3s; }
  .stat-box:hover { transform: translateY(-5px); border-color: var(--color-primary-dark); }
  .stat-icon { margin-bottom: 15px; }
  .stat-number { font-size: 3rem; font-weight: 900; color: #1a1a1a; line-height: 1; margin-bottom: 5px; }
  .stat-label { font-size: 1rem; font-weight: 700; color: #64748b; text-transform: uppercase; }

  /* --- SLUŽBY TEASER --- */
  .home-services-section { padding: 100px 0; background: #f8fafc; }
  .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
  .service-card { background: white; padding: 40px 30px; border-radius: 24px; border: 1px solid #e5e7eb; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.03); transition: transform 0.3s; }
  .service-card:hover { transform: translateY(-10px); border-color: var(--color-primary-dark); box-shadow: 0 20px 40px rgba(0,0,0,0.06); }
  .icon-circle { width: 70px; height: 70px; background: #f0fdf4; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px auto; border: 2px solid var(--color-primary); }
  .service-card h3 { font-size: 1.4rem; font-weight: 900; margin-bottom: 15px; text-transform: uppercase; color: #1a1a1a; }
  .service-card p { font-size: 1.05rem; color: #525252; line-height: 1.6; }
  .link-more { display: inline-flex; align-items: center; gap: 8px; font-weight: 800; text-transform: uppercase; color: var(--color-primary-dark); text-decoration: none; font-size: 1.1rem; transition: gap 0.2s; }
  .link-more:hover { gap: 12px; }

  /* --- BOTTOM CTA --- */
  .bottom-cta-section { padding: 100px 20px; background: white; border-top: 1px solid #e5e7eb; }
  .bottom-cta-section h2 { font-size: 3rem; font-weight: 900; margin-bottom: 15px; text-transform: uppercase; }
  .bottom-cta-section p { font-size: 1.2rem; color: #6b7280;}

  /* --- RESPONSIVE --- */
  @media (max-width: 900px) { 
    .hero-title { font-size: 2.8rem; } 
    .stats-grid, .services-grid { grid-template-columns: 1fr; gap: 20px; }
    .section-header h2 { font-size: 2.2rem; }
    .bottom-cta-section h2 { font-size: 2.2rem; }
  }
</style>