<template>
  <div>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/profile">About</router-link> -->
      <!-- <router-link to="/">Trang chủ</router-link> |
      <router-link to="/profile">Hồ sơ của bạn</router-link> |
      <router-link to="/rec">Gợi ý tiêm chủng cá nhân</router-link> |
      <router-link to="/blog">Blog</router-link> |
      <router-link to="/login">Đăng nhập</router-link> -->
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
