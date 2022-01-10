<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" ref="nav"
        @titleClick="titleClick"></detail-nav-bar>
    <scroll class="content" :probe-type="3"
            ref="scroll" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :param-info="paramInfo" ref="param"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/childComps/DetailParamInfo";
import DetailCommentInfo from "@/views/detail/childComps/DetailCommentInfo";
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";

import Scroll from "@/components/common/scroll/Scroll";
import GoodsList from "@/components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import {getDetail, getRecommend, GoodsInfo, Shop, GoodsParam} from "network/detail";
import {debounce} from "@/common/utils";

export default {
  name: "Detail",
  components: {
    DetailSwiper,
    DetailNavBar,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
    BackTop,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs:[],
      getThemeTopY: null,
      currentIndex: 0,
      isShowBackTop: false,

    }
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid

    // 2. 根据iid请求详情数据
    getDetail(this.iid).then(res => {
      console.log(res);
      const data = res.result
      // 1.获取顶部的轮播图数据
      this.topImages = data.itemInfo.topImages

      // 2.获取商品信息
      this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services);

      // 3.创建店铺信息对象
      this.shop = new Shop(data.shopInfo)

      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo

      // 5.获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      // 6.取出评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }

      // this.$nextTick(() => {
      //   setTimeout(() => {
      //     this.themeTopYs = [];
      //     this.themeTopYs.push(0);
      //     this.themeTopYs.push(this.$refs.param.$el.offsetTop);
      //     this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      //     this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      //     console.log(this.themeTopYs);
      //   }, 2000)

      // })

    })

    // 3.请求推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list

    })

    // 4.给getThemeTopY赋值
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.param.$el.offsetTop - 44);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop -44);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop -44);
      console.log(this.themeTopYs);
    }, 200)
  },
  mounted() {

  },
  updated() {

  },
  destroyed() {

  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    imageLoad() {
      this.$refs.scroll.refresh()
      this.getThemeTopY()
    },
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
    },
    contentScroll(position) {
      this.isShowBackTop = (-position.y) > 1000;

      const positionY = -position.y
      for (let i = 0 ; i < this.themeTopYs.length; i++) {
        if (positionY < this.themeTopYs[i+1]) {
          this.currentIndex = i;
          console.log(this.currentIndex);
          break;
        }
      }
      if (positionY >= this.themeTopYs[this.themeTopYs.length - 1]) {
        this.currentIndex = this.themeTopYs.length - 1;
      }
      this.$refs.nav.currentIndex = this.currentIndex
    },
    addCart() {
      // 1.获取购物车需要展示的商品信息
      const product = {}
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // 2.将商品添加到购物车里
      // this.$store.commit('addCart', product)
      this.$store.dispatch('addCart', product).then( res => {
        console.log(res);
        this.$toast.show(res, 1500)
      })
    }
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 11;
  background-color: #ffffff;
}

.detail-nav {
  position: relative;
  z-index: 11;
  background-color: #ffffff;

}


.content {
  height: calc(100vh - 44px - 58px);
  overflow: hidden;

}
</style>
