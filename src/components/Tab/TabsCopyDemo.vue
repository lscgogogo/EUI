<demo>
Tabs示例
</demo>
<template>
  <div>
    <e-tabs v-model:selected="currentSelected">
      <e-tab title="导航1">内容1</e-tab>
      <e-tab title="导航2222">内容2</e-tab>
    </e-tabs>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
const currentSelected = ref('导航1');
</script>