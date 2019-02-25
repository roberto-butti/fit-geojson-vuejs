<template>
  <div class="app">
    <div class="header">
      <h1>Fit 2 geojson</h1>

      <div class="nav">
        <router-link :to="{ name: 'home' }">Home</router-link>|
        <router-link :to="{ name: 'about' }">About</router-link>
      </div>
    </div>
    <div class="wrapper">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  padding: 20px;
  text-align: center;
  position: relative;
  z-index: 1;

  h1 {
    margin: 0;
  }
}

.nav {
  margin: 0;
  position: absolute;
  top: 30px;
  right: 20px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>
