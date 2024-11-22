<script setup lang="ts">
import { useNav } from "@/layout/hooks/useNav";
import LaySearch from "../lay-search/index.vue";
import LayNotice from "../lay-notice/index.vue";
import LayNavMix from "../lay-sidebar/NavMix.vue";
import { useTranslationLang } from "@/layout/hooks/useTranslationLang";
import LaySidebarFullScreen from "../lay-sidebar/components/SidebarFullScreen.vue";
import LaySidebarBreadCrumb from "../lay-sidebar/components/SidebarBreadCrumb.vue";
import LaySidebarTopCollapse from "../lay-sidebar/components/SidebarTopCollapse.vue";
import GlobalIcon from "@/assets/svg/global.svg?component";
// import GlobalizationIcon from "@/assets/svg/globalization.svg?component";
import AccountSettingsIcon from "@iconify-icons/ri/user-settings-line";
import LogoutCircleRLine from "@iconify-icons/ri/logout-circle-r-line";
import Setting from "@iconify-icons/ri/settings-3-line";
import Check from "@iconify-icons/ep/check";

const {
  layout,
  device,
  logout,
  onPanel,
  pureApp,
  username,
  userAvatar,
  avatarsStyle,
  toggleSideBar,
  getDropdownItemStyle,
  getDropdownItemClass
} = useNav();

const { t, locale, translationCh, translationEn } = useTranslationLang();
</script>

<template>
  <div class="navbar bg-custom-bg shadow-sm shadow-[rgba(0,21,41,0.08)]">
    <LaySidebarTopCollapse
      v-if="device === 'mobile'"
      class="hamburger-container"
      :is-active="pureApp.sidebar.opened"
      @toggleClick="toggleSideBar"
    />

    <LaySidebarBreadCrumb
      v-if="layout !== 'mix' && device !== 'mobile'"
      class="breadcrumb-container"
    />

    <LayNavMix v-if="layout === 'mix'" />

    <div v-if="layout === 'vertical'" class="vertical-header-right">
      <!-- 菜单搜索 -->
      <!-- <LaySearch id="header-search" /> -->
      <!-- balance -->
      <div class="balance-tag flex-c text-white universal-bg rounded-lg">
        <span>95,298,482</span><span class="text-[#91AAF2]">POINTS</span>
      </div>
      <div class="balance-tag flex-c text-white universal-bg rounded-lg">
        <span>95,298,482</span><span class="text-[#91AAF2]">POINTS</span>
      </div>
      <!-- email -->
      <!-- 国际化 -->
      <el-dropdown id="header-translation" trigger="click">
        <!-- <GlobalizationIcon
          class="navbar-bg-hover w-[40px] h-[48px] p-[11px] cursor-pointer outline-none"
        /> -->
        <div class="globalization-icon flex-c">
          <div class="inner flex-c">
            <GlobalIcon />
          </div>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="translation">
            <el-dropdown-item
              :style="getDropdownItemStyle(locale, 'zh')"
              :class="[' dark:!text-white', getDropdownItemClass(locale, 'zh')]"
              @click="translationCh"
            >
              <IconifyIconOffline
                v-show="locale === 'zh'"
                class="check-zh"
                :icon="Check"
              />
              简体中文
            </el-dropdown-item>
            <el-dropdown-item
              :style="getDropdownItemStyle(locale, 'en')"
              :class="[' dark:!text-white', getDropdownItemClass(locale, 'en')]"
              @click="translationEn"
            >
              <span v-show="locale === 'en'" class="check-en">
                <IconifyIconOffline :icon="Check" />
              </span>
              English
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <!-- 全屏 -->
      <!-- <LaySidebarFullScreen id="full-screen" /> -->
      <!-- 消息通知 -->
      <LayNotice id="header-notice" />
      <!-- 退出登录 -->
      <el-dropdown trigger="click">
        <span class="el-dropdown-link navbar-bg-hover select-none">
          <img :src="userAvatar" :style="avatarsStyle" />
          <p v-if="username" class="dark:text-white">{{ username }}</p>
        </span>
        <template #dropdown>
          <el-dropdown-menu class="logout">
            <el-dropdown-item @click="logout">
              <IconifyIconOffline
                :icon="LogoutCircleRLine"
                style="margin: 5px"
              />
              {{ t("buttons.pureLoginOut") }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span
        class="set-icon navbar-bg-hover"
        :title="t('buttons.pureOpenSystemSet')"
        @click="onPanel"
      >
        <IconifyIconOffline :icon="Setting" />
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/style/func.scss";
.navbar {
  width: 100%;
  // height: 48px;
  padding: 15px 0px 15px 0px;
  overflow: hidden;

  .hamburger-container {
    float: left;
    height: 100%;
    line-height: 48px;
    cursor: pointer;
  }

  .vertical-header-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    min-width: 280px;
    height: 48px;
    color: #000000d9;

    .el-dropdown-link {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 48px;
      padding: 10px;
      color: #000000d9;
      cursor: pointer;

      p {
        font-size: 14px;
      }

      img {
        width: 22px;
        height: 22px;
        border-radius: 50%;
      }
    }
  }

  .breadcrumb-container {
    float: left;
    margin-left: 16px;
  }
}

.translation {
  ::v-deep(.el-dropdown-menu__item) {
    background: rgb(--color-primary);
    padding: 5px 40px;
  }

  .check-zh {
    position: absolute;
    left: 20px;
  }

  .check-en {
    position: absolute;
    left: 20px;
  }
}

.logout {
  width: 120px;

  ::v-deep(.el-dropdown-menu__item) {
    display: inline-flex;
    flex-wrap: wrap;
    min-width: 100%;
  }
}

// 通用背景
.universal-bg {
  background:
    radial-gradient(
      ellipse farthest-side at center,
      transparent 96%,
      rgba(137, 161, 232, 0.02) 100%
    ),
    /* 主色调 */
      radial-gradient(
        circle farthest-side at center,
        rgba(90, 110, 220, 0.1) 0%,
        rgba(70, 90, 200, 0.1) 100%
      );
}
.globalization-icon {
  width: 64px;
  height: 64px;
  border-radius: 999px;
  // @extend .universal-bg;
  background:
    radial-gradient(
      circle at center,
      transparent 30%,
      rgba(48, 63, 134, 0.1) 65%,
      rgba(255, 255, 255, 0.1) 80%,
      rgba(255, 255, 255, 0.1) 100%
    ),
    /* 主色调 */
      radial-gradient(
        circle at center,
        rgba(90, 110, 220, 0.1) 0%,
        rgba(70, 90, 200, 0.01) 100%
      );
  background-blend-mode: soft-light, normal;
  @include icon-interactive;
  .inner {
    width: 100%;
    height: 100%;
    border-radius: 999px;
    @include gradient-border(
      transparent,
      radial-gradient(
        174% 99% at 50% 100%,
        rgba(81, 91, 171, 0.8) 0%,
        rgba(81, 91, 171, 0.3) 53%,
        rgba(81, 91, 171, 0.1) 100%
      ),
      6px,
      false,
      1
    );
    box-shadow: inset 0 0 8px rgba(48, 63, 134, 0.9);
  }
}

.balance-tag {
  width: 256px;
  height: 100%;
}
</style>
