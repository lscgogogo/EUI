<demo>
不同触发方式
</demo>
<template>
  <!--  点击触发-->
  <e-popover :trigger="'click'" style="margin-right: 10px">
    <template #content>
      点击触发的内容
    </template>
    <e-button>
      点击
    </e-button>
  </e-popover>
  <!--  悬浮触发-->
  <e-popover :trigger="'hover'">
    <template #content>
      hover触发的内容
    </template>
    <e-button>
      hover me
    </e-button>
  </e-popover>
</template>
