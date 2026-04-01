<script>
  import { onMount } from 'svelte';
  import { enhance } from '$app/forms'; 
  // VYMAZÁN INSTAGRAM A FACEBOOK - aby to nepadalo!
  import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2, FileText } from 'lucide-svelte';
  
  import Altcha from '$lib/components/Altcha.svelte';

  let formStatus = 'idle'; 
  let altchaPayload = ''; 

  const handleSubmit = () => {
    formStatus = 'submitting';
    return async ({ result }) => {
      if (result.type === 'success') {
        formStatus = 'success';
      } else {
        formStatus = 'error';
        alert('Chyba při odesílání. Zkuste to prosím později.');
      }
    };
  };

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
  });
</script>

<svelte:head>
  <title>Kontakt | Linity Agency</title>
</svelte:head>

<section class="contact-page">
  <div class="container">
    
    <div class="header text-center animate-on-scroll">
      <h1 class="page-title">Máte dotaz? <br><span class="highlight">Jsme na příjmu.</span></h1>
      <p class="page-perex">
        Nejrychlejší domluva je po telefonu. Nebo nám napiš a ozveme se zpět.
      </p>
    </div>

    <div class="contact-grid">
      
      <div class="contact-cards">
        <a href="tel:+420776519911" class="contact-card animate-on-scroll" style="--delay: 100ms">
          <div class="icon-circle"><Phone size={28} /></div>
          <div class="card-content">
            <h3>Zavolej nám</h3>
            <p class="highlight-text">+420 776 519 911</p>
            <span class="sub-text">Po–Ne: 9:00 – 23:00</span>
          </div>
        </a>

        <a href="mailto:info@linityagency.com" class="contact-card animate-on-scroll" style="--delay: 200ms">
          <div class="icon-circle"><Mail size={28} /></div>
          <div class="card-content">
            <h3>Napiš email</h3>
            <p class="highlight-text">info@linityagency.com</p>
            <span class="sub-text">Odpovídáme do 24h</span>
          </div>
        </a>

        <a href="https://instagram.com/linityagency.cz" target="_blank" class="contact-card animate-on-scroll" style="--delay: 300ms">
          <div class="icon-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </div>
          <div class="card-content">
            <h3>Sleduj Instagram</h3>
            <p class="highlight-text">@linityagency.cz</p>
            <span class="sub-text">Mrkni na stories z akcí</span>
          </div>
        </a>

        <a href="https://www.facebook.com/profile.php?id=61584254465986" target="_blank" class="contact-card animate-on-scroll" style="--delay: 400ms">
          <div class="icon-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </div>
          <div class="card-content">
            <h3>Sleduj Facebook</h3>
            <p class="highlight-text">Linityagency</p>
            <span class="sub-text">Mrkni na příspěvky z akcí</span>
          </div>
        </a>
      </div>

      <div class="form-wrapper animate-on-scroll" style="--delay: 200ms">
        <div class="form-box">
          <h2>Rychlá zpráva</h2>
          
          {#if formStatus === 'success'}
            <div class="success-message">
              <CheckCircle2 size={64} color="#22c55e" />
              <h3>Odesláno!</h3>
              <p>Díky, ozveme se ti co nejdříve.</p>
              <button class="btn-reset" on:click={() => { formStatus = 'idle'; altchaPayload = ''; }}>Poslat další</button>
            </div>
          {:else}
            <form method="POST" use:enhance={handleSubmit}>
              <div class="input-group">
                <label for="name">Jméno</label>
                <input type="text" id="name" name="name" placeholder="Tvé jméno" required />
              </div>
              
              <div class="input-group">
                <label for="email">Email / Telefon</label>
                <input type="text" id="email" name="contact" placeholder="Kontakt na tebe" required />
              </div>

              <div class="input-group">
                <label for="message">Zpráva</label>
                <textarea id="message" name="message" rows="5" placeholder="Na co se chceš zeptat?" required></textarea>
              </div>

              <div class="input-group bot-check-wrapper">
                <Altcha bind:value={altchaPayload} />
                <input type="hidden" name="altcha" value={altchaPayload} />
              </div>

              <button type="submit" class="btn-submit" disabled={formStatus === 'submitting' || !altchaPayload}>
                {#if formStatus === 'submitting'}
                  Odesílám...
                {:else}
                  ODESLAT ZPRÁVU <Send size={18} />
                {/if}
              </button>
            </form>
          {/if}
        </div>
      </div>
    </div>

    <div class="billing-card animate-on-scroll" style="--delay: 300ms">
      <div class="billing-icon"><FileText size={32} /></div>
      <div class="billing-details">
        <div class="billing-col">
          <h3>Fakturační údaje</h3>
          <p class="highlight-text">Adam Lavrikov</p>
          <p class="sub-text">Sídlo: Tymákov 321, 332 01 Tymákov</p>
        </div>
        <div class="billing-col">
          <h3>Identifikační údaje</h3>
          <p class="highlight-text">IČO: 24601080</p>
          <p class="sub-text">Fyzická osoba zapsaná v živnostenském<br>rejstříku (Magistrát města Plzně).</p>
        </div>
      </div>
    </div>

    <div class="map-section animate-on-scroll" style="--delay: 400ms">
      <div class="map-header">
        <MapPin size={24} color="#16a34a" />
        <h2>Kde nás najdeš?</h2>
      </div>
      <p>Prokopova 336, 301 00 Plzeň</p>
      
      <div class="map-frame">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2578.411646270425!2d13.3768379!3d49.740733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470af1ef186f9761%3A0x6b71f97471804702!2sProkopova%20336%2F20%2C%20301%2000%20Plze%C5%88%203-Ji%C5%BEn%C3%AD%20P%C5%99edm%C4%9Bst%C3%AD!5e0!3m2!1scs!2scz!4v1700000000000!5m2!1scs!2scz" 
          width="100%" 
          height="400" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          title="Mapa Linity Agency">
        </iframe>
      </div>
    </div>

  </div>
</section>

<style>
  .contact-page {
    padding-top: 140px; padding-bottom: 80px;
    background-color: #f8fafc; min-height: 100vh;
  }

  .text-center { text-align: center; }
  .header { margin-bottom: 60px; }
  .page-title {
    font-size: 3rem; font-weight: 900; text-transform: uppercase;
    line-height: 1.1; margin-bottom: 20px; color: #1a1a1a;
  }
  .highlight { color: #16a34a; }
  .page-perex { font-size: 1.2rem; color: #64748b; }

  /* Desktop layout */
  .contact-grid {
    display: grid; 
    grid-template-columns: 1fr 1fr;
    gap: 40px; 
    margin-bottom: 40px;
    align-items: stretch;
  }

  .contact-cards { 
    display: flex; 
    flex-direction: column; 
    gap: 20px; 
    height: 100%;
  }

  .contact-card {
    display: flex; 
    align-items: center; 
    gap: 20px;
    background: white; 
    padding: 25px; 
    border-radius: 20px;
    border: 2px solid #e2e8f0; 
    text-decoration: none; 
    color: inherit;
    transition: all 0.3s ease;
    flex: 1; 
  }

  .contact-card:hover {
    transform: translateY(-5px);
    border-color: #16a34a;
    box-shadow: 0 10px 30px rgba(74, 222, 128, 0.2);
  }

  .icon-circle {
    width: 60px; height: 60px;
    background: #f0fdf4; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    color: #16a34a; flex-shrink: 0;
  }
  
  .contact-card:hover .icon-circle { background: #16a34a; color: white; }

  .card-content h3 { margin: 0; font-size: 0.9rem; text-transform: uppercase; color: #64748b; font-weight: 700; }
  .highlight-text { margin: 5px 0 0 0; font-size: 1.4rem; font-weight: 900; color: #1e293b; }
  .sub-text { font-size: 0.85rem; color: #94a3b8; display: block; margin-top: 5px; }

  /* Formulář box */
  .form-wrapper { height: 100%; }
  .form-box {
    background: white; padding: 40px; border-radius: 24px;
    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.05); border: 2px solid #e2e8f0;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .form-box h2 { font-size: 1.8rem; font-weight: 900; text-transform: uppercase; margin-bottom: 25px; }
  .input-group { margin-bottom: 15px; width: 100%; }
  .bot-check-wrapper { margin-top: auto; padding-top: 10px; }
  
  label {
    display: block; font-weight: 700; font-size: 0.8rem; text-transform: uppercase;
    margin-bottom: 8px; color: #475569; margin-left: 5px;
  }

  input, textarea {
    width: 100%; padding: 14px;
    border: 2px solid #e2e8f0; border-radius: 12px;
    font-size: 1rem; font-family: inherit; transition: all 0.2s;
    background: #f8fafc;
  }

  input:focus, textarea:focus {
    background: white; border-color: #16a34a; outline: none;
    box-shadow: 0 0 0 4px rgba(74, 222, 128, 0.15);
  }

  .btn-submit {
    width: 100%; background: #111827; color: white;
    padding: 18px; border-radius: 12px; border: none; font-weight: 900;
    font-size: 1.1rem; text-transform: uppercase;
    display: flex; justify-content: center; align-items: center; gap: 10px;
    cursor: pointer; transition: background 0.2s;
    margin-top: 10px;
  }
  .btn-submit:hover:not(:disabled) { background: #333; }
  .btn-submit:disabled { opacity: 0.6; cursor: not-allowed; }

  :global(altcha-widget) {
    --altcha-max-width: 100%;
    --altcha-border-width: 2px;
    --altcha-border-radius: 12px;
    --altcha-color-bg: #f8fafc;
    --altcha-color-border: #e2e8f0;
    --altcha-color-primary: #16a34a;
    box-shadow: none !important;
  }

  .success-message {
    text-align: center; padding: 40px 0; display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: center;
  }
  .success-message h3 { font-size: 1.8rem; font-weight: 900; margin-top: 20px; }
  .btn-reset { margin-top: 20px; background: transparent; border: none; text-decoration: underline; cursor: pointer; color: #64748b; }

  /* --- NOVÁ SEKCE: FAKTURAČNÍ ÚDAJE --- */
  .billing-card {
    display: flex;
    align-items: center;
    gap: 30px;
    background: white;
    padding: 30px 40px;
    border-radius: 24px;
    border: 2px solid #e2e8f0;
    margin-bottom: 80px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.02);
  }

  .billing-icon {
    width: 70px; height: 70px;
    background: #f0fdf4; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    color: #16a34a; flex-shrink: 0;
  }

  .billing-details {
    display: flex;
    gap: 60px;
    flex-wrap: wrap;
  }

  .billing-col h3 { margin: 0 0 5px 0; font-size: 0.9rem; text-transform: uppercase; color: #64748b; font-weight: 700; }
  .billing-col .highlight-text { font-size: 1.4rem; font-weight: 900; color: #1e293b; margin: 0; }
  .billing-col .sub-text { font-size: 0.9rem; color: #64748b; margin-top: 5px; line-height: 1.4; }

  /* --- MAPA --- */
  .map-section { width: 100%; }
  .map-header { display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 5px; }
  .map-section h2 { font-size: 2rem; font-weight: 900; text-transform: uppercase; margin: 0; color: #1a1a1a; }
  .map-section p { text-align: center; color: #64748b; font-size: 1.1rem; margin-bottom: 30px; }
  .map-frame {
    width: 100%; border-radius: 24px; overflow: hidden;
    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1); border: 2px solid #e2e8f0;
  }

  .animate-on-scroll { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
  :global(.animate-on-scroll.visible) { opacity: 1; transform: translateY(0); transition-delay: var(--delay, 0ms); }

  /* --- ÚPRAVA PRO MOBILY --- */
  @media (max-width: 900px) {
    .contact-page { padding-top: 100px; }
    .page-title { font-size: 2.2rem; }
    
    .contact-grid { 
      grid-template-columns: 1fr; 
      gap: 20px; 
      margin-bottom: 30px;
    }

    .contact-cards { gap: 15px; height: auto; }
    .contact-card { flex: none; width: 100%; padding: 20px; }

    .highlight-text { font-size: 1.2rem; }
    
    .form-box { padding: 30px 20px; height: auto; }
    .form-box h2 { font-size: 1.5rem; }

    .billing-card {
      flex-direction: column;
      align-items: flex-start;
      padding: 25px;
      gap: 20px;
      margin-bottom: 50px;
    }
    .billing-details { flex-direction: column; gap: 20px; }
  }
</style>