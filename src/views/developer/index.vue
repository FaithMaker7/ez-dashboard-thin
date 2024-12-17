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
    <div class="grid-container">
      <!-- 第一行 -->
      <div class="item1 p-6 card-bg flex-col-as min-h-40">
        <div class="text-sm md:text-base">
          <p class="text-white">BALANCE</p>
          <p class="md:mt-6 text-white">
            <span class="text-3xl md:text-5xl">0</span>
            <span class="text-custom-norText align-top ml-1">$</span>
          </p>
        </div>
        <GlowButton
          :text="'TRANSFER TO BALANCE'"
          class="w-[220px] h-[45px] sm:h-[55px] mt-6"
        />
      </div>
      <div class="item2 p-6 card-bg min-h-40">
        <div>
          <p class="text-base text-white">ALL-TIME PROFIT</p>
          <p class="mt-6 text-white">
            <span class="text-5xl">0</span>
            <span class="text-custom-norText align-top ml-1">$</span>
          </p>
        </div>
      </div>
      <div class="item3 p-6 card-bg min-h-40">
        <div>
          <p class="text-base text-white">REFERRALS</p>
          <p class="mt-6 text-white">
            <span class="text-5xl">0</span>
            <span class="text-custom-norText align-top ml-1">$</span>
          </p>
        </div>
      </div>
    </div>
    <!-- 后面每行占满宽度 -->
    <div class="h-24 px-4">
      <ContactCard
        :title="'Referral link: https://dashboard.ez-captcha.com/register?inviteCode=IJdODeAuFUX'"
        :btn-text="'COPY REFERRAL LINK'"
      />
    </div>
    <div class="item bg-custom-primary p-6 mt-10 rounded-lg">
      <div class="sm:ml-4 text-custom-norText text-2xl">
        Share in proportion
      </div>
      <div class="sm:flex-c sm:justify-start mt-8">
        <div class="flex-col-center sm:ml-4 float-left sm:float-none mr-4">
          <p class="text-white text-3xl">5% - 10%</p>
          <NavButton :text="'Contact Us'" class="nav-btn mt-6" />
        </div>
        <p class="text-custom-norText xl:text-2xl sm:ml-8 clear-right">
          Please incorporate your App ID in the task parameters. This enables
          you to obtain a portion of the spending of the users you refer,
          ranging from 5% to 20%. The initial rate is dependent on the
          application's instructions, but we will assist in determining this. If
          it fails to meet your expectations, you are free to make adjustments
          to better satisfy your needs.
        </p>
      </div>
    </div>
    <!-- <div class="text-white text-4xl mt-6">Apps</div> -->
    <div class="item card-bg mt-6">
      <div class="bg-custom-cardBg/40 p-2 rounded-lg">
        <div class="ml-4 text-custom-norText text-2xl">Apps</div>
        <NoData class="mt-2" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid-container {
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

  .grid-container {
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
  @apply h-[3px] left-[20px] sm:left-[30px] rounded-[3px] xl:rounded-[5px];

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
  @apply w-[140px] h-[45px] sm:h-[55px] sm:w-[200px] sm:ml-4;

  position: relative;

  &::before {
    @extend .green-rec;

    width: 68%;
  }
}
</style>
