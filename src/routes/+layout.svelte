<script>
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import { onMount } from 'svelte';
  import { browser } from '$app/environment';


</script>

<div class="app-wrapper">
  <Header />
  

  <main>
    <slot />
  </main>

  <Footer />

  
</div>

<style>
  .app-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
  }
  main {
    flex: 1;
    position: relative;
    z-index: 1;
  }
</style>