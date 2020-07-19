<template>
  <div>
    <header>
      <div class="left-section">
        <img alt="Logo" src="../assets/Logo.svg">
        <h1>VietVax</h1>
      </div>
    </header>
    <body>
      <div class="btn">
        <p class="purple">Bạn là</p>
      </div>
        <div class="inp">
          <div class="btn">
              <p class="purple">Tên đăng nhập</p>
          </div>
        <input type="text" style="border: black">
        </div>
      <div class="btn">
        <p class="purple">Mật khẩu</p>
      </div>
    </body>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String
  },
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
/*

*/

.purple {
  font-family: EB Garamond;
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 42px;
  color: #FFFFFF;
}

.btn {
  width: 250px;
  background: #754668;
  border-radius: 15px;
  padding: 5px 5px 5px 5px;
  margin: 50px 50px;
  text-align: center;
}

.inp {
  display: flex;
  flex-direction: row;
}

</style>
