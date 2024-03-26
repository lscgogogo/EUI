<template>
  <button class="e-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="e-loadingIndicator"></span>
    <slot/>
  </button>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
  props: {
    theme: {type: String, default: 'button'},
    size: {type: String, default: 'normal'},
    level: {type: String, default: 'normal'},
    disabled: {type: Boolean, default: false},
    loading: {type: Boolean, default: false},
  },
  setup(props) {
    const {theme, size, level} = props;
    const classes = computed(() => {
      return {
        [`e-theme-${theme}`]: theme,
        [`e-size-${size}`]: size,
        [`e-level-${level}`]: level
      };
    });
    return {classes};
  },
};

</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #606266;
$blue: #40a9ff;
$radius: 2px;
$red: red;
$grey: grey;
.e-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 2px #00000004;
  transition: all .3s cubic-bezier(.645, .045, .355, 1);
  touch-action: manipulation;
  font-size: 14px;
  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  &::-moe-focus-inner {
    border: 0;
  }

  &.e-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;

    &:hover, &:focus {
      color: lighten($blue, 10%);
    }
  }

  &.e-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover, &:focus {
      background: darken(white, 5%);;
    }
  }

  &.e-size-large {
    font-size: 24px;
    height: 48px;
    padding: 0 16px
  }

  &.e-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  // button的不同level下的样式
  &.e-theme-button {
    &.e-level-main {
      background: $blue;
      color: white;
      border-color: $blue;

      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }

    &.e-level-danger {
      background: $red;
      border-color: $red;
      color: white;

      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }

  &.e-theme-link {
    &.e-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.e-theme-text {
    &.e-level-main {
      color: $blue;

      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }

    &.e-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  //  按钮禁用
  &.e-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;

      &:hover {
        border-color: $grey;
      }
    }
  }

  &.e-theme-link, &.e-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }

  > .e-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: gulu-spin 1s infinite linear;
  }
}

@keyframes gulu-spin {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}
</style>