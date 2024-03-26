<demo>不同区域的加载</demo>
<template>
  <e-button @click="showLoading" v-loading.fullscreen.lock="fullScreen">全屏展示</e-button>
  <e-button @click="showPartialLoading" v-loading="partialArea">区域内展示</e-button>
</template>

<script lang='ts' setup>
import {ref} from 'vue';

const fullScreen = ref(false);
const partialArea = ref(false);

function showLoading() {
  fullScreen.value = true;
  setTimeout(() => {
    fullScreen.value = false;
  }, 2000);
}

function showPartialLoading() {
  partialArea.value = true;
  setTimeout(() => {
    partialArea.value = false;
  }, 2000);
}

</script>
