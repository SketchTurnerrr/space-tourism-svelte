<script>
  import Navbar from '../../components/Navbar.svelte';
</script>

<div class="crew">
  <Navbar />
  <div class="grid-container grid-container--crew">
    <h1 class="numbered-title">
      <span aria-hidden="true">02</span> Meet your crew
    </h1>

    <div class="h-line">
      <picture>
        <source
          srcset="assets/crew/image-mark-shuttleworth.webp"
          type="image/webp"
        />
        <img
          src="assets/crew/image-mark-shuttleworth.png"
          alt="Mark Shuttleworth"
        />
      </picture>
    </div>

    <article class="crew-info">
      <span class="uppercase fs-600 ff-serif">Mission Specialist </span>
      <h2 class="uppercase fs-700 ff-serif">MARK SHUTTLEWORTH</h2>

      <p class="text-accent">
        Mark Richard Shuttleworth is the founder and CEO of Canonical, the
        company behind the Linux-based Ubuntu operating system. Shuttleworth
        became the first South African to travel to space as a space tourist.
      </p>
    </article>

    <div class="flex dot-indicators">
      <a href="#/crew" aria-selected="false"
        ><span class="sr-only">The commander</span></a
      >
      <a href="#/crew/mark-shuttleworth" aria-selected="true"
        ><span class="sr-only">The mission specialist</span></a
      >
      <a href="#/crew/victor-glover" aria-selected="false"
        ><span class="sr-only">The pilot</span></a
      >
      <a href="#/crew/anousheh-ansari" aria-selected="false"
        ><span class="sr-only">The crew engineer</span></a
      >
    </div>
  </div>
</div>

<style>
  .crew {
    min-height: 100vh;
    display: grid;
    grid-template-rows: min-content 1fr;
    overflow-x: hidden;
    background-image: url(/assets/crew/background-crew-mobile.jpg);
    background-size: cover;
    background-position: bottom center;
  }

  .grid-container {
    --flow-space: 2rem;
    grid-template-areas:
      'title'
      'image'
      'dots'
      'content';
    padding-bottom: 2rem;
  }

  .h-line {
    grid-area: image;
  }

  .h-line img {
    margin: 0 auto;
    max-width: 50%;
  }

  .h-line::after {
    content: '';
    background-color: hsl(var(--clr-white) / 0.2);
    height: 1px;
    display: block;
    margin: 0 auto;
    width: 90%;
  }

  .grid-container > .crew-info {
    grid-area: content;
  }

  .grid-container > .dot-indicators {
    grid-area: dots;
    /* align-self: flex-start; */
    /* grid-auto-rows: min-content; */
  }

  .grid-container p {
    max-width: 42ch;
  }

  .numbered-title {
    grid-area: title;
  }

  article span {
    color: hsl(var(--clr-white) / 0.5);
  }

  h2 {
    margin-block: 1rem;
  }

  @media (min-width: 35rem) {
    .crew {
      background-position: center center;
      background-image: url(/assets/crew/background-crew-tablet.jpg);
    }

    .grid-container {
      grid-template-areas:
        'title'
        'content'
        'dots'
        'image';
      padding-bottom: 0;
      align-items: end;
    }

    .h-line::after {
      display: none;
    }
    .numbered-title {
      justify-self: start;
    }
  }

  @media (min-width: 45rem) {
    .crew {
      background-image: url(/assets/crew/background-crew-desktop.jpg);
    }

    .grid-container {
      text-align: left;
      column-gap: var(--container-gap, 2rem);
      grid-template-columns: minmax(1rem, 1fr) repeat(2, minmax(0, 40rem)) minmax(
          1rem,
          1fr
        );
      padding-bottom: 0;
    }

    .grid-container {
      justify-items: center;

      grid-template-areas:
        '. title image .'
        '. content image .'
        '. dots image .';
    }

    .numbered-title {
      place-self: flex-start;
      align-self: end;
    }

    .h-line img {
      max-width: 90%;
      align-items: flex-end;
    }

    .dot-indicators {
      justify-self: start;
      align-self: center;
    }

    article {
      justify-self: start;
    }
  }
</style>
