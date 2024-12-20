<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import ChartBar from "./chartBar/ChartBar.vue";
import { Switch } from "shadcnUi/components/ui/switch";
import { useNav } from "@/layout/hooks/useNav";
import ReText from "@/components/ReText";
import Logo from "@/assets/svg/dashboard/recaptcha-logo.svg?component";
import DownArrow from "@/assets/svg/dashboard/down-arrow.svg?component";
import { getHourlyData, getDailyData } from "@/api/chart";
import { typeList } from "@/components/Charts/data";

// 类型定义
// interface Props {
//   typeList: Array<{
//     id: string;
//     task: string;
//   }>;
// }

// const props = defineProps<Props>();

// 状态管理
const { tooltipEffect } = useNav();
const barChartData = ref([]);
const selectedTask = ref(typeList[0]?.task || "");
const isDayMode = ref(false);
const loading = ref(false);
// 处理任务选择
const handleTaskClick = (task: string) => {
  console.log("任务切换:", task);
  selectedTask.value = task;
};
watch(isDayMode, async newVal => {
  console.log("mode:", newVal);
});

// 监听控制器变化
watch([isDayMode, selectedTask], async ([isHour, newTask]) => {
  console.log("charbar newVal", isHour, newTask);
  const fetchAction = isDayMode.value ? getDailyData : getHourlyData;
  loading.value = true;
  try {
    const { data } = await fetchAction({ type: selectedTask.value });
    barChartData.value = data.list;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    // 可以添加错误提示
  } finally {
    loading.value = false;
  }
});

onMounted(async () => {
  const { data } = await getHourlyData({ type: selectedTask.value });
  barChartData.value = data.list;
  // console.log("barChartData init", barChartData.value);
});
</script>

<template>
  <div>
    <!-- 控制器区域 -->
    <div
      class="switch-box flex-c !justify-between bg-custom-primary p-4 rounded-lg"
    >
      <el-dropdown
        trigger="click"
        class="w-[50%] phone:w-[60%] px-1 xl:w-[30%] h-[50px] flex-c bg-custom-bg rounded-lg"
      >
        <div class="w-full flex-c cursor-pointer">
          <Logo
            class="hidden phone:block w-6 h-6 rounded-full scale-50 sm:scale-100"
          />
          <ReText
            :tippyProps="{ theme: tooltipEffect }"
            class="!w-[90px] xs:!w-[auto] !text-white !text-xs !ml-2"
          >
            {{ selectedTask }}
          </ReText>
          <DownArrow class="flex-c sm:ml-8 scale-75 sm:scale-100" />
        </div>
        <template #dropdown>
          <el-dropdown-menu class="translation">
            <el-dropdown-item
              v-for="item in typeList"
              :key="item.id"
              @click="handleTaskClick(item.task)"
            >
              <span
                class="text-custom-norText"
                :class="{ 'text-primary': selectedTask === item.task }"
              >
                {{ item.task }}
              </span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <div>
        <Switch
          :checked="isDayMode"
          class="relative w-[80px] h-[50px] phone:w-[120px] bg-custom-bg"
          @update:checked="isDayMode = $event"
        />
      </div>
    </div>

    <!-- 图表区域 -->
    <div class="flex-bs bg-custom-cardBg/50 p-4">
      <ChartBar
        :requireData="barChartData"
        :period="isDayMode ? 'day' : 'hour'"
      />
    </div>
  </div>
</template>
