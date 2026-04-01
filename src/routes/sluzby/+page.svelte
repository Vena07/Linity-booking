<script>
  import { onMount } from 'svelte';
  import { Mic, Music, Building2, ArrowRight, Check, Zap, ShieldCheck, Clock } from 'lucide-svelte';

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
  });
</script>

<svelte:head><title>Naše Služby | Linity Booking</title></svelte:head>

<div class="page-padding">
  
  <div class="container text-center animate-on-scroll">
    <span class="badge">Naše expertíza</span>
    <h1 class="page-title">Co pro tvůj klub <br><span class="highlight">umíme zajistit?</span></h1>
    <p class="page-subtitle">Od bookingu jednoho DJe na páteční noc až po kompletní produkci měsíčního programu na klíč.</p>
  </div>

  <section class="services-detailed container">
    
    <div class="service-row animate-on-scroll" style="--delay: 100ms">
      <div class="service-icon-col">
        <div class="icon-huge"><Mic size={48} strokeWidth={1.5} /></div>
      </div>
      <div class="service-content">
        <h2>Booking Interpretů a DJs</h2>
        <p class="service-desc">Nemáš čas hledat DJe nebo vyjednávat podmínky? Zajistíme ty nejlepší jména pro tvůj klub. Od lokálních talentů na rozehřátí až po headlinery, přesně podle tvého rozpočtu a cílovky.</p>
        <ul class="feature-list">
          <li><Check size={18} class="check-icon" /> Výběr umělců přesně na míru tvému publiku</li>
          <li><Check size={18} class="check-icon" /> Kompletní komunikace s managementem</li>
          <li><Check size={18} class="check-icon" /> Řešení smluvních podmínek a technických riderů</li>
          <li><Check size={18} class="check-icon" /> Exkluzivní agenturní ceny</li>
        </ul>
      </div>
    </div>

    <div class="service-row animate-on-scroll" style="--delay: 200ms">
      <div class="service-icon-col">
        <div class="icon-huge"><Music size={48} strokeWidth={1.5} /></div>
      </div>
      <div class="service-content">
        <h2>Kompletní Produkce Noci</h2>
        <p class="service-desc">Převezmeme starosti s programem za tebe. Ideální řešení, pokud chceš mít jistotu, že akce šlape od otevření dveří až po ranní zavíračku bez tvých nervů.</p>
        <ul class="feature-list">
          <li><Check size={18} class="check-icon" /> Tvorba hudebního konceptu a tématu akce</li>
          <li><Check size={18} class="check-icon" /> Poskládání line-upu od A do Z</li>
          <li><Check size={18} class="check-icon" /> Tvorba přesného časového harmonogramu</li>
          <li><Check size={18} class="check-icon" /> Stage management a koordinace na místě</li>
        </ul>
      </div>
    </div>

    <div class="service-row animate-on-scroll" style="--delay: 300ms">
      <div class="service-icon-col">
        <div class="icon-huge"><Building2 size={48} strokeWidth={1.5} /></div>
      </div>
      <div class="service-content">
        <h2>Technický Support</h2>
        <p class="service-desc">Technika občas selže, my ne. Přivezeme, zapojíme a odvezeme vybavení, které aktuální scéna vyžaduje. Vše v profi kvalitě a s dozorem.</p>
        <ul class="feature-list">
          <li><Check size={18} class="check-icon" /> Pronájem klubového standardu (Pioneer, Denon)</li>
          <li><Check size={18} class="check-icon" /> Doprava, instalace a otestování před akcí</li>
          <li><Check size={18} class="check-icon" /> Technický dozor během celého večera</li>
          <li><Check size={18} class="check-icon" /> Okamžité řešení případných krizovek</li>
        </ul>
      </div>
    </div>

  </section>

  <section class="why-us-section container animate-on-scroll">
    <div class="why-grid">
      <div class="why-item">
        <ShieldCheck size={32} class="why-icon" />
        <h4>100% Spolehlivost</h4>
        <p>Co se dohodne, to platí. Žádné výpadky DJs na poslední chvíli.</p>
      </div>
      <div class="why-item">
        <Zap size={32} class="why-icon" />
        <h4>Klubové know-how</h4>
        <p>Víme, jaká hudba udrží lidi na baru a jaká je vyžene domů.</p>
      </div>
      <div class="why-item">
        <Clock size={32} class="why-icon" />
        <h4>Šetříme tvůj čas</h4>
        <p>Ty řeš chod klubu a drinky, my se postaráme o program a hudbu.</p>
      </div>
    </div>
  </section>

  <div class="container text-center animate-on-scroll" style="margin-top: 100px;">
    <div class="cta-box">
      <h2>Víš, co potřebuješ?</h2>
      <p>Napiš nám detaily a připravíme ti návrh spolupráce.</p>
      <a href="/booking" class="btn-main">
        PŘEJÍT NA FORMULÁŘ <ArrowRight size={24} />
      </a>
    </div>
  </div>

