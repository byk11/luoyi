<template>
  <div class="search-bar">
    <div class="search-icon">
      <img src="~assets/img/common/serch.png" alt="">
    </div>
    <div class="search-text-bar">
      <input type="text" class="search-text" placeholder="请输入商品">
    </div>

    <div class="search-button">
      搜索
    </div>

  </div>
</template>

<script>
export default {
  name: "Search"
}
</script>

<style scoped>

.search-bar {
  display: flex;
  background-color: #ffffff;
  border: 1px solid var(--color-high-text);
  height: 30px;
  line-height: 30px;
  border-radius: 16px;
  margin-top: 7px;
}

.search-icon img {
  width: 30px;
}

.search-text-bar {
  width: 70%;
}

.search-text {
  border-style: none;
  border-left: 1px solid #eeeeee;
  outline: none;
  margin-right: 4px;
  width: 100%;
}

.search-button{
  background-color: var(--color-tint);
  height: 24px;
  border-radius: 12px;
  width: 50px;
  margin-top: 1.5px;
  margin-right: 2px;
}

</style>
