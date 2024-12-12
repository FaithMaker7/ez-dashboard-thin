<script setup>
import { ref } from "vue";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger
} from "shadcnUi/components/ui/menubar";
import { Separator } from "shadcnUi/components/ui/separator";
const triggerClass =
  "bg-close px-4 py-2 flex-row-center text-center rounded-md geo-medium text-[10px] border-2 border-[#2C3367] data-[state=closed]:text-white data-[state=open]:text-[#a9c7f8]";
const props = defineProps({
  tagList: {
    type: Array,
    default: () => ["All Service", "reCAPTCHA", "DataDome", "Akamai"]
  }
});
const selectedTag = ref("All Service");
const emit = defineEmits(["selected"]);
const changeTag = tag => {
  selectedTag.value = tag;
  emit("selected", tag);
};
</script>

<template>
  <Menubar
    class="w-full h-full bg-transparent border-none flex-wrap justify-center gap-2"
  >
    <template v-for="(tag, index) in tagList" :key="index">
      <MenubarMenu>
        <MenubarTrigger
          :class="[
            triggerClass,
            {
              'selected-yellow': selectedTag === tag,
              'selected-green': index === tagList.length - 1
            }
          ]"
          @click="changeTag(tag)"
        >
          <div class="w-full flex items-center justify-center">
            <div class="inline-flex items-center gap-1 whitespace-nowrap">
              <Transition name="fade">
                <IconifyIconOnline
                  v-show="selectedTag === tag || index === tagList.length - 1"
                  icon="ep:check"
                  class="w-4 h-3 flex-shrink-0"
                />
              </Transition>
              <span class="text-sm flex-shrink-0 whitespace-break-spaces">{{
                tag
              }}</span>
            </div>
          </div>
        </MenubarTrigger>
      </MenubarMenu>
      <Separator
        v-if="index === 0"
        label=""
        orientation="vertical"
        class="w-[2px] h-3 bg-[#2C3367] mx-2"
      />
    </template>
  </Menubar>
</template>

<style lang="scss" scoped>
@import "@/style/func";

.bg-close {
  background: rgb(43 52 93 / 30%);
  background-blend-mode: overlay;
}

.selected-yellow {
  @include gradient-border(
    linear-gradient(
      180deg,
      rgba(238, 255, 51, 0.05) 0%,
      rgba(238, 255, 51, 0.2) 100%
    ),
    linear-gradient(
      180deg,
      rgba(238, 255, 51, 0.03) 30%,
      rgba(238, 255, 51, 0.2) 100%
    ),
    3px,
    false,
    1
  );

  color: #ef3;
}

.selected-green {
  @include gradient-border(
    linear-gradient(
      180deg,
      rgba(80, 229, 167, 0.05) 0%,
      rgba(80, 229, 167, 0.2) 100%
    ),
    linear-gradient(
      180deg,
      rgba(80, 229, 167, 0.03) 30%,
      rgba(80, 229, 167, 0.2) 100%
    ),
    3px,
    false,
    1
  );

  color: #50e5a7;
}

.fade-enter-active,
.fade-leave-active {
  position: relative;
  transition: all 0.3s ease;

  // width: 16px;
}

.fade-enter-from,
.fade-leave-to {
  width: 0;
  opacity: 0;
}
</style>
