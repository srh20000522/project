<template>
  <div class="home">
    <header>
      <div class="content clearfix">
        <router-link to="" class="logo fl">
          <img src="@/images/logo.png" alt="" />
        </router-link>
        <ul class="header-nav fl">
          <li>
            <router-link to="/index" active-class="nav-active"
              >首页</router-link
            >
          </li>
          <li>
            <router-link to="songlist" active-class="nav-active">歌单</router-link>
          </li>
          <li>
            <router-link to="Singer" active-class="nav-active">歌手</router-link>
          </li>
          <li style="width: 26px">
            <router-link to="" active-class="nav-active">VIP</router-link>
          </li>
          <li>
            <router-link to="" active-class="">音乐盒</router-link>
          </li>
          <li>
            <router-link to="" active-class="nav-active">客户端</router-link>
          </li>
          <li>
            <router-link to="/Musician" active-class="nav-active"
              >音乐人入驻</router-link
            >
          </li>
        </ul>
        <div class="header-right fr">
          <div class="search-box fl">
            <van-search
              v-model="value"
              placeholder="请输入歌名、歌词、歌手或专辑"
            />
          </div>
          <div class="login-no fl">
            <span>登录</span>
            <span> / </span>
            <span>注册</span>
          </div>
        </div>
      </div>
    </header>
    <!-- 组件主体 -->
    <router-view></router-view>
    <!-- 尾部 -->
    <Footer></Footer>
  </div>
</template>

<script>

import Footer from '@/views/Footer'

export default {
  name: "Home",
  data() {
    return {
      value: "",
    };
  },
  components: {
     Footer
  },
};
</script>
<style scoped>
header {
  height: 80px;
  background: #fff;
  box-shadow: 0 2px 10px 0 rgb(52 52 52 / 10%);
}
.logo {
  margin-top: 20px;
}
.logo img {
  width: 120px;
  height: 40px;
}
.header-nav {
  display: flex;
  margin-left: 40px;
}
.header-nav li {
  margin: 0 13px;
}
.header-nav a {
  font-size: 16px;
  display: block;
  color: #909399;
  height: 80px;
  line-height: 80px;
  border-bottom: 1px solid transparent;
  cursor: pointer;
}
.header-nav a.nav-active {
  border-color: #000;
  color: #000;
  font-weight: 600;
}
.header-nav a:hover {
  color: #000;
  font-weight: 600;
}
.search-box {
  margin-right: 30px;
}
.van-search {
  padding: 0;
  width: 320px;
  height: 40px;
  margin-top: 20px;
}
.home .van-field__left-icon {
  display: none;
}
.home .van-field__right-icon {
  color: #333;
  padding-right: 10px;
}
.home .van-field__right-icon .van-icon-search {
  font-size: 24px;
}
.login-no {
  cursor: pointer;
  line-height: 40px;
  color: #606266;
  margin-top: 20px;
  font-size: 14px;
  word-spacing: 1px;
  font-weight: 400;
}
</style>
