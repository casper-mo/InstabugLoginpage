<template>
  <div class="home">
    <h1>Welcome {{ userEmail }}</h1>
    <button @click="logout">logout</button>
  </div>
</template>

<script>
// @ is an alias to /src
const email = JSON.parse(localStorage.getItem("user"));
export default {
  name: "LoginForm",
  data() {
    return { userEmail: email };
  },
  methods: {
    logout: function () {
      localStorage.removeItem("user");
      this.$router.replace("/login");
    },
  },
  mounted: function () {
    if (!localStorage.getItem("user")) {
      this.$router.replace("/login");
    }
  },
};
</script>
<style lang="scss">
@import "@/sass/home.scss";
</style>
