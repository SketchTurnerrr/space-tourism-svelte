<script>
  import Navbar from './Navbar.svelte';
</script>

<div class="destination">
  <Navbar />
  <div class="dest-container">
    <h1 class="uppercase ff-sans-cond text-white letter-spacing-2">
      <span> 01 </span>
      Pick your destination
    </h1>
  </div>
  <div class="grid-container">
    <div>
      <img src="/assets/destination/image-moon.webp" alt="moon" />
    </div>
    <div class="right-column">
      <div class="flex">
        <div class="tab-list underline-indicators flex">
          <button
            aria-selected="true"
            class="uppercase ff-sans-cond text-accent bg-transparent letter-spacing-2"
            >Moon</button
          >
          <button
            aria-selected="false"
            class="uppercase ff-sans-cond text-accent bg-transparent letter-spacing-2"
            >Mars</button
          >
          <button
            aria-selected="false"
            class="uppercase ff-sans-cond text-accent bg-transparent letter-spacing-2"
            >Europa</button
          >
          <button
            aria-selected="false"
            class="uppercase ff-sans-cond text-accent bg-transparent letter-spacing-2"
            >Titan</button
          >
        </div>
      </div>
      <h2 class="ff-serif fs-800 uppercase mt-1">moon</h2>
      <p class="ff-sans-normal text-accent">
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>
      <hr />

      <div class="metrics flex">
        <div>
          <h3 class="mt-2 letter-spacing-2 ff-sans-cond uppercase text-accent">
            avg. distance <span
              class="d-block ff-serif fs-500 uppercase text-white"
              >384,400 km</span
            >
          </h3>
        </div>

        <div>
          <h3 class="mt-2 letter-spacing-2 ff-sans-cond uppercase text-accent">
            est. travel time <span
              class="d-block ff-serif fs-500 uppercase text-white">3 days</span
            >
          </h3>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .destination {
    display: grid;
    min-height: 100vh;
    background-image: url(/assets/destination/background-destination-mobile.jpg);
    background-size: cover;
    grid-template-rows: 5rem min-content;
    gap: 0.5rem;
  }

  .grid-container {
    display: grid;
    text-align: center;
    place-items: center;
    /* padding-inline: 1rem; */
  }

  .dest-container {
    display: flex;
    justify-content: center;
    max-height: 2rem;
  }

  .right-column {
    padding-inline: 1rem;
    padding-bottom: 1rem;
  }

  .right-column > div {
    justify-content: center;
  }

  .tab-list button {
    padding: 0.3rem 0;
  }

  .metrics {
    flex-direction: column;
  }

  h1 {
    font-size: 1rem;
  }

  h1 span {
    color: hsl(var(--clr-white) / 0.25);
  }

  p {
    line-height: 1.5rem;
  }

  hr {
    margin-top: 2rem;
    border: 1px solid hsl(var(--clr-white) / 0.1);
  }

  img {
    max-width: 60%;
    margin: 0 auto;
    padding-block: 1rem;
  }

  @media (min-width: 35rem) {
    .destination {
      background-position: center center;
      background-image: url(/assets/destination/background-destination-tablet.jpg);
    }

    p {
      max-width: 55ch;
    }

    .metrics {
      flex-direction: row;
      gap: 5rem;
    }
  }

  @media (min-width: 55em) {
    .destination {
      background-image: url(/assets/destination/background-destination-desktop.jpg);
    }

    .grid-container {
      display: grid;
      text-align: left;
      column-gap: clamo(2rem, 5vw, 9rem);
      grid-template-columns: minmax(1rem, 1fr) repeat(2, minmax(0, 30rem)) minmax(
          1rem,
          1fr
        );
      padding-bottom: max(6rem, 10vh);
      gap: 5rem;
    }

    .grid-container > *:first-child {
      grid-column: 2;
    }

    .grid-container > *:last-child {
      grid-column: 3;
    }

    .metrics {
      flex-direction: row;
      gap: 5rem;
    }

    h2 {
      margin-block: 2rem;
    }

    h1 {
      font-size: 1.5rem;
    }

    h1 span {
      color: hsl(var(--clr-white) / 0.25);
      font-weight: bold;
      margin-right: 0.5rem;
    }

    p {
      line-height: 2rem;
    }

    img {
      max-width: 100%;
      padding-inline: 0;
    }

    .dest-container {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      max-width: 32rem;
    }
  }
</style>
