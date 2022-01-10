<template>
  <div >
    <nav-bar class="pro-nav">
      <div slot="center" class="profile">
        个人中心
      </div>
      <div slot="right" class="right">
        <img src="~assets/img/profile/setting.png" alt="">
      </div>
    </nav-bar>
  </div>
</template>

<script>

import NavBar from "@/components/common/navbar/NavBar";


export default {
  name: "ProfileNavBar",
  components: {
    NavBar
  }
}
</script>

<style scoped>

.pro-nav {
  position: fixed;
  background-color: #ffffff;
  z-index: 22;
  width: 100%;
}

.profile {
  width: 100%;
}

.right {

}

.right img {
  position: absolute;
  width: 25px;
  height: 25px;
  right: 30px;
  top: 8px;
}

</style>
