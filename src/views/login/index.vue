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
  <div class="select-none bg-[#12193C]">
    <!-- <img :src="bg" class="wave" /> -->
    <div class="flex-c absolute right-5 top-3 language-switch">
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
      <div class="login-intro">
        <p class="text-white text-4xl lg:text-8xl">
          Unleashing Your<br />
          RPA Potential
        </p>
        <p class="text-white mt-2 lg:mt-6 lg:text-2xl">
          Discover seamless automatic captcha solving with our<br
            class="hide-mobile"
          />
          AI-powered Auto Web Unblock technology!
        </p>
        <div class="captcha-list">
          <div
            v-for="item in captchaList"
            :key="item.title"
            class="captcha-item"
          >
            <div class="round-box flex-c">
              <component :is="item.icon" class="w-12 h-12" />
            </div>
            <div class="captcha-content">
              <p class="responsive-text">{{ item.title }}</p>
              <p v-if="item.dec" class="responsive-desc">
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

// 响应式调整
@media screen and (width <= 1180px) {
  .login-intro {
    min-width: 580px;
  }

  .responsive-title {
    font-size: 4rem;
  }

  .responsive-subtitle {
    font-size: 1.25rem;
  }

  .round-box {
    width: 50px;
    height: 50px;
  }

  .captcha-list {
    gap: 1.5rem;
  }
}

@media screen and (width <= 968px) {
  .language-switch {
    top: 1rem;
    right: 1rem;
  }

  .login-intro {
    align-items: center;
    min-width: 100%;
    padding: 2rem;
    text-align: center;
  }

  .responsive-title {
    font-size: 3rem;
    text-align: center;
  }

  .responsive-subtitle {
    font-size: 1.125rem;
    text-align: center;
  }

  .hide-mobile {
    display: none;
  }

  .captcha-list {
    gap: 1rem;
  }

  .form-bg {
    width: 100%;
    max-width: 480px;
    margin: 2rem auto;
  }
}

@media screen and (width <= 480px) {
  .login-intro {
    padding: 1rem;
  }

  .responsive-title {
    font-size: 2.5rem;
  }

  .responsive-subtitle {
    font-size: 1rem;
  }

  .responsive-text {
    font-size: 1.25rem;
  }

  .responsive-desc {
    font-size: 1rem;
  }

  .round-box {
    width: 40px;
    height: 40px;
  }

  .form-bg {
    padding: 1rem;
    margin: 1rem auto;
  }
}

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

// 响应式基础样式
.login-intro {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 720px;
}

.captcha-list {
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  width: 100%;
  margin-top: 2.25rem;
}

.captcha-item {
  display: flex;
  align-items: center;
}

.captcha-content {
  margin-left: 1.25rem;
}

.responsive-text {
  font-size: 1.5rem;
  color: white;
}

.responsive-desc {
  margin-top: 0.75rem;
  font-size: 1.125rem;
}
</style>
