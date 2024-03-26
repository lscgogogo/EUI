<demo>
常规用法
</demo>
<template>
  <div>
    <e-input v-model:value="textValue" placeholder="Basic Usage"></e-input>
  </div>
</template>

<script lang='ts' setup>
import {ref} from 'vue';
const textValue = ref('');
</script>

