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

                <div class="text-red-500 mt-2">{{ error }}</div>
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
        error: "",
      };
    },
    beforeRouteEnter(to, from, next) {
      next((vm) => {
        console.log(from);
        return (vm.prevRoute = from);
      });
    },
    methods: {
      async login() {
        const res = await this.$store
          .dispatch("login", {
            email: this.email,
            password: this.password,
          })
          .catch((err) => {
            this.error = err.response.data.message;
          });

        if (res && res.status === 200) {
          if (this.prevRoute.path === "/projects") {
            this.$router.push("/projects");
          } else {
            this.$router.push("/");
          }
        }
      },
    },
  };
</script>

<style>
</style>