</div>

<style>
  /* ANIMACE */
  .animate-on-scroll { opacity: 0; transform: translateY(30px); transition: 0.8s cubic-bezier(0.25, 1, 0.5, 1); }
  :global(.animate-on-scroll.visible) { opacity: 1; transform: translateY(0); transition-delay: var(--delay, 0ms); }
  
  .page-padding { padding: 160px 0 80px; }
  .highlight { color: var(--color-primary-dark); }
  .text-center { text-align: center; }

  /* HERO */
  .badge { display: inline-block; background: #f0fdf4; color: var(--color-primary-dark); padding: 6px 16px; border-radius: 50px; font-weight: 800; font-size: 0.85rem; border: 1px solid rgba(74, 222, 128, 0.4); text-transform: uppercase; margin-bottom: 20px; }
  .page-title { font-size: 3.8rem; font-weight: 900; text-transform: uppercase; margin-bottom: 20px; line-height: 1.1; letter-spacing: -1px; }
  .page-subtitle { font-size: 1.25rem; color: #475569; margin-bottom: 80px; max-width: 700px; margin-left: auto; margin-right: auto; line-height: 1.6; }

  /* DETAILNÍ SLUŽBY */
  .services-detailed { display: flex; flex-direction: column; gap: 40px; margin-bottom: 100px; }
  .service-row { display: flex; background: white; border: 1px solid #e2e8f0; border-radius: 32px; padding: 40px; gap: 50px; align-items: center; box-shadow: 0 10px 30px rgba(0,0,0,0.03); transition: transform 0.3s, border-color 0.3s; }
  .service-row:hover { transform: translateY(-5px); border-color: var(--color-primary-dark); box-shadow: 0 20px 40px rgba(74, 222, 128, 0.08); }
  
  .service-icon-col { flex-shrink: 0; }
  .icon-huge { width: 120px; height: 120px; background: #f8fafc; border-radius: 24px; display: flex; align-items: center; justify-content: center; color: var(--color-black); border: 2px solid #e2e8f0; transition: 0.3s; }
  .service-row:hover .icon-huge { background: #f0fdf4; border-color: var(--color-primary); color: var(--color-primary-dark); transform: rotate(-5deg) scale(1.05); }

  .service-content h2 { font-size: 2.2rem; font-weight: 900; text-transform: uppercase; margin-bottom: 15px; color: #0f172a; }
  .service-desc { font-size: 1.1rem; color: #475569; line-height: 1.6; margin-bottom: 25px; max-width: 800px; }
  
  .feature-list { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
  .feature-list li { display: flex; align-items: flex-start; gap: 10px; font-size: 1rem; font-weight: 700; color: #1e293b; }
  .check-icon { color: var(--color-primary-dark); flex-shrink: 0; margin-top: 2px; }

  /* PROČ S NÁMI */
  .why-us-section { background: #111827; padding: 60px; border-radius: 32px; color: white; margin-bottom: 80px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
  .why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
  .why-item { text-align: center; }
  .why-icon { color: var(--color-primary); margin-bottom: 20px; }
  .why-item h4 { font-size: 1.3rem; font-weight: 900; text-transform: uppercase; margin-bottom: 10px; }
  .why-item p { color: #94a3b8; line-height: 1.5; font-size: 1rem; }

  /* BOTTOM CTA */
  .cta-box { background: #f8fafc; padding: 60px 40px; border-radius: 32px; border: 1px dashed #cbd5e1; }
  .cta-box h2 { font-size: 2.5rem; font-weight: 900; text-transform: uppercase; margin-bottom: 10px; }
  .cta-box p { font-size: 1.1rem; color: #64748b; margin-bottom: 30px; }

  .btn-main { display: inline-flex; align-items: center; gap: 12px; background: var(--color-primary); color: #000; font-weight: 900; padding: 18px 40px; border-radius: 16px; text-transform: uppercase; transition: all 0.3s; box-shadow: 0 10px 25px -5px rgba(74, 222, 128, 0.5); text-decoration: none;}
  .btn-main:hover { transform: translateY(-4px); background: var(--color-primary-dark); color: white; box-shadow: 0 15px 35px -5px rgba(74, 222, 128, 0.6); }

  /* RESPONSIVE */
  @media (max-width: 900px) { 
    .page-title { font-size: 2.8rem; }
    .service-row { flex-direction: column; text-align: center; gap: 30px; padding: 30px; }
    .feature-list { grid-template-columns: 1fr; text-align: left; }
    .why-grid { grid-template-columns: 1fr; gap: 50px; }
    .why-us-section { padding: 40px 20px; }
  }
</style>