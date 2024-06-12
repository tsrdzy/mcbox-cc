<template>
  <footer>
    <div class="footer">
      <ul>
        <li class="iconfont">
          <n-popover trigger="hover">
            <template #trigger>
              <a class="iconfont" href="https://mcbox.plus/"
                >&#xe6a7;</a
              ></template
            >
            <span>MCBOX官方首页</span>
          </n-popover>
        </li>
        <li class="iconfont">
          <n-popover trigger="hover">
            <template #trigger>
              <a class="iconfont" Target="_blank" href="https://bbs.jklss.cn/"
                >&#xe625;</a
              ></template
            >
            <span>MCBOX资源论坛</span>
          </n-popover>
        </li>
        <li class="iconfont">
          <n-popover trigger="hover">
            <template #trigger>
              <a class="iconfont" href="https://wiki.mcbox.plus/"
                >&#xe602;</a
              ></template
            >
            <span>MCBOX维基百科</span>
          </n-popover>
        </li>
        <li class="iconfont">
          <n-popover trigger="hover">
            <template #trigger>
              <a class="iconfont" target="_blank" href="mailto:420792287@qq.com"
                >&#xe606;</a
              ></template
            >
            <span>MCBOX意见反馈</span>
          </n-popover>
        </li>
        <li class="iconfont">
          <n-popover trigger="hover">
            <template #trigger>
              <a
                class="iconfont"
                target="_blank"
                href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=TP604ja4Dni7Q78jARdO455gwgoAZUdV&authKey=JUp9sKsC6n7qmfsPHldCSUU79K7utJwxPoxwcjmBPN5V7wXAi4Q2CcCaZBAAIPl8&noverify=0&group_code=110720620"
                >&#xe882;</a
              ></template
            >
            <span>QQ群:110720620</span>
          </n-popover>
        </li>
      </ul>
      <hr />
      <h2 style="font-size: 10px">
        <a target="_blank" href="https://beian.miit.gov.cn/#/Integrated/index"
          >渝ICP备2023004699号-1</a
        >&ensp;|&ensp; <img src="../assets/img/beian.png" alt="" /><a
          target="_blank"
          href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=500233020003000"
          >渝公网安备 500233020003000号</a
        >
      </h2>
      <h2>© 2022-2024 源鸟工作室 版权所有</h2>
    </div>
  </footer>
</template>

<script>
import { NPopover } from "naive-ui";
export default {
  name: "main_footer",
  components: {
    NPopover,
  },
};
</script>

<style lang="less" scoped>
* {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
a {
  color: rgb(168, 168, 168);
}

h2 {
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: center;

  img {
    width: 18px;
    height: 18px;
    border: 0;
    margin: 6px 0px;
  }

  a {
    display: block;
    text-align: center;
    height: 30px;
    line-height: 30px;
    color: rgb(30, 30, 30);

  }
}

footer {
  width: 100%;
  .footer {
    min-width: 380px;
    hr {
      margin: 4px;
      border: 0;
      height: 1px;
      background: #333;
      background-image: linear-gradient(
        to right,
        rgb(255, 255, 255),
        rgb(140, 140, 140),
        rgb(255, 252, 252)
      );
    }

    ul {
      margin: 0 auto;
      height: 37.6px;
      display: flex;
      justify-content: center;
      min-width: 150px;
      max-width: 300px;

      li {
        line-height: 45px;
        font-size: 24px;
        width: 100%;
        text-align: center;
      }
    }
  }
}
</style>