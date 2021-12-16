<template>
  <div class="flex justify-center">
    <div class="flex flex-col">
      <div class="text-2xl font-bold flex w-full justify-center">Skills</div>
      <span class="text-gray-600 text-sm">My recent skills...</span>
    </div>
    <ul class="flex flex-wrap absolute mt-3">
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
