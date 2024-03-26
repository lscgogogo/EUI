<demo>
可选项目数量的限制
</demo>
<template>
  <e-check-box-group v-model="checkedCities" :min="2" :max="4">
    <e-check-box v-for="city in cities" :key="city" :label="city">
      {{ city }}
    </e-check-box>
  </e-check-box-group>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const checkedCities = ref(['Shanghai', 'Beijing']);
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen', 'ChengDu'];
</script>

