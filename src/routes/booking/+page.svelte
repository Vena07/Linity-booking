<script>
  import { enhance } from '$app/forms';
  import { Send, CheckCircle2 } from 'lucide-svelte';
  import Altcha from '$lib/components/Altcha.svelte'; 
  import Loading from '$lib/components/Loading.svelte';

  // --- SVELTE 5 PROPS & STATE ---
  let { form } = $props(); // Přijímáme data ze serveru přes props

  let formStatus = $state('idle'); 
  let altchaPayload = $state('');

  // Sledování úspěchu ze serveru (např. po reloadu)
  $effect(() => {
    if (form?.success) {
      formStatus = 'success';
    }
  });

  const handleBooking = () => {
    formStatus = 'submitting'; // Okamžitě ukáže komponentu Loading

    return async ({ result, update }) => {
      // Umělá malá prodleva, aby uživatel loading vůbec postřehl, pokud je net super rychlý
      if (result.type === 'success') {
          formStatus = 'success';
      } else {
          formStatus = 'error';
          alert(result.data?.error || 'Něco se pokazilo. Zkus to prosím znovu.');
      }
      await update({ reset: false }); 
    };
  };
</script>

<svelte:head><title>Zabookuj si termín | Linity Booking</title></svelte:head>

<div class="page-padding container">
  <div class="booking-split">
    
    <div class="booking-info">
      <span class="badge">Nezávazná poptávka</span>
      <h1 class="page-title">Zabookuj si <br><span class="highlight">termín</span></h1>
      <p class="page-subtitle">Hledáš DJe, nebo potřebuješ postavit celý program? Napiš nám představu a my vymyslíme zbytek.</p>
      
      <div class="trust-features">
        <div class="trust-item">
          <div class="trust-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <div>
            <h3>Odpovídáme do 24 hodin</h3>
            <p>Víme, že v produkci hraje čas roli.</p>
          </div>
        </div>

        <div class="trust-item">
          <div class="trust-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
          </div>
          <div>
            <h3>Nabídka na míru</h3>
            <p>Kalkulaci dostaneš zcela nezávazně a zdarma.</p>
          </div>
        </div>

        <div class="trust-item">
          <div class="trust-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div>
            <h3>Hoří to? Zavolej rovnou.</h3>
            <p><a href="tel:+420776519911" class="phone-link">+420 776 519 911</a></p>
          </div>
        </div>
      </div>
    </div>

    <div class="form-wrapper">
      {#if formStatus === 'success'}
        <div class="success-box text-center fade-in">
          <CheckCircle2 size={80} color="var(--color-primary-dark)" style="margin: 0 auto 20px;"/>
          <h3>Poptávka odeslána!</h3>
          <p>Díky za zprávu. Zapsali jsme si tě a brzy se ozveme s nabídkou.</p>
        </div>
      {/if}

      {#if formStatus === 'submitting'}
        <div class="loading-box text-center fade-in">
          <Loading />
          <h3 style="margin-top: 20px; font-weight: 900; color: #0f172a;">Odesílám poptávku...</h3>
        </div>
      {/if}

      <form 
        method="POST" 
        use:enhance={handleBooking} 
        class="booking-form fade-in"
        style="display: {formStatus === 'idle' || formStatus === 'error' ? 'block' : 'none'};"
      >
        <div class="form-grid">
          <div class="input-group span-2">
            <label for="club">Klub / Název podniku a Město *</label>
            <input type="text" id="club" name="clubDetails" required placeholder="Např. Fenix Music Club, Zlín">
          </div>

          <div class="input-group">
            <label for="name">Jméno promotéra *</label>
            <input type="text" id="name" name="name" required placeholder="Jan Novák">
          </div>
          
          <div class="input-group">
            <label for="phone">Telefon *</label>
            <input type="tel" id="phone" name="phone" required placeholder="+420 ...">
          </div>

          <div class="input-group span-2">
            <label for="email">Email *</label>
            <input type="email" id="email" name="email" required placeholder="tvuj@email.cz">
          </div>

          <div class="input-group span-2">
            <label for="type">O co máš primárně zájem? *</label>
            <div class="select-wrapper">
              <select id="type" name="bookingType" required>
                <option value="" disabled selected>Vyber z možností...</option>
                <option value="Konkretni_DJ">Booking konkrétního DJe</option>
                <option value="Jednorazova_produkce">Produkce 1 akce (Line-up, koncept)</option>
                <option value="Dlouhodoba_spoluprace">Dlouhodobá rezidentura klubu</option>
                <option value="Technika">Pouze pronájem techniky</option>
              </select>
            </div>
          </div>

          <div class="input-group span-2">
            <label for="msg">Doplňující informace (Termín, budget...)</label>
            <textarea id="msg" name="message" rows="4" placeholder="Napiš nám víc detailů, ať se můžeme lépe připravit..."></textarea>
          </div>
          
          <div class="input-group span-2 altcha-container">
            <Altcha bind:value={altchaPayload} />
            <input type="hidden" name="altcha" value={altchaPayload} />
          </div>
        </div>

        <button type="submit" class="btn-main">
          ODESLAT POPTÁVKU <Send size={20} strokeWidth={2.5}/>
        </button>
      </form>
    </div>

  </div>
</div>

<style>
  .page-padding { padding: 160px 20px 100px; }
  .highlight { color: var(--color-primary-dark); }
  .text-center { text-align: center; }

  .fade-in { animation: fadeIn 0.4s ease-out; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

  .booking-split { display: grid; grid-template-columns: 1fr 1.3fr; gap: 80px; align-items: start; max-width: 1100px; margin: 0 auto; }

  .badge { display: inline-block; background: #f0fdf4; color: var(--color-primary-dark); padding: 6px 16px; border-radius: 50px; font-weight: 800; font-size: 0.85rem; border: 1px solid rgba(74, 222, 128, 0.4); text-transform: uppercase; margin-bottom: 20px; }
  .page-title { font-size: 4rem; font-weight: 900; text-transform: uppercase; margin-bottom: 20px; line-height: 1.05; letter-spacing: -1px; }
  .page-subtitle { font-size: 1.2rem; color: #475569; line-height: 1.6; margin-bottom: 50px; }

  .trust-features { display: flex; flex-direction: column; gap: 30px; }
  .trust-item { display: flex; gap: 20px; align-items: flex-start; }
  .trust-icon { width: 50px; height: 50px; background: white; border: 1px solid #e2e8f0; border-radius: 14px; display: flex; align-items: center; justify-content: center; color: var(--color-primary-dark); flex-shrink: 0; box-shadow: 0 4px 10px rgba(0,0,0,0.03); }
  .trust-item h3 { margin: 0 0 5px; font-size: 1.1rem; font-weight: 900; color: #1e293b; text-transform: uppercase; }
  .trust-item p { margin: 0; color: #64748b; font-size: 1rem; line-height: 1.5; }
  .phone-link { color: var(--color-primary-dark); font-weight: 900; text-decoration: none; font-size: 1.1rem; transition: color 0.2s; }
  .phone-link:hover { color: #15803d; }

  .form-wrapper { background: white; padding: 50px; border-radius: 32px; border: 1px solid #e2e8f0; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.05); min-height: 500px; display: flex; flex-direction: column; justify-content: center;}
  
  .loading-box { display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; }

  .success-box { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px 20px; background: #f0fdf4; border-radius: 24px; border: 2px dashed var(--color-primary-dark); }
  .success-box h3 { font-size: 2.2rem; font-weight: 900; margin-bottom: 15px; color: #0f172a; }
  .success-box p { color: #475569; font-size: 1.1rem; line-height: 1.6; max-width: 400px; margin: 0 auto; text-align: center;}

  .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; text-align: left; }
  .span-2 { grid-column: span 2; }
  
  .input-group { position: relative; }
  .input-group label { display: block; font-size: 0.8rem; font-weight: 800; color: #475569; text-transform: uppercase; margin-bottom: 8px; margin-left: 5px; letter-spacing: 0.5px; }
  
  input, select, textarea { width: 100%; background: #f8fafc; border: 2px solid #e2e8f0; padding: 16px 20px; border-radius: 16px; font-family: inherit; font-size: 1rem; color: #0f172a; transition: all 0.2s; }
  input:focus, select:focus, textarea:focus { outline: none; border-color: var(--color-primary-dark); background: white; box-shadow: 0 0 0 4px rgba(74, 222, 128, 0.15); }

  .select-wrapper { position: relative; }
  .select-wrapper::after { content: "▼"; position: absolute; right: 20px; top: 50%; transform: translateY(-50%); pointer-events: none; font-size: 0.8rem; color: #94a3b8; }
  select { appearance: none; -webkit-appearance: none; padding-right: 40px; cursor: pointer; }

  .btn-main { width: 100%; display: flex; align-items: center; justify-content: center; gap: 12px; background: var(--color-primary); color: #000; font-weight: 900; padding: 20px; border-radius: 16px; text-transform: uppercase; border: none; cursor: pointer; transition: all 0.3s; margin-top: 30px; font-size: 1.15rem; box-shadow: 0 10px 25px -5px rgba(74, 222, 128, 0.4); }
  .btn-main:hover { transform: translateY(-3px); background: var(--color-primary-dark); color: white; box-shadow: 0 15px 35px -5px rgba(74, 222, 128, 0.5); }

  @media (max-width: 900px) { 
    .booking-split { grid-template-columns: 1fr; gap: 50px; }
    .page-title { font-size: 3rem; }
    .form-wrapper { padding: 30px 20px; border-radius: 24px; min-height: 400px; }
    .form-grid { grid-template-columns: 1fr; } 
    .span-2 { grid-column: span 1; } 
  }
</style>