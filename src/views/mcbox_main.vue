<template>
  <main>
    <div class="title">ChestCommands <b>编辑器</b></div>
    <div>
      <div class="top">
        <mcbox_set_main style="flex-grow: 1"></mcbox_set_main>
        <div class="top2">
          <mcbox_show_menu style="flex-grow: 1"></mcbox_show_menu>
        </div>
      </div>
      <hr
        class="hr-solid-content"
        :data-content="'内容编辑区,当前 X:' + this.x + ',y:' + this.y"
      />
      <mcbox_set_card></mcbox_set_card>
    </div>
  </main>
</template>

<script>
import mcbox_show_menu from "@/views/mcbox_show_menu.vue";
import mcbox_set_main from "@/views/mcbox_set_main.vue";
import mcbox_set_card from "@/views/mcbox_set_card.vue";

export default {
  name: "mcbox_main",
  mounted() {},
  components: {
    mcbox_show_menu,
    mcbox_set_main,
    mcbox_set_card,
  },
  data() {
    return {
      cs: "",
      x: null,
      y: null,
    };
  },
  computed: {
    all_x() {
      return this.$store.state.x;
    },
    all_y() {
      return this.$store.state.y;
    },
  },
  watch: {
    all_x(newVal) {
      this.x = newVal;
    },
    all_y(newVal) {
      this.y = newVal;
    },
  },
};
</script>
<style lang=less scoped>
main {
  max-width: 1200px;
  border-radius: 10px;
  height: auto;
  box-shadow: 0px 0px 5px #000;
  margin: 0 auto;

  .title {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    font-family: "minecraft-title", minecraft;

    b {
      font-family: "minecraft-title", minecraft;
    }
  }

  .top {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .top2 {
    padding: 10px 20px;
  }
}

.hr-solid-content {
  color: #a2a9b6;
  border: 0;
  font-size: 12px;
  padding: 1em 0;
  position: relative;
}

.hr-solid-content::before {
  content: attr(data-content);
  position: absolute;
  padding: 0 1ch;
  line-height: 1px;
  border: solid #d0d0d5;
  border-width: 0 99vw;
  width: fit-content;
  /* for IE浏览器 */
  white-space: nowrap;
  left: 50%;
  transform: translateX(-50%);
}
</style>
