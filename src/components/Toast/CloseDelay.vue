<demo>
设置自动关闭时长
</demo>

<template>
  <e-button level="main" @click="showToast">上方弹出</e-button>
</template>

<script lang='ts' setup>
import {getCurrentInstance} from 'vue';

const {$toast} = getCurrentInstance().appContext.config.globalProperties;

function showToast() {
  $toast({
    message: '提示信息',
    autoCloseDelay: 10
  });
}
</script>
