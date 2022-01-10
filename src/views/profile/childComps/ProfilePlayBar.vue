<template>
  <div>
    <profile-tool-bar :tool-list="toolList" :title="title"></profile-tool-bar>
  </div>
</template>

<script>

import ProfileToolBar from "@/components/content/profileToolBar/ProfileToolBar";

export default {
  name: "ProfilePlayBar",
  components: {
    ProfileToolBar
  },
  data() {
    return {
      toolList: [
        {
          img: require('../../../assets/img/profile/cultrue.png'),
          info: '我的圈子'
        },
        {
          img: require('../../../assets/img/profile/mytext.png'),
          info: '我的风向'
        },
        {
          img: require('../../../assets/img/profile/message.png'),
          info: '我的私信'
        },
        {
          img: require('../../../assets/img/profile/more.png'),
          info: '更多好玩'
        }
      ],
      title: "畅玩群风向"
    }
  }
}
</script>

<style scoped>

</style>
