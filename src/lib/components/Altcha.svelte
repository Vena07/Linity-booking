<script lang="ts">
  import { onMount } from 'svelte';

  interface Props {
    value?: string;
  }

  let { value = $bindable('') }: Props = $props();

  // Konfigurace textů (JSON string)
  const altchaStrings = JSON.stringify({
    label: "Nejsem robot",
    error: "Chyba ověření",
    verified: "Ověřeno",
    wait: "Pracuji..."
  });

  // Funkce pro zpracování změny stavu (vyřešení hádanky)
  function handleChange(ev: any) {
    const { payload, state } = ev.detail;
    if (state === 'verified' && payload) {
      value = payload; // Uložíme token, který se pošle na server
    } else {
      value = ''; // Reset, pokud ověření selže 
    }
  }

  // --- DŮLEŽITÁ OPRAVA ---
  // Importujeme 'altcha' dynamicky až v momentě, kdy komponenta běží v prohlížeči.
  // Tím vyřešíme chybu "Cannot find module 'altcha'" na serveru.
  onMount(() => {
    import('altcha');
  });
</script>

<altcha-widget
  style="--altcha-max-width: 100%; --altcha-border-width: 1px; --altcha-border-radius: 8px; --altcha-color-border: #cbd5e1;"
  challengeurl="/api/altcha"
  strings={altchaStrings}
  hidelogo
  onstatechange={handleChange}
></altcha-widget>