<template>
  <div class="relative outer w-full h-full" :class="{ 'btn-square': isSquare }">
    <div class="btn-default w-full h-full" :class="{ 'btn-square': isSquare }">
      <div class="glow w-full h-full" :class="{ 'btn-square': isSquare }">
        <!-- <Img
          v-if="icon !== ''"
          :src="icon"
          class="w-5 h-5 sm:w-[30px] sm:h-[30px] z-30"
        /> -->
        <div
          class="text-white text-xs md:text-sm lg:text-base text-center sm:text-nowrap geo-medium z-30"
        >
          {{ text }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  isSquare: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    default: "REGISTER NOW"
  },
  icon: {
    type: String,
    default: ""
  }
});
</script>
<style scoped lang="scss">
@import "../../style/func";

.outer {
  background: rgb(255 255 255 / 8%);
  isolation: isolate;
  border-radius: 999px;

  // box-shadow:
  //   inset 0 0 20px 2px rgba(255, 255, 255, 0.5),
  //   inset 0 0 10px 0px rgba(255, 255, 255, 0.01),
  //   inset 0 0 10px 0px rgba(255, 255, 255, 0.01),
  //   0 5px 5px rgba(0, 0, 0, 0.4);
  box-shadow: inset 0 1px 2px 0 rgb(255 255 255 / 50%);
  transition: all 0.1s;
}

.btn-default {
  @include gradient-border(
    transparent,
    linear-gradient(90deg, #e862c5 0%, #fea214 100%),
    4px,
    false,
    1
  );
  @apply sm:border-[6px];

  position: relative;
  cursor: pointer;
  border-radius: 999px;
  transition: all 0.1s;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
  }

  // box-shadow:
  //   0 0 5px rgba(255, 255, 255, 0.5),
  //   0 0 10px rgba(255, 255, 255, 0.3),
  //   0 0 15px rgba(255, 255, 255, 0.1);
}

.glow {
  @include flex-center;

  position: relative;
  overflow: hidden;
  border-radius: 999px;
  box-shadow:
    0 0 100px rgb(213 49 251 / 30%),
    0 0 50px rgb(244 120 9 / 40%),
    0 0 15px rgb(255 255 255 / 10%);

  &::before {
    position: absolute;
    inset: 0;
    pointer-events: none;
    content: "";
    border: 2px solid;
    border-image: radial-gradient(
        172% 99% at 50% 100%,
        #fff 0%,
        rgb(255 255 255 / 0%) 34%,
        rgb(255 255 255 / 0%) 100%
      )
      3;
  }

  &:hover {
    box-shadow:
      0 0 120px rgb(213 49 251 / 40%),
      0 0 70px rgb(244 120 9 / 50%),
      0 0 20px rgb(255 255 255 / 20%);
  }

  &:active {
    box-shadow:
      0 0 80px rgb(213 49 251 / 20%),
      0 0 30px rgb(244 120 9 / 30%),
      0 0 10px rgb(255 255 255 / 10%);
  }
}

.btn-default::before {
  @include noise-bg;

  // opacity: 0.9;
  // background: radial-gradient(1604% 163% at -22% -11%, #d531fb 0%, #f47809 100%);
  // filter: blur(140px);
  // z-index: 0;
  pointer-events: none; // 让伪元素不影响鼠标事件
  border-radius: 999px;
}

// 星星的装饰效果
.outer::after {
  position: absolute;
  top: -30px;
  left: 30px;
  z-index: 3;
  width: 200px;
  height: 140px;
  content: "";
  background: url("@/assets/svg/decor.svg") no-repeat center/cover;
  opacity: 0.5;
  transition: all 0.1s;
}

.outer:hover::after {
  pointer-events: none; // 让伪元素不影响鼠标事件
  opacity: 0.8;
  transform: rotate(5deg) scale(1.05);
}

.outer:active::after {
  pointer-events: none; // 让伪元素不影响鼠标事件
  opacity: 0.4;
  transform: rotate(-2deg) scale(0.98);
}

.btn-square {
  position: relative;
  border-radius: 10px;
}

.priceClass {
  @apply text-xs xl:text-base 2xl:text-xl ml-0 p-2;
}
</style>
