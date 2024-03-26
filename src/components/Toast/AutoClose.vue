<demo>
设置弹窗是否自动关闭
</demo>

<template>
  <e-button level="main" @click="showToast">自动关闭</e-button>
  <e-button level="main" @click="showToast({autoClose:false})">不自动关闭</e-button>
</template>

<script lang='ts' setup>
import {getCurrentInstance} from 'vue';

const {$toast} = getCurrentInstance().appContext.config.globalProperties;

function showToast({autoClose}) {
  $toast({
    message: '提示信息',
    autoClose
  });
}
</script>
