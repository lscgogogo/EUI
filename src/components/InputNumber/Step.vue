<demo>步进</demo>
<template>
  <e-input-number v-model="num" :step="2" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(5)
</script>
