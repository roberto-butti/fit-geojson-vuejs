<template>
  <div class="app">
    <header class="header">
      <img src="@/assets/logo.png" />

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
        <br />Thanks to the
        <router-link to="/contributors">Contributors</router-link>
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

  img,
  h1 {
    vertical-align: middle;
    font-weight: 500;
    display: inline-block;
  }

  img {
    height: 40px;
    margin-right: 5px;
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

      //&:hover {
      //  will-change: transform;
      //  transform: scale(1.04, 1.04);
      //}
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
