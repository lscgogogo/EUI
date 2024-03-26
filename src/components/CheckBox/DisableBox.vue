<demo>
禁用状态
</demo>
<template>
  <e-check-box v-model="checked1" disabled>Disabled</e-check-box>
  <e-check-box v-model="checked2">Not disabled</e-check-box>
</template>

<script lang='ts' setup>
import {ref} from 'vue';

const checked1 = ref(false);
const checked2 = ref(true);
</script>

