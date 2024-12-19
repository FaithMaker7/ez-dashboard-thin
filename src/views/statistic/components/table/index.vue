<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import { useColumns } from "./columns";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import Pagination from "@/components/Pagination/Pagination.vue";
import { getStatisticTable, type TableStatisticParams } from "@/api/table";
const { columns, Empty } = useColumns();

const dataList = ref([]);
const loading = ref(true);
let pagination = reactive({
  current: 1,
  pageSize: 10
});
let total = ref(10);
let totalPage = ref(1);
const getTableData = async (params: TableStatisticParams) => {
  loading.value = true;
  try {
    console.log("当前tableData请求params:", params);
    const { data } = await getStatisticTable(params);
    console.log("当前表格数据:", data);
    dataList.value = data.list;
    totalPage.value = data.totalPage;
    total.value = data.total;
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
  // pagination.total = res.data.total;
};

function onPageChange(current: number) {
  console.log("当前页码", current);
  pagination.current = current;
  const params = Object.assign(
    {},
    {
      current,
      pageSize: pagination.pageSize
    }
  );
  getTableData(params);
}

onMounted(async () => {
  await getTableData({ ...pagination });
});
</script>

<template>
  <pure-table
    row-key="id"
    alignWhole="center"
    showOverflowTooltip
    :loading="loading"
    :loading-config="{ background: 'transparent' }"
    :data="dataList"
    :columns="columns"
  >
    <template #empty>
      <el-empty description="暂无数据" :image-size="60">
        <template #image>
          <!-- <Empty /> -->
        </template>
      </el-empty>
    </template>
  </pure-table>
  <div class="mt-8">
    <Pagination
      v-model:page="pagination.current"
      :total="total"
      :sibling-count="3"
      @page-change="onPageChange"
    />
  </div>
</template>

<style lang="scss">
.pure-table-filter {
  .el-table-filter__list {
    min-width: 80px;
    padding: 0;

    li {
      line-height: 28px;
    }
  }
}
</style>

<style lang="scss" scoped>
:deep(.el-table) {
  --el-table-border: none;
  --el-table-border-color: transparent;

  .el-empty__description {
    margin: 0;
  }

  .el-scrollbar__bar {
    display: none;
  }
}
</style>
