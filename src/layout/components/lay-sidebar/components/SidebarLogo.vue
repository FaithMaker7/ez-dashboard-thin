<script setup lang="ts">
import { getTopMenu } from "@/router/utils";
import { useNav } from "@/layout/hooks/useNav";

defineProps({
  collapse: Boolean
});

const { title, getLogo } = useNav();
</script>

<template>
  <div class="sidebar-logo-container" :class="{ collapses: collapse }">
    <transition name="sidebarLogoFade">
      <router-link
        v-if="collapse"
        key="collapse"
        :title="title"
        class="flex-c h-[100%]"
        :to="getTopMenu()?.path ?? '/'"
      >
        <div
          class="circe w-[60px] h-[60px] bg-[#111940] border border-[#457AF7] rounded-full flex-c"
        >
          <img :src="getLogo()" alt="logo" />
        </div>
        <!-- <span class="sidebar-title">{{ title }}</span> -->
      </router-link>
      <router-link
        v-else
        key="expand"
        :title="title"
        class="sidebar-logo-link"
        :to="getTopMenu()?.path ?? '/'"
      >
        <div
          class="circe w-[45px] h-[45px] 2xl:w-[60px] 2xl:h-[60px] bg-[#111940] border border-[#457AF7] rounded-full flex-c"
        >
          <img :src="getLogo()" alt="logo" />
        </div>
        <div class="ml-3 text-[27px] text-white tracking-wider">
          <span class="text-[#FFDB29]">EZ</span>CAPTCHA
        </div>
      </router-link>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 48px;
  overflow: hidden;

  .sidebar-logo-link {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    height: 100%;
    padding-left: 20px;

    img {
      display: inline-block;
      height: 32px;
    }

    .sidebar-title {
      display: inline-block;
      height: 32px;
      margin: 2px 0 0 12px;
      overflow: hidden;
      font-size: 18px;
      font-weight: 600;
      line-height: 32px;
      color: $subMenuActiveText;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
