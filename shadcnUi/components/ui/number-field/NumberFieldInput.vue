<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "shadcnUi/lib/utils";
import { NumberFieldInput } from "radix-vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <NumberFieldInput
    data-slot="input"
    :class="
      cn(
        'flex h-10 w-full rounded-md bg-background py-2 text-sm text-center disabled:cursor-not-allowed disabled:opacity-50',
        props.class
      )
    "
  />
</template>
