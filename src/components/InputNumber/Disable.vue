<demo>禁用状态</demo>
<template>
  <e-input-number v-model="num" :disabled="true"/>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const num = ref(1);
</script>
