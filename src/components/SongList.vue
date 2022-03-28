<template>
  <div id="songlist">
    <div class="top">
      <div class="list" v-for="(item, index) in songkind" :key="index">
        <div class="title">
          <i :class="item.name"></i>
          <span>{{ item.title }}</span>
        </div>
        <div class="content">
          <span v-for="(sItem, sIndex) in item.list" :key="sIndex">{{
            sItem
          }}</span>
        </div>
      </div>
    </div>
    <div class="list-all">
      <h4 class="list-title">全部歌单</h4>
      <ul class="list-box">
        <li v-for="(item, index) in songlist" :key="index">
          <img :src="item.imgSrc" alt="" />
          <p class="name">{{ item.name }}</p>
        </li>
      </ul>
    </div>
    <Pagination></Pagination>
    <div class="recommend">
      <div class="recommend-title">
        <h3>相关直播推荐</h3>
        <span>你已经被我一个人包围</span>
      </div>
      <ul class="recommend-list">
        <li v-for="(item, index) in recommend" :key="index">
          <img :src="item" alt="" />
          <span>
            <i class="dote"></i>
            直播中
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>
import axios from "axios";
import Pagination from "./Pagination.vue";
export default {
  components: { Pagination },
  name: "SongList",
  data() {
    return {
      songkind: null,
      songlist: null,
      recommend: null,
    };
  },
  methods: {
    async fn() {
      let { data } = await axios.get("http://localhost:3000/songlist");
      console.log(data);
      this.songkind = data.top;
      this.songlist = data.listAll;
      this.recommend = data.recommend;
    },
  },
  created() {
    this.fn();
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
#songlist {
  width: 1200px;
  margin: 30px auto;
}
.top {
  width: 1210px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.list {
  width: 240px;
}
.list:nth-child(1) {
  width: 160px;
}
.title {
  width: 100%;
  text-align: left;
  font-weight: 600;
  margin-bottom: 5px;
  font-size: 14px;
}
.title span {
  margin-left: 5px;
}
.content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.content span {
  display: block;
  width: 64px;
  padding: 0 2px;
  height: 30px;
  line-height: 30px;
  border-radius: 20px;
  background: #f8f8f8;
  text-align: center;
  cursor: pointer;
  margin: 10px 10px 0 0;
  font-size: 13px;
}
.list-title {
  color: #303133;
  font-size: 28px;
  font-weight: 400;
  line-height: 39px;
  margin-top: 55px;
  text-align: left;
}
.list-box {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
.list-box li {
  display: block;
  width: 220px;
  margin: 25px 10px;
  cursor: pointer;
}
.list-box li img {
  width: 100%;
}
.list-box li .name {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 18px;
  font-size: 16px;
}
.recommend-title {
  width: 100%;
  height: 40px;
  margin: 10px 0;
  display: flex;
  align-items: center;
}
.recommend-title h3 {
  font-size: 28px;
  color: #000;
  margin-right: 20px;
}
.recommend-title span {
  color: #909399;
  font-size: 16px;
}
.recommend-list {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.recommend-list li {
  width: 285px;
  height: 180px;
  position: relative;
}
.recommend-list li img {
  width: 100%;
  height: 100%;
}
.recommend-list li span {
  position: absolute;
  left: 16px;
  top: 16px;
  color: #fff;
  font-size: 12px;
  width: 66px;
  height: 24px;
  line-height: 24px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  text-align: center;
}
.dote {
  display: inline-block;
  vertical-align: middle;
  width: 6px;
  height: 6px;
  background: #e61723;
  border-radius: 100%;
  margin-right: 4px;
}
</style>