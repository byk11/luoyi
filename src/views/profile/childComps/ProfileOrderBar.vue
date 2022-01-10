<template>
  <div class="order">
    <profile-tool-bar :tool-list="toolList" :title="title">
      <p class="orderListR">全部订单 &gt;</p>
    </profile-tool-bar>
  </div>
</template>

<script>
import ProfileToolBar from "@/components/content/profileToolBar/ProfileToolBar";


export default {
  name: "ProfileOrderBar",
  components: {
    ProfileToolBar
  },
  data() {
    return {
      toolList: [
        {
          img: require('../../../assets/img/profile/fukuan.png'),
          info: "待付款"
        },
        {
          img: require('../../../assets/img/profile/fahuo.png'),
          info: "待发货"
        },
        {
          img: require('../../../assets/img/profile/shouhuo.png'),
          info: "待收货"
        },
        {
          img: require('../../../assets/img/profile/clock.png'),
          info: "待寄回"
        },
        {
          img: require('../../../assets/img/profile/tuikuan.png'),
          info: "退款"
        }
      ],
      title: "我的订单"
    }
  }
}
</script>

<style scoped>

</style>
