<template>
  <div class="singer">
    <div class="abc">
      <ul v-for="(item, index) in arr1.zimus" :key="index" class="abc-list">
        <p>全部</p>
        <li>
          <ul class="abc-item">
            <li v-for="(sItem, sIndex) in item" :key="sIndex">{{ sItem }}</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="imger">
      <ul class="imger-list" v-for="(item, index) in arr1.img" :key="index">
        <img :src="item.img" alt="" />
        <p>{{ item.title }}</p>
      </ul>
    </div>
    <div class="name">
      <div class="name-list" v-for="(item, index) in arr1.name" :key="index">
        <ul class="name-item" v-for="(Items, Indexs) in item" :key="Indexs">
          <li>
            {{ Items }}
          </li>
        </ul>
      </div>
    </div>
    <el-pagination background layout="prev, pager, next" :total="1000">
    </el-pagination>

    <div class="box">
    <div class="box-a">
      <p>相关直播推荐</p>
      <p>你已经被我一个人包围</p>
    </div>
    <div class="box-b">
      <img
        src="https://img0.img.9xiu.com/upload/roomimg_web/2022/02/17/10000212736et6x62bnv4_317x317.png"
        alt=""
      />
      <img
        src="https://img01.dmhmusic.com/0206/M00/70/E3/ChR461tM7A6AQ4XqAB-tHmSqUbY306.jpg@w_200,h_200"
        alt=""
      />
      <img
        src="https://img5.img.9xiu.com/upload/roomimg_web/2022/03/04/8713837521221603jh447o0s_317x317.jpg"
        alt=""
      />
      <img
        src="https://img0.img.9xiu.com/upload/roomimg_web/2022/02/17/10000212736et6x62bnv4_317x317.png"
        alt=""
      />
    </div>
  </div>
  </div>
</template>

<script>
import instance from "../request/api";
export default {
  name: "Singer",
  data() {
    return {
      arr1: {}
    };
  },
  components: {},
  methods: {
    async fn() {
       let {data}=await instance.get("/singger")
       this.arr1=data
    },
  },
  created() {
    this.fn();
  },
};
</script>

<style scoped>
.singer {
  padding: 0 160px;
}
.abc {
  margin-top: 40px;
  margin-bottom: 20px;
}
.abc .abc-list {
  display: flex;
}
.abc .abc-list p {
  width: 40px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: #e61723;
  border-radius: 10px;
  margin: 10px 0;
  color: #fff;
  font-size: 11px;
}
.abc .abc-item {
  display: flex;
  flex-wrap: wrap;
}
.abc .abc-item li {
  width: 41px;
  height: 30px;
  font-size: 11px;
  line-height: 30px;
  text-align: center;
  margin: 10px 0;
  border-radius: 10px;
}
.abc .abc-item li:hover {
  background: #e61723;
  color: #fff;
}
.imger {
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 20px;
}
.imger .imger-list {
  margin: 0px 20px;
}
.imger .imger-list img {
  width: 180px;
  height: 180px;
  border-radius: 90px;
}
.imger .imger-list p {
  margin: 20px 0;
  text-align: center;
}
.name {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.name .name-list li {
  margin: 20px 0;
}
.el-pagination{
  margin: 40px 0;
  margin-left: 370px;
}
.box-a {
  display: flex;
  height: 70px;
}
.box-a p {
  line-height: 70px;
}
.box-a p:nth-child(1) {
  font-size: 30px;
}
.box-a p:nth-child(2) {
  font-size: 16px;
  margin: 0 0 0 20px;
  color: #919399;
}
.box-b {
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
}
.box-b img{
  width: 290px;
  height: 200px;
}
</style>