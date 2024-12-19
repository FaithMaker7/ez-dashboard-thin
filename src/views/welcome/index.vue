<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useNav } from "@/layout/hooks/useNav";
// 组件
import GlowButton from "@/components/GlowButton/index.vue";
import ShadProgress from "@/components/ShadProgress/index.vue";
import NavButton from "@/components/NavButton/index.vue";
import ContactCard from "@/components/ContactCard/index.vue";
// import ReText from "@/components/ReText";
import { Switch } from "shadcnUi/components/ui/switch";
import { ChartBar } from "@/components/Charts";
import ReInput from "@/components/ReInput/index.vue";
// import ReTable from "@/components/ReTable/index.vue";
import StatisticTable from "@/views/statistic/components/table/index.vue";
import Pagination from "@/components/Pagination/Pagination.vue";
import NoData from "@/components/NoData/index.vue";
import ReText from "@/components/ReText";
// 图标
import Vip from "@/assets/svg/dashboard/vip.svg?component";
import Logo from "@/assets/svg/dashboard/recaptcha-logo.svg?component";
import DownArrow from "@/assets/svg/dashboard/down-arrow.svg?component";
import Key from "@/assets/svg/dashboard/key.svg?component";
import Refresh from "@/assets/svg/dashboard/refresh.svg?component";
import Copy from "@/assets/svg/dashboard/copy.svg?component";
// 数据
import { typeList, barChartData } from "@/components/Charts/data";
defineOptions({
  name: "Welcome"
});
const { tooltipEffect } = useNav();
const levelIndex = ref(1); // 价格等级
const vipSystem = [
  { level: 0, free: "0" },
  { level: 1, free: "1" },
  { level: 2, free: "4" },
  { level: 3, free: "5" },
  { level: 4, free: "6" },
  { level: 5, free: "10" },
  { level: 6, free: "15" },
  { level: 7, free: "20" }
];
const curWeek = ref(0);
const period = ref("hour");
const formatTypeList = typeList.map(item => ({
  id: item.id,
  task: item.task
}));
const clientKey = ref("");

const checked = ref(false);

// watch(checked, newValue => {
//   period.value = newValue ? "day" : "hour";
//   console.log(checked.value);
// });

const handleChange = () => {
  period.value = checked.value ? "day" : "hour";
  console.log(checked.value);
};
</script>

<template>
  <div>
    <div
      class="flex flex-col lg:flex-row lg:justify-between lg:items-center md:gap-4 gap-2"
    >
      <!-- 余额卡片 -->
      <div class="balance card flex-col-as">
        <p class="text-sm sm:text-base text-white">BALANCE</p>
        <p class="sm:mt-6 text-white">
          <span class="text-4xl sm:text-5xl">95,298,482</span>
          <span class="text-custom-norText align-top ml-1">POINTS</span>
        </p>
        <div class="vip-progress sm:mt-7">
          <div>
            <div class="level flex-c">
              <Vip class="w-12 sm:w-8 mr-2" />
              <span
                class="text-custom-yellow align-bottom leading-6 whitespace-nowrap"
                >VIP {{ levelIndex }}</span
              >
              <div class="tips text-white ml-8">
                You can get {{ vipSystem[levelIndex].free }}% extra points on
                top up
              </div>
            </div>
          </div>
          <div class="mt-4">
            <ShadProgress
              v-model:level="levelIndex"
              :max="vipSystem.length - 1"
              class="w-full h-4"
            />
          </div>
        </div>
        <div class="btn-box xs:flex xs:justify-center xs:items-center xs:mt-7">
          <GlowButton class="w-[60%] h-[50px] sm:h-[60px]" />
          <NavButton
            :text="'VIEW PAYMENT HISTORY'"
            class="nav-btn mt-4 xs:mt-0"
          />
        </div>
      </div>
      <!-- API卡片 -->
      <div class="api card flex-col-as">
        <div class="w-full h-[40%] bg-custom-primary p-6 rounded-lg">
          <p class="text-base text-custom-norText">YOUR CLIENT KEY:</p>
          <div class="w-full h-[50px] rounded-lg mt-4">
            <ReInput v-model="clientKey">
              <template #prefix>
                <Key class="w-6 h-6" />
              </template>
              <template #append>
                <Refresh class="w-6 h-6 scale-50 xs:scale-100" />
                <el-divider direction="vertical" class="border-l-[#2C3E96]" />
                <Copy class="w-6 h-6 scale-50 xs:scale-100" />
              </template>
            </ReInput>
          </div>
        </div>
        <div class="w-full h-[60%] sm:mt-6 p-6">
          <p class="text-base text-custom-norText">HOW TO USE OUR API?</p>
          <p class="text-xl md:text-3xl text-white mt-2">
            You can use our api with your key
          </p>
          <NavButton :text="'VIEW THE DOCUMENTATION'" class="nav-btn mt-6" />
        </div>
      </div>
    </div>
    <!-- VIEW DETAIL -->
    <div class="w-full h-24 px-4">
      <ContactCard
        :title="'Join our discord for receive 10000 free points! Join and contact us!'"
        :btn-text="'VIEW DETAIL'"
      />
    </div>
    <!-- 使用量柱形图 -->
    <div class="mt-8">
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
            :checked="checked"
            class="relative w-[80px] h-[50px] phone:w-[120px] bg-custom-bg"
            @update:checked="handleChange"
          />
        </div>
      </div>
      <div class="w-full bg-custom-cardBg/50 p-4">
        <ChartBar :requireData="barChartData[curWeek].requireData" />
      </div>
    </div>
    <!-- 统计表格 -->
    <div class="text-white text-4xl mt-8">Statistics</div>
    <div class="bg-custom-cardBg/40 p-4 rounded-lg mt-4">
      <div class="ml-4 text-custom-norText text-2xl">Recognized Amount</div>
      <NoData class="mt-2" />
    </div>
    <div class="bg-custom-cardBg/40 p-4 rounded-lg mt-4">
      <div class="ml-4 text-custom-norText text-2xl mb-2">Payment History</div>
      <!-- <NoData class="mt-2" /> -->
      <StatisticTable />
      <!-- <Pagination class="mt-4" /> -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  @apply bg-custom-cardBg/40 rounded-lg;
}

.balance {
  @apply w-full h-full lg:h-auto lg:max-w-[55%];
  @apply p-4 sm:px-6 sm:scroll-py-11;

  // max-width: 890px;
  min-height: 400px;
}

.api {
  @apply w-full h-full lg:h-auto lg:max-w-[45%];

  // max-width: 840px;
  @apply sm:min-h-[400px];

  justify-content: flex-start;
}

.green-rec {
  @apply h-[3px] left-[25px] sm:left-[20px] xl:left-[30px] rounded-[3px] xl:rounded-[5px];

  position: absolute;
  bottom: 0;
  z-index: 3;
  content: "";
  background: radial-gradient(367% 163% at -22% -11%, #c3fb31 0%, #09f4e6 100%);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  // 创建模糊效果，hover时显示
  &::after {
    position: absolute;
    inset: 0;
    content: "";
    background: inherit;
    filter: blur(4px);
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    box-shadow:
      0 0 10px rgb(195 251 49 / 30%),
      0 0 20px rgb(9 244 230 / 20%);
    transform: translateY(-2px) scaleX(1.1);

    &::after {
      opacity: 0.6;
    }
  }
}

.nav-btn {
  @apply w-[240px] xs:h-[50px] xs:w-[290px] xs:ml-4;

  position: relative;

  &::before {
    @extend .green-rec;

    width: 68%;
  }
}
</style>
