<script>
  import Navbar from './Navbar.svelte';
</script>

<div class="home">
  <Navbar />
  <div class="grid-container">
    <div>
      <h1 class="text-accent fs-400 ff-sans-cond uppercase letter-spacing-1">
        So, you want to travel to
        <span class="d-block fs-900 ff-serif text-white">Space</span>
      </h1>

      <p class="ff-sans-normal text-accent">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
    <div>
      <a
        href="/DesignSystem"
        class="large-button uppercase ff-serif text-dark bg-white">Explore</a
      >
    </div>
  </div>
</div>

<style>
  .home {
    min-height: 100vh;
    display: grid;
    background-image: url(/assets/home/background-home-mobile.jpg);
    background-size: cover;
    background-position: bottom center;
  }

  .grid-container {
    display: grid;
    text-align: center;
    place-items: center;
    padding-inline: 1rem;
  }

  .grid-container p {
    max-width: 45ch;
  }

  .grid-container span {
    margin: 1.5rem 0;
  }

  @media (min-width: 35rem) {
    .home {
      background-position: center center;
      background-image: url(/assets/home/background-home-tablet.jpg);
      grid-template-rows: 3rem;
    }
  }

  @media (min-width: 45em) {
    .home {
      background-image: url(/assets/home/background-home-desktop.jpg);
    }

    .home .grid-container {
      padding-bottom: max(6rem, 20vh);
      align-items: end;
    }

    .grid-container {
      display: grid;
      text-align: left;
      /* place-items: center; */
      column-gap: var(--container-gap, 2rem);
      grid-template-columns: minmax(1rem, 1fr) repeat(2, minmax(0, 30rem)) minmax(
          1rem,
          1fr
        );
    }

    .grid-container > *:first-child {
      grid-column: 2;
    }

    .grid-container > *:last-child {
      grid-column: 3;
    }
  }
</style>
