<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/home1.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home1_selected.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/shop">
      <img slot="item-icon" src="~assets/img/tabbar/shop.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/shop_selected.png" alt="">
      <div slot="item-text">商城</div>
    </tab-bar-item>
    <tab-bar-item path="/community">
      <img slot="item-icon" src="~assets/img/tabbar/community.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/community_selected.png" alt="">
      <div slot="item-text">社区</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/cart.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/cart_selected.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/center.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/center_selected.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar';
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
