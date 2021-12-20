<template>
  <form>
    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input type="text" class="form-control" v-model="title" id="title" />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">description</label>
      <textarea
        type="text"
        v-model="description"
        class="form-control"
        id="description"
      />
    </div>
    <div class="mb-3">
      <label for="formFile" class="form-label">background_image1</label>
      <input class="form-control" type="file" id="formFile" @change="onBg1" />
    </div>

    <div class="mb-3">
      <label for="formFile" class="form-label">background_image1</label>
      <input class="form-control" type="file" id="formFile" @change="onImg1" />
    </div>

    <div class="mb-3">
      <label for="formFile" class="form-label">tech_stack_logo2</label>
      <input class="form-control" type="file" id="formFile" @change="onImg2" />
    </div>

    <div class="mb-3">
      <label for="formFile" class="form-label">background_image3</label>
      <input class="form-control" type="file" id="formFile" @change="onImg3" />
    </div>

    <button type="submit" class="btn btn-primary" @click="send">Submit</button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        data: {
          bg1: null,
          logo1: null,
          logo2: null,
          logo3: null,
          description: null,
          title: null,
        },
      };
    },
    methods: {
      onImg1(e) {
        this.data.logo1 = e.target.files[0];
      },
      onImg2(e) {
        console.log(e.target.files[0]);
        this.data.logo2 = e.target.files[0];
      },
      onImg3(e) {
        this.data.logo3 = e.target.files[0];
      },
      onBg1(e) {
        this.data.bg1 = e.target.files[0];
      },
      send(e) {
        e.preventDefault();
        const formData = new FormData();

        this.data.title = this.title;

        this.data.description = this.description;

        formData.append("title", this.data.title);
        formData.append("description", this.data.description);
        formData.append("tech_stack_logos1", this.data.logo1);
        formData.append("tech_stack_logos2", this.data.logo2);
        formData.append("tech_stack_logos3", this.data.logo3);
        formData.append("background_image1", this.data.bg1);

        this.$store.dispatch("send", formData);
      },
    },
  };
</script>

<style>
</style>
