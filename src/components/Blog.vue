<template>
  <div>
    <header>
      <div class="left-section">
        <img alt="Logo" src="../assets/Logo.svg">
        <h1>VietVax</h1>
      </div>
      <div id="text">
          <router-link to="/" class="btn">Homepage</router-link>
          <router-link to="/profile" class="btn">Your profile</router-link>
          <router-link to="/rec" class="btn">Vaccination recommendation</router-link>
          <router-link to="/blog" class="btn main">Blog</router-link>
          <router-link to="/login"><img src="../assets/user profile.svg" alt="Avatar"></router-link>
      </div>
    </header>
    <body>
      <div class="photo">
        <div class="blog-photo">
          <img src="../assets/Rectangle 40.svg" alt="image">
          <p style="margin: 20px 10px 0px 10px;">Handling side effects from vaccination for children</p>
        </div>
        <div class="blog-photo">
          <img src="../assets/Rectangle 41.svg" alt="image">
          <p style="margin: 20px 10px 0px 10px;">How to check for the recommended vaccines?</p>
        </div>
        <div class="blog-photo">
          <img src="../assets/Rectangle 42.svg" alt="image">
          <p style="margin: 20px 10px 0px 10px;">When should we take HPV vaccination?</p>
        </div>
      </div>
      <div class="photo">
        <div class="blog-photo">
          <img src="../assets/Rectangle 43.svg" alt="image">
          <p style="color: white">Handling side effects from vaccination for children</p>
        </div>
        <div class="blog-photo">
          <img src="../assets/Rectangle 44.svg" alt="image">
          <p style="color: white">How to check for the recommended vaccines?</p>
        </div>
        <div class="blog-photo">
          <img src="../assets/Rectangle 45.svg" alt="image">
          <p style="color: white">When should we take HPV vaccination?</p>
        </div>
      </div>
      <Footer/>
    </body>
  </div>
</template>

<script>
import Footer  from './Footer.vue';

export default {
  name: 'Blog',
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

.photo {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.blog-photo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #FFFFFF;
  border: 1px solid #0138A7;
  box-sizing: border-box;
  border-radius: 0px 0px 10px 10px;
  /* margin-bottom: 50px; */
  padding-bottom: 20px;
  margin-top: 50px;
}

</style>
