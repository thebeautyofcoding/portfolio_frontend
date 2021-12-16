<template>
  <div class="">
    <div><Navbar /></div>
    <div class="flex flex-col">
      <router-view v-slot="{ Component, route }">
        <transition
          :enter-active-class="route.meta.enterClass"
          :leave-active-class="route.meta.leaveClass"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar.vue";

  export default {
    components: {
      Navbar,
    },
  };
</script>
<style>
</style>
