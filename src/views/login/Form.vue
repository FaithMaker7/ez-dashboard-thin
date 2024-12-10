<script setup lang="ts">
import { ref, reactive, toRaw, onMounted, onBeforeUnmount } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { initRouter, getTopMenu } from "@/router/utils";
import { useUserStoreHook } from "@/store/modules/user";
import type { FormInstance } from "element-plus";
import { loginRules } from "./utils/rule";
import Motion from "./utils/motion";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { message } from "@/utils/message";
import Lock from "@iconify-icons/ri/lock-fill";
import User from "@iconify-icons/ri/user-3-fill";
import ForgotLock from "@/assets/svg/lock.svg?component";
import GlowButton from "@/components/GlowButton/index.vue";
import { $t, transformI18n } from "@/plugins/i18n";
const { t } = useI18n();
const isLogin = ref(true);
const isForget = ref(false);
const router = useRouter();
const loading = ref(false);
const loginFormRef = ref<FormInstance>();
const signupFormRef = ref<FormInstance>();
const resetFormRef = ref<FormInstance>();
const loginForm = reactive({
  username: "admin@qq.com",
  password: "admin123"
});
const signupForm = reactive({
  username: "admin@qq.com",
  password: "admin123"
});
const resetForm = reactive({
  username: "admin@qq.com"
});

const onSwichForm = () => {
  isLogin.value = !isLogin.value;
};
const onSwichForget = () => {
  isForget.value = true;
};
const onSwichLogin = () => {
  isForget.value = false;
  isLogin.value = true;
};
const onSignUp = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      loading.value = true;
      // 这里添加注册逻辑
      useUserStoreHook()
        .registerByUsername({
          username: signupForm.username,
          password: signupForm.password
        })
        .then(res => {
          if (res.success) {
            message(t("signup.pureSignupSuccess"), { type: "success" });
            isLogin.value = true; // 注册成功后切换到登录表单
          } else {
            message(t("signup.pureSignupFail"), { type: "error" });
          }
        })
        .finally(() => (loading.value = false));
    }
  });
};
const onLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      loading.value = true;
      useUserStoreHook()
        .loginByUsername({
          username: loginForm.username,
          password: loginForm.password
        })
        .then(res => {
          if (res.success) {
            // 获取后端路由
            return initRouter().then(() => {
              router.push(getTopMenu(true).path).then(() => {
                message(t("login.pureLoginSuccess"), { type: "success" });
              });
            });
          } else {
            message(t("login.pureLoginFail"), { type: "error" });
          }
        })
        .finally(() => (loading.value = false));
    }
  });
};

const onForget = () => {};

/** 使用公共函数，避免`removeEventListener`失效 */
function onkeypress({ code }: KeyboardEvent) {
  if (["Enter", "NumpadEnter"].includes(code)) {
    if (isLogin.value) {
      onLogin(loginFormRef.value);
    } else {
      onSignUp(signupFormRef.value);
    }
  }
}

onMounted(() => {
  window.document.addEventListener("keypress", onkeypress);
});

onBeforeUnmount(() => {
  window.document.removeEventListener("keypress", onkeypress);
});
</script>

