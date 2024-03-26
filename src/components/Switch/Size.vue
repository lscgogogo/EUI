<demo>尺寸</demo>
<template>
  <e-switch v-model="value" size="large" active-text="Open" inactive-text="Close"></e-switch>
  <br/>
  <e-switch v-model="value" active-text="Open" inactive-text="Close"></e-switch>
  <br/>
  <e-switch v-model="value" size="small" active-text="Open" inactive-text="Close"></e-switch>
</template>

<script lang='ts' setup>
import {ref} from 'vue';

const value = ref(false);
</script>
