<script setup lang="ts">
import GlowButton from "@/components/GlowButton/index.vue";
import NavButton from "@/components/NavButton/index.vue";
import ContactCard from "@/components/ContactCard/index.vue";
// import ReTable from "@/components/ReTable/index.vue";
// import Pagination from "@/components/Pagination/Pagination.vue";
import NoData from "@/components/NoData/index.vue";
import Gift from "@/assets/svg/referral/gift.svg?component";
</script>

<template>
  <div>
    <div class="first-row">
      <div class="item1 p-6 card-bg flex-col-as min-h-40">
        <div class="text-sm md:text-base">
          <p class="text-white">BALANCE</p>
          <p class="md:mt-6 text-white">
            <span class="text-3xl md:text-5xl">0</span>
            <span class="text-custom-norText align-top ml-1">$</span>
          </p>
        </div>

        <div class="flex-col-as sm:flex-row">
          <GlowButton
            :text="'TRANSFER TO BALANCE'"
            class="w-[220px] h-[45px] sm:h-[55px] mt-6"
          />
          <NavButton :text="'WITHDRAW'" class="nav-btn mt-6" />
        </div>
      </div>
      <div class="item2 p-6 card-bg min-h-40">
        <div class="text-sm md:text-base">
          <p class="text-white">ALL-TIME PROFIT</p>
          <p class="mt-6 text-white">
            <span class="text-3xl md:text-5xl">0</span>
            <span class="text-custom-norText align-top ml-1">$</span>
          </p>
        </div>
      </div>
      <div class="item3 p-6 card-bg min-h-40">
        <div class="text-sm md:text-base">
          <p class="text-white">REFERRALS</p>
          <p class="mt-6 text-white">
            <span class="text-3xl md:text-5xl">0</span>
            <span class="text-custom-norText align-top ml-1">$</span>
          </p>
        </div>
      </div>
    </div>
    <div class="h-24 px-4">
      <ContactCard
        :title="'Referral link: https://dashboard.ez-captcha.com/register?inviteCode=IJdODeAuFUX'"
        :btn-text="'COPY REFERRAL LINK'"
      />
    </div>
    <div
      class="item bg-custom-primary p-6 mt-16 rounded-lg sm:flex-c sm:justify-start"
    >
      <div
        class="gift-icon flex-c rounded-md sm:ml-4 float-left sm:float-none mr-4"
      >
        <Gift />
      </div>
      <p class="text-custom-norText xl:text-2xl sm:ml-8 clear-right">
        You will receive a 10% profit when your referrals add balance (each time
        that your referral add funds, you will get 10%),<br />
        the profit can be directly transferred to the account balance, or you
        can contact customer service to withdraw when it accumulates to 200$.
      </p>
    </div>
    <div class="text-white text-2xl lg:text-4xl mt-6">Referral History</div>
    <div class="item card-bg mt-6">
      <div class="bg-custom-cardBg/40 p-2 rounded-lg">
        <div class="lg:ml-4 text-custom-norText lg:text-2xl">
          Statistics of Hours
        </div>
        <NoData class="mt-2" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.first-row {
  @apply grid gap-[10px] mb-[10px];

  grid-template-columns: 1fr;

  @media (width >= 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (width <= 768px) {
  .item2,
  .item3 {
    grid-column: span 1;
  }

  .first-row {
    grid-template-columns: repeat(2, 1fr);

    .item1 {
      grid-column: 1 / -1;
    }
  }
}

.gift-icon {
  @apply p-4;

  box-sizing: border-box;
  background: radial-gradient(
      199% 99% at 50% 99%,
      rgb(255 255 255 / 85%) 0%,
      rgb(255 255 255 / 85%) 23%,
      rgb(255 255 255 / 10%) 100%
    ),
    rgb(39 52 105 / 100%);
  background-blend-mode: soft-light, overlay;
  border: 2px solid;
  border-image: radial-gradient(
      94% 68% at 50% 99%,
      rgb(48 194 242 / 75%) 0%,
      rgb(48 194 242 / 5%) 100%
    )
    2;
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
  @apply h-[45px] sm:h-[55px] sm:ml-4;

  position: relative;
  width: 215px;

  &::before {
    @extend .green-rec;

    width: 60%;
  }
}
</style>
