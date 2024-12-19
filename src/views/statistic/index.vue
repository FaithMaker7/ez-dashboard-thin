<script setup lang="ts">
import { ref } from "vue";
import { useNav } from "@/layout/hooks/useNav";

// 组件
import ReText from "@/components/ReText";
import { Switch } from "shadcnUi/components/ui/switch";
import { ChartBar } from "@/components/Charts";
import ReTable from "@/components/ReTable/index.vue";
import Pagination from "@/components/Pagination/Pagination.vue";
import StatisticTable from "./components/table/index.vue";
import NoData from "@/components/NoData/index.vue";
import Segmented, { type OptionsType } from "@/components/ReSegmented";
// 图标
import Logo from "@/assets/svg/dashboard/recaptcha-logo.svg?component";
import DownArrow from "@/assets/svg/dashboard/down-arrow.svg?component";
// 数据
import { typeList, barChartData } from "@/components/Charts/data";

const { tooltipEffect } = useNav();
const isHourMode = ref(false);
const formatTypeList = typeList.map(item => ({
  id: item.id,
  task: item.task
}));
let curWeek = ref(0); // 0上周、1本周
const optionsBasis: Array<OptionsType> = [
  {
    label: "上周"
  },
  {
    label: "本周"
  }
];
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
          class="w-[60%] sm:w-[40%] xl:w-[30%] h-[50px] flex-c bg-custom-bg rounded-lg"
        >
          <!-- <GlobalizationIcon
            class="navbar-bg-hover w-[40px] h-[48px] p-[11px] cursor-pointer outline-none"
          /> -->
          <div class="flex-c">
            <Logo class="w-6 h-6 rounded-full" />
            <ReText
              :tippyProps="{
                theme: tooltipEffect
              }"
              class="!w-[90px] xs:!w-[auto] !text-white !text-xs !ml-2"
            >
              FuncaptchaTaskProxyless
            </ReText>
            <DownArrow class="flex-c sm:ml-8" />
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
            class="relative w-[80px] h-[50px] phone:w-[120px] bg-custom-bg"
            @update:checked="isHourMode = $event"
          />
        </div>
        <!-- <div class="w-[100px]">
          <Segmented v-model="curWeek" :options="optionsBasis" />
        </div> -->
      </div>
      <div class="flex-bs bg-custom-cardBg/50 p-4">
        <ChartBar :requireData="barChartData[curWeek].requireData" />
        <!-- <StatisticTable /> -->
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
      <!-- <ReTable class="w-[96%]" /> -->
      <StatisticTable />
      <!-- <Pagination class="mt-4" /> -->
    </div>
  </div>
</template>
