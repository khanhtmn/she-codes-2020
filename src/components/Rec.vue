<template>
  <div>
    <header>
      <div class="left-section">
        <img alt="Logo" src="../assets/Logo.svg">
        <h1>VietVax</h1>
      </div>
      <div id="text">
          <router-link to="/" class="btn">Trang chủ</router-link>
          <router-link to="/profile" class="btn">Hồ sơ của bạn</router-link>
          <router-link to="/rec" class="btn main">Gợi ý tiêm chủng cá nhân</router-link>
          <router-link to="/blog" class="btn">Blog</router-link>
        <router-link to="/blog"><img src="../assets/user profile.svg" alt="Avatar"></router-link>
      </div>
    </header>
    <body>
      <div class="top">
        <h3>Bộ lọc</h3>
          <p class="green-box">Thời gian: 1 tháng tới</p>
          <p class="green-box"  > Đi du lịch tới: N/A</p>
      </div>
      <div class="middle">
          <div id="box-1">
              <!-- <img src="../assets/Rectangle 28.svg" alt="rectangle"> -->
            <p style="margin: 20px 20px;">Khuyến nghị nếu đang trong đội tuổi tiêm chủng vaccine này, chưa tiêm hoặc không còn giấy xác nhận đã tiêm</p>
          </div>
          <div id="box-2">
            <!-- <img src="../assets/Rectangle 30.svg" alt="rectangle"> -->
            <p style="margin: 20px 20px;">Khuyến nghị vaccine này với tiền sử bệnh án cá nhân</p>
          </div>
          <div id="box-3">
            <!-- <img src="../assets/Rectangle 32.svg" alt="rectangle"> -->
            <p style="margin: 20px 20px;">Khuyến nghị vaccine này dựa trên tham khảo y khoa với chuyên gia</p>
          </div>
      </div>
      <Footer/>
    </body>
  </div>
</template>

<script>
import Footer  from './Footer.vue';

export default {
  name: 'Rec',
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
.top {
  display: flex;
  flex-direction: row;
  align-items: center;
}

h3 {
  font-family: EB Garamond;
  font-style: normal;
  font-weight: bold;
  font-size: 27px;
  line-height: 35px;
  color: #000000;
  padding: 30px 30px 30px 50px;
}

.green-box {
  background-color: #08605F;
  width: 250px;
  height: 35px;
  border-radius: 10px;
  font-family: EB Garamond;
  font-style: normal;
  font-weight: normal;
  font-size: 23px;
  line-height: 30px;
  color: #FFFFFF;
  margin-right: 30px;
  text-align: center;
}

.middle {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

#box-1 {
  background: #FFEE59;
  border: 1px solid #000000;
  width: 345px;
  height: 109px;
  border-radius: 5px;
};

#box-2 {
  background: #B75ED6;
  border: 1px solid #000000;
  width: 345px;
  height: 109px;
  border-radius: 5px;
};

#box-3 {
  background: #74E6FF;
  border: 1px solid #000000;
  width: 345px;
  height: 109px;
  border-radius: 5px;
};

</style>
