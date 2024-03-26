<template>
  <div id="e-loading-mask" v-if="showMask" :style="computedStyle">
    <div class="e-loading-spinner">
      <div class="e-loading-icon">
        <i v-if="svg" v-html="svg"></i>
        <i v-else>
          <svg>
            <use xlink:href="#icon-loading"></use>
          </svg>
        </i>
      </div>
      <p class="e-loading-text"> {{ text }}</p></div>
  </div>
</template>

<script lang='ts' setup>
import {computed, ref} from 'vue';
const props = defineProps({
  text: {type: String, 'default': ''},
  background: {type: String, 'default': ''},
  svg: {type: String, 'default': ''}
});
const showMask = ref(true);
const computedStyle = computed(() => {
  return {
    'background': props.background
  };
});

function close() {
  showMask.value = false;
}

</script>

<style lang='scss' scoped>
#e-loading-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2030;
  background: rgba(255, 255, 255, 0.9);
  transition: opacity 0.3s;
  width: 100%;
  height: 100%;

  .e-loading-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .e-loading-text {
    color: #409eff;
  }


}
</style>

<style lang="scss">
.e-loading-icon {

  svg {
    width: 24px;
    height: 24px;
    fill: #409eff;
    animation: loading-rotate 2s linear infinite;
  }

}

@keyframes loading-rotate {
  0% {
    rotate: 0deg;
  }
  50% {
    rotate: 180deg;
  }
  100% {
    rotate: 360deg;
  }
}
</style>