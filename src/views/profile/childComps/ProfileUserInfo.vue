<template>
  <div class="profile">
    <div class="user-info">
      <div class="user-icon">
        <img src="~assets/img/profile/xiaofu.png" alt="">
      </div>
      <div class="text-info">
        <p>用户_luoyi1222</p>
        <span>罗衣是一个专业的小众服饰平台</span>
        <div>
          关注 0 | 粉丝 0
        </div>
      </div>
    </div>
    <div class="user-tool">
      <div>
        <img src="~assets/img/profile/star.png" alt="">
        <p>收藏</p>
      </div>
      <div>
        <img src="~assets/img/profile/send.png" alt="">
        <p>订阅店铺</p>
      </div>
      <div>
        <img src="~assets/img/profile/zuji.png" alt="">
        <p>足迹</p>
      </div>
      <div>
        <img src="~assets/img/profile/qianbao.png" alt="">
        <p>零钱￥0.00</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileUserInfo"
}
</script>

<style scoped>

.profile {
  padding: 5px 5px;
}

.user-info {
  display: flex;

}

.user-icon {
  overflow: hidden;
  border-radius: 50%;
  width: 70px;
  height: 70px;

}

.user-icon img {
  width: 100%;
}

.text-info {
  padding-left: 10px;
}

.text-info p {
  padding-top: 5px;
  padding-bottom: 3px;
  color: #000000;
  font-weight: 550;
}

.text-info span {
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 7px;
  color: #c5c5c5;
}

.text-info div {
  font-size: 13px;
}

.user-tool {
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
  font-size: 8px;
}

.user-tool div {
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-tool img {
  width: 24px;
  height: 24px;
  margin-bottom: 7px;
}
</style>
