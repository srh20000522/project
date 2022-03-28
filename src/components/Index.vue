<template>
  <div class="index">
    <div class="content page-main">
      <div class="carousel-box mod">
        <el-carousel
          :interval="4000"
          type="card"
          height="300px"
          indicator-position="none"
        >
          <el-carousel-item v-for="item in 6" :key="item">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="tag-box clearfix mod">
        <ul class="tag-box-left fl">
          <li><router-link to="">流行</router-link></li>
          <li><router-link to="">摇滚</router-link></li>
          <li><router-link to="">民谣</router-link></li>
          <li><router-link to="">电子</router-link></li>
          <li><router-link to="">影视原声</router-link></li>
          <li><router-link to="">ACG</router-link></li>
          <li><router-link to="">新世纪</router-link></li>
          <li><router-link to="">爵士</router-link></li>
          <li><router-link to="">古典</router-link></li>
          <li><router-link to="">乡村</router-link></li>
          <li><router-link to="">说唱</router-link></li>
        </ul>
        <router-link to="" class="more fr">更多</router-link>
      </div>
      <div class="songlist-box mod songs1">
        <div class="mod-header clearfix">
          <h2 class="title fl">秀动发行</h2>
          <router-link to="" class="more fr">更多</router-link>
        </div>
        <el-carousel indicator-position="outside" :autoplay="false">
          <el-carousel-item v-for="item in 2" :key="item">
            <ul class="albums-list clearfix">
              <li
                class="list-item fl"
                v-for="(subitem, subindex) in list.albums"
                :key="subindex"
              >
                <div class="poster">
                  <div class="bg"></div>
                  <div class="image">
                    <img :src="subitem.images" alt="" />
                  </div>
                </div>
                <div class="info">
                  <div class="title">{{ subitem.title }}</div>
                  <div class="o-info">
                    <p class="name">{{ subitem.name }}</p>
                    <p class="date">发行时间：{{ subitem.date }}</p>
                  </div>
                </div>
              </li>
            </ul>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="songlist-box mod song2">
        <div class="mod-header clearfix">
          <h2 class="title fl">热门歌单</h2>
          <router-link to="" class="more fr">更多</router-link>
        </div>
        <el-carousel indicator-position="outside" :autoplay="false">
          <el-carousel-item v-for="item in 2" :key="item">
            <ul class="albums-list clearfix">
              <li
                class="list-item fl"
                v-for="(subitem, subindex) in list.songs"
                :key="subindex"
              >
                <div class="poster" style="width: 224px; height: 224px">
                  <div class="image">
                    <img :src="subitem.images" alt="" />
                  </div>
                  <div class="play-bar">
                    <span class="el-icon-caret-right"></span>
                  </div>
                </div>
                <div class="info">
                  <div class="title">{{ subitem.title }}</div>
                </div>
              </li>
            </ul>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="mod new-songs">
        <div class="mod-header clearfix">
          <h2 class="title fl">新歌推荐</h2>
          <router-link to="" class="more fr">更多</router-link>
        </div>
        <ul class="albums-list">
          <li
            class="list-item"
            v-for="(item, index) in list.newsongs"
            :key="index"
          >
            <div class="poster" style="width: 120px; height: 120px">
              <div class="bg"></div>
              <div class="image">
                <img :src="item.images" alt="" />
              </div>
            </div>
            <div class="info">
              <div class="title">{{ item.title }}</div>
              <div class="o-info">
                <p class="name">{{ item.name }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="mod singers">
        <div class="mod-header clearfix">
          <h2 class="title fl">热门歌手</h2>
          <router-link to="" class="more fr">更多</router-link>
        </div>
        <ul class="singer-list">
          <li v-for="(item, index) in list.albums" :key="index">
            <img :src="item.images" alt="" />
            <p>{{ item.name }}</p>
          </li>
        </ul>
      </div>
      <div class="mod zhibo">
        <div class="mod-header clearfix">
          <h2 class="title fl">相关直播推荐</h2>
          <p class="fl">你已经被我一个人包围</p>
        </div>
        <ul class="zhibo-list">
          <li v-for="(item, index) in list.zhibo" :key="index">
            <img :src="item.images" alt="" />
            <div class="tag">
              <span></span>
              直播中
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import instance from "@/request/index";
export default {
  name: "Index",
  data() {
    return {
      autoplay: false,
      list: {},
    };
  },
  methods: {
    async getAblums() {
      let { data } = await instance.get("");
      this.list = data;
    },
  },
  created() {
    this.getAblums();
  },
};
</script>
<style scoped>
.mod {
  margin: 30px auto;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.tag-box {
  height: 40px;
}
.tag-box-left li {
  float: left;
  margin-right: 10px;
  color: #606266;
  padding: 0 30px;
  height: 40px;
  line-height: 40px;
  background: #f8f8f8;
  border-radius: 40px;
}
.more {
  color: #909399;
}
.tag-box .more {
  height: 40px;
  line-height: 40px;
}
.index >>> .songs1 .el-carousel__container {
  height: 326px;
}
.index >>> .songs2 .el-carousel__container {
  height: 280px;
}
.mod-header {
  padding-bottom: 30px;
}
.mod-header .title {
  color: #000;
  font-size: 28px;
  line-height: 28px;
}
.mod-header .more {
  height: 28px;
  line-height: 28px;
}
.albums-list .list-item {
  cursor: pointer;
  width: 216px;
  margin: 0 30px 50px 0;
}
.songs2 .albums-list .list-item {
  width: 224px;
  margin-right: 20px;
}
.albums-list .list-item:last-child {
  margin-right: 0;
}
.albums-list .poster {
  position: relative;
  width: 192px;
  height: 192px;
}

.albums-list .poster .bg {
  position: absolute;
  top: 6px;
  right: -24px;
  width: 180px;
  height: 180px;
  background: url(https://static1-qianqian.91q.com/client/img/f412d65.png) 50%
    no-repeat;
  background-size: 100%;
  transition: all 0.3s ease-in-out;
  z-index: -1;
}
.albums-list .poster .image {
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
}
.songs1 .albums-list .poster:hover .bg {
  right: -36px;
}
.albums-list .info {
  margin-top: 18px;
}
.albums-list .list-item .info .title {
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 22px;
}
.albums-list .o-info {
  color: #909399;
}
.albums-list .o-info p {
  margin-top: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.index >>> .songlist-box .el-carousel__item {
  background-color: transparent;
}
.play-bar {
  position: absolute;
  width: 60px;
  height: 60px;
  background: #fff;
  border-radius: 50%;
  left: 50%;
  padding: 0;
  margin-left: -30px;
  top: 50%;
  margin-top: -30px;
  text-align: center;
  line-height: 60px;
  display: none;
}
.play-bar span {
  color: #c89977;
  font-size: 35px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  line-height: 60px;
}
.songs2 .albums-list .poster:hover .play-bar {
  display: block;
}
.songs2 .albums-list .poster:hover .image {
  transform: scale(1.05);
}
.new-songs .albums-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 1200px;
  height: 280px;
  box-sizing: border-box;
}
.new-songs .list-item {
  background: #f7f8f9;
  margin: 10px 0;
  width: 33%;
  box-sizing: border-box;
  height: 120px;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.new-songs .list-item:nth-child(3),
.new-songs .list-item:nth-child(6) {
  margin-right: 0;
}
.new-songs .list-item .bg {
  position: absolute;
  top: 5px;
  right: -16px;
  width: 110px;
  height: 110px;
  background: url(https://static1-qianqian.91q.com/client/img/f412d65.png) 50%
    no-repeat;
  background-size: 100%;
  transition: all 0.3s ease-in-out;
  z-index: 0;
}
.new-songs .list-item .info {
  display: inline-block;
  vertical-align: middle;
  width: calc(100% - 136px);
  padding: 0 36px;
  margin-top: 0;
}
.new-songs .list-item:hover .title {
  color: #e61723;
}
.new-songs .image {
  position: absolute;
}
.new-songs .poster:hover .bg {
  right: -26px;
}
.singer-list {
  margin-top: -20px;
  display: flex;
  justify-content: space-between;
}
.singer-list li {
  margin: 20px 0;
  text-align: center;
  cursor: pointer;
}
.singer-list img {
  width: 175px;
  height: 175px;
  border-radius: 50%;
}
.singer-list p {
  margin-top: 18px;
  font-size: 16px;
  color: #303133;
}
.zhibo .mod-header p {
  color: #909399;
  font-size: 16px;
  margin-left: 20px;
}
.zhibo-list {
  height: 180px;
  display: flex;
  justify-content: space-between;
}
.zhibo-list li {
  width: 285px;
  height: 180px;
  position: relative;
}
.zhibo-list .tag {
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
.zhibo-list .tag span {
  display: inline-block;
  vertical-align: middle;
  width: 6px;
  height: 6px;
  background: #e61723;
  border-radius: 100%;
  margin-right: 4px;
}
</style>