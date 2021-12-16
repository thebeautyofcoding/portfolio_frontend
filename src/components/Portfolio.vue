<template>
  <div
    @click="onClick"
    class="
      card
      m-3
      shadow
      d-flex
      w-100
      hover:scale-125
      transition
      duration-500
      transform
      rounded-xl
      cursor-pointer
    "
  >
    <img :src="imageLink(portfolio)" class="rounded-xl" />
  </div>
</template>

<script>
  export default {
    props: ["portfolio"],
    data() {
      return {
        clicked: false,
      };
    },
    methods: {
      imageLink(portfolio) {
        return process.env.VUE_APP_BASE_STATICS + portfolio.thumbnail_path;
      },
      onClick() {
        this.clicked = true;
      },
    },
  };
</script>

<style>
</style>
