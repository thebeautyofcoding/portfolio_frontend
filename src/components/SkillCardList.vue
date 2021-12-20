<template>
  <div class="flex flex-col justify-center w-full h-full">
    <div class="flex flex-col align-items-center">
      <div class="text-2xl font-bold flex w-full justify-center">Skills</div>
      <span class="text-gray-600 text-sm">My recent skills...</span>
    </div>
    <ul
      class="flex mt-3 flex-wrap justify-content-center"
      style="margin-bottom: 250px align-items-center; height: 80%"
    >
      <li
        v-for="skill in skillcards"
        @click="clickSkillCard(skill.id)"
        :key="skill.id"
        class="m-2"
      >
        <SkillCard :skill="skill" :clicked="clicked" :id="id" />
      </li>
    </ul>
  </div>
</template>

<script>
  import SkillCard from "./SkillCard.vue";
  export default {
    components: {
      SkillCard,
    },
    data() {
      return {
        clicked: false,
        id: null,
      };
    },
    computed: {
      skillcards() {
        return this.$store.state.skills.skills;
      },
    },
    async mounted() {
      await this.$store.dispatch("getSkills");
    },

    methods: {
      clickSkillCard(id) {
        this.id = id;
        this.clicked = !this.clicked;
        const card = document.querySelector(".card__inner");
        card.addEventListener("click", function (e) {});
      },
    },
  };
</script>

<style>
</style>
