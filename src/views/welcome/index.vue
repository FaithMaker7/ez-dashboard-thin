<script setup lang="ts">
import Vip from "@/assets/svg/dashboard/vip.svg?component";
import GlowButton from "@/components/GlowButton/index.vue";
defineOptions({
  name: "Welcome"
});
</script>

<template>
  <div class="balance-card flex-col-start bg-custom-cardBg/40 rounded-lg">
    <p class="text-base text-white">BALANCE</p>
    <p class="mt-6 text-white">
      <span class="text-5xl">95,298,482</span>
      <span class="text-[#A3A9D9] align-top ml-1">POINTS</span>
    </p>
    <div class="vip-progress mt-7">
      <div>
        <div class="level flex-c">
          <Vip class="w-8 h-6 mr-2" />
          <span class="text-custom-yellow align-bottom leading-6">VIP{{}}</span>
          <div class="tips text-white ml-8">
            You can get {{}}% extra points on top up
          </div>
        </div>
      </div>
      <div class="progress">{{}}</div>
    </div>
    <div class="btn-box flex-c mt-7">
      <GlowButton :size="'card'" />
    </div>
  </div>
</template>
<style lang="scss">
.balance-card {
  width: 45.833vw;
  max-width: 880px;
  max-height: 400px;
  padding: 25px;
}
</style>
