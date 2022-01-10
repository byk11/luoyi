<template>
  <div>
    <nav-bar class="title-bar">
      <div slot="left" class="left">
        <img src="~assets/img/logo/logo.jpg" alt="">
      </div>
      <div slot="center" class="center">
        <div class="title">
          <div class="title-left" @click="leftClick"  :class="{titleL: !this.current}">
            首页
          </div>
          <div class="title-right" @click="rightClick" :class="{titleR: this.current}">
            附近
          </div>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>

import NavBar from "@/components/common/navbar/NavBar";


export default {
  name: "HomeTitleBar",
  components: {
    NavBar
  },
  data() {
    return {
      current: 0
    }
  },
  methods: {
    leftClick() {
      this.current = 0
    },
    rightClick() {
      this.current = 1
    }
  }
}
</script>

<style scoped>

.title-bar {
  height: 44px;
  line-height: 44px;
  display: flex;
  align-items: center;
}

.left {
  display: flex;
  align-items: center;
  padding-left: 5px;
}

.left img {
  width: 40px;
}

.center {
  display: flex;
  margin-right: 40px;
  justify-content: space-around;
}

.title{
  padding: 1px 1px;

  text-align: center;
  border-radius: 16px;
  height: 25px;
  line-height: 25px;
  background-color: #f5f5f5;
  width: 120px;
  display: flex;
}

.title-left, .title-right {
  width: 60px;
  text-align: center;
  border-radius: 16px;
}
.titleL {
  border-right: 2px solid #e5e5e5;
  border-left: 2px solid #e5e5e5;
  background-color: #ffffff;

  color: red;
}

.titleR {
  border-left: 2px solid #e5e5e5;
  border-right: 2px solid #e5e5e5;
  background-color: #ffffff;
  color: red;
}


</style>
