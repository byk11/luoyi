<template>
  <div class="login-box">
      <div id="" class="loginFont">
        登录界面
      </div>
      <div id="" class="Box">
        <div id="" class="nameFont">
          账号:
        </div>
        <div id="" class="nameTextBar">
          <input type="text" name="" id="" value="" class="nameText" v-model="userInfo.username"/>
        </div>
      </div>
      <div id="" class="Box">
        <div id="" class="nameFont">
          密码:
        </div>
        <div id="" class="nameTextBar">
          <input :type="type" name="" id="" value="" class="namePassword" v-model="userInfo.password"/>
        </div>
        <div id="" class="img">
          <img src="~assets/img/common/close.png" class="passwordImg" v-show="!isShow" @click="show">
          <img src="~assets/img/common/open.png" class="passwordImg" v-show="isShow" @click="show">
        </div>
      </div>
      <div id="" class="Box">
        <div id="" class="buttonl">
          <button type="button" @click="loginClick">登录</button>
        </div>
        <div id="" class="buttonr">
          <button type="button">注册</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "LoginBox",
  data() {
    return {
      isShow: false,
      type: "password",
      userInfo: {
        password: "",
        username: ""
      }
    }
  },
  methods: {
    show() {
      this.isShow = !this.isShow
      if (this.isShow) {
        this.type = "text"
      } else {
        this.type = "password"
      }
    },
    loginClick() {
      console.log(this.userInfo);
      this.$emit("login", this.userInfo)
    }
  }
}
</script>

<style scoped>

.login-box{
  z-index: 50;
  display: flex;
  position: absolute;
  width: 100%;
  height: 50%;
  box-sizing: border-box;
  margin: auto;
  /*background-color: rgba(157, 157, 157, 0.4);*/
  border-radius: 16px;
  padding-top: 40px;
  flex-direction: column;
  /* top: -350px; */
  /* top: 100px; */
}
.loginFont{
  width: 100%;
  height: 80px;
  font-weight: bolder;
  text-align: center;
  font-size: 28px;
  font-family: "eras bold itc";
  color: white;
}

.Box{
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
}

.nameFont{
  font-size: 23px;
  width: 25%;
  height: 100%;
  text-align: right;
  color: white;
}

.nameTextBar{
  width: 75%;
  height: 100%;
}

.nameText, .namePassword{
  border-radius: 8px;
  height: 30px;
  margin-left: 10px;
  width: 200px;
  border-style: none;
}

input {
  outline: none;
}

input:focus{
  border: #53BAFF solid 2px;
}

.buttonl, .buttonr {
  width: 50%;
  height: 100%;
  /*padding: 10px 10px;*/
  padding: 0 5px;
}
.buttonl{
  text-align: right;
}
.buttonr{
  text-align: left;
}
button{
  width: 130px;
  height: 40px;
  border-radius: 12px;
  border-style: none;
  font-size: 20px;
  background-color: rgba(255,255,255,0.5);
}

.passwordImg{
  height: 33px;
  width: 33px;
  position: absolute;
  /*left: 330px;*/
  right: calc( 70% - 190px );
}

</style>
