<demo>有位置偏移的通知栏</demo>
<template>
  <e-button @click="open">加上位置偏移</e-button>
</template>

<script lang='ts' setup>
import Notify from '../../lib/Notification/notify';

function open() {
  Notify({
    title: 'Success',
    message: 'This is a success message',
    offset: 100
  });
}

</script>

