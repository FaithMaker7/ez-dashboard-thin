<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";

import ChartBarWithControls from "./components/ChartBarWithControls.vue";
import StatisticTable from "./components/table/index.vue";
import NoData from "@/components/NoData/index.vue";
</script>

<template>
  <div>
    <!-- 使用量柱形图 -->
    <div class="mt-4">
      <div class="flex-bs bg-custom-cardBg/50 p-4">
        <ChartBarWithControls class="w-full" />
      </div>
    </div>
    <div class="bg-custom-cardBg/40 p-4 rounded-lg mt-4">
      <div class="ml-4 text-custom-norText text-2xl mb-2">
        Statistics of Hours
      </div>
      <div class="mt-4">
        <StatisticTable />
      </div>
    </div>
  </div>
</template>

<!-- <style scoped>
.is-active {
  color: var(--el-color-primary);
  background-color: var(--el-dropdown-menuItem-hover-fill);
}
</style> -->
