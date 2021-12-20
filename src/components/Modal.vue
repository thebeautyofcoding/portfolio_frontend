<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal shadow">
      <transition name="modal-animation-inner">
        <div class="flex" :class="isProjectsRoute ? '' : 'align-items-center'">
          <div
            v-show="modalActive"
            class="modal-inner relative"
            :style="isProjectsRoute ? 'height: 180vh;' : '  height: 50vh;'"
          >
            <i @click="close" class="far fa-times-circle absolute top-0"></i>
            <!-- Modal Content -->
            <slot />
            <button @click="close" type="button" class="mt-2 rounded-lg">
              Close
            </button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
  import { useStore } from "vuex";
  import { computed } from "vue";
  import { useRoute } from "vue-router";
  export default {
    props: ["modalActive"],
    setup(props, { emit }) {
      const store = useStore();
      const route = useRoute();
      const close = () => {
        store.commit("setShowPortfolioDialog", false);
      };

      const isProjectsRoute = computed(() => {
        console.log(route);
        return route.path === "/projects";
      });
      return { close, isProjectsRoute };
    },
  };
</script>

<style  scoped>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}
.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.2s;
}
.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-animation-inner-leave-to {
  transform: scale(0.8);
}
.modal {
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
  width: 100vw;
  position: fixed;
  top: 5%;
  left: 0;
  background-color: rgba(255, 255, 255, 0.7);
}
.modal-inner {
  max-width: 640px;

  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: #fff;
  padding: 64px 16px;
}
i {
  color: black;
  position: absolute;
  top: 25%;
  right: 15px;
  font-size: 20px;
  cursor: pointer;
}
i:hover {
  color: crimson;
}
button {
  padding: 5px 10px;
  border: none;
  font-size: 16px;
  background-color: crimson;
  color: #fff;
  cursor: pointer;
}
</style>
