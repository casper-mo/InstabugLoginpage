<template>
  <main class="not-found__page">
    <h1>404</h1>
    <h2>404 page not found</h2>
    <p>Sorry, that page doesn't exit. what would you like to do?</p>
  </main>
</template>

<script>
export default {
  name: "404 ",

  mounted: function () {
    document.title = "404 instabug";
  },
};
</script>

<style lang="scss">
@import "@/sass/404.scss";
</style>