<template>
  <div id="e-collapseItem">
    <div class="e-collapse-header" @click="toggle()">
      <span class="e-collapse-arrow">
        <svg ref="svgRef">
            <use xlink:href="#icon-arrow-right"></use>
          </svg>
      </span>
      <span>{{ header }}</span>
    </div>
    <div class="e-collapse-content" v-if="isExtend">
      <div class="e-collapse-content-box">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import {defineEmits, defineProps, inject, onUnmounted, ref} from 'vue';
import Mitt from '../../store/mitt.js';

const props = defineProps({
  header: {type: String, required: true},
  itemKey: {type: Number, required: true}
});
const collapseId = inject('collapseId');
const svgRef = ref<HTMLElement>();
const isExtend = ref(false);
Mitt.on(`changeCollapseKey${collapseId}`, listenCollapseKey);

function listenCollapseKey(val) {
  isExtend.value = val.includes(props.itemKey);
  setSvgAngle();
}

function toggle() {
  Mitt.emit(isExtend.value ? `closeCollapse${collapseId}` : `openCollapse${collapseId}`, props.itemKey);
  setSvgAngle();
}

function setSvgAngle() {
  svgRef.value.style.transform = `rotate(${isExtend.value ? 90 : 0}deg)`;
}

onUnmounted(() => {
  Mitt.off(`closeCollapse${collapseId}`);
  Mitt.off(`openCollapse${collapseId}`);
  Mitt.off(`changeCollapseKey${collapseId}`, listenCollapseKey);
});

</script>

<style lang='scss' scoped>
#e-collapseItem {
  border-bottom: 1px solid #d9d9d9;

  .e-collapse-header {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    padding: 12px 16px;
    color: #000000d9;
    line-height: 1.5715;
    cursor: pointer;
    transition: all .3s, visibility 0s;
    background-color: #fafafa;
  }

  .e-collapse-arrow {
    svg {
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-right: 12px;
      vertical-align: -1px;
      transition: transform 0.24s;
    }
  }

  .e-collapse-content {
    color: #000000d9;
    background-color: #fff;
    border-top: 1px solid #d9d9d9;

    .e-collapse-content-box {
      padding: 16px;
    }
  }
}
</style>