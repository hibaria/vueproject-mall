<template>
  <mt-swipe class="swiper">
    <mt-swipe-item
      v-for="(item, key) in banners"
      :key="key"
      class="swiper-item"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  components: {
    Swipe,
    SwipeItem,
  },
};
</script>

<style scoped>
.swiper {
  height: 200px;
}
.swiper-item a img{
  width: 100%;
  height: 100%;
}
</style>
