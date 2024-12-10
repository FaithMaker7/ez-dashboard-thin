<script setup lang="ts">
import { tableData } from "./data";

const columns: TableColumnList = [
  {
    label: "TIME PERIOD",
    prop: "date"
  },
  {
    label: "CAPTCHA TYPE",
    prop: "type"
  },
  {
    label: "SOLVE AMOUNT",
    prop: "amount"
  },
  {
    label: "SOLVE COUNT",
    prop: "count"
  },
  {
    label: "AVG. SOLVE TIME (MS)",
    prop: "time"
  }
];
</script>

<template>
  <pure-table :data="tableData" :columns="columns" border stripe />
</template>
