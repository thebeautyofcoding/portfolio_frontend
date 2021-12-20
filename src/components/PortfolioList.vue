<template>
  <div class="flex justify-center flex-col align-items-center w-full">
    <div class="flex w-full flex-col justify-center w-full">
      <div class="text-2xl font-bold flex w-full justify-center">Projects</div>
      <span class="text-gray-600 text-sm flex justify-center"
        >My current FullStack-Projects...</span
      >
    </div>
    <ul class="flex w-full vh-100">
      <div class="flex flex-wrap justify-center" v-if="!hideIfOpenModal">
        <li
          style="
            max-height: 400px;
            max-width: 500px;
            min-width: 300px;
            min-height: 200px;
          "
          class="d-flex portfolio-list justify-center align-items-center"
          v-for="portfolio in portfolios"
          :key="portfolio.id"
          @click="onClick(portfolio.id)"
        >
          <Portfolio :portfolio="portfolio" />
        </li>
      </div>
    </ul>
    <modal @close="toggleModal" :modalActive="showModal" class="">
      <div class="font-bold text-2xxl">Details</div>

      <img :src="imageLink" class="" />

      <div class="font-bold text-xl mb-2" style="word-break: break-word">
        {{ currentPortfolio.title }}
      </div>
      <div class="">{{ currentPortfolio.description }}</div>
      <div class="flex m-2">
        <div class="d-flex align-items-center mr-5">
          <span class="mr-1">{{
            currentPortfolio.likes && currentPortfolio.likes.length
          }}</span>
          <i
            class="fas fa-thumbs-up text-gray-400 cursor-pointer mt-2"
            @click="like(currentPortfolio.id)"
          ></i>
        </div>
        <div class="d-flex d-flex align-items-center">
          <span class="mr-1">{{
            currentPortfolio.dislikes && currentPortfolio.dislikes.length
          }}</span>
          <i
            class="fas fa-thumbs-down mr-5 text-gray-400 cursor-pointer"
            @click="dislike(currentPortfolio.id)"
          ></i>
        </div>
      </div>
      <div class="w-full flex">
        <ul
          class="
            flex flex-col
            justify-center
            align-items-center
            w-full
            h-40
            overflow-auto
          "
          style="overflow-x: hidden"
        >
          <li
            class="rounded w-100 m-2 shadow-sm bg-gray-200 flex flex-column p-1"
            v-for="comment in currentPortfolio.comments"
            :key="comment.id"
          >
            <div class="flex w-full">
              <div class="flex w-80">
                <span class="text-sm text-gray-600"
                  >User "{{ comment.user.username }}" wrote ({{
                    comment.created_on
                  }}):</span
                >
              </div>
              <div
                v-if="loggedInUser && loggedInUser.email === comment.user.email"
                class="flex justify-end w-60 ml-5 align-items-center"
              >
                <i
                  @click="deleteComment(comment.id)"
                  class="
                    far
                    fa-times-circle
                    flex
                    justify-end
                    px-1
                    hover:text-red-500
                    cursor-pointer
                  "
                ></i>
              </div>
            </div>
            {{ comment.content }}
          </li>
        </ul>
      </div>
      <div class="" v-if="loggedInUser">
        <div class="form-group">
          <label for="comentBox">Comment</label>
          <textarea v-model="description" class="form-control" id="comentBox" />
          <small id="comentBox" class="form-text text-muted"
            >Write something awesome :)</small
          >
        </div>

        <button
          :class="{ disabled: description === null }"
          class="btn btn-primary d-block my-3"
          @click="postComment(currentPortfolio.id)"
        >
          Post it!
        </button>
      </div>
      <div v-else>
        <div class="text-xl text-bold my-3">
          Please
          <router-link to="/login"
            ><span class="text-red-400">login</span></router-link
          >
          or
          <router-link to="/register"
            ><span class="text-red-400">register</span></router-link
          >
          to like this portfolio project or to leave a comment.
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
  import Modal from "../components/Modal.vue";
  import Portfolio from "./Portfolio.vue";
  export default {
    components: { Portfolio, Modal },

    computed: {
      showModal() {
        return this.$store.state.portfolios.showPortfolioDialog;
      },
      currentPortfolio() {
        return this.$store.state.portfolios.currentPostInModal;
      },

      loggedInUser() {
        return this.$store.state.currentUser.currentUser.currentUser;
      },

      imageLink() {
        return (
          process.env.VUE_APP_BASE_STATICS +
          this.currentPortfolio.background_image1
        );
      },

      portfolios() {
        return this.$store.state.portfolios.portfolios;
      },
      PortfolioInModalComments() {
        return this.$store.state.portfolios.currentPostInModal.comments;
      },

      hideIfOpenModal() {
        return this.$store.state.portfolios.showPortfolioDialog;
      },
    },
    async created() {
      await this.$store.dispatch("getPortfolios");
    },
    methods: {
      onClick(portfolioId) {
        this.$store.dispatch("getPortfolioById", portfolioId);
        this.$store.dispatch("setShowPortfolioDialog", true);
      },
      async deleteComment(id) {
        await this.$store.dispatch("deleteComment", id);
      },
      toggleModal(modalActive) {
        this.modalActive = !modalActive;
      },
      async postComment(id) {
        const data = { id, description: this.description };

        await this.$store.dispatch("postComment", data);
      },
      async dislike(portfolioId) {
        await this.$store.dispatch("dislikeOrUnlike", portfolioId);
      },
      async like(commentId) {
        await this.$store.dispatch("likeOrUnlike", commentId);
      },
    },
    data() {
      return {
        modalActive: false,
        description: "",
        title: "",
      };
    },
  };
</script>

<style scoped>
ul {
  list-style-type: none;
}
.portfolio-list {
}
</style>
