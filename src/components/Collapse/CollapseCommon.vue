<demo>
基本使用
</demo>
<template>
  <e-collapse v-model:active-key="activeKey">
    <e-collapse-item :item-key="1" header="标题1">
      上兵伐谋
    </e-collapse-item>
    <e-collapse-item :item-key="2" header="标题2">上兵伐谋</e-collapse-item>
    <e-collapse-item :item-key="3" header="标题3">上兵伐谋</e-collapse-item>
  </e-collapse>
</template>

<script lang='ts' setup>
import {ref} from 'vue';
const activeKey = ref([1]);
</script>
