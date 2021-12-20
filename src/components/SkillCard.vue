<template>
  <div class="cardCustom mt-5 w-full">
    <div
      class="card__inner w-full relative"
      :class="clicked && id === skill.id ? 'is-flipped' : ''"
    >
      <div
        class="
          card__face card__face--front
          w-full
          flex flex-col
          justify-content-start
        "
      >
        <div class="flex flex-col w-full">
          <div
            class="
              text-bold text-2xl
              z-10
              text-white
              flex flex-col
              align-items-center
              bg-gray-400
              w-full
            "
          >
            {{ skill.title }}
            <div class="flex align-items-center text-sm">
              {{ skill.small_description }}
            </div>
          </div>
        </div>
        <div
          class="
            flex
            align-items-center
            justify-content-center
            w-full
            h-full
            absolute
            background-thumbnail
          "
        >
          <div class="text-black bg-black opacity-80 w-full h-full">
            <!-- <img
            :src="background1(skill.background_image1)"
            class="flex bg-image object-cover h-full"
          /> -->
          </div>
        </div>
        <div
          style="top: 77%"
          class="
            absolute
            flex
            justify-content-center
            bg-gray-200
            opacity-70
            w-full
            m-2
            p-1
          "
        >
          <img
            :src="tech_stack1(skill.tech_stack_logos1)"
            class="top-10 left-0 z-0 opacity-70 w-20 h-20"
          />
          <img
            :src="tech_stack2(skill.tech_stack_logos2)"
            class="top-20 left-20 z-1 w-20 h-20"
          />
          <img
            :src="tech_stack3(skill.tech_stack_logos3)"
            class="z-2 w-20 h-20"
          />
        </div>
      </div>
      <div
        class="
          card__face card__face--back
          py-4
          px-3
          bg-gradient-to-r
          from-purple-300
          to-pink-300
        "
      >
        <div class="card__content relative flex">
          <div class="z-10 absolute font-bold">{{ skill.description }}</div>
          <div class="absolute z-0 w-full h-full"></div>
          <div class="card__header"></div>
          <div class="card__body">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["skill", "clicked", "id"],
    computed: {},

    methods: {
      tech_stack1(logo1) {
        return `${process.env.VUE_APP_BASE_STATICS}${logo1}`;
      },
      tech_stack2(logo2) {
        return `${process.env.VUE_APP_BASE_STATICS}${logo2}`;
      },
      tech_stack3(logo3) {
        return `${process.env.VUE_APP_BASE_STATICS}${logo3}`;
      },
    },
  };
</script>

<style scoped>
:root {
  --primary: #ffce00;
  --secondary: #fe4880;
  --dark: #212121;
  --light: #f3f3f3;
}

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: sans-serif;
  width: 100%;
  min-height: 100vh;
}
.background-thumbnail {
  background: url("../assets/desktop.jpg");
  background-size: fit-content;
}
.cardCustom {
  width: 40vw;
  height: 50vh;
  min-width: 300px;
  perspective: 1000px;
}

.card__inner {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}

.card__inner.is-flipped {
  transform: rotateY(180deg);
}
.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 16px;

  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);
}
.card__face--front {
  background-image: linear-gradient(
    to bottom right,
    var(--primary),
    var(--secondary)
  );
  display: flex;
  align-items: center;
  justify-content: center;
}
.card__face--front h2 {
  color: #fff;
  font-size: 32px;
}
.card__face--back {
  background-color: var(--light);
  transform: rotateY(180deg);
}
.card__content {
  width: 100%;
  height: 100%;
}
.card__header {
  position: relative;
  padding: 30px 30px 40px;
}
.card__header:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
    to bottom left,
    var(--primary) 10%,
    var(--secondary) 115%
  );
  z-index: -1;
  border-radius: 0px 0px 50% 0px;
}
.card__header h2 {
  color: #fff;
  font-size: 32px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
}

.card__body {
  padding: 30px;
}
.card__body h3 {
  color: var(--dark);
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
}
.card__body p {
  color: var(--dark);
  font-size: 18px;
  line-height: 1.4;
}
</style>
