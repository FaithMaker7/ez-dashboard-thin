<script setup lang="ts">
import { ref } from "vue";
// 组件
import { Switch } from "shadcnUi/components/ui/switch";
import { ChartBar } from "@/components/Charts";
import ReTable from "@/components/ReTable/index.vue";
import Pagination from "@/components/Pagination/Pagination.vue";
import NoData from "@/components/NoData/index.vue";
// 图标
import Logo from "@/assets/svg/dashboard/recaptcha-logo.svg?component";
import DownArrow from "@/assets/svg/dashboard/down-arrow.svg?component";
// 数据
import { typeList, barChartData } from "@/components/Charts/data";
const curWeek = ref(0);
const isHourMode = ref(false);
const formatTypeList = typeList.map(item => ({
  id: item.id,
  task: item.task
}));
</script>

<template>
  <div>
    <!-- 使用量柱形图 -->
    <div class="mt-4">
      <div
        class="switch-box flex-c !justify-between bg-custom-primary p-4 rounded-lg"
      >
        <el-dropdown
          id="header-translation"
          trigger="click"
          class="w-[25%] h-[50px] flex-c bg-custom-bg rounded-lg"
        >
          <!-- <GlobalizationIcon
            class="navbar-bg-hover w-[40px] h-[48px] p-[11px] cursor-pointer outline-none"
          /> -->
          <div class="flex-c">
            <Logo class="w-6 h-6 rounded-full" />
            <span class="text-white text-xl ml-2">FuncaptchaTaskProxyless</span>
            <DownArrow class="flex-c ml-8" />
          </div>
          <template #dropdown>
            <el-dropdown-menu class="translation">
              <el-dropdown-item v-for="item in formatTypeList" :key="item.id">
                <span class="text-custom-norText">{{ item.task }}</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <div>
          <Switch
            :checked="isHourMode"
            class="relative bg-custom-bg"
            @update:checked="isHourMode = $event"
          />
        </div>
      </div>
      <div class="flex-bs bg-custom-cardBg/50 p-4">
        <ChartBar :requireData="barChartData[curWeek].requireData" />
      </div>
    </div>
    <!-- 统计表格 -->
    <!-- <div class="text-white text-4xl mt-8">Statistics</div>
    <div class="bg-custom-cardBg/40 p-4 rounded-lg mt-4">
      <div class="ml-4 text-custom-norText text-2xl">Recognized Amount</div>
      <NoData class="mt-2" />
    </div> -->
    <div class="bg-custom-cardBg/40 p-4 rounded-lg mt-4">
      <div class="ml-4 text-custom-norText text-2xl mb-2">
        Statistics of Hours
      </div>
      <!-- <NoData class="mt-2" /> -->
      <ReTable class="w-[96%]" />
      <Pagination class="mt-4" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.test {
  width: 10.042vw;
  max-width: 212px;
}
</style>
