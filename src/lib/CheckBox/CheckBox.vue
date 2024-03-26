<template>
  <label class="e-checkbox"
         :class="checkBoxClass"
         @click="changeSquare">
    <!--    复选框-->
    <span :id="label" class="e-checkbox__input" :class="checkBoxInputClass">
      <span class="e-checkbox__inner"></span>
    </span>
    <!--    文字label-->
    <span class="e-checkbox_label" v-if="defaultSlots||label">
      <slot>{{ defaultSlots || label }}</slot>
    </span>
  </label>
</template>

<script lang='ts' setup>
import {Ref, computed, inject, ref, useSlots, watchEffect} from 'vue';

const boxChecked = ref(false);
const props = defineProps({
  label: {type: String, required: true},
  size: {type: String, values: ['large', 'small'], 'default': 'large'},
  disabled: {type: Boolean, 'default': undefined},
  modelValue: {type: Boolean, 'default': undefined},
  numLimitDisabled: {type: Boolean, 'default': undefined},
  border: {type: Boolean, 'default': false}
});
const emits = defineEmits(['update:modelValue', 'change']);
const defaultSlots = useSlots().default?.();

function useBoxGroup() {
  let updateGroup = inject('updateGroup') as (x: boolean, y: string) => void;
  let checkedBoxes = inject('boxGroup') as Ref<Array<string>>;
  return {updateGroup, checkedBoxes};
}

function changeSquare(e) {
  e.preventDefault();
  if (props.disabled || props.numLimitDisabled) {
    return;
  }
  boxChecked.value = !(boxChecked.value);
  updateEmitVal();
}

function updateEmitVal() {
  if (props.modelValue === undefined) {
    updateGroup(boxChecked.value, props.label);
  } else {
    emits('update:modelValue', boxChecked.value);
    emits('change', boxChecked.value);

  }
}

const {updateGroup, checkedBoxes} = useBoxGroup();

watchEffect(() => {
  if (props.modelValue === undefined) {
    boxChecked.value = checkedBoxes.value.includes(props.label);
  } else {
    boxChecked.value = props.modelValue;
  }
});

const checkBoxClass = computed(() => {
  return {
    'is-checked': boxChecked.value,
    'is-disabled': props.disabled ?? props.numLimitDisabled,
    'e-checkbox-small': props.size === 'small',
    'e-checkbox-large': props.size !== 'small',
    'is-bordered': props.border
  };
});
const checkBoxInputClass = computed(() => {
  return {
    'is-checked': boxChecked.value,
    'is-disabled': props.disabled ?? props.numLimitDisabled
  };
});
</script>

<style lang="scss">
@mixin flexLayout {
  position: relative;
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  white-space: nowrap;
}

.e-checkbox {
  @include flexLayout;
  margin-right: 30px;

  &.is-checked {
    .e-checkbox_label {
      color: #409eff;
    }

    &.e-checkbox-large.is-bordered, &.e-checkbox-small.is-bordered {
      border-color: #409eff;
    }
  }

  &.is-disabled {
    cursor: not-allowed;

    .e-checkbox_label {
      color: #a8abb2
    }

    &.e-checkbox-large.is-bordered, &.e-checkbox-small.is-bordered {
      border-color: #dcdfe6;
    }
  }

  &.e-checkbox-small {
    height: 24px;

    &.is-bordered {
      border: 1px solid #dcdfe6;
      padding: 0 11px 0 7px;
      border-radius: 3px;
    }

    .e-checkbox__input .e-checkbox__inner {
      width: 12px;
      height: 12px;

      &::after {
        width: 2px;
        height: 5px;
      }
    }

    .e-checkbox_label {
      font-size: 12px;
    }
  }

  &.e-checkbox-large {
    height: 40px;

    &.is-bordered {
      border: 1px solid #dcdfe6;
      padding: 0 19px 0 11px;
      border-radius: 4px;
    }

    .e-checkbox__input .e-checkbox__inner {
      width: 14px;
      height: 14px;

      &::after {
        height: 7px;
        width: 3px;
      }
    }

    .e-checkbox_label {
      font-size: 14px;
    }
  }

  .e-checkbox__input {
    @include flexLayout;
    outline: none;

    &.is-checked {
      .e-checkbox__inner {
        background: #409eff;
        border-color: #409eff;

        &::after {
          transform: rotate(45deg) scaleY(1);
        }
      }
    }

    &.is-disabled {
      .e-checkbox__inner {
        background: #f5f7fa;
        border-color: #dcdfe6;
        cursor: not-allowed;

        &:hover {
          border-color: #dcdfe6;
        }

        &::after {
          border-color: transparent #a8abb2 #a8abb2 transparent;
        }
      }

    }

    .e-checkbox__original {
      width: 0;
      height: 0;
      border: none;
      position: absolute;
    }

    .e-checkbox__inner {
      display: inline-block;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;

      &:hover {
        border-color: #409eff;
      }

      &::after {
        position: absolute;
        content: '';
        box-sizing: content-box;
        border: 1px solid;
        border-color: transparent white white transparent;
        top: 1px;
        left: 4px;

        transform: rotate(45deg) scaleY(0);
        transition: transform .15s ease-in .05s;
      }
    }
  }

  .e-checkbox_label {
    display: inline-block;
    padding-left: 8px;
  }
}
</style>