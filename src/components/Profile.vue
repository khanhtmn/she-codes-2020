<template>
  <div>
    <header>
      <div class="left-section">
        <img alt="Logo" src="../assets/Logo.svg">
        <h1>VietVax</h1>
      </div>
      <div id="text">
          <router-link to="/home" class="btn">Trang chủ</router-link>
          <router-link to="/profile" class="btn main">Hồ sơ của bạn</router-link>
          <router-link to="/rec" class="btn">Gợi ý tiêm chủng cá nhân</router-link>
          <router-link to="/blog" class="btn">Blog</router-link>
        <router-link to="/blog"><img src="../assets/user profile.svg" alt="Avatar"></router-link>
      </div>
    </header>
    <body>
      <div class="main-rec">
        <div class="text-body">
          <h2>VietVax cho một Việt Nam khoẻ mạnh</h2>
          <p>VietVax giúp toàn dân và chính phủ Việt Nam quản lý lịch sử tiêm chủng, đưa ra khuyến nghị và giáo dục về tiêm phòng.</p>
        </div>
        <img src="../assets/Rectangle 20.svg" alt="human-background">
      </div>
      <Footer/>
    </body>
  </div>
</template>

<script>
import Footer  from './Footer.vue';

export default {
  name: 'Profile',
  props: {
    msg: String
  },
  components: {
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.left-section {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 50px;
  padding-right: 220px;
}

h1 {
  font-family: EB Garamond;
  font-style: normal;
  font-weight: 800;
  font-size: 42px;
  line-height: 55px;

  color: #000000;
  padding-left: 20px;
}

#text {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  font-family: EB Garamond;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;

  color: #000000;
}

.btn {
  padding-right: 40px;
}

.blue-btn {
  background-color: #001C55;
  color: white;
  border-radius: 8px;
  padding: 9px 15px 9px 15px;
}

.main-rec {
  width: 100%;
  height: 530px;
  background-image:
      url(https://imgur.com/q9Hq3Ro),
      linear-gradient(63.78deg, #9BC4CB 10.31%, #001C55 95.64%);
  background-position:
      left,
      right;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.text-body {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
}

h2 {
  width: 577px;
  font-family: EB Garamond;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 63px;
  color: #000000;
  margin: 0px 0px 25px 0px;
  text-align: left;
}

p {
  width: 500px;
  font-family: EB Garamond;
  font-style: normal;
  font-weight: normal;
  font-size: 27px;
  line-height: 35px;
  margin: 0px;
  text-align: left;
  color: #000000;
}

.main {
  font-weight: bold;
}
</style>
