<demo>单独引用</demo>
<template>
  <e-button @click="Success">open1</e-button>
  <e-button @click="Warning">open2</e-button>
  <e-button @click="Info">open3</e-button>
  <e-button @click="Error">open4</e-button>
</template>

<script lang="ts" setup>
import Notify from '../../lib/Notification/notify';

const Success = () => {
  Notify['success']({
    title: 'Custom Position',
    message: 'I\'m at the top right corner'
  });
};

const Info = () => {
  Notify['info']({
    title: 'Custom Position',
    message: 'I\'m at the bottom right corner',
  });
};

const Warning = () => {
  Notify['warning']({
    title: 'Custom Position',
    message: 'I\'m at the bottom left corner',
  });
};

const Error = () => {
  Notify['error']({
    title: 'Custom Position',
    message: 'I\'m at the top left corner',
  });
};
</script>