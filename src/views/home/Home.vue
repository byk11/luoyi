<template>

  <div id="home">
    <home-title-bar class="home-title-bar"></home-title-bar>
    <home-nav-bar class="home-nav"></home-nav-bar>
    <tab-control class="tab-control"
                 :titles="[ '流行', '新款', '精选']"
                 @tabClick="tabClick"
                 ref="tabControl1" v-show="isTabFixed"></tab-control>
    <scroll class="content" ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore">
      <home-swiper :banners="banners"
      @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="[ '流行', '新款', '精选']"
                   @tabClick="tabClick"
                   ref="tabControl"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>

</template>

<script>
import HomeTitleBar from "@/views/home/childComps/HomeTitleBar";
import HomeNavBar from "@/views/home/childComps/HomeNavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";

import TabControl from "@/components/content/tabControl/TabControl";
import NavBar from "components/common/navbar/NavBar";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import {
  getHomeMultidata,
  getHomeGoods
} from "network/home";
import {debounce} from "@/common/utils";

export default {
  name: "Home",
  components: {
    HomeTitleBar,
    HomeNavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    NavBar,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
      ItemImgListenner: null
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
  },
  deactivated() {
    // 1.保存Y值
    this.saveY = this.$refs.scroll.getScrollY();

    // 2.取消全局事件的监听
    this.$bus.$off('itemImgLoad', this.ItemImgListenner)
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata()

    // 2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')


  },
  mounted() {
    // 监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    // 对监听的事件进行保存
    this.ItemImgListenner = () => {
      refresh()
    }
    this.$bus.$on('itemImageLoad', this.ItemImgListenner)

    // 2.获取tabControl的offsetTop
    // 所有的组件都有一个属性$el: 用于获取组件中的元素
  },
  methods: {
    // 事件监听相关的方法

    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControl1.currentIndex = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      // 1. 判断BackTop是否显示
      this.isShowBackTop = (-position.y) > 1000;

      // 2. 决定tabControl是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore() {
      console.log("上拉加载更多");
      this.getHomeGoods(this.currentType)

    },
    swiperImageLoad() {

      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
      console.log(this.$refs.tabControl.$el.offsetTop);
    },
    // 网络请求相关的方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        console.log(res);
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        console.log(res,"res");
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1;

        //  完成了上拉加载更多
        this.$refs.scroll.finishPullUp();
      })
    },


  }

}
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-high-text);

    color: white;

    /*在使用浏览器原生滚动时，为了让导航不跟随一起滚动*/
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }

  .home-title-bar {
    background-color: var(--color-high-text);
  }

  .tab-control {
    position: relative;
    z-index: 9;
    margin-bottom: 10px;
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 88px;
    bottom: 49px;
    left: 0;
    right: 0;
    padding: 10px 5px;
  }

</style>
