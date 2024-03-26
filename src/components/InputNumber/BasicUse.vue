<demo>基本用法</demo>
<template>
  <e-input-number v-model="num" :min="1" :max="5" @change="handleChange"></e-input-number>
</template>
<script lang="ts" setup>
import {ref} from 'vue';

const num = ref(1);
const handleChange = (value: number,val2) => {
  console.log('new',value);
  console.log('old',val2);
};
</script>