<demo>基础多选</demo>
<template>
  <div class="m-4">
    <p>default</p>
    <e-select
        v-model="value1"
        multiple
        placeholder="Select"
        style="width: 240px"
    >
      <e-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
      />
    </e-select>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const value1 = ref([]);
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
