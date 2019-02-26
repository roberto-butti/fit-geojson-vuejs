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
        Made with <span>❤</span> by
        <a href="https://github.com/roberto-butti">@roberto-butti</a>,
        <a href="https://github.com/LucaDb">@LucaDb</a>
        <a href="https://github.com/soloistco">@soloistco</a>
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
  padding: 20px;
  text-align: center;
  position: relative;
  z-index: 1;

  svg,
  h1 {
    vertical-align: middle;
    font-weight: 400;
    display: inline-block;
  }

  h1 {
    margin: 0 auto 0 0;
    font-size: 32px;
  }
}

.logo {
  width: 48px;
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
  margin: 20px 0;
  font-size: 12px;
  text-align: center;

  span {
    color: #fe201a;
    font-size: 24px;
  }

  a {
    color: #42b983;
    text-decoration: none;
  }
}
</style>
