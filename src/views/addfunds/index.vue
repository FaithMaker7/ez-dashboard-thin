<script setup lang="ts">
// 组件
import ReTable from "@/components/ReTable/index.vue";
import Pagination from "@/components/Pagination/Pagination.vue";
import ShadProgress from "@/components/ShadProgress/index.vue";
import NumberInput from "@/components/NumberInput/index.vue";
import NavButton from "@/components/NavButton/index.vue";
// 图标
import Vip from "@/assets/svg/dashboard/vip.svg?component";
import { Recaptcha, Funcaptcha, Datacom } from "@/assets/svg/logo";
import RightArrow from "@/assets/svg/dashboard/right-arrow.svg?component";
// import { Litcoin, Usdt, Paypal, Tron, Wechat } from "@/assets/svg/paylogo";
import Paypal from "@/assets/svg/paylogo/paypal.svg?component";
import Usdt from "@/assets/svg/paylogo/usdt.svg?component";
import Litcoin from "@/assets/svg/paylogo/litcoin.svg?component";
import Tron from "@/assets/svg/paylogo/tron.svg?component";
import Wechat from "@/assets/svg/paylogo/wechat.svg?component";
import { ref } from "vue";
const levelIndex = ref(1); // 价格等级
const vipSystem = [
  { level: 0, money: "0", free: "0", icon: "" },
  { level: 1, money: "5", free: "1", icon: Recaptcha },
  { level: 2, money: "20", free: "4", icon: Funcaptcha },
  { level: 3, money: "50", free: "5", icon: Datacom },
  { level: 4, money: "100", free: "6", icon: Recaptcha },
  { level: 5, money: "500", free: "10", icon: Funcaptcha },
  { level: 6, money: "1000", free: "15", icon: Datacom },
  { level: 7, money: "2000", free: "20", icon: Recaptcha }
];
const paymentMethods = [
  { method: "Credit Card", icon: Paypal },
  { method: "Paypal", icon: Paypal },
  { method: "Usdt", icon: Usdt },
  { method: "Litcoin", icon: Litcoin },
  { method: "Tron", icon: Tron },
  { method: "Wechat", icon: Wechat }
];
const paymentLogoStyle = (method: string): string => {
  if (method === "Credit Card") {
    return "bg-white";
  } else if (method === "Paypal") {
    return "bg-custom-primary/80 border-custom-primary border-2";
  } else {
    return "bg-custom-primary/60 border-custom-primary border-2";
  }
};
</script>

<template>
  <div>
    <div class="w-full flex-c justify-between">
      <div class="vip-card card-bg">
        <p class="text-lg text-white">VIP BENEFITS</p>
        <p class="text-white text-3xl mt-4">
          You can get extra free points by below vip levels
        </p>
        <div class="sub-card-box mt-4 flex flex-col gap-5">
          <div v-for="item in vipSystem" :key="item.level">
            <div v-if="item.level !== 0" class="sub-card bg-[#222E60]">
              <div class="round-box flex-c">
                <component :is="item.icon" />
              </div>
              <span class="text-white text-xl">Top Up ${{ item.money }}</span>
              <div class="flex-c">
                <div
                  class="point text-white text-lg bg-[#2D3A7A] p-4 rounded-lg"
                >
                  {{ item.free }}% EXTRA POINTS
                </div>
                <RightArrow class="w-4 h-4 ml-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="topup-card card-bg">
        <p class="text-lg text-white">AVAILABLE BALANCE</p>
        <p class="mt-6 text-white">
          <span class="text-5xl">257,000</span>
          <span class="text-custom-norText align-top ml-1">POINTS</span>
        </p>
        <p class="text-lg text-custom-norText mt-4">AMOUNT ($)</p>
        <NumberInput class="mt-4" />
        <div class="vip-progress w-[80%] mt-7">
          <div>
            <div class="level flex-c justify-start">
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
          <p class="text-lg text-white mt-8">PAYMENT METHODS</p>
          <div class="payment-box grid grid-cols-2 grid-rows-3 gap-4">
            <div
              v-for="item in paymentMethods"
              :key="item.method"
              class="payment-item flex justify-start items-center rounded-lg p-4"
            >
              <div
                class="round-logo w-[52px] h-[52px] rounded-full"
                :class="paymentLogoStyle(item.method)"
              >
                <!-- <component :is="item.icon" class="w-full h-full rounded-full" /> -->
              </div>
              <span class="text-white text-lg align-bottom ml-4 mt-4">{{
                item.method
              }}</span>
            </div>
          </div>
          <el-checkbox
            label="I have read and agree this Terms & Condition and Refund Policy"
            value="Value 1"
            class="custom-checkbox mt-6"
          />
          <NavButton :text="'CHECKOUT'" class="nav-btn my-4" />
        </div>
      </div>
    </div>
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
.vip-card {
  width: 45.833vw;

  // max-width: 890px;
  max-width: 50%;
  max-height: 840px;

  // padding: 25px 45px;
}

.topup-card {
  justify-content: flex-start;
  width: 38.542vw;

  // max-width: 840px;
  max-width: 50%;
  max-height: 840px;
}

.sub-card {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 80px;
  border-radius: 8px;
}

.round-box {
  width: 60px;
  height: 60px;
  background: radial-gradient(
    174% 99% at 50% 100%,
    rgb(81 91 171 / 80%) 0%,
    rgb(81 91 171 / 30%) 53%,
    rgb(81 91 171 / 10%) 100%
  );
  border-radius: 999px;
}

.payment-item {
  background: linear-gradient(
    180deg,
    rgb(39 52 122 / 80%) 0%,
    rgb(28 38 89 / 40%) 100%
  );
  background-blend-mode: overlay;
}

:deep(.custom-checkbox) {
  --el-checkbox-font-size: 20px;
  --el-checkbox-text-color: #fff; // label颜色

  .el-checkbox__input {
    .el-checkbox__inner {
      width: 20px;
      height: 20px;
      border-color: #515bab;

      &::after {
        top: 3px; // 垂直位置
        left: 7px; // 水平位置
        width: 3px; // 勾的宽度
        // 调整勾选图标的大小和位置
        height: 8px; // 勾的高度
      }

      &:hover {
        border-color: #fff;
      }
    }
  }

  // 选中状态
  &.is-checked {
    .el-checkbox__input {
      .el-checkbox__inner {
        background-color: #515bab;
        border-color: #515bab;
      }
    }
  }
}

.green-rec {
  @apply h-[3px] left-[10px] xl:left-[40px] rounded-[3px] xl:rounded-[5px];

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
  width: 270px;
  height: 60px;

  &::before {
    @extend .green-rec;

    width: 60%;
  }
}
</style>
