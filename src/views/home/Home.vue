<template>
  <div id="home">
    <!-- <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar> -->
    <mt-header title="购物街" class="home-nav"></mt-header>
    <!-- 广告轮播图 -->
    <home-swiper :banners="banners" />
    <home-recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'

import { getHomeMultidata } from "network/home";
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
    Header,
    HomeSwiper,
    HomeRecommendView
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

</style>
