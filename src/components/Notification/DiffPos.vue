<demo>自定义消息弹出的位置</demo>
<template>
  <e-button @click="open1">Top Right</e-button>
  <e-button @click="open2">Bottom Right</e-button>
  <e-button @click="open3">Bottom Left</e-button>
  <e-button @click="open4">Top Left</e-button>
</template>

<script lang="ts" setup>
import Notify from '../../lib/Notification/notify';

const open1 = () => {
  Notify({
    title: 'Custom Position',
    message: 'I\'m at the top right corner'
  });
};

const open2 = () => {
  Notify({
    title: 'Custom Position',
    message: 'I\'m at the bottom right corner',
    position: 'bottom-right'
  });
};

const open3 = () => {
  Notify({
    title: 'Custom Position',
    message: 'I\'m at the bottom left corner',
    position: 'bottom-left'
  });
};

const open4 = () => {
  Notify({
    title: 'Custom Position',
    message: 'I\'m at the top left corner',
    position: 'top-left'
  });
};
</script>