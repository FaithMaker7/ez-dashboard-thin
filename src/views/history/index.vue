<script setup lang="ts">
import StatisticTable from "@/views/statistic/components/table/index.vue";
</script>

<template>
  <div>
    <div class="bg-custom-cardBg/40 p-6 rounded-lg mt-4">
      <div class="text-custom-norText text-2xl mb-2">Payment History</div>
      <div class="mt-4">
        <StatisticTable />
      </div>
    </div>
  </div>
</template>
