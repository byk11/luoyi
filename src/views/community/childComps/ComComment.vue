<template>
  <div class="content">
    <div class="info-user">
      <img :src="commentInfo.userIcon" alt="">
      <span>{{commentInfo.userName}}</span>
      <p>{{commentInfo.userInfo}}</p>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.text}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.time | showDate}}</span>
<!--        <span>{{commentInfo.style}}</span>-->
      </div>
      <div class="info-imgs-bar">
        <div class="info-imgs" v-for="(item, index) in commentInfo.images">
          <img :src="item">
        </div>
      </div>
      <div class="total-comment">
        &lt;查看全部评论&gt;
      </div>
      <div class="footer">
        <div class="comment">
          <img src="~assets/img/comment/message.png" alt="">
          <span>点击评论</span>
        </div>
        <div class="good">
          <img src="~assets/img/comment/good1.png" alt="">
          <p>5</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from "@/common/utils";

export default {
  name: "ComComment",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate(value) {
      // 1.将时间错转成date对象
      const date = new Date(value * 1000)

      // 2.将对象格式话
      return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
    }
  }
}
</script>

<style scoped>

.content {
  background-color: #ffffff;
  margin-top: 10px;
  border-radius: 12px;
}

.info-user {
  padding: 10px 0 5px;
}

.info-user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}

.info-user span {
  position: relative;
  font-size: 11px;
  top: -22px;
  margin-left: 6px;
}

.info-user p {
  position: relative;
  font-size: 9px;
  color: #b5b5b5;
  top: -17px;
  margin-left: 46px;
}

.info-detail {
  padding: 0 5px 15px;
}

.info-detail p {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}

.info-detail .info-other {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}

.info-other .date {
  margin-right: 8px;
}

.info-imgs-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.info-imgs {
  margin-top: 10px;
  width: 95px;
  height: 95px;
  overflow: hidden;
  border-radius: 12px;
}

.info-imgs img {
  width: 95px;
  /*border-radius: 12px;*/
  /*height: 100px;*/
  /*height: 70px;*/
  margin-right: 5px;
}

.footer {
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.footer img {
  width: 20px;
  height: 20px;
  position: relative;

  /*left: 200px;*/

}

.comment {
  background-color: #e5e5e5;
  border-radius: 12px;
  padding-left: 20px;
  font-size: 11px;
  color: #424242;
  height: 20px;
  line-height: 20px;
  display: flex;
  align-items: center;
  width: 200px;
}

.total-comment {
  margin-top: 10px;
  font-size: 11px;
  color: blue;
}

.comment img {
  height: 14px;
  width: 14px;
  margin-right: 5px;
}

.good {
  display: flex;
  align-items: center;
}

.good p {
  font-size: 4px;
  color: #b5b5b5;
}

</style>
