<script>
  import Navbar from '../components/Navbar.svelte';
  import { onMount } from 'svelte';

  let src = 'assets/technology/image-launch-vehicle-portrait.jpg';

  const setLandscapeOrPortrait = (e) => {
    if (!e.matches) {
      src = 'assets/technology/image-launch-vehicle-portrait.jpg';
    } else {
      src = 'assets/technology/image-launch-vehicle-landscape.jpg';
    }
  };

  onMount(() => {
    const mediaListener = window.matchMedia('(max-width: 425px)');

    mediaListener.addListener(setLandscapeOrPortrait);
  });
</script>

<div class="technology">
  <Navbar />
  <div class="grid-container ">
    <h1 class="numbered-title">
      <span aria-hidden="true">03</span> SPACE LAUNCH 101
    </h1>

    <div class="image">
      <img {src} alt="Douglas Hurley" />
    </div>

    <div class="technology-content flex">
      <article>
        <span class="uppercase fs-400 ff-sans-cond letter-spacing-2 text-accent"
          >THE TERMINOLOGY…</span
        >
        <h2 class="uppercase fs-700 ff-serif">LAUNCH VEHICLE</h2>

        <p class="text-accent">
          A launch vehicle or carrier rocket is a rocket-propelled vehicle used
          to carry a payload from Earth's surface to space, usually to Earth
          orbit or beyond. Our WEB-X carrier rocket is the most powerful in
          operation. Standing 150 metres tall, it's quite an awe-inspiring sight
          on the launch pad!
        </p>
      </article>

      <div class="flex number-indicators">
        <a
          href="#/technology/"
          aria-selected="true"
          class="ff-serif fs-600 bg-dark">1</a
        >
        <a
          href="#/technology/spaceport"
          aria-selected="false"
          class="ff-serif fs-600 bg-dark">2</a
        >
        <a
          href="#/technology/space-capsule"
          aria-selected="false"
          class="ff-serif fs-600 bg-dark">3</a
        >
      </div>
    </div>
  </div>
</div>

<style>
  .technology {
    min-height: 100vh;
    display: grid;
    grid-template-rows: min-content 1fr;
    overflow-x: hidden;
    background-image: url(/assets/technology/background-technology-mobile.jpg);
    background-size: cover;
    background-position: bottom center;
  }

  .grid-container {
    --flow-space: 2rem;
    grid-template-areas:
      'title'
      'image'
      'numbers'
      'content';
    padding-bottom: 2rem;
  }

  .image {
    grid-area: image;
  }

  .grid-container {
    grid-template-areas:
      'title'
      'image'
      'content';

    padding-bottom: 0;
    padding-inline: 0;
  }

  .grid-container p {
    max-width: 42ch;
  }

  .numbered-title {
    grid-area: title;
  }

  .number-indicators a {
    flex-direction: row;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    text-decoration: none;
    gap: 2rem;
    border-radius: 50%;
    outline: 1px solid hsl(0 0% 100% / 0.25);
    background-color: hsl(var(--clr-dark));
    color: white;
  }

  .number-indicators > [aria-selected='true'] {
    background-color: hsl(0 0% 100% / 1);
    color: hsl(230 35% 7%);
  }

  .number-indicators > :hover,
  :focus {
    border-color: hsl(0 0% 100% / 1);
  }

  .technology-content {
    padding-block: 3rem;
    grid-area: content;
    align-self: center;
    flex-direction: column-reverse;
    gap: 2rem;
    align-items: center;
  }

  .image {
    width: 100%;
    height: 100%;
  }

  .image img {
    width: 100%;
    height: 25vh;
    object-fit: cover;
    object-position: 50% 90%;
  }

  h2 {
    margin-block: 1rem;
  }

  @media (min-width: 35rem) and (max-width: 45rem) {
    .technology {
      background-position: center center;
      background-image: url(/assets/technology/background-technology-tablet.jpg);
    }

    .image img {
      height: 40vh;
    }

    .numbered-title {
      padding: 3rem;
      justify-self: start;
    }
  }

  @media (min-width: 45rem) {
    .technology {
      background-image: url(/assets/technology/background-technology-desktop.jpg);
    }

    .grid-container {
      text-align: left;
      /* justify-self: flex; */
      column-gap: 0;
      grid-template-columns: repeat(2, minmax(0, 50rem));
      padding-bottom: 5rem;
      padding-inline: 0;
    }

    .grid-container {
      grid-template-areas:
        ' title title .'
        ' content content image ';
    }

    .numbered-title {
      align-self: end;
      justify-self: start;
      padding-left: 9rem;
    }

    .number-indicators {
      flex-direction: column;
      gap: 2rem;
    }

    .number-indicators a {
      width: 80px;
      height: 80px;
    }

    .technology-content {
      grid-area: content;
      align-self: center;
      flex-direction: row-reverse;
      gap: 5rem;
      align-items: center;
      padding-left: 4rem;
    }

    .image img {
      height: 100%;
    }
  }
</style>
