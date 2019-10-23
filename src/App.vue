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
}
</style>