<template>
  <div>
    <Motion>
      <p v-if="!isForget" class="outline-none text-white text-6xl mt-8">
        {{ isLogin ? t("login.pureLogin") : t("signup.pureSignup") }}
      </p>
      <p v-else class="text-custom-norText text-xl mt-4">
        {{ t("forget.pureForget") }}
      </p>
      <p class="text-custom-norText text-xl mt-4">
        It's so easy to solve captcha
      </p>
    </Motion>
    <!-- 登录表单 -->
    <el-form
      v-if="isLogin && !isForget"
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginRules"
      size="large"
      class="mt-16"
    >
      <Motion :delay="100">
        <el-form-item prop="username" label="Email:" label-position="top">
          <el-input
            v-model="loginForm.username"
            clearable
            :placeholder="t('login.pureUsername')"
            :prefix-icon="useRenderIcon(User)"
          />
        </el-form-item>
      </Motion>

      <Motion :delay="150">
        <el-form-item prop="password" label="Password:" label-position="top">
          <el-input
            v-model="loginForm.password"
            clearable
            show-password
            :placeholder="t('login.purePassword')"
            :prefix-icon="useRenderIcon(Lock)"
          />
        </el-form-item>
      </Motion>

      <Motion :delay="200">
        <div class="flex-bc">
          <el-checkbox
            label="Remember Me"
            value="Value 1"
            class="custom-checkbox"
            size="default"
          />
          <div class="text-custom-norText text-lg flex-sc">
            <ForgotLock class="w-5 h-5" />
            <span class="ml-2 cursor-pointer" @click="onSwichForget"
              >Forgot Password?</span
            >
          </div>
        </div>
      </Motion>

      <Motion :delay="250" class="h-40 flex-c">
        <GlowButton
          class="w-[200px] h-[65px] mt-4"
          :text="t('login.pureLogin')"
          :loading="loading"
          @click="onLogin(loginFormRef)"
        />
      </Motion>
    </el-form>

    <!-- 注册表单 -->
    <el-form
      v-if="!isLogin && !isForget"
      ref="signupFormRef"
      :model="signupForm"
      :rules="loginRules"
      size="large"
      class="mt-16"
    >
      <Motion :delay="100">
        <el-form-item prop="username" label="Email:" label-position="top">
          <el-input
            v-model="signupForm.username"
            clearable
            :placeholder="t('signup.pureUsername')"
            :prefix-icon="useRenderIcon(User)"
          />
        </el-form-item>
      </Motion>

      <Motion :delay="150">
        <el-form-item prop="password" label="Password:" label-position="top">
          <el-input
            v-model="signupForm.password"
            clearable
            show-password
            :placeholder="t('signup.purePassword')"
            :prefix-icon="useRenderIcon(Lock)"
          />
        </el-form-item>
      </Motion>

      <Motion :delay="250" class="h-40 flex-c">
        <GlowButton
          class="w-[200px] h-[65px] mt-4"
          :text="t('signup.pureSignup')"
          :loading="loading"
          @click="isLogin ? onLogin(loginFormRef) : onSignUp(signupFormRef)"
        />
      </Motion>
    </el-form>

    <!-- 重置密码表单 -->
    <el-form
      v-if="isForget"
      ref="resetFormRef"
      :model="resetForm"
      :rules="loginRules"
      size="large"
      class="mt-16"
    >
      <Motion :delay="150">
        <el-form-item prop="username" label="Email:" label-position="top">
          <el-input
            v-model="resetForm.username"
            clearable
            :placeholder="t('forget.purePlaceholder')"
            :prefix-icon="useRenderIcon(User)"
          />
        </el-form-item>
      </Motion>

      <Motion :delay="250" class="h-40 flex-c">
        <GlowButton
          class="w-[200px] h-[65px] mt-4"
          :text="t('forget.pureForgetSubmit')"
          :loading="loading"
          @click="onForget()"
        />
      </Motion>
    </el-form>

    <!-- 底部切换提示 -->
    <Motion :delay="300" class="h-40 flex-c text-xl">
      <p v-if="!isForget" class="text-custom-norText">
        {{ isLogin ? "Don't have an account?" : "Already have an account?" }}
        <span class="text-white cursor-pointer" @click="onSwichForm">
          {{ isLogin ? t("signup.pureSignup") : t("login.pureLogin") }}
        </span>
      </p>
      <div v-else class="text-custom-norText">
        <p class="w-[400px] text-base">{{ t("forget.pureForgetTip") }}</p>
        <p class="mt-4 text-white cursor-pointer" @click="onSwichLogin">
          {{ t("forget.pureForgetBack") }}
        </p>
      </div>
    </Motion>
  </div>
</template>
