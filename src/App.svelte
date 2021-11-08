<script>
  import DesignSystem from './components/DesignSystem.svelte';
  import Router from 'svelte-spa-router';
  import routes from './routes';
</script>

<main>
  <Router {routes} />
</main>

<style>
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
