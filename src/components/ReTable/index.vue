<script setup lang="ts">
import { ref } from "vue";
import { list } from "./base/list";
defineOptions({
  name: "ReTable"
});
</script>

<template>
  <div class="w-full h-full"><component :is="list[2].component" /></div>
</template>

<style lang="scss" scoped>
:deep(.el-table) {
  --el-table-border-color: #19224b;
  --el-table-tr-bg-color: #242d58;

  font-size: 20px;
  color: #a3a9d7;
  border-radius: 8px;
}

:deep(.el-table th.el-table__cell) {
  height: 40px;
  font-size: 17px;
  font-weight: 500;
  color: #000;
  background-color: #79f2a1;

  @media screen and (width <= 500px) {
    font-size: 14px;
  }
}

:deep(.el-table__body tr:hover > td.el-table__cell) {
  background-color: #3e4d7a;
}

:deep(.el-table__body tr.el-table__row--striped:hover > td.el-table__cell) {
  background-color: #3e4d7a !important;
}

:deep(
    .el-table--striped
      .el-table__body
      tr.el-table__row--striped
      td.el-table__cell
  ) {
  background-color: #2d3964;
}

:deep(el-table td.el-table__cell, .el-table th.el-table__cell.is-leaf) {
  border-bottom: none;
}

:deep(.el-table--border .el-table__cell) {
  border-right: 2px solid #19224b;
}

:deep(.el-table__body tr > td.el-table__cell) {
  height: 60px;
  min-height: 60px;
  font-size: 17px;

  @media screen and (width <= 500px) {
    font-size: 12px;
  }
}

:deep(.el-table__header tr > th.el-table__cell) {
  height: 60px;
  min-height: 40px;
}
</style>
