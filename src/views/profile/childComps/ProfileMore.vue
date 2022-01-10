<template>
  <div class="profile-more">
    <div class="com-nav-bar">
      <div slot="center" class="title-com">
        <div v-for="(item, index) in communityList"
             :key="index" slot="center" @click="titleClick(index)"
             class="title-com-item" :class="{active: index === currentIndex}">{{item}}</div>
      </div>
    </div>
    <div class="content">
      <span>这里空空如也~</span>
    </div>
  </div>
</template>

<script>

import NavBar from "@/components/common/navbar/NavBar";



export default {
  name: "ProfileMore",
  components: {
    NavBar
  },
  data () {
    return {
      communityList: ['种草', '衣橱', '动态', '订阅', '喜欢', '文化'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>

.profile-more {
  background-color: #ffffff;
  margin-top: 10px;
  border-radius: 12px;
  height: 80vh;
}

.com-nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100,100,100,0.1);
}

.title-com {
  display: flex;
  font-size: 11px;
  width: 320px;
  justify-content: space-around;
}

.title-com-item {

}

.active {
  font-size: 15px;
  font-weight: 700;
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-high-text);
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc( 100% - 44px );
  width: 100%;
  text-align: center;
  color: #18cbea;
}

</style>
