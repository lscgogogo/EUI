<demo>切换箭头</demo>
<template>
  <e-carousel arrow="always">
    <e-carousel-item v-for="item in 5" :key="item">
      <h3 style="text-align: center;vertical-align: middle;">{{ item }}</h3>
    </e-carousel-item>
  </e-carousel>
  <div style="width: 100%;height: 100px;"></div>
  <e-carousel arrow="never">
    <e-carousel-item v-for="item in 5" :key="item">
      <h3 style="text-align: center;vertical-align: middle;">{{ item }}</h3>
    </e-carousel-item>
  </e-carousel>
</template>

<script lang='ts' setup>

</script>

<style lang='scss' scoped>
.e-carousel-item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.e-carousel-item:nth-child(2n) {
  background-color: #99a9bf;
}

.e-carousel-item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>