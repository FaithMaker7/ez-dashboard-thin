<script setup lang="ts">
import { ref } from "vue";
// 组件
import GlowButton from "@/components/GlowButton/index.vue";
import ShadProgress from "@/components/ShadProgress/index.vue";
import NavButton from "@/components/NavButton/index.vue";
import ContactCard from "@/components/ContactCard/index.vue";
import { Switch } from "shadcnUi/components/ui/switch";
import { ChartBar } from "@/components/Charts";
import ReInput from "@/components/ReInput/index.vue";
import ReTable from "@/components/ReTable/index.vue";
import Pagination from "@/components/Pagination/Pagination.vue";
import NoData from "@/components/NoData/index.vue";
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
const isHourMode = ref(false);
const formatTypeList = typeList.map(item => ({
  id: item.id,
  task: item.task
}));
const clientKey = ref("");
</script>

<template>
  <div>
    <div class="flex-c gap-4 justify-between">
      <!-- 余额卡片 -->
      <div class="balance card">
        <p class="text-base text-white">BALANCE</p>
        <p class="mt-6 text-white">
          <span class="text-5xl">95,298,482</span>
          <span class="text-custom-norText align-top ml-1">POINTS</span>
        </p>
        <div class="vip-progress mt-7">
          <div>
            <div class="level flex-c">
              <Vip class="w-8 h-6 mr-2" />
              <span class="text-custom-yellow align-bottom leading-6"
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
        <div class="btn-box flex-c mt-7">
          <GlowButton :size="'card'" />
          <NavButton :text="'VIEW PAYMENT HISTORY'" class="nav-btn ml-4" />
        </div>
      </div>
      <!-- API卡片 -->
      <div class="api card">
        <div class="w-full h-[40%] bg-custom-primary p-6 rounded-lg">
          <p class="text-base text-custom-norText">YOUR CLIENT KEY:</p>
          <div class="w-full h-[50px] rounded-lg mt-4">
            <ReInput v-model="clientKey">
              <template #prefix>
                <Key class="w-6 h-6" />
              </template>
              <template #append>
                <Refresh class="w-6 h-6" />
                <el-divider direction="vertical" class="border-l-[#2C3E96]" />
                <Copy class="w-6 h-6" />
              </template>
            </ReInput>
          </div>
        </div>
        <div class="w-full h-[60%] mt-6 p-6">
          <p class="text-base text-custom-norText">HOW TO USE OUR API?</p>
          <p class="text-3xl text-white mt-2">
            You can use our api with your key
          </p>
          <NavButton :text="'VIEW THE DOCUMENTATION'" class="nav-btn mt-6" />
        </div>
      </div>
    </div>
    <!-- VIEW DETAIL -->
    <div class="h-24 px-4">
      <ContactCard
        :title="'Join our discord for receive 10000 free points! Join and contact us!'"
        :btn-text="'VIEW DETAIL'"
      />
    </div>
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
      <ReTable class="w-[96%]" />
      <Pagination class="mt-4" />
    </div>
  </div>
</template>
<style lang="scss">
.card {
  @apply flex-col-as bg-custom-cardBg/40 rounded-lg;
}

.balance {
  width: 45.833vw;

  // max-width: 890px;
  max-width: 50%;
  min-height: 400px;
  padding: 25px 45px;
}

.api {
  justify-content: flex-start;
  width: 38.542vw;

  // max-width: 840px;
  max-width: 50%;
  min-height: 400px;
}

.green-rec {
  @apply h-[3px] left-[10px] xl:left-[30px] rounded-[3px] xl:rounded-[5px];

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
  position: relative;
  width: 290px;

  &::before {
    @extend .green-rec;

    width: 68%;
  }
}
</style>
