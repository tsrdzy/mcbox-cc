<template>
  <mcbox_header></mcbox_header>
  <router-view></router-view>
  <mcbox_footer></mcbox_footer>
</template>

<script>
import mcbox_header from "@/components/mcbox_header.vue";
import mcbox_footer from "@/components/mcbox_footer.vue";

export default {
  components: {
    mcbox_header,
    mcbox_footer,
  },
};
</script>

<style lang="less"></style>
