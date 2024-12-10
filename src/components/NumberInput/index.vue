<script setup lang="ts">
// import { Label } from "shadcnUi/components/ui/label";
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput
} from "shadcnUi/components/ui/number-field";
</script>

<template>
  <NumberField class="w-[260px] h-[70px] rounded-lg p-4 bg-[#12193C]">
    <!-- <Label>Age</Label> -->
    <NumberFieldContent class="rounded-lg border-none">
      <NumberFieldDecrement class="indicator" />
      <NumberFieldInput class="bg-[#12193C] text-white border-none text-2xl" />
      <NumberFieldIncrement class="indicator" />
    </NumberFieldContent>
  </NumberField>
</template>

<style lang="scss" scoped>
.indicator {
  color: #fff;
  background: radial-gradient(
      174% 99% at 50% 100%,
      rgb(255 255 255 / 15%) 0%,
      rgb(255 255 255 / 0%) 53%,
      rgb(255 255 255 / 4%) 100%
    ),
    rgb(33 43 102 / 40%);
  background-blend-mode: overlay, overlay;
  border-radius: 8px;
}
</style>
