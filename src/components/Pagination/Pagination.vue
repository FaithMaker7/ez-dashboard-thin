<script setup>
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev
} from "shadcnUi/components/ui/pagination";

import { Button } from "shadcnUi/components/ui/button";
// 添加响应式的当前页码
// const currentPage = ref(1);

// 添加页面变化的处理方法
// const onPageChange = (item, page) => {
//   console.log('item', item);
//   console.log('page', page);
//   // 这里可以添加其他逻辑，比如发起新的数据请求等
// };
</script>

<template>
  <Pagination
    v-slot="{ page }"
    :total="100"
    :sibling-count="1"
    show-edges
    :default-page="1"
  >
    <PaginationList v-slot="{ items }" class="flex items-center gap-1">
      <!-- <PaginationFirst :class="'btn-bg text-white'" /> -->
      <PaginationPrev
        :class="'btn-bg text-white w-[50px] h-[50px] xl:w-[56px] xl:h-[56px] btn-border rounded-lg'"
      />

      <template v-for="(item, index) in items">
        <PaginationListItem
          v-if="item.type === 'page'"
          :key="index"
          :value="item.value"
          as-child
        >
          <Button
            class="w-[50px] h-[50px] xl:w-[56px] xl:h-[56px] bg-transparent btn-border p-0 text-[#6B77B2] geo-semibold fs-20 rounded-lg"
            :class="item.value === page ? 'selected' : ''"
          >
            {{ item.value }}
          </Button>
        </PaginationListItem>
        <PaginationEllipsis
          v-else
          :key="item.type"
          class="w-[50px] h-[50px] xl:w-[56px] xl:h-[56px] p-0 btn-border bg-transparent rounded-lg text-[#6B77B2] geo-semibold fs-20"
          :index="index"
        />
      </template>

      <PaginationNext
        :class="'w-[50px] h-[50px] xl:w-[56px] xl:h-[56px] btn-bg btn-border text-white rounded-lg'"
      />
      <!-- <PaginationLast :class="'btn-bg text-white'" /> -->
    </PaginationList>
  </Pagination>
</template>

<style lang="scss">
.btn-bg {
  position: relative;
  overflow: hidden;
  background-color: transparent;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";

    // background: linear-gradient(
    //   180deg,
    //   rgba(255, 255, 255, 0.15) -3%,
    //   rgba(255, 255, 255, 0.35) 100%
    // );
    background: linear-gradient(
      180deg,
      rgb(47 62 139 / 80%) 3%,
      rgb(31 41 92 / 10%) 100%
    );
    background-blend-mode: overlay;
    border-radius: 6px;
  }
}

.btn-border {
  border: 2px solid #2c3367;
}

.selected {
  position: relative;
  color: rgb(var(--color-tag-green));
  border: 2px solid rgb(var(--color-tag-green));

  // scale: 1.05;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-color: rgb(80 229 167 / 40%);

    // background: linear-gradient(
    //   180deg,
    //   rgba(80, 229, 167, 0.05) 0%,
    //   rgba(80, 229, 167, 0.8) 100%
    // );
    opacity: 0.3;
  }
}

// .unselected {
// border: 2px solid #5a6fe4;
// background-color: #263072;
// }
</style>
