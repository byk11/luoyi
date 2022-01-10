<template>
  <div>
    <profile-tool-bar :tool-list="toolList" :title="title"></profile-tool-bar>
  </div>
</template>

<script>

import ProfileToolBar from "@/components/content/profileToolBar/ProfileToolBar";



export default {
  name: "ProfileService",
  components: {
    ProfileToolBar
  },
  data() {
    return {
      toolList: [
        {
          img: require('../../../assets/img/profile/cloth.png'),
          info: "洗一洗"
        },
        {
          img: require('../../../assets/img/profile/cycle.png'),
          info: "加入派送"
        },
        {
          img: require('../../../assets/img/profile/sale.png'),
          info: "出租出售"
        },
        {
          img: require('../../../assets/img/profile/serverMode.png'),
          info: "商家模式"
        }
      ],
      title: "平台服务"
    }
  }
}
</script>

<style scoped>

</style>
