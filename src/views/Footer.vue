<template>
  <div class="dibu">
    <div class="dibua">
      <div class="dibu-a">
        <p>下载千千客户端</p>
        <div class="dibu-a-a">
          <img src="@/images/1.png" alt="" />
          <img src="@/images/2.png" alt="" />
          <img src="@/images/3.png" alt="" />
          <img src="@/images/4.png" alt="" />
        </div>
      </div>
      <div class="dibu-b">
        <p class="dibu-bp">关于千千音乐</p>
        <div class="dibu-b-a">
          <p>建议反馈</p>
          <p>联系我们</p>
          <p>DMH数字音乐分发平台</p>
          <p>音乐人入驻</p>
        </div>
      </div>
      <div class="dibu-c">
        <p>关注千千音乐</p>
        <div class="dibu-c-a">
          <img src="@/images/5.png" alt="" />
          <img src="@/images/6.png" alt="" />
        </div>
      </div>
    </div>
    <div class="dibub">
      <p>
        Copyright 2018 © .TAIHE MUSIC GROUP. 深圳太乐文化科技有限公司版权所有
      </p>
      <div class="dibub-a">
        <p>信息网络传播视听许可证: 1910523</p>
        <p class="dibub-a-a red">
          <img
            src="http://www.beian.gov.cn/img/new/gongan.png"
            alt=""
          />粤公网安备: 44030502002309号
        </p>
        <p class="red">增值电信业务经营许可证(icp): 粤B2-20180819</p>
        <p class="red">增值电信业务经营许可证（sp): B2-20183486</p>
        <p class="red">网络文化经营许可证号码: 粤网文【2021】0349-058号</p>
        <p class="red">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;出版物经营许可证:
          新出发深零字第0788号
        </p>
        <p class="red">广播电视节目制作许可证: （粤）字第03091号</p>
        <p class="red">营业性演出许可证: 440305120144</p>
        <p class="red">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;举报邮箱:
          jubao@taihe.com
        </p>
        <p class="red">反馈中心</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {},
};
</script>
<style scoped>
.dibua {
  display: flex;
  height: 280px;
  width: 100%;
  background: #282828;
}
.dibu-a {
  padding: 65px 0 0 100px;
}
.dibu-a p {
  font-size: 18px;
  color: #fff;
  margin-bottom: 25px;
}

.dibu-a-a img {
  width: 100px;
  height: 100px;
  margin-right: 10px;
}
.dibu-a-a {
  display: flex;
}
.dibu-b {
  padding: 65px 0 0 50px;
  width: 380px;
}
.dibu-bp {
  font-size: 18px;
  color: #fff;
  margin-bottom: 25px;
}
.dibu-b-a {
  display: flex;
  flex-wrap: wrap;
}
.dibu-b-a p:hover {
  color: red;
}
.dibu-b-a p {
  margin: 0 20px 10px 0;
  color: #919399;
}
.dibu-c {
  padding: 65px 0 0 50px;
  width: 380px;
}
.dibu-c p {
  font-size: 18px;
  color: #fff;
  margin-bottom: 25px;
}
.dibu-c-a {
  display: flex;
}
.dibu-c-a img {
  width: 150px;
  margin-right: 10px;
}

.dibub {
  font-size: 10px;
  text-align: center;
  padding: 30px 0px 30px 100px;
  background: #1f1f1f;
  color: #8a8b93;
}
.dibub-a {
  display: flex;
  flex-wrap: wrap;
}
.dibub-a img {
  width: 16px;
  height: 16px;
  margin-right: 2px;
}
.dibub p {
  margin: 0 20px 5px 0;
  text-align: center;
}
.dibub p:nth-child(1) {
  text-align: center;
}
.dibub-a-a {
  display: flex;
}
.red:hover {
  color: red;
}
</style>