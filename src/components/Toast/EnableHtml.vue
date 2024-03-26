<demo>
支持HTML
</demo>

<template>
  <e-button level="main" @click="showToast">点击弹出</e-button>
</template>

<script lang='ts' setup>
import {getCurrentInstance} from 'vue';

const {$toast} = getCurrentInstance().appContext.config.globalProperties;

function showToast() {
  $toast({
    message: `<p style="color: red;">一探究竟</p>`,
    enableHtml: true
  });
}
</script>
