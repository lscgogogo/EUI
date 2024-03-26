<demo>
密码框
</demo>
<template>
  <div>
    <e-input-password v-model:value="textValue" placeholder="password"></e-input-password>
  </div>
</template>

<script lang='ts' setup>
import {ref} from 'vue';

const textValue = ref('');
</script>

