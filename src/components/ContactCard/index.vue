<template>
  <div
    class="contact-card relative flex flex-col justify-around items-center sm:flex-row sm:justify-between w-[100%] h-[100%] mx-auto mt-[20px] p-3"
  >
    <div
      class="tag w-[52px] h-[52px] xs:w-[60px] xs:h-[60px] sm:w-[82px] sm:h-[82px] rounded-full z-10 border-[#E65FD1] border-4 flex-c"
    >
      <component
        :is="iconSelector()"
        class="scale-75 sm:scale-100"
        :class="iconStyle"
      />
    </div>

    <div
      class="right w-[90%] md:w-[100%] mx-auto ml-8 flex-c gap-2 sm:gap-6 md:gap-10"
    >
      <div class="text w-[60%] text-white z-10">
        <p class="text-xs sm:text-base md:text-lg lg:leading-10">
          {{ title }}
        </p>
        <p
          v-if="dec !== ''"
          class="text-sm md:text-lg lg:text-2xl lg:mt-[16px] lg:leading-10 text-custom-smText"
        >
          {{ dec }}
        </p>
      </div>
      <div
        class="w-[100px] h-[45px] md:w-[180px] lg:w-[260px] lg:h-[72px] z-20"
      >
        <GraButton :text="btnText" is-square />
      </div>
    </div>
  </div>
</template>

<script setup>
import Tag from "@/assets/svg/tag.svg?component";
import Group from "@/assets/svg/referral/Group.svg?component";
import GraButton from "@/components/GraButton/index.vue";
import { computed } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "Need a better price?"
  },
  dec: {
    type: String,
    default: ""
  },
  btnText: {
    type: String,
    default: "CUSTOMIZE SERVICE"
  }
});
const iconStyle = computed(() => {
  if (props.btnText.includes("REFERRAL")) {
    return "mt-2";
  } else {
    return "";
  }
});
const iconSelector = () => {
  if (props.btnText.includes("REFERRAL")) {
    return Group;
  } else if (props.btnText.includes("DETAIL")) {
    return Tag;
  }
};
</script>

<style lang="scss">
@import "../../style/func";

.contact-card {
  // overflow: hidden;
  // background: radial-gradient(537% 163% at -22% -11%, #e14dff 0%, #ffad0a 100%);4
  @include gradient-border(
    radial-gradient(127% 383% at 10% 71%, #e14dff 0%, #ffad0a 100%),
    #181d3c,
    3px,
    false,
    1
  );

  position: relative;
  border-radius: 16px;

  // inset: 4px;
  &::before {
    position: absolute;
    inset: 0;
    padding: 2px;
    content: "";

    // box-sizing: border-box;
    // border: 3px solid;
    // background: radial-gradient(
    //   537% 163% at -22% -11%,
    //   rgba(225, 77, 255, 0) 0%,
    //   rgba(255, 173, 10, 0.15) 100%
    // );
    background: linear-gradient(90deg, #e14dff 0%, #ffad0a 46.45%) !important;
    border-radius: 16px;
    opacity: 0.08;

    // overflow: hidden;
  }

  &::after {
    position: absolute;
    inset: 0;

    // mix-blend-mode: multiply;
    // filter: opacity(40%) brightness(180%);
    z-index: 10;
    content: "";
    background: url("@/assets/images/pattern.webp");
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.2;
  }
}

.tag {
  position: absolute;
  top: 50%;
  left: -16px;
  z-index: 10;
  background-color: #181d3c;
  transform: translateY(-50%);
}
</style>
