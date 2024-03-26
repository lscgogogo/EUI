<template>
  <div class="e-switch" :class="switchBoxClasses" @click.stop="toggle">
    <span class="e-switch-label e-switch-label-left" v-if="inactiveText">{{ inactiveText }}</span>
    <button class="e-switch-btn">
      <span></span>
    </button>
    <span class="e-switch-label e-switch-label-right" v-if="activeText">{{ activeText }}</span>
  </div>
</template>

<script lang="ts" setup>
import {computed, defineEmits, ref, watchEffect} from 'vue';

const emits = defineEmits(['update:modelValue', 'change']);
const props = defineProps({
  modelValue: [Boolean, String, Number],
  activeText: {type: String, default: ''},
  inactiveText: {type: String, default: ''},
  disabled: {type: Boolean, default: false},
  size: {type: String, values: ['large', 'small'], default: ''},
  activeValue: {type: [Boolean, String, Number], default: true},
  inactiveValue: {type: [Boolean, String, Number], default: false}
});
const switchActive = ref();
watchEffect(() => {
    switchActive.value = props.modelValue === props.activeValue;
});
const switchBoxClasses = computed(() => {
  return {
    'is-disabled': props.disabled,
    'is-checked': switchActive.value,
    [`e-switch-${props.size}`]: props.size
  };
});
const toggle = () => {
  if (props.disabled) return;
  switchActive.value = !switchActive.value;
  const emitVal = switchActive.value ? props.activeValue : props.inactiveValue;
  emits('update:modelValue', emitVal);
  emits('change', emitVal);

};
</script>

<style lang="scss">
$dh: 32px; // 默认情况高度
$dLineHeight: 20px; //小尺寸下行高
$dhInside: $dLineHeight - 4px;

$lh: 40px; // 大尺寸
$lFontSize: 14px; //大尺寸下字体大小
$lLineHeight: 24px; //大尺寸下行高
$lhInside: $lLineHeight - 4px;


$sh: 24px; // 小尺寸
$sFontSize: 12px; //小尺寸下行高
$sLineHeight: 16px; //小尺寸下行高
$shInside: $sLineHeight - 4px;

.e-switch {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  height: $dh;
  // 是否禁用
  &.is-disabled {
    opacity: 0.6;
    cursor: not-allowed;

    .e-switch-btn {
      cursor: not-allowed;

    }
  }

  // 是否选中
  &.is-checked {
    .e-switch-label {
      color: #409eff;
    }

    .e-switch-btn {
      background: #409eff;

      span {
        left: calc(100% - #{$dhInside} - 2px);
      }
    }

    &.e-switch-large .e-switch-btn span {
      left: calc(100% - #{$lhInside} - 2px);
    }

    &.e-switch-small .e-switch-btn span {
      left: calc(100% - #{$shInside} - 2px);
    }

  }

  //   尺寸大小
  &.e-switch-large {
    height: $lh;

    .e-switch-label {
      font-size: $lFontSize;
      line-height: $lLineHeight;
    }

    .e-switch-btn {
      height: $lLineHeight;
      width: $lLineHeight*2;
      border-radius: $lLineHeight/2;

      span {
        width: $lhInside;
        height: $lhInside;

      }
    }
  }

  &.e-switch-small {
    font-size: 12px;
    line-height: 16px;
    height: $sh;

    .e-switch-label {
      font-size: $sFontSize;
      line-height: $sLineHeight;
    }

    .e-switch-btn {
      height: $sLineHeight;
      width: $sLineHeight*2;
      border-radius: $sLineHeight/2;

      span {
        width: $shInside;
        height: $shInside;
      }
    }
  }
}

.e-switch-label {
  transition: all 0.2s;
  display: inline-block;
  font-weight: 500;
  vertical-align: middle;
  color: #303133;

  &.e-switch-label-left {
    margin-right: 10px;
  }

  &.e-switch-label-right {
    margin-left: 10px;

  }
}

.e-switch-btn {
  height: $dLineHeight;
  width: $dLineHeight*2;
  border: none;
  background: #dcdfe6;
  border-radius: $dLineHeight/2;
  position: relative;
  cursor: pointer;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $dhInside;
    width: $dhInside;
    background: white;
    border-radius: 50%;
    transition: left 250ms;
  }

  &:focus {
    outline: none;
  }
}

</style>