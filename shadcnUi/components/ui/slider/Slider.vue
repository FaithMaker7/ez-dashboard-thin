<script setup>
import { cn } from "shadcnUi/lib/utils";
import {
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  useForwardPropsEmits
} from "radix-vue";
import { computed } from "vue";

const props = defineProps({
  name: { type: String, required: false },
  defaultValue: { type: Array, required: false },
  modelValue: { type: Array, required: false, default: () => [0] },
  disabled: { type: Boolean, required: false },
  orientation: { type: String, required: false },
  dir: { type: String, required: false },
  inverted: { type: Boolean, required: false },
  min: { type: Number, required: false },
  max: { type: Number, required: false },
  step: { type: Number, required: false },
  minStepsBetweenThumbs: { type: Number, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false }
});
const emits = defineEmits(["update:modelValue", "valueCommit"]);

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
// console.log(props.modelValue);
</script>

<template>
  <SliderRoot
    :class="
      cn(
        'relative flex w-full touch-none select-none items-center data-[orientation=vertical]:flex-col data-[orientation=vertical]:w-2 data-[orientation=vertical]:h-full',
        props.class
      )
    "
    v-bind="forwarded"
    :disabled="disabled"
  >
    <SliderTrack
      class="relative h-2 w-full bg-foreground data-[orientation=vertical]:w-2 grow overflow-hidden rounded-full"
    >
      <SliderRange
        class="absolute !bg-[#FAB516] h-full data-[orientation=vertical]:w-full"
      />
    </SliderTrack>
    <SliderThumb
      v-for="(value, key) in modelValue"
      :key="key"
      class="block h-4 w-4 rounded-full border-2 border-[#FAB516] bg-background ring-offset-[#FAB516] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    >
      <div
        class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white"
      >
        {{ Math.round((value / max) * 100) }}%
      </div>
    </SliderThumb>
  </SliderRoot>
</template>
