<template>
  <div class="flex flex-col">
    <div><Navbar /></div>
    <div class="flex flex-col">
      <router-view v-slot="{ Component }">
        <transition
          enter-active-class="animate__animated animate__fadeIn"
          enter-leave-class="animate__animated animate__fadeOut"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
  <Footer />
</template>

<script>
  import Navbar from "./components/Navbar.vue";
  import Footer from "./components/Footer.vue";

  export default {
    components: {
      Navbar,
      Footer,
    },
  };
</script>
<style>
</style>
