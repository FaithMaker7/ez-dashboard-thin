<template>
  <div class="outer text-white sm:border-5">
    <div class="inner-box sm:border-3">
      <div class="cover">
        <Add class="w-3 h-3 sm:w-5 sm:h-5 xl:w-7 xl:h-7" />
        <span class="text-[#A5FEEE] text-xs lg:text-sm ml-1 sm:ml-4">{{
          text
        }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import Add from "../../assets/svg/dashboard/add.svg?component";
import { computed } from "vue";
const props = defineProps({
  size: {
    type: String,
    default: "nav"
  },
  text: {
    type: String,
    default: "LOGIN"
  }
});

// const sizeClass = computed(() => {
//   return props.size === "login" ? "login-size" : "card-size";
// });
</script>
<style lang="scss" scoped>
@import "../../style/func";

.outer {
  position: relative;
  z-index: 1;
  cursor: pointer;
  background: rgb(255 255 255 / 25%);
  background-blend-mode: overlay;
  border: 3px solid transparent;
  border-radius: 999px;
  box-shadow: inset 0 1px 2px 0 rgb(255 255 255 / 50%);
  opacity: 1;
  transition: all 0.3s ease;

  &:hover {
    background: rgb(255 255 255 / 35%);
    transform: translateY(-2px);

    .inner-box {
      .cover {
        background: rgb(255 255 255 / 25%);
      }
    }
  }

  &:active {
    background: rgb(255 255 255 / 20%);
    transform: translateY(1px);
  }

  .inner-box {
    @include gradient-border(
      linear-gradient(90deg, #c3fb31 0%, #09f4e6 60%),
      #181d3c,
      3px,
      false,
      1
    );

    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 999px;

    .cover {
      @include flex-center;

      z-index: 1;
      width: 100%;
      height: 100%;
      padding: 10px 20px;
      background: rgb(255 255 255 / 15%);
      border-radius: 999px;
    }
  }
}

// 发光效果
.outer::before {
  @include absolute-center;

  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  pointer-events: none; // 让伪元素不影响鼠标事件
  content: "";
  background: hsl(155deg 74% 61% / 5%);
  border-radius: 999px;
  box-shadow: 0 0 50px hsl(155deg 74% 61%);
  opacity: 0.5;
  transition: all 0.3s ease;
}

.outer:hover::before {
  box-shadow: 0 0 70px hsl(155deg 74% 61%);
  opacity: 0.8;
}

.outer:active::before {
  box-shadow: 0 0 30px hsl(155deg 74% 61%);
  opacity: 0.4;
}

// 星星装饰
.outer::after {
  position: absolute;
  top: -38px;
  left: -35px;
  z-index: 3;
  width: 300px;
  height: 140px;
  pointer-events: none; // 让伪元素不影响鼠标事件
  content: "";
  background: url("../../assets/svg/decor.svg") no-repeat center/cover;
  opacity: 0.3;
  transition: all 0.3s ease;
}

.outer:hover::after {
  opacity: 0.5;
  transform: rotate(5deg) scale(1.1);
}

.outer:active::after {
  opacity: 0.2;
  transform: rotate(-2deg) scale(0.95);
}

// .card-size {
//   width: 10.042vw;
//   max-width: 212px;

//   .cover {
//     padding: 10px 20px;
//   }
// }

// .login-size {
//   width: 10.042vw;
//   max-width: 212px;
// }
</style>
