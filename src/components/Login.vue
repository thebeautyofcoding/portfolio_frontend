<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card shadow">
          <div class="card-header">Login</div>
          <div class="card-body">
            <form class="form-horizontal" method="post" action="#">
              <div class="form-group">
                <label for="email" class="cols-sm-2 control-label"
                  >Your Email</label
                >
                <div class="cols-sm-10">
                  <div class="input-group">
                    <span class="input-group-addon"
                      ><i class="fa fa-envelope fa" aria-hidden="true"></i
                    ></span>
                    <input
                      v-model="email"
                      type="text"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Enter your Email"
                    />
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="password" class="cols-sm-2 control-label"
                  >Password</label
                >
                <div class="cols-sm-10">
                  <div class="input-group">
                    <span class="input-group-addon"
                      ><i class="fa fa-lock fa-lg" aria-hidden="true"></i
                    ></span>
                    <input
                      v-model="password"
                      type="password"
                      class="form-control"
                      name="password"
                      id="password"
                      placeholder="Enter your Password"
                    />
                  </div>
                </div>
              </div>

              <div class="form-group">
                <button
                  @click="login"
                  type="button"
                  class="btn btn-primary btn-lg btn-block login-button mt-3"
                >
                  Login
                </button>
              </div>
              <div class="login-register">
                <a href="index.php">Not registered yet?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      async login() {
        const res = await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
        if ((res.status = 200)) this.$router.push("/");
      },
    },
  };
</script>

<style>
</style>
