<demo>
多选框组
</demo>
<template>
  <e-check-box-group v-model="checkList">
    <e-check-box label="Option A"/>
    <e-check-box label="Option B"/>
    <e-check-box label="Option C"/>
    <e-check-box label="disabled" disabled/>
    <e-check-box label="selected and disabled" disabled/>
  </e-check-box-group>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const checkList = ref(['selected and disabled', 'Option A']);
</script>