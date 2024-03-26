<demo>
禁用状态
</demo>
<template>
  <e-switch v-model="bool.active" disabled></e-switch>

  <span style="width: 10px; display: inline-block;"></span>

  <e-switch v-model="bool.inactive" disabled></e-switch>
</template>

<script lang='ts' setup>
import {reactive} from 'vue';

const bool = reactive({
  active: true,
  inactive: false
});
</script>
