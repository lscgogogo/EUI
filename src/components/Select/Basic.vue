<demo>基础用法</demo>
<template>
  <e-select v-model="value" class="m-2" placeholder="Select" size="large">
    <e-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
    ></e-option>
  </e-select>
  <e-select v-model="value" class="m-2" placeholder="Select">
    <e-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
    ></e-option>
  </e-select>
  <e-select v-model="value" class="m-2" placeholder="Select" size="small">
    <e-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
    ></e-option>
  </e-select>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const value = ref('');

const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  }
];
</script>
