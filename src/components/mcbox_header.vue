<template>
  <header>
    <div class="logo"><img src="@/../public/img/logo.png" alt="" /></div>
    <ul class="nav">
      <li><a href="">首页</a></li>
      <li><a href="">功能</a></li>
      <li><a Target="_blank" href="https://bbs.jklss.cn/">论坛</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang=less scoped>
header {
  height: 60px;
  max-width: 1200px;
  margin: 5px auto;
  display: flex;

  .logo {
    height: 100%;
    width: 280px;

    img {
      width: 90%;
      height: 90%;
      object-fit: scale-down;
    }
  }

  .nav {
    display: flex;
    li {
      width: 80px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      font-weight: bolder;
      font-family: "minecraft-title", minecraft;
      a {
        font-size: 18px;
      }
    }
  }
}
</style>
