<template>
  <div
    @click="onClick"
    class="
      card
      m-3
      shadow
      d-flex
      hover:scale-125
      transition
      duration-500
      transform
      rounded-xl
      cursor-pointer
    "
  >
    <div
      class="
        text-bold text-2xl
        z-10
        text-white
        flex
        w-full
        align-items-center
        justify-content-center
        absolute
        bg-gray-400
        rounded-t-xl
        word-wrap
      "
      style="word-break: break-word"
    >
      {{ portfolio.title }}
    </div>
    <img :src="imageLink(portfolio)" class="rounded-xl" />
    <div class="absolute w-full flex w-full h-full align-items-end">
      <div
        class="
          flex
          w-full
          justify-evenly
          align-items-center
          bg-gray-400
          rounded-b-xl
        "
      >
        <img
          src="../assets/laravel.svg"
          class="top-10 left-0 z-0 opacity-70 w-20 h-20"
        />
        <img src="../assets/vue.svg" class="top-20 left-20 z-1 w-20 h-20" />
        <img src="../assets/pusher.svg" class="z-2 w-20 h-20" />
      </div>
    </div>
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
        return process.env.VUE_APP_BASE_STATICS + portfolio.background_image1;
      },
      onClick() {
        this.clicked = true;
      },
    },
  };
</script>

<style>
</style>
