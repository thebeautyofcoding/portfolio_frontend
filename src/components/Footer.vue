<template>
  <div class="w-full">
    <div id="footer">
      <div class="footer d-flex justify-center w-full align-items-center">
        <div class="brand">
          <div class="text-2xl text-white">
            He<span class="red">i</span>ner G<span class="red">i</span>ehl
          </div>
        </div>
        <div class="text-white">Your Complete Web Solution</div>
        <div class="social-icon">
          <div class="social-item">
            <a href="#"
              ><img
                src="https://img.icons8.com/bubbles/100/000000/instagram-new.png"
            /></a>
          </div>
          <!-- <div class="social-item">
                    <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/youtube.png"/></a>
                </div> -->
        </div>
        <div class="text-white text-sm">
          &copy; 2021 heiner.tech. All rights reserved
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
#footer {
  display: flex;
  align-items: center;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.9) 0,
    rgba(220, 20, 63, 0.9) 100%
  );
}

span {
  color: red;
}
#footer p {
  color: white;
  font-size: 1.3rem;
}
#footer .footer {
  flex-direction: column;

  padding-bottom: 10px;
}
#footer .footer .social-icon {
  display: flex;
}
#footer .footer h2 {
  color: white;
  font-weight: 500;
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
  margin-top: 10px;
  margin-bottom: 10px;
}
#footer .footer .social-item {
  height: 50px;
  width: 50px;
  margin-bottom: 5px;
}
#footer .footer .social-item img {
  filter: grayscale(1);
  transition: 0.3s ease filter;
}
#footer .footer .social-item img:hover {
  filter: grayscale(0);
}
</style>
