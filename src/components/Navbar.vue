<template>
  <div id="sidemenu" v-if="!showModal">
    <button
      class="sidemenu__btn d-lg-none"
      v-on:click="navOpen = !navOpen"
      v-bind:class="{ active: navOpen }"
    >
      <span :class="{ 'bg-white': navOpen }" class="top"></span>
      <span :class="{ 'bg-white': navOpen }" class="mid"></span>
      <span :class="{ 'bg-white': navOpen }" class="bottom"></span>
    </button>
    <transition name="translateX">
      <nav v-show="navOpen">
        <div class="sidemenu__wrapper w-full">
          <ul class="sidemenu__list flex flex-col justify-evenly h-75">
            <router-link to="/" class="sidemenu__item">Home</router-link>
            <router-link to="/projects" class="sidemenu__item"
              >Projects</router-link
            >
            <router-link to="/skills" class="sidemenu__item"
              >Skills</router-link
            >
            <router-link to="/contact" class="sidemenu__item"
              >Contact</router-link
            >
          </ul>
        </div>
      </nav>
    </transition>
  </div>
  <nav
    v-on:click="navOpen = false"
    class="d-none none d-sm-none d-md-none d-lg-block w-full"
    v-show="navOpen"
  >
    <div class="w-full">
      <ul class="h-25 d-flex justify-evenly">
        <router-link to="/" class="">Home</router-link>
        <router-link to="/projects" class="">Projects</router-link>
        <router-link to="/skills" class="">Skills</router-link>
        <router-link to="/contact" class="">Contact</router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Navbar",
    // methods: {
    //   onClose() {
    //     console.log("DKKKKKKKKKKKK");
    //     this.navOpen = false;
    //   },
    // },

    computed: {
      showModal() {
        return this.$store.state.portfolios.showPortfolioDialog;
      },
    },
    data() {
      return {
        hamburger: require("../assets/hambuger.svg"),
        navOpen: false,
      };
    },

    created() {
      this.$watch(
        () => this.$route.path,
        (path) => {
          this.navOpen = false;
        }
      );
    },
  };
</script>

<style scoped>
#sidemenu nav {
  width: 100vw;
  height: 100vh;
  display: flex;
  color: white;
  background: black;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}
#sidemenu .sidemenu__btn {
  display: block;
  width: 50px;
  height: 50px;
  color: black;
  border: none;
  position: relative;
  z-index: 100;
  appearance: none;
  cursor: pointer;
  outline: none;
}
#sidemenu .sidemenu__btn span {
  display: block;
  width: 20px;
  height: 2px;
  margin: auto;
  background: black;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.4s ease;
}
#sidemenu .sidemenu__btn span.top {
  transform: translateY(-8px);
}
#sidemenu .sidemenu__btn span.bottom {
  transform: translateY(8px);
}
#sidemenu .sidemenu__btn.active .top {
  transform: rotate(-45deg);
}
#sidemenu .sidemenu__btn.active .mid {
  transform: translateX(-20px) rotate(360deg);
  opacity: 0;
}
#sidemenu .sidemenu__btn.active .bottom {
  transform: rotate(45deg);
}
#sidemenu .sidemenu__wrapper {
  padding-top: 50px;
}
#sidemenu .sidemenu__list {
  padding-top: 50px;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}
#sidemenu .sidemenu__item a {
  text-decoration: none;
  line-height: 1.6em;
  font-size: 1.6em;
  padding: 0.5em;
  display: block;
  color: white;
  transition: 0.4s ease;
}
#sidemenu .sidemenu__item a:hover {
  background: lightgrey;
  color: dimgrey;
}
.translateX-enter {
  transform: translateX(0);
  opacity: 0;
}
.translateX-enter-active,
.translateX-leave-active {
  transform-origin: top left 0;
  transition: 1s ease;
}
.translateX-leave-to {
  transform: translateX(0vw);
  opacity: 0;
}
.router-link-active {
  border-bottom: 10px solid black;
}
</style>
