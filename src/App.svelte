<script>
  import DesignSystem from './components/DesignSystem.svelte';
  import Home from './components/Home.svelte';
  import Navbar from './components/Navbar.svelte';
</script>

<main>
  <Home />
  <!-- <DesignSystem /> -->
</main>

<style>
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
