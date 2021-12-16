<template>
  <div class="absolute w-full">
    <div class="contact justify-content-evenly flex flex-col">
      <div>
        <h1 class="section-title font-bold text-2xl justify-center flex mb-3">
          Contact Info
        </h1>
      </div>
      <div class="contact-items d-flex justify-evenly">
        <div class="contact-item card p-2 rounded-xl shadow">
          <div class="icon">
            <img src="https://img.icons8.com/bubbles/100/000000/phone.png" />
          </div>
          <div class="contact-info">
            <h1>Phone</h1>
            <h2>mobile: +49159/01645957</h2>
            <h2></h2>
          </div>
        </div>
        <div class="contact-item card p-2 rounded-xl shadow">
          <div class="icon cursor-pointer" @click="onClick">
            <img
              src="https://img.icons8.com/bubbles/100/000000/apple-mail.png"
            />
          </div>
          <div class="contact-info">
            <h2>Write an email to me</h2>
            <h2></h2>
          </div>
        </div>
        <div class="contact-item card p-2 rounded-xl shadow">
          <div class="icon">
            <img
              src="https://img.icons8.com/bubbles/100/000000/worldwide-location.png"
            />
          </div>
          <div class="contact-info">
            <h1>Address</h1>
            <h2>Heiner Giehl</h2>
            <h2>Siemensstraße 15</h2>
            <h2>44147 Dortmund</h2>
          </div>
        </div>
      </div>
    </div>
    <Modal :modalActive="showModal"
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
  import { ElNotification } from "element-plus";
  import Modal from "./Modal.vue";
  export default {
    computed: {
      showModal() {
        return this.$store.state.portfolios.showPortfolioDialog;
      },
    },
    components: {
      Modal,
    },
    data() {
      return {
        message: "",
        subject: "",
        email: "",
      };
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
  };
</script>

<style scoped >
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
