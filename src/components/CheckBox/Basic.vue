<demo>
基础用法
</demo>
<template>
  <div>
    <e-check-box v-model="checked1" label="Option 1" size="large"></e-check-box>
    <e-check-box v-model="checked2" label="Option 2" size="large"></e-check-box>
  </div>
  <div>
    <e-check-box v-model="checked3" label="Option 1"/>
    <e-check-box v-model="checked4" label="Option 2"/>
  </div>
  <div>
    <e-check-box v-model="checked5" label="Option 1" size="small"/>
    <e-check-box v-model="checked6" label="Option 2" size="small"/>
  </div>
  <div>
    <e-check-box v-model="checked5" label="Option 1" size="small" disabled/>
    <e-check-box v-model="checked6" label="Option 2" size="small" disabled/>
  </div>
</template>

<script lang='ts' setup>
import {ref} from 'vue';

const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(false);
const checked5 = ref(false);
const checked6 = ref(false);
</script>

