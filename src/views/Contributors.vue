<template>
  <div class="container">
    <h2>Contributors</h2>
    <div class="user-list">
      <div class="user-container" v-for="user in users" :key="user.login">
        <a :href="user.html_url">
          <span class="contri-value">{{ user.contributions }}</span>
          <img :src="user.avatar_url" :alt="user.login" />
          <span>{{ user.login }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contributors',
  data: () => ({
    users: []
  }),
  mounted: async function() {
    const res = await fetch(
      'https://api.github.com/repos/roberto-butti/fit-geojson-vuejs/contributors'
    )
    const resJson = await res.json()

    this.users = resJson.filter(user => user['type'] === 'User')
  }
}
</script>

<style lang="scss">
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
}

.user-list {
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.user-container a {
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-bottom: 25px;
  align-items: center;
}

.user-container img {
  width: 110px;
  border-radius: 55px;
  margin-bottom: 7px;
  margin-top: 5px;
}

.user-container a {
  color: #2c3e50;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
}

.user-container .contri-value {
  position: relative;
  left: 50px;
  top: 20px;
}
</style>
