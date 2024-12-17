<script setup lang="ts">
import { cn } from "shadcnUi/lib/utils";
import {
  SwitchRoot,
  type SwitchRootEmits,
  type SwitchRootProps,
  SwitchThumb,
  useForwardPropsEmits
} from "radix-vue";
import { computed, type HTMLAttributes } from "vue";

const props = defineProps<
  SwitchRootProps & { class?: HTMLAttributes["class"] }
>();

const emits = defineEmits<SwitchRootEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <SwitchRoot
    v-bind="forwarded"
    :class="
      cn(
        'peer inline-flex h-11 px-1 shrink-0 cursor-pointer items-center rounded-lg border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-custom-bg ',
        props.class
      )
    "
  >
    <SwitchThumb
      :class="
        cn(
          'z-10 pointer-events-none text-center flex items-center justify-center h-8 w-[50%] rounded-sm bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-[100%] data-[state=unchecked]:translate-x-0'
        )
      "
    >
      <span
        :class="
          cn(
            'text-[10px] phone:text-xs sm:text-sm text-center',
            'data-[state=checked]:text-primary data-[state=unchecked]:text-gray-400'
          )
        "
      >
        {{ forwarded.checked ? "DAY" : "HOUR" }}
      </span>
    </SwitchThumb>
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] px-1 flex-c justify-between text-sm text-white"
    >
      <div
        class="w-[50%] text-center text-[10px] phone:text-xs sm:text-sm leading-8"
      >
        HOUR
      </div>
      <div
        class="w-[50%] text-center text-[10px] phone:text-xs sm:text-sm leading-8"
      >
        DAY
      </div>
    </div>
  </SwitchRoot>
</template>
