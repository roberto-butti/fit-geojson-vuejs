<template>
  <div class="app">
    <header class="header">
      <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
        <path
          d="M59 23c0-2.5-1.2-4.4-3.4-5.7-.2-.1-.5-.3-.7-.5-1-1-1.8-2.3-2-3.7-.4-2.6-.8-5.2-1.1-7.8-.1-1.3-.7-2-1.9-2.3-1-.3-2.1-.6-3.1-.7-2.1-.2-4.2-.3-6.3-.3-2.4 0-4.8.1-7.2.3-1.2.1-2.3.4-3.5.8-.8.2-1.4.8-1.5 1.7l-.3 3c-.3 2-.6 4-1 6-.3 1.4-1.1 2.6-2.3 3.4-2.4 1.4-3.6 3.4-3.6 6.1V56.9c0 2.6 1.2 4.6 3.5 5.8.2.1.3.2.5.3 1 1 1.8 2.1 2.1 3.6.4 2.7.8 5.5 1.2 8.3.1 1 .6 1.7 1.5 2.1.5.2 1.1.4 1.7.5 2.1.5 4.2.6 6.4.5 3 0 6-.1 9-.2 1.1-.1 2.2-.4 3.3-.7.9-.3 1.5-.9 1.6-1.8.2-1.6.3-3.1.6-4.7.2-1.5.5-3.1.9-4.5.4-1.5 1.3-2.6 2.7-3.4 2-1.2 3.1-3.1 3.1-5.5-.1-11.5-.1-22.9-.2-34.2zm-1.4 33.8c0 3-2.1 5-5 5h-25c-3 0-5.1-2.1-5.1-5.1V40 23.4c0-3.1 2-5.1 5.1-5.2h24.9c3 0 5.1 2.1 5.1 5.1v33.5z"
        />
        <path
          d="M27 39c.7 0 1.3-.2 1.8-.5s.8-.8.9-1.3c.2-.6.2-1.5.2-2.9s0-2.3.1-2.7c.1-.7.2-1.2.5-1.7.2-.4.5-.8.9-1 .3-.3.8-.4 1.3-.6.4-.1 1-.1 1.8-.1h.8v1.9h-.4c-1 0-1.7.2-2 .5-.3.3-.5 1-.5 2.1 0 2.2-.1 3.5-.2 4.1-.2.9-.5 1.6-.9 2-.4.5-1.1.9-2 1.3 1.1.4 1.8 1 2.3 1.7.5.8.7 2.1.7 3.8 0 1.6 0 2.6.1 2.9.1.6.3 1 .6 1.2.3.2.9.3 1.8.3h.4v1.9h-.8c-.9 0-1.6-.1-2-.2-.6-.2-1.1-.5-1.5-.9-.4-.4-.7-1-.8-1.6-.1-.7-.2-1.7-.2-3.2 0-1.5-.1-2.5-.2-3.1-.2-.6-.5-1-.9-1.3-.5-.4-1.1-.6-1.8-.6v-2zM53 41c-.7 0-1.3.2-1.8.5s-.8.8-.9 1.3c-.2.6-.2 1.5-.2 2.9s0 2.3-.1 2.7c-.1.7-.2 1.2-.5 1.7-.2.4-.5.8-.9 1-.3.3-.8.4-1.3.6-.4.1-1 .1-1.8.1h-.8v-1.9h.4c1 0 1.7-.2 2-.5.3-.3.5-1 .5-2.1 0-2.2.1-3.5.2-4.1.2-.9.5-1.6.9-2 .4-.5 1.1-.9 2-1.3-1.1-.4-1.8-1-2.3-1.7-.5-.8-.7-2.1-.7-3.8 0-1.6 0-2.6-.1-2.9-.1-.6-.3-1-.6-1.2-.3-.2-.9-.3-1.8-.3h-.4v-1.9h.8c.9 0 1.6.1 2 .2.6.2 1.1.5 1.5.9.4.4.7 1 .8 1.6.1.7.2 1.7.2 3.2 0 1.5.1 2.5.2 3.1.2.6.5 1 .9 1.3.5.3 1.1.5 1.8.5V41z"
        />
      </svg>

      <h1>Fit2Geojson</h1>
    </header>
    <main class="wrapper">
      <router-view />
    </main>
    <footer class="footer">
      <p>
        Made with
        <span class="love" title="code">❤</span> by
        <a href="https://github.com/roberto-butti">@roberto-butti</a>,
        <a href="https://github.com/LucaDb">@LucaDb</a>,
        <a href="https://github.com/soloistco">@soloistco</a>
      </p>
      <p>
        {{ $store.getters.appName }} v.{{ $store.getters.appVersion }}
        #opensource on
        <a href="https://github.com/roberto-butti/fit-geojson-vuejs">Github</a>
      </p>

      <div id="banner">
        <a
          href="https://www.eventbrite.it/e/biglietti-hacktoberfest-in-h-farm-75475488217"
          title="Join us: H-Farm + Hacktoberfest 2019"
        >
          <img
            src="https://hacktoberfest.digitalocean.com/assets/logo-hf19-header-8245176fe235ab5d942c7580778a914110fa06a23c3d55bf40e2d061809d8785.svg"
            alt="Hacktoberfest 2019"
            width="475"
            height="145"
          />
          <span class="details">
            <strong>Roberto Butti presents fit2geojson</strong> &nbsp;
            <span class="date">22th October 2019</span>
            <span class="location">&nbsp;in Roncade TV Italy</span>
            <span class="why">for Hacktoberfest 2019</span>
          </span>
        </a>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
.app {
  height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

.header,
.footer {
  flex: none;
}

.header {
  padding: 10px;
  text-align: center;
  position: relative;
  z-index: 1;

  svg,
  h1 {
    vertical-align: middle;
    font-weight: 500;
    display: inline-block;
  }

  h1 {
    margin: 0 auto 0 0;
    font-size: 23px;
  }
}

.logo {
  width: 40px;
  margin: 0;
}

.wrapper {
  overflow: auto;
  display: flex;
  flex: auto;
  flex-wrap: wrap;
  align-items: center;
}

.footer {
  width: 100%;
  font-size: 12px;
  text-align: center;

  .love {
    color: #fe201a;
    font-size: 24px;
    line-height: 24px;
    display: inline-block;
    vertical-align: sub;
  }

  a {
    color: #42b983;
    text-decoration: none;
  }

  #banner {
    margin: 5px 0 0;
    padding: 10px;
    background: #152347
      url(https://hacktoberfest.digitalocean.com/assets/bg-left-6cede81e395aa4ed5f64010cba3cd32b0cd8b29934de8a75b93c40dc9941fdd5.png)
      0 10%;

    a {
      display: block;
      font-size: 150%;
      transform: scale3d(1, 1, 1);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

      &:hover {
        will-change: transform;
        transform: scale(1.04, 1.04);
      }
    }

    img {
      height: 100px;
      width: auto;
      margin: 10px;
    }

    span {
      display: inline-block;
    }

    .why {
      // just for SEO
      display: none;
    }
  }
}
</style>
