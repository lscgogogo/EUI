<demo>
复制-编辑文本功能
</demo>
<template>
  <e-typography v-model:content="editContent" editable></e-typography>
  <div style="margin: 24px 0"/>
  <e-typography v-model:content="copyContent" copyable></e-typography>
</template>

<script lang='ts' setup>
import {ref} from 'vue';

const editContent = ref('这是个可编辑文本.');
const copyContent = ref('这是可复制的内容.');
</script>
