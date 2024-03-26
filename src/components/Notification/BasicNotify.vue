<demo>基础用法</demo>
<template>
  <e-button @click="autoClose">自动关闭</e-button>
  <e-button @click="keepOpen">不自动关闭</e-button>
</template>

<script lang='ts' setup>
import Notify from '../../lib/Notification/notify';

function autoClose() {
  Notify({
    title: '自动关闭',
    message: 'simple message',
  });
}

function keepOpen() {
  Notify({
    title: '不自动关闭',
    message: 'simple message',
    duration: 0
  });
}
</script>

