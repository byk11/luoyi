<template>
  <nav-bar class="home-nav">

    <div slot="center" class="center">
      <search slot="center" class="home-search"></search>
    </div>

  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Search from "@/components/common/search/Search";

export default {
  name: "HomeNavBar",
  components: {
    NavBar,
    Search
  }
}
</script>

<style scoped>

.home-nav {
  height: 44px;
  line-height: 44px;
  display: flex;
  /*padding-left: 40px;*/
}

.center {
  display: flex;
  justify-content: space-around;
}

.home-search {
  width: 80%;

}



</style>
