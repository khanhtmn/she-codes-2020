<template>
  <div>
    <header>
      <div class="left-section">
        <img alt="Logo" src="../assets/Logo.svg">
        <h1>VietVax</h1>
      </div>
      <div id="text">
          <router-link to="/" class="btn">Trang chủ</router-link>
          <router-link to="/profile" class="btn main">Hồ sơ của bạn</router-link>
          <router-link to="/rec" class="btn">Gợi ý tiêm chủng cá nhân</router-link>
          <router-link to="/blog" class="btn">Blog</router-link>
        <router-link to="/blog"><img src="../assets/user profile.svg" alt="Avatar"></router-link>
      </div>
    </header>
    <body>
      <div class="main-rec">
        <div class="left-profile">
          <img class="img2" src="../assets/user profile.svg" alt="User avatar">
          <p class="name"><strong>Nguyễn Hiếu Ngân</strong></p>
          <div class="basic-info">
            <p><strong>Ngày sinh:</strong> 01/08/2001</p>
            <p><strong>Giới tính:</strong> Nữ</p>
            <p><strong>Địa chỉ:</strong> 10 Thành Thái, Quận 10, TP.HCM</p>
            <p><strong>Email:</strong> ngannguyen@gmail.com</p>
            <p><strong>SĐT:</strong> 0374651776</p>
          </div>
        </div>
        <div class="vaccine-info">
          <img class="img3" src="../assets/Rectangle 22.svg" alt="background"><img class="img4" src="../assets/Rectangle 21.svg" alt="background">
          <div class="row">
            <p>Lần 1</p>
            <p>Lần 2</p>
            <p>Lần 3</p>
            <p>Lần 4</p>
            <p>Lần 5</p>
          </div>
        </div>
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

.main {
  font-weight: bold;
}

/*

*/

.img2 {
  width: 170px;
}

.left-profile {
  display: flex;
  flex-direction: column;
  padding: 40px 40px 40px 100px;
}

.name {
  font-family: EB Garamond;
  font-style: normal;
  font-size: 23px;
  line-height: 30px;

  color: #000000;
  padding: 20px 0px 20px 0px;
}

.basic-info {
  width: 300px;
  font-family: EB Garamond;
  font-style: normal;
  font-size: 20px;
  line-height: 30px;

  color: #000000;
}

.main-rec {
  display: flex;
  flex-direction: row;
}

.img3 {
  width: 80vw;
  padding-left: 40px;
}

.img4 {
  width: 80vw;
  padding-top: -5px;
  /* margin-top: -5px; */
}

.row {
  display: flex;
  flex-direction: row;
  width: 80vw;
  justify-content: space-evenly;
  font-family: EB Garamond;
  font-style: normal;
  font-weight: bold;
  font-size: 23px;
  line-height: 30px;
  /* color: #FFFFFF; */
  color: #000000;
}
</style>
