<demo>动态编辑标签</demo>
<template>
  <e-tag
      v-for="tag in dynamicTags"
      :key="tag"
      class="ml-2"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)"
  >
    {{ tag }}
  </e-tag>
  <e-input
      v-if="inputVisible"
      ref="InputRef"
      v-model:value="inputValue"
      class="ml-2 w-20 my-2"
      size="small"
      @keyup.enter="handleInputConfirm"
      @blur="handleInputConfirm"
  />
  <e-button v-else class="button-new-tag ml-2" size="small" @click="showInput">
    + New Tag
  </e-button>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const inputValue = ref('');
const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3']);
const inputVisible = ref(false);
const InputRef = ref();

const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
};

const showInput = () => {
  inputVisible.value = true;

};

const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value);
  }
  inputVisible.value = false;
  inputValue.value = '';
};
</script>
