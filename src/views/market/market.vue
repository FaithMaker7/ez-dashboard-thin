<script setup lang="ts">
import { getGoodsList } from "@/api/market";
import { message } from "@/utils/message";
import { ElMessageBox } from "element-plus";
import { ref, onMounted, nextTick, reactive } from "vue";
import CategoryBar from "@/components/CategoryBar/index.vue";
import { getCateList } from "@/api/market";
import ListCard from "./components/ListCard.vue";
import Pagination from "@/components/Pagination/Pagination.vue";
// import ListDialogForm from "./components/ListDialogForm.vue";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import AddFill from "@iconify-icons/ri/add-circle-line";

defineOptions({
  name: "CardList"
});

const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `;

const INITIAL_DATA = {
  name: "",
  status: "",
  description: "",
  type: "",
  mark: ""
};

let pagination = reactive({
  current: 1,
  pageSize: 12
});
let total = ref(10);
let totalPage = ref(1);
const currentCategory = ref("All Service");
const cateList = ref([]);
const productList = ref([]);
const dataLoading = ref(true);

const getCateListData = async () => {
  try {
    const { data } = await getCateList();
    cateList.value = data.list;
    console.log(cateList.value);
  } catch (e) {
    console.log(e);
  }
};
const getCardListData = async (query: object) => {
  dataLoading.value = true;
  try {
    console.log("当前query:", query);
    const { data } = await getGoodsList(query);
    productList.value = data.list;
    // console.log(productList.value);
    totalPage.value = data.totalPage;
    total.value = data.total;
  } catch (e) {
    console.log(e);
  } finally {
    setTimeout(() => {
      dataLoading.value = false;
    }, 500);
  }
};

onMounted(() => {
  getCardListData({ ...pagination, category: "All Service" });
  getCateListData();
});

const formDialogVisible = ref(false);
const formData = ref({ ...INITIAL_DATA });
const searchValue = ref("");

const onPageSizeChange = (size: number) => {
  pagination.pageSize = size;
  pagination.current = 1;
};
const onPageChange = (current: number) => {
  pagination.current = current;
  console.log("page change", current);
  const query = Object.assign(
    {},
    {
      pageNum: current,
      pageSize: pagination.pageSize,
      category: currentCategory.value
    }
  );
  getCardListData(query);
};
const onCategoryChange = (category: string) => {
  currentCategory.value = category;
  console.log("当前category", category);
  onPageChange(1);
};
// const handleDeleteItem = product => {
//   ElMessageBox.confirm(
//     product
//       ? `确认删除后${product.name}的所有产品信息将被清空, 且无法恢复`
//       : "",
//     "提示",
//     {
//       type: "warning"
//     }
//   )
//     .then(() => {
//       message("删除成功", { type: "success" });
//     })
//     .catch(() => {});
// };
// const handleManageProduct = product => {
//   formDialogVisible.value = true;
//   nextTick(() => {
//     formData.value = { ...product, status: product?.isSetup ? "1" : "0" };
//   });
// };
</script>

<template>
  <div>
    <div class="w-full flex justify-between mb-4">
      <!-- <el-button
        :icon="useRenderIcon(AddFill)"
        @click="formDialogVisible = true"
      >
        新建产品
      </el-button> -->
      <CategoryBar :tagList="cateList" @selected="onCategoryChange" />
      <!-- <el-input
        v-model="searchValue"
        style="width: 300px"
        placeholder="请输入产品名称"
        clearable
      >
        <template #suffix>
          <el-icon class="el-input__icon">
            <IconifyIconOffline
              v-show="searchValue.length === 0"
              icon="ri:search-line"
            />
          </el-icon>
        </template>
      </el-input> -->
    </div>
    <div
      v-loading="dataLoading"
      :element-loading-svg="svg"
      element-loading-svg-view-box="-10, -10, 50, 50"
      element-loading-background="rgba(0,21,41,1.00)"
    >
      <el-empty
        v-show="productList.length === 0"
        :description="`${searchValue} 产品不存在`"
      />
      <template v-if="productList.length !== 0">
        <el-row :gutter="16">
          <el-col
            v-for="(product, index) in productList"
            :key="index"
            :xs="24"
            :sm="12"
            :lg="8"
            :xl="6"
          >
            <ListCard :product="product" />
          </el-col>
        </el-row>
        <!-- <el-pagination
          v-model:currentPage="pagination.current"
          class="float-right"
          :page-size="pagination.pageSize"
          :total="pagination.total"
          :page-sizes="[12, 24, 36]"
          :background="true"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="onPageSizeChange"
          @current-change="onCurrentChange"
        /> -->
      </template>
      <div class="mt-8">
        <Pagination
          v-model:page="pagination.current"
          :total="total"
          :sibling-count="3"
          @page-change="onPageChange"
        />
      </div>
    </div>
    <!-- <ListDialogForm v-model:visible="formDialogVisible" :data="formData" /> -->
  </div>
</template>
