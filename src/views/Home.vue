<template><div></div></template>

<script>
  import { ref, computed } from "vue";
  import { useStore } from "vuex";

  export default {
    name: "Home",
    components: {},
    setup(props, { root }) {
      const store = useStore();
      const showModal = computed(
        () => store.state.portfolios.showPortfolioDialog
      );
      const currentPortfolio = computed(
        () => store.state.portfolios.currentPostInModal
      );

      const loggedInUser = computed(
        () => store.state.currentUser.currentUser.currentUser
      );

      const imageLink = computed(
        () =>
          process.env.VUE_APP_BASE_STATICS + currentPortfolio.value.thumbnail_path
      );

      return {
        loggedInUser,
      };
    },
  };
</script>
<style scoped>
</style>
