<template>
  <div id="home">
    <!-- <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar> -->
    <mt-header title="购物街" class="home-nav"></mt-header>

    <mt-swipe class="swiper">
      <!-- <mt-swipe-item v-for="(item, key) in banners" :key="key">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </mt-swipe-item> -->
      <mt-swipe-item v-for="(item, key) in banners" :key="key" class="swiper-item">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
import { Swipe, SwipeItem } from "mint-ui";
import { Header } from "mint-ui";
export default {
  name: "Home",
  data() {
    return {
      banners: [], //轮播图
      recommends: [], //好物推荐图
    };
  },
  components: {
    NavBar,
    Swipe,
    SwipeItem,
    Header,
  },
  created() {
    // 请求多个数据
    var _this = this;
    getHomeMultidata().then((res) => {
      _this.banners = res.data.banner.list;
      _this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  height: 44px;
}
.swiper {
  height: 200px;
}
.swiper-item a img{
  width: 100%;
  height: 100%;
}
</style>
