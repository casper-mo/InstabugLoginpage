<template>
  <router-view />
</template>
<script>
export default {
  mounted: function () {
    this.$router.replace("/login");
  },
};
</script>
<style lang="scss">
@import "@/sass/global";
</style>
