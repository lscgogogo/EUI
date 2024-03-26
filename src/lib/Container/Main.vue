<template>

  <main class="e-main">
    <slot></slot>
  </main>
</template>

<script lang='ts' setup>

</script>

<style lang='scss' scoped>
.e-main{
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
  padding: 20px;
}
</style>