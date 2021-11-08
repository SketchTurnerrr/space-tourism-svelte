<script>
  import Navbar from '../../components/Navbar.svelte';
</script>

<div class="destination">
  <Navbar />
  <div class="grid-container grid-container--destination">
    <h1 class="numbered-title">
      <span aria-hidden="true">01</span> Pick your destination
    </h1>

    <picture>
      <source srcset="assets/destination/image-europa.webp" type="image/webp" />
      <img src="assets/destination/image-europa.png" alt="Europa" /></picture
    >

    <div class="flex tab-list underline-indicators">
      <a
        href="#/destination/moon"
        aria-selected="false"
        class="uppercase ff-sans-cond text-accent letter-spacing-2">Moon</a
      >

      <a
        href="#/destination/mars"
        aria-selected="false"
        class="uppercase ff-sans-cond text-accent letter-spacing-2">Mars</a
      >
      <a
        href="#/destination/europa"
        aria-selected="true"
        class="uppercase ff-sans-cond text-accent letter-spacing-2">Europa</a
      >
      <a
        href="#/destination/titan"
        aria-selected="false"
        class="uppercase ff-sans-cond text-accent letter-spacing-2">Titan</a
      >
    </div>

    <article class="destination-info">
      <h2 class="uppercase fs-800 ff-serif">Europa</h2>

      <p class="text-accent">
        The smallest of the four Galilean moons orbiting Jupiter, Europa is a
        winter lover’s dream. With an icy surface, it’s perfect for a bit of ice
        skating, curling, hockey, or simple relaxation in your snug wintery
        cabin.
      </p>

      <div class="flex metrics">
        <div>
          <h3
            class="mb-1 uppercase text-accent ff-sans-cond fs-200 letter-spacing-2"
          >
            Avg. distance
          </h3>
          <p class="uppercase ff-serif">628 MIL. km</p>
        </div>
        <div>
          <h3
            class="mb-1 uppercase text-accent ff-sans-cond fs-200 letter-spacing-2"
          >
            Est. travel time
          </h3>
          <p class="uppercase ff-serif">3 years</p>
        </div>
      </div>
    </article>
  </div>
</div>

<style>
  .destination {
    min-height: 100vh;
    display: grid;
    grid-template-rows: min-content 1fr;
    overflow-x: hidden;
    background-image: url(/assets/destination/background-destination-mobile.jpg);
    background-size: cover;
    background-position: bottom center;
  }

  .grid-container {
    --flow-space: 2rem;
    grid-template-areas:
      'title'
      'image'
      'tabs'
      'content';
  }

  .grid-container > picture {
    grid-area: image;
    max-width: 60%;
    margin-top: 1.5rem;
  }

  .grid-container > .tab-list {
    grid-area: tabs;
    background-color: transparent;
  }

  .grid-container > .destination-info {
    grid-area: content;
  }

  .numbered-title {
    grid-area: title;
    margin-top: 2rem;
  }

  .metrics {
    flex-direction: column;
    border-top: 1px solid hsl(var(--clr-white) / 0.1);
    padding-top: 2.5rem;
    margin-top: 2.5rem;
  }

  .metrics p {
    font-size: 1.75rem;
  }

  a {
    text-decoration: none;
  }

  article {
    margin-top: 1.5rem;
  }

  .grid-container p {
    max-width: 42ch;
  }

  @media (min-width: 35rem) {
    .destination {
      background-position: center center;
      background-image: url(/assets/destination/background-destination-tablet.jpg);
    }

    .metrics {
      flex-direction: row;
      justify-content: space-around;
    }
  }

  @media (min-width: 45rem) {
    .destination {
      background-image: url(/assets/destination/background-destination-desktop.jpg);
    }

    .grid-container {
      text-align: left;
      column-gap: var(--container-gap, 2rem);
      grid-template-columns: minmax(1rem, 1fr) repeat(2, minmax(0, 30rem)) minmax(
          1rem,
          1fr
        );
    }

    .grid-container {
      justify-items: start;
      align-content: start;
      grid-template-areas:
        '. title title .'
        '. image tabs .'
        '. image content .';
    }

    .grid-container > picture {
      grid-area: image;
      max-width: 80%;
      justify-self: center;
    }

    .metrics {
      justify-content: flex-start;
      gap: min(6vw, 5rem);
    }
    .numbered-title {
      place-self: flex-start;
    }
  }
</style>
