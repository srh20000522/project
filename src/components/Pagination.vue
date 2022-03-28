<template>
  <el-pagination
    :page-size="20"
    :pager-count="11"
    layout="prev, pager, next"
    :total="900"
    background
  >
  </el-pagination>
</template>

<script>
export default {};
</script>

<style scoped>
.el-pagination {
   text-align: center;
   margin: 50px 0;
}
</style>