<script>
  let navOpen = false;

  function handleNav() {
    navOpen = !navOpen;
  }
</script>

<div class="navbar flex">
  <div>
    <img src="./assets/shared/logo.svg" alt="space tourism logo" class="logo" />
  </div>
  <div class="navbar--desktop">
    <ul>
      <li class="active">
        <a
          class="ff-sans-cond uppercase text-white letter-spacing-2"
          href="index.html"><span>00</span>Home</a
        >
      </li>
      <li>
        <a
          class="ff-sans-cond uppercase text-white letter-spacing-2"
          href="destination.html"><span>01</span>Destination</a
        >
      </li>
      <li>
        <a
          class="ff-sans-cond uppercase text-white letter-spacing-2"
          href="crew.html"><span>02</span>Crew</a
        >
      </li>
      <li>
        <a
          class="ff-sans-cond uppercase text-white letter-spacing-2"
          href="technology.html"><span>03</span>Technology</a
        >
      </li>
    </ul>
  </div>
  <button class:change={navOpen} on:click={handleNav}>
    <span class="sr-only">Menu</span>
    <div class="bar1" />
    <div class="bar2" />
    <div class="bar3" />
  </button>
</div>
<div class="flex sidenav" class:open={navOpen}>
  <nav class="sidenav-inner">
    <ul class="primary-navigation underline-indicators">
      <li class="active">
        <a
          class="ff-sans-cond uppercase text-white letter-spacing-2"
          href="index.html"><span>00</span>Home</a
        >
      </li>
      <li>
        <a
          class="ff-sans-cond uppercase text-white letter-spacing-2"
          href="destination.html"><span>01</span>Destination</a
        >
      </li>
      <li>
        <a
          class="ff-sans-cond uppercase text-white letter-spacing-2"
          href="crew.html"><span>02</span>Crew</a
        >
      </li>
      <li>
        <a
          class="ff-sans-cond uppercase text-white letter-spacing-2"
          href="technology.html"><span>03</span>Technology</a
        >
      </li>
    </ul>
  </nav>
</div>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    max-height: 7rem;
  }

  .navbar--desktop {
    display: none;
  }

  .navbar button {
    background: none;
    border: 0;
    cursor: pointer;
    z-index: 5;
  }

  .sidenav-inner {
    width: 100%;
    margin-left: 2rem;
  }

  .sidenav-inner li {
    margin-bottom: 2rem;
  }

  .sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 3;
    top: 0;
    right: 0;
    background-color: hsl(var(--clr-dark) / 0.95);
    /* backdrop-filter: blur(30px);  To see this working use chrome */
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 130px;
    transition: 0.5s;
  }

  @supports (backdrop-filter: blur(30px)) {
    .sidenav {
      background: hsl(var(--clr-white) / 0.1);
      backdrop-filter: blur(30px);
    }
  }

  .open {
    width: 70%;
  }

  .bar1,
  .bar2,
  .bar3 {
    width: 30px;
    height: 5px;
    background-color: hsl(var(--clr-light));
    margin: 6px 0;
    transition: 0.4s;
    border-radius: 10px;
  }

  .change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
  }

  .change .bar2 {
    opacity: 0;
  }

  .change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }

  .underline-indicators > * {
    cursor: pointer;
    padding: var(--underline-gap, 1rem) 0;
    border: 0;
    padding-right: 1rem;
    border-right: 0.4rem solid hsl(var(--clr-white) / 0);
  }

  .underline-indicators > .active {
    color: hsl(var(--clr-white) / 1);
    border-color: hsl(var(--clr-white) / 1);
  }

  .primary-navigation {
    --underline-gap: 0.1rem;
    list-style: none;
    padding: 0;
  }

  @media (min-width: 45rem) {
    .navbar button {
      display: none;
    }

    .navbar--desktop {
      display: flex;
    }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 3rem;
    }

    .navbar ul {
      display: flex;
      list-style: none;
    }

    .navbar li {
      padding-inline: 1rem;
    }

    .navbar a {
      text-decoration: none;
    }

    .navbar a > span {
      font-weight: 700;
      margin-right: 0.5em;
    }

    .navbar > div {
      background: hsl(var(--clr-white) / 0.1);
      backdrop-filter: blur(30px);
    }
  }
</style>
