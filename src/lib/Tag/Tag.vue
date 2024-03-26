<template>

  <span class="e-tag" :class="tagClasses" @click="handleClick">
    <span class="content">
      <slot></slot>
    </span>
    <span class="e-tag-icon" v-if="closable" @click.stop="handleClose">
      <svg>
        <use xlink:href="#icon-close-btn"></use>
      </svg>
    </span>

  </span>
</template>

<script lang='ts' setup>
import {computed} from 'vue';

const props = defineProps({
  type: String,
  effect: String,
  size: String,
  closable: {type: Boolean, 'default': false},
  round: {type: Boolean, 'default': false}
});
const emits = defineEmits(['close', 'click']);
const tagClasses = computed(() => {
  return {
    [`e-tag--${props.type}`]: props.type,
    [`e-tag--${props.size}`]: props.size,
    [`e-tag--${props.effect}`]: props.effect,
    [`is-round`]: props.round,
    [`is-closable`]: props.closable
  };
});

function handleClose(event: MouseEvent) {
  emits('close', event);
}

function handleClick(event: MouseEvent) {
  emits('click', event);
}
</script>

<style lang='scss' scoped>
.e-tag {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  padding: 0 9px;
  margin: 2px 6px 2px 0;
  font-size: 12px;
  border: 1px solid;
  border-radius: 4px;
  box-sizing: border-box;
  white-space: nowrap;
  line-height: 1;
  background-color: #ecf5ff;
  color: #409eff;
  border-color: #d9ecff;

  &.is-round {
    border-radius: 9999px;
  }

  &.is-closable {
    padding-right: 5px;
  }

  .e-tag-icon {
    svg {
      fill: #409eff;

      &:hover {
        background-color: #409eff;
        fill: #fff;
      }
    }
  }

  // 不同颜色
  &.e-tag--success {
    background-color: #f0f9eb;
    color: #67c23a;
    border-color: #e1f3d8;

    .e-tag-icon {
      svg {
        fill: #67c23a;

        &:hover {
          background-color: #67c23a;
          fill: #fff;
        }
      }


    }

  }

  &.e-tag--info {
    background-color: #f4f4f5;
    color: #909399;
    border-color: #e9e9eb;

    .e-tag-icon {
      svg {
        fill: #909399;

        &:hover {
          background-color: #909399;
          fill: #fff;
        }
      }
    }
  }

  &.e-tag--warning {
    background-color: #fdf6ec;
    color: #e6a23c;
    border-color: #faecd8;

    .e-tag-icon {
      svg {
        fill: #e6a23c;

        &:hover {
          background-color: #e6a23c;
          fill: #fff;
        }
      }
    }
  }

  &.e-tag--danger {
    background-color: #fef0f0;
    color: #f56c6c;
    border-color: #fde2e2;

    .e-tag-icon {
      svg {
        fill: #f56c6c;

        &:hover {
          background-color: #f56c6c;
          fill: #fff;
        }
      }
    }
  }

  // 不同颜色深浅
  &.e-tag--dark {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;

    .e-tag-icon {
      svg {
        fill: #fff;

        &:hover {
          background-color: #79bbff;

        }
      }
    }

    &.e-tag--success {
      background-color: #67c23a;
      border-color: #67c23a;

      .e-tag-icon {
        svg:hover {
          background-color: #95d475;
        }
      }
    }

    &.e-tag--info {
      background-color: #909399;
      border-color: #909399;

      .e-tag-icon {
        svg:hover {
          background-color: #b1b3b8;
        }
      }
    }

    &.e-tag--warning {
      background-color: #e6a23c;
      border-color: #e6a23c;

      .e-tag-icon {
        svg:hover {
          background-color: #eebe77;
        }
      }
    }

    &.e-tag--danger {
      background-color: #f56c6c;
      border-color: #f56c6c;

      .e-tag-icon {
        svg:hover {
          background-color: #f89898;
        }
      }
    }
  }

  &.e-tag--plain {
    background-color: #fff;
    border-color: #a0cfff;

    &.e-tag--success {
      border-color: #b3e19d;
    }

    &.e-tag--info {
      border-color: #c8c9cc;
    }

    &.e-tag--warning {
      border-color: #f3d19e;
    }

    &.e-tag--danger {
      border-color: #fab6b6;
    }
  }

  // 不同尺寸
  &.e-tag--large {
    padding: 0 11px;
    height: 32px;
    font-size: 16px;
  }

  &.e-tag--small {
    padding: 0 7px;
    height: 20px;
    font-size: 12px;
  }

  .e-tag-icon {
    svg {
      width: 16px;
      height: 16px;
      margin-left: 6px;
      cursor: pointer;
      vertical-align: middle;
      border-radius: 50%;
    }

  }
}
</style>

