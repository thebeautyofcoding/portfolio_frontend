<template>
  <div id="about">
    <div class="about container">
      <div class="col-left">
        <div class="about-img">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img src="../assets/profile.jpg" />
        </div>
      </div>
      <div class="col-right">
        <h2>Highly-passionated Fullstack-Web-Developer</h2>
        <p>
          As someone who loves understanding complex concepts and has a
          scientific background(B.Sc Chemical Biology, TU Dortmund), it was just
          a matter of time to find out how much I love programming. The process
          of using creativity and logical thinking to build complex, functional
          and beautiful web-applications is what I enjoy!
        </p>
        <div class="button-container">
          <div class="snake-border">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
#about .about {
  flex-direction: row;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 20px;
}
#about .about .col-left {
  width: 750px;
  height: 360px;
}
#about .about .col-left .about-img {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 5;
  border: 20px solid white;
}
#about .about .col-left .about-img span {
  transition: 0.5s;
}
#about .about .col-left .about-img::after {
  content: "";
  position: absolute;
  left: -35px;
  top: 15px;
  height: 100%;
  width: 100%;
  border: 7px solid crimson;
  z-index: -1;
}
#about .about .col-right {
  width: 100%;
}
#about .about .col-right h2 {
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 0.7rem;
  margin-bottom: 10px;
}
#about .about .col-right p {
  margin-bottom: 20px;
  text-align: left;
}
#about .about .col-right .cta {
  color: black;
  font-size: 2rem;
}
@media (max-width: 768px) {
  #about .about {
    flex-direction: column-reverse;
  }
  #about .about .col-right {
    text-align: left;
    padding: 30px;
  }
  #about .about .col-right h1 {
    text-align: left;
  }
  #about .about .col-left {
    width: 100%;
    height: 100%;
  }
  #about .about .col-left .about-img {
    position: relative;
    height: 100%;
    width: 100%;
    border: 10px solid white;
  }
  #about .about .col-left .about-img::after {
    content: "";
    position: absolute;
    left: -25px;
    top: 10;
    height: 100%;
    width: 100%;
    border: none;
    z-index: -1;
  }
}
@media (min-width: 1200px) {
  #about .about {
    flex-direction: column;
  }
  #about .about .col-left {
    width: 50%;
    height: auto;
    margin-bottom: 50px;
  }
  #about .about .col-left .about-img {
    position: relative;
    height: 100%;
    width: 100%;
    border: 10px solid white;
  }
}
</style>
