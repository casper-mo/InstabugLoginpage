<template>
  <section class="login__carousel">
    <transition-group name="bounce" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg.url" />
        <h3>{{ currentImg.title }}</h3>
      </div>
    </transition-group>
    <ul class="dots">
      <li
        v-for="item in images"
        :key="item.id"
        v-bind:style="
          item.id === currentImg.id ? { backgroundColor: '#fff' } : {}
        "
        @click="changeHandel(currentImg.id)"
      ></li>
    </ul>
  </section>
</template>

<style lang="scss">
@import "@/sass/carousel";
</style>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      images: [
        {
          id: 1,
          url:
            "https://instabug.com/assets/images/svgs/heroes/Product-overview.svg",
          title: "Accelerate Your Entire Mobule Team Workflow",
        },
        {
          id: 2,

          url:
            "https://instabug.com/assets/images/svgs/heroes/Products-bug-reporting.svg",
          title: "The most compreshensive bug reporting tool for mobile app",
        },
        {
          id: 3,
          url:
            "https://instabug.com/assets/images/svgs/heroes/Products-crash-reporting.svg",
          title: "secure crash reportint with real-time alerts",
        },
      ],
      timer: null,
      currentIndex: 0,
    };
  },

  mounted: function () {
    this.startSlide();
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 5000);
    },

    changeHandel: function (id) {
      this.currentIndex = id;
    },
    next: function () {
      this.currentIndex += 1;
    },
  },

  computed: {
    currentImg() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>

