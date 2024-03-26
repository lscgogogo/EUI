<demo>
子元素垂直对齐
</demo>
<template>

  <p>Align Top</p>
  <e-row justify="center" align="top">
    <e-col :span="4">
      <p class="height-100">col-4</p>
    </e-col>
    <e-col :span="4">
      <p class="height-50">col-4</p>
    </e-col>
    <e-col :span="4">
      <p class="height-120">col-4</p>
    </e-col>
    <e-col :span="4">
      <p class="height-80">col-4</p>
    </e-col>
  </e-row>

  <p>Align Center</p>
  <e-row justify="space-around" align="middle">
    <e-col :span="4">
      <p class="height-100">col-4</p>
    </e-col>
    <e-col :span="4">
      <p class="height-50">col-4</p>
    </e-col>
    <e-col :span="4">
      <p class="height-120">col-4</p>
    </e-col>
    <e-col :span="4">
      <p class="height-80">col-4</p>
    </e-col>
  </e-row>

  <p>Align Bottom</p>
  <e-row justify="space-around" align="bottom">
    <e-col :span="4">
      <p class="height-100">col-4</p>
    </e-col>
    <e-col :span="4">
      <p class="height-50">col-4</p>
    </e-col>
    <e-col :span="4">
      <p class="height-120">col-4</p>
    </e-col>
    <e-col :span="4">
      <p class="height-80">col-4</p>
    </e-col>
  </e-row>
</template>

