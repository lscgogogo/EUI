<demo>
列偏移
</demo>
<template>
  <e-row>
    <e-col :span="8">col-8</e-col>
    <e-col :span="8" offset="8">col-8</e-col>
  </e-row>

  <e-row>
    <e-col :span="6" offset="6">col-6-offset-6</e-col>
    <e-col :span="6" offset="6">col-6-offset-6</e-col>
  </e-row>

  <e-row>
    <e-col :span="12" offset="6">col-12-offset-6</e-col>
  </e-row>
</template>
