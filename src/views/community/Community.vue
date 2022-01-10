<template>
  <div id="community">
    <com-nav-bar></com-nav-bar>
    <scroll class="scroll">
      <com-comment :comment-info="commentInfo"></com-comment>
      <com-comment :comment-info="commentInfo"></com-comment>
    </scroll>
  </div>
</template>

<script>
import ComNavBar from "@/views/community/childComps/ComNavBar";
import Scroll from "@/components/common/scroll/Scroll";
import ComComment from "@/views/community/childComps/ComComment";


export default {
  name: "Community",
  components: {
    ComNavBar,
    Scroll,
    ComComment
  },
  data() {
    return {
      commentInfo: {
        userName: "Chelsea",
        userIcon: "https://img2.baidu.com/it/u=3253909034,549909825&fm=15&fmt=auto",
        text: "这件衣服真好看",
        images: [
          "https://img0.baidu.com/it/u=1264816884,4108533793&fm=26&fmt=auto",
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202004%2F22%2F20200422122502_hcmdk.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642751840&t=51ef25758770bca619d0ca83bf6efe80",
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhanfuw.oss-cn-zhangjiakou.aliyuncs.com%2Fwp-content%2Fuploads%2F2020%2F03%2F1a3a675464beaa.jpg&refer=http%3A%2F%2Fhanfuw.oss-cn-zhangjiakou.aliyuncs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642751857&t=2bd2c5789446d8236ecbed7abbbd022b",
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F7275655245%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642751886&t=842bb1808ea4fc553b04cc1d72725c1d"
        ],
        time: 1640158443.814,
        userInfo: "汉服yyds！"
      }
    }
  }
}
</script>

<style scoped>

#community {
  background-color: #f5f5f5;
  /*background-color: #f3ffff;*/
}


.scroll {
  height: calc( 100vh - 49px - 44px );
  overflow: hidden;
  padding: 2px 3px;
}


</style>
