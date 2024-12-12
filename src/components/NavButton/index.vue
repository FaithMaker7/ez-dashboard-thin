<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <div ref="btnBox">
    <Button class="default-btn full-size flex-c">
      <!-- :class="customClass" -->
      <span
        class="text-xs xsm:text-sm 2xl:text-base geo-semiBold text-[#7EE5CC]"
        >{{ text }}</span
      >
      <Arrow class="ml-4 w-3 h-3" />
      <!-- <Img
        v-if="rightIcon !== ''"
        :src="rightIcon"
        class="ml-4 xl:ml-8"
        :class="iconSize"
      /> -->
    </Button>
  </div>
</template>
<script setup>
import { Button } from "shadcnUi/components/ui/button";
import Arrow from "@/assets/svg/dashboard/right-arrow.svg?component";
import { ref, computed } from "vue";
const props = defineProps({
  twClass: {
    type: String,
    default: ""
  },
  text: {
    type: String,
    default: ""
  }
  // 左右两个图标文件链接的props
  // leftIcon: {
  //   type: String,
  //   default: ""
  // },
  // rightIcon: {
  //   type: String,
  //   default: ""
  // }
});
const btnBox = ref(null);

// const defaultSize = computed(() => {
//   // 获取btnBox的宽高，如果元素有宽高就使用默认的，否则返回default-size
//   if (btnBox.value && btnBox.value.offsetWidth > 0 && btnBox.value.offsetHeight > 0) {
//     return 'full-size';
//   } else {
//     return 'default-size';
//   }
// });
// 根据图标名来设定图标的的大小
// const iconSize = computed(() => {
//   if (props.leftIcon !== "") {
//     return props.leftIcon.includes("arrow") || props.leftIcon.includes("add")
//       ? "arrow"
//       : "add";
//   } else if (props.rightIcon !== "") {
//     return props.rightIcon.includes("arrow") || props.rightIcon.includes("add")
//       ? "arrow"
//       : "add";
//   } else {
//     return "add";
//   }
// });
</script>
<style lang="scss" scoped>
@import "../../style/func";

.full-size {
  width: 100%;
  max-width: 297px;
  height: 100%;

  // max-height: 72px;
  padding: 13px 20px;
}

.default-btn {
  @apply sm:border-[3px];

  position: relative;

  // @include gradient-border(
  //   rgba(108,141,199),
  //   rgba(255, 255, 255,0.15),
  //   // rgba(73, 103, 160, 0),
  //   4px,
  //   false,
  //   1
  // );
  background: rgb(255 255 255 / 1%);
  background-blend-mode: overlay;
  backdrop-filter: blur(10px);

  // box-sizing: border-box;
  // border: 5px solid rgba(65, 74, 199, 0.35);
  border: 3px solid rgb(108 141 199 / 50%);
  border-radius: 999px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    @include green-glow;
    @apply w-[160px] h-[25px] md:w-[200px] md:h-[35px];

    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &::after {
    @include noise-bg;

    border-radius: 999px;
    opacity: 0.1;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    background: rgb(255 255 255 / 5%);
    border-color: rgb(108 141 199 / 80%);
    transform: translateY(-2px);

    span {
      color: #9ff3dc;
    }

    &::before {
      opacity: 1;
      transform: scale(1.05);
    }

    &::after {
      opacity: 0.15;
      transform: scale(1.02) rotate(1deg);
    }
  }

  &:active {
    background: rgb(255 255 255 / 2%);
    border-color: rgb(108 141 199 / 30%);
    transform: translateY(1px);

    span {
      color: #5ed3b9;
    }

    &::before {
      opacity: 0.7;
      transform: scale(0.98);
    }

    &::after {
      opacity: 0.08;
      transform: scale(0.98) rotate(-1deg);
    }
  }

  // 确保文字和图标的过渡效果
  span,
  img {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
}

.arrow {
  width: 10px;
  height: 10px;
}

.add {
  width: 30px;
  height: 30px;
}
</style>
