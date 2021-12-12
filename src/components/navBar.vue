<template>
  <div id="" class="first_index_bar">

    <div class="index_bar">
      <!-- LOGO和搜索框 -->
      <div id="" class="icon_bar">
        <div id="" class="icon">
          <!-- <img src="" > -->
        </div>
        <div id="serchBox">
          <input type="text" name="" id="serch" value="" placeholder="  搜索"/>
          <img src="../img/serch.png" id="serchImg">
        </div>
      </div>
      <!-- 图片导航栏 -->
      <div id="" class="index_tool_box" @mouseover="indexEnter($event)" @mouseout="indexLeave($event)">
        <div id="p" class="indexIconBar">
          <img src="../img/home.png" class="indexIcon">
        </div>
        <div id="p" class="indexIconBar">
          <img src="../img/shop.png" class="indexIcon" style="width: 31px;height: 28px;">
        </div>
        <div id="p" class="indexIconBar">
          <img src="../img/book.png" class="indexIcon" style="width: 36px;height: 33px; margin-top: 17px;">
        </div>
        <div id="p" class="indexIconBar">
          <img src="../img/user.png" class="indexIcon" style="width: 24px; height: 22px;">
        </div>
      </div>
      <!-- 图片设置栏 -->
      <div id="" class="index_tool_r_box" @mouseover="indexEnter($event)" @mouseout="indexLeave($event)">
        <div id="p" class="rindexIconBar" >
          <img src="../img/back.png" class="rindexIcon" >
        </div>
        <div id="p" class="rindexIconBar" >
          <img src="../img/setting.png" class="rindexIcon" >
        </div>
        <div id="p" class="rindexIconBar">
          <img src="../img/cloud.png" class="rindexIcon" >
        </div>
        <div id="p" class="rindexIconBar" >
          <img src="../img/learn.png" class="rindexIcon" style="width: 30px; height: 26px;">
        </div>

      </div>
    </div>
    <div id="" style="height: 1px; width: 100%;">

    </div>
  </div>
</template>

<script>
export default {
  name: "navBar"
}
</script>

<style scoped>

</style>