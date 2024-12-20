<script setup lang="ts">
import { ref } from "vue";
// import Motion from "./utils/motion";
import Form from "./Form.vue";
import { useNav } from "../../layout/hooks/useNav";
import { useLayout } from "../../layout/hooks/useLayout";
import { captchaList } from "./utils/static";
import { useTranslationLang } from "../../layout/hooks/useTranslationLang";
import { useDataThemeChange } from "../../layout/hooks/useDataThemeChange";
import Check from "@iconify-icons/ep/check";
import globalization from "@/assets/svg/globalization.svg?component";

defineOptions({
  name: "Login"
});
const { initStorage } = useLayout();
initStorage();

const { dataTheme, overallStyle, dataThemeChange } = useDataThemeChange();
dataThemeChange(overallStyle.value);
const { title, getDropdownItemStyle, getDropdownItemClass } = useNav();
const { locale, translationCh, translationEn } = useTranslationLang();
</script>

<template>
  <div class="h-full select-none bg-[#12193C]">
    <!-- <img :src="bg" class="wave" /> -->
    <div class="flex-c absolute right-5 top-3">
      <!-- 国际化 -->
      <el-dropdown trigger="click">
        <globalization
          class="hover:text-primary hover:!bg-[transparent] w-[20px] h-[20px] ml-1.5 cursor-pointer outline-none duration-300"
        />
        <template #dropdown>
          <el-dropdown-menu class="translation">
            <el-dropdown-item
              :style="getDropdownItemStyle(locale, 'zh')"
              :class="['dark:!text-white', getDropdownItemClass(locale, 'zh')]"
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
              :class="['dark:!text-white', getDropdownItemClass(locale, 'en')]"
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
    </div>
    <div class="login-container">
      <div
        class="login-intro md:max-w-[500px] pc:min-w-[720px] mx-auto flex-col-cs"
      >
        <!-- <component :is="toRaw(illustration)" /> -->
        <p class="text-white text-3xl md:text-4xl xl:text-6xl pc:text-8xl">
          Unleashing Your<br class="hidden pc:block" />
          RPA Potential
        </p>
        <p class="text-white text-sm md:text-lg pc:text-2xl mt-2 md:mt-6">
          Discover seamless automatic captcha solving with our<br
            class="hidden pc:block"
          />
          AI-powered Auto Web Unblock technology!
        </p>
        <div class="captcha-list flex-col-as gap-3 pc:gap-9 mt-2 md:mt-9">
          <div
            v-for="item in captchaList"
            :key="item.title"
            class="captcha-item flex-sc"
          >
            <div class="round-box flex-c">
              <component :is="item.icon" class="scale-75 2xl:scale-100" />
            </div>
            <div class="ml-5">
              <p class="text-white pc:text-pc">{{ item.title }}</p>
              <p
                v-if="item.dec !== ''"
                class="text-custom-norText pc:text-lg pc:mt-3"
              >
                {{ item.dec }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="login-box">
        <div class="login-form form-bg">
          <!-- 登录注册表单组件  -->
          <Form />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/style/login.css";
</style>

<style lang="scss" scoped>
@import "@/style/func";

:deep(.el-input-group__append, .el-input-group__prepend) {
  padding: 0;
}

.translation {
  ::v-deep(.el-dropdown-menu__item) {
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

.round-box {
  @apply w-11 h-11 2xl:w-16 2xl:h-16;

  background: radial-gradient(
    174% 99% at 50% 100%,
    rgb(81 91 171 / 80%) 0%,
    rgb(81 91 171 / 30%) 53%,
    rgb(81 91 171 / 10%) 100%
  );
  border-radius: 999px;
}

:deep(.custom-checkbox) {
  --el-checkbox-font-size: 20px; // label字体大小
  --el-checkbox-text-color: #fff; // label颜色

  .el-checkbox__input {
    .el-checkbox__inner {
      width: 20px;
      height: 20px;
      background-color: transparent;
      border-color: #515bab;

      &::after {
        top: 2px; // 垂直位置
        left: 7px; // 水平位置
        width: 2px; // 勾的宽度
        // 调整勾选图标的大小和位置
        height: 8px; // 勾的高度
        // 勾的颜色
        border-color: #5cf88a;
        border-width: 3px;
      }

      &:hover {
        border-color: #fff;
      }

      // 勾选后多选框内的背景色
      // &.is-checked {
      //   background-color: #5cf88a;
      // }
    }

    &.is-checked + .el-checkbox__label {
      color: #a3a9d7;
    }

    .el-checkbox--large .el-checkbox__label {
      font-size: 18px;

      // is-checked后的字体颜色
    }
  }
}

:deep(.el-form-item__label) {
  font-size: 16px;
  color: #a3a9d9;
}

.form-bg {
  position: relative;
  background: radial-gradient(
    66% 65% at 60% 55%,
    rgb(90 123 240 / 42%) 0%,
    rgb(20 27 60 / 40%) 100%
  );
  background-blend-mode: overlay;
  border-radius: 1rem;
  box-shadow:
    rgb(0 0 0 / 0%) 0 0 0 1rem inset,
    rgb(80 107 245 / 40%) 0 0 0.625rem 0;

  // rgba(40, 162, 243, 0.6) 0rem 0rem 0.625rem 0rem;
  // @apply transition-all duration-300 hover:translate-y-[-8px];
}

.form-bg::before {
  position: absolute;
  inset: 0;
  padding: 0.125rem;
  pointer-events: none;
  content: "";
  background: radial-gradient(
    66% 85% at 65% 55%,
    rgb(34 53 221) 0%,
    rgb(20 27 60 / 90%) 100%
  );
  background-blend-mode: soft-light;
  border-radius: 1rem;
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: xor;
  mask-composite: exclude;
}

.form-bg::after {
  // 添加噪点背景
  @include noise-bg;

  border-radius: 1rem;
}
</style>
