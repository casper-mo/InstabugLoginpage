<template>
  <div class="login">
    <Carousel />
    <LoginForm />
  </div>
</template>


<script>
import LoginForm from "@/components/LoginForm/LoginForm.vue";
import Carousel from "@/components/Carousel/Carousel.vue";
export default {
  name: "Login",
  components: {
    LoginForm,
    Carousel,
  },
  mounted: function () {
    document.title = "Login | instabug";
    if (localStorage.getItem("user")) {
      this.$router.replace("/welcome");
    }
  },
};
</script>
<style lang="scss">
@import "@/sass/login";
</style>