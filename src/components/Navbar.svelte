<script>
  let navOpen = false;

  function handleNav() {
    navOpen = !navOpen;
  }
</script>

<header class="flex primary-header">
  <div>
    <img src="/assets/shared/logo.svg" alt="space tourism logo" class="logo" />
  </div>

  <button
    on:click={handleNav}
    class="mobile-nav-toggle"
    aria-controls="primary-navigation"
  >
    <span class="sr-only" aria-expanded="false">Menu</span>
  </button>
  <nav>
    <ul
      id="primary-navigation"
      class:navOpen
      class="flex primary-navigation underline-indicators"
    >
      <li class="active">
        <a class="text-white uppercase ff-sans-cond letter-spacing-2" href="/"
          ><span aria-hidden="true">00</span>Home</a
        >
      </li>
      <li>
        <a
          class="text-white uppercase ff-sans-cond letter-spacing-2"
          href="#/destination"><span aria-hidden="true">01</span>Destination</a
        >
      </li>
      <li>
        <a
          class="text-white uppercase ff-sans-cond letter-spacing-2"
          href="#/crew"><span aria-hidden="true">02</span>Crew</a
        >
      </li>
      <li>
        <a
          class="text-white uppercase ff-sans-cond letter-spacing-2"
          href="#/technology"><span aria-hidden="true">03</span>Technology</a
        >
      </li>
    </ul>
  </nav>
</header>

<style>
  .navOpen {
    transform: translateX(0);
  }
</style>
