<template>
  <div class="w-full container">
    <div class="form-group">
      <label for="email">Email</label>
      <input
        class="form-control"
        type="email"
        :class="{
          ' is-invalid ': errors.email && submitted,
          ' is-valid ': !errors.email && submitted,
        }"
        v-model="user.email"
        id="email"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
      <div class="valid-feedback" v-if="!errors.email && submitted">
        Looks good!
      </div>

      <div class="invalid-feedback" v-if="errors.email && submitted">
        {{ errors.email[0] }}
      </div>
    </div>
    <div class="form-group">
      <label for="username">Username</label>
      <input
        class="form-control"
        type="email"
        :class="{
          'form-control is-invalid ': errors.username && submitted,
          'form-control is-valid ': !errors.username && submitted,
        }"
        v-model="user.username"
        id="username"
        aria-describedby="emailHelp"
        placeholder="Enter username"
      />
      <div class="valid-feedback" v-if="!errors.username && submitted">
        Looks good!
      </div>

      <div class="invalid-feedback" v-if="errors.username && submitted">
        {{ errors.username[0] }}
      </div>
    </div>

    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        class="form-control"
        type="password"
        :class="{
          'form-control is-invalid ': errors.password && submitted,
          'form-control is-valid ': !errors.password && submitted,
        }"
        v-model="user.password"
        id="exampleInputPassword1"
        placeholder="Password"
      />
      <div class="valid-feedback" v-if="!errors.password && submitted">
        Looks good!
      </div>

      <div class="invalid-feedback" v-if="errors.password && submitted">
        {{ errors.password[0] }}
      </div>
    </div>
    <div class="form-group">
      <label for="confirmPassword">Confirm Password</label>
      <input
        class="form-control"
        type="password"
        :class="{
          'form-control is-invalid ': errors.confirmPassword && submitted,
          'form-control is-valid ': !errors.confirmPassword && submitted,
        }"
        v-model="user.confirmPassword"
        id="confirmPassword"
        placeholder="Confirm Password"
      />
      <div class="valid-feedback" v-if="!errors.confirmPassword && submitted">
        Looks good!
      </div>

      <div class="invalid-feedback" v-if="errors.confirmPassword && submitted">
        {{ errors.confirmPassword }}
      </div>
    </div>

    <button @click="onClick" class="btn btn-primary mt-3">Register</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          username: "",
          email: "",
          password: "",
          submitted: false,
          password_confirm: "",
        },
        errors: {
          username: null,
          email: null,
          password: null,
          confirmPassword: null,
        },
      };
    },
    computed: {
      buttonEnabled() {
        return this.username !== "" && this.email !== "" && this.password !== "";
      },
    },
    methods: {
      async onClick() {
        this.errors = {};
        this.errors.email = null;
        this.errors.password = null;
        this.errors.username = null;
        this.errors.confirmPassword = null;
        this.errors.usernameAlreadyExistent = null;

        this.errors.confirmPassword = null;
        this.submitted = false;
        const data = {
          username: this.user.username,
          email: this.user.email,
          password: this.user.password,
        };

        const res = await this.$store.dispatch("register", data).catch((err) => {
          this.submitted = true;

          if (err.response) this.errors = err.response.data.errors;
        });
        if (this.user.password !== this.user.confirmPassword) {
          this.errors.confirmPassword = "Passwords do not match";
        }
        this.submitted = true;
        if (
          this.errors.email === null &&
          this.errors.username === null &&
          this.errors.password === null &&
          this.errors.confirmPassword === null
        )
          this.$router.push("/");
      },
    },
  };
</script>

<style>
</style>
