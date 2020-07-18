<template>
  <div>
    <footer>
      <div class="section-right">
        <div class="contact">Liên hệ & Hỗ trợ</div>
        <div class="info">
          <p>Email: hotro@vietvax.com</p>
          <p>Hotline: 1900 1696</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;
}

.contact {
  font-family: EB Garamond;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: #000000;
  text-align: left;
}

.info {
  font-family: EB Garamond;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  color: #000000;
  margin: 0 20px 20px 0px;
  text-align: left;
}

p {
  margin: 0px 0px 0px 0px;
}

</style>
