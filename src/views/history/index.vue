<script setup lang="ts">
import ReTable from "@/components/ReTable/index.vue";
import Pagination from "@/components/Pagination/Pagination.vue";
</script>

<template>
  <div>
    <div class="bg-custom-cardBg/40 p-6 rounded-lg mt-4">
      <div class="text-custom-norText text-2xl mb-2">Payment History</div>
      <!-- <NoData class="mt-2" /> -->
      <ReTable class="w-[96%]" />
      <Pagination class="mt-4" />
    </div>
  </div>
</template>
