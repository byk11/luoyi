<template>
  <div class="login">
    <video width="100%" height="100%" class="video" autoplay loop muted>
      <source src="~assets/video/video.mp4" type="video/mp4" ></source>
      当前浏览器不支持 video直接播放，点击这里下载视频: <a href="myvideo.webm">下载视频</a>
    </video>
    <login-box @login="login"></login-box>
  </div>
</template>

<script>

import LoginBox from "@/views/login/childComps/LoginBox";
import {loginRequest} from "@/network/login";


export default {
  name: "Login",
  components: {
    LoginBox
  },
  data() {
    return {

    }
  },
  methods: {
    login(userInfo) {
      loginRequest({
        url: '/login',
        method: "post",
        data: {
          name: userInfo.username,
          password: userInfo.password
        },

      }).then(successResponse => {
          if (successResponse.data.code === 0) {
            this.$router.replace({path: '/home'})
          } else {
            this.$toast.show('登录失败', 1500)
          }
        })
        .catch(failResponse => {
          this.$toast.show('登录失败', 1500)
        })
    }
  }
}
</script>

<style scoped>

.login {
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: #2e2e2e;
}

</style>
