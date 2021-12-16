<template>
  <div class="">
    <section id="hero" class="absolute">
      <div class="hero container">
        <h1>Hello, ... <span></span></h1>
        <h1>my name is ... <span></span></h1>
        <h1>Heiner <span></span></h1>
        <div class="button-container">
          <div class="snake-border">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div v-if="after1S">
              <button
                @click="onClick"
                href="#projects"
                type="button"
                class="
                  mt-5
                  cta
                  text-white
                  border-2 border-red
                  p-1
                  text-xl
                  px-2
                  hover:bg-red-500
                "
              >
                Hire me!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Modal :modalActive="showModal" class="absolute top-0 z-10"
      ><form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>
        <div class="form-group">
          <label for="subject">Subject</label>
          <input
            v-model="subject"
            type="text"
            class="form-control"
            id="subject"
            placeholder="Enter subject"
          />
        </div>
        <div class="form-group">
          <label for="message">Leave a message</label>
          <textarea
            v-model="message"
            class="form-control"
            id="message"
            placeholder="Leave a message"
          />
        </div>

        <button type="submit" class="btn btn-primary mt-3" @click="sendEmail">
          Submit
        </button>
      </form>
    </Modal>
  </div>
</template>

<script>
  import Modal from "./Modal.vue";
  export default {
    components: {
      Modal,
    },
    data() {
      return {
        after1S: false,
        message: "",
        subject: "",
        email: "",
      };
    },
    mounted() {
      setTimeout(() => {
        this.after1S = true;
      }, 4000);
    },
    methods: {
      onClick() {
        this.$store.dispatch("setShowPortfolioDialog", true);
      },
      async sendEmail(e) {
        e.preventDefault();

        const data = {
          email: this.email,
          message: this.message,
          subject: this.subject,
        };
        const res = await this.$store
          .dispatch("sendEmail", data)
          .catch((err) => console.log(err));

        if (res.status === 200) {
          console.log("HJDDDDDDDDDDDD");
          ElNotification({
            title: "Success",
            message: `Your email from '${this.email} has been successfully sent.'`,
          });
          this.email = "";
          this.message = "";
          this.subject = "";
        }
      },
    },
    computed: {
      showModal() {
        return this.$store.state.portfolios.showPortfolioDialog;
      },
    },
  };
</script>

<style scoped>
.hero.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#hero {
  background-image: url("../assets/desktop.jpg");
  background-size: cover;
  background-position: top center;
  position: relative;
  display: flex;
  z-index: 1;
  height: 100vh;
}
#hero::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.6;
  z-index: -1;
}
#hero::after .hero {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 50px;
  justify-content: flex-start;
}
#hero h1 {
  display: block;
  width: fit-content;
  font-size: 4rem;
  position: relative;
  color: transparent;
  animation: text_reveal 0.5s ease forwards;
  animation-delay: 1.5s;
  flex-direction: row;
}
#hero h1:nth-child(1) {
  animation-delay: 1.5s;
}
#hero h1:nth-child(2) {
  animation-delay: 2.5s;
}
#hero h1:nth-child(3) {
  animation-delay: 3.5s;
}
#hero h1:nth-child(1) span {
  animation-delay: 1s;
}
#hero h1:nth-child(2) span {
  animation-delay: 2s;
}
#hero h1:nth-child(3) span {
  animation-delay: 3s;
}
#hero h1 span {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0%;
  background-color: crimson;
  animation: text_reveal_box 1s ease;
  animation-delay: 1s;
}
.cta {
}
@keyframes text_reveal_box {
  50% {
    width: 100%;
    left: 0%;
  }
  100% {
    width: 0;
    left: 101%;
  }
}
@keyframes text_reveal {
  100% {
    color: white;
  }
}
#contact .contact {
  max-width: 1200px;

  display: flex;
}
#contact .contact .contact-items {
  width: 100%;
  display: flex;

  flex-direction: row;
}
#contact .contact .contact-items .contact-item {
  width: 80%;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  padding: 30px;
  margin: 30px;

  box-shadow: 0px 0px 18px 0 #00000020;
  display: flex;
  flex-direction: column;
  transition: 0.3s ease box-shadow;
}
#contact .contact .contact-items .contact-item:hover {
  box-shadow: 0px 0px 5px #00000020;
}
#contact .contact .contact-items .contact-item .icon {
  width: 70px;
  margin: 0 auto;
  margin-bottom: 10px;
}
#contact .contact .contact-items .contact-item .contact-info h1 {
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 5px;
}
#contact .contact .contact-items .contact-item .contact-info h2 {
  font-size: 1.3rem;
  line-height: 2rem;
  font-weight: 500;
}
@media (max-width: 768px) {
  #contact .contact {
    flex-direction: column;
    padding: 100px 0;
    align-items: center;
    justify-content: space-evenly;
    min-width: 20vh;
    display: flex;
  }
  #contact .contact .contact-items {
    flex-direction: column;
    margin: 0;
    padding: 20px;
    width: 100vw;
  }
  #contact .contact .contact-items .contact-item {
    flex-direction: column;
  }
  #contact .contact .contact-items .contact-item .icon {
    width: 80px;
    height: 80px;
  }
  #contact .contact .contact-items .contact-item .icon img {
    object-fit: contain;
  }
  #contact .contact .contact-items .contact-item .contact-info {
    width: 100%;
    text-align: left;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>
