<demo>
一次只打开一个
</demo>
<template>
  <e-collapse v-model:active-key="activeKey" accordion>
    <e-collapse-item :item-key="4" header="标题1">
      single content
    </e-collapse-item>
    <e-collapse-item :item-key="5" header="标题2">single content</e-collapse-item>
    <e-collapse-item :item-key="6" header="标题3">single content</e-collapse-item>
  </e-collapse>
</template>

<script lang='ts' setup>
import {ref} from 'vue';

const activeKey = ref([4]);
</script>
