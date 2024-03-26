<demo>
从浮层内关闭
</demo>
<template>
  <e-popover v-model:visible="visible">
    <template #content>
      就是个简单的的数据
      <e-button level="main" @click="close">close</e-button>
    </template>
    <e-button>点我呀</e-button>
  </e-popover>
</template>

<script lang='ts' setup>
import {ref} from 'vue';

const visible = ref(false);

function close() {
  visible.value = false;
}
</script>
