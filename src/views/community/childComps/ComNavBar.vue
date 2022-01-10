<template>
  <nav-bar class="com-nav-bar">
    <div slot="center" class="title-com">
      <div v-for="(item, index) in communityList"
           :key="index" slot="center" @click="titleClick(index)"
           class="title-com-item" :class="{active: index === currentIndex}">{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>

import NavBar from "@/components/common/navbar/NavBar";


export default {
  name: "ComNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      communityList: ['推荐', '热搜', 'Lolita', '汉服', 'JK', 'Cosplay', '旗袍'],
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
}

</style>
