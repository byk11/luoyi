<template>
  <div>
    <profile-nav-bar :class="{appear: !isAppear}"></profile-nav-bar>
    <scroll class="content" @scroll="contentScroll" :probe-type="3">
      <profile-user-info></profile-user-info>
      <profile-order-bar></profile-order-bar>
      <profile-play-bar></profile-play-bar>
      <profile-service></profile-service>
      <profile-more></profile-more>
    </scroll>
  </div>
</template>

<script>

import ProfileNavBar from "@/views/profile/childComps/ProfileNavBar";
import Scroll from "@/components/common/scroll/Scroll";
import ProfileUserInfo from "@/views/profile/childComps/ProfileUserInfo";
import ProfileOrderBar from "@/views/profile/childComps/ProfileOrderBar";
import ProfilePlayBar from "@/views/profile/childComps/ProfilePlayBar";
import ProfileService from "@/views/profile/childComps/ProfileService";
import ProfileMore from "@/views/profile/childComps/ProfileMore";

export default {
  name: "Profile",
  components: {
    ProfileNavBar,
    Scroll,
    ProfileUserInfo,
    ProfileOrderBar,
    ProfilePlayBar,
    ProfileService,
    ProfileMore
  },
  data() {
    return {
      isAppear: false
    }
  },
  methods: {
    contentScroll(position) {
      // console.log(position.y);
      this.isAppear = (-position.y) > 96
    }
  }
}
</script>

<style scoped>

.content {
  background-color: #e9e9e9;
  padding: 5px 5px;
  height: calc( 100vh - 49px );
  overflow: hidden;
  /*height: 100vh;*/
}


.appear {
  display: none;
}


</style>
