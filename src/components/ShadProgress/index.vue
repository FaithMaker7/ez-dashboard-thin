<script setup>
import { ref, computed, watch } from "vue";
import { Slider } from "shadcnUi/components/ui/slider";
// 接受父组件传来的数值
const props = defineProps({
  level: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  }
});

// 使用一个内部状态来追踪实时的滑动值
const internalValue = ref(props.level);

// 监听外部 level 变化
watch(
  () => props.level,
  newVal => {
    internalValue.value = newVal;
  }
);

const modelValue = computed(() => [internalValue.value]);
const emit = defineEmits(["update:level"]);

// 处理滑动过程中的更新
const handleUpdate = value => {
  // 更新内部状态，允许小数值，使滑动平滑
  internalValue.value = value[0];
};

// value-commit是Radix Vue提供的一个事件，在用户完成滑动操作（松开鼠标或触摸结束）时触发。
// 处理滑动结束时的更新
const handleValueCommit = value => {
  // 当滑动结束时，发射四舍五入后的整数值
  const roundedValue = Math.round(value[0]);
  internalValue.value = roundedValue;
  emit("update:level", roundedValue);
};
</script>

<template>
  <Slider
    :model-value="modelValue"
    :max="max"
    :step="0.01"
    :min="0"
    @update:model-value="handleUpdate"
    @value-commit="handleValueCommit"
  />
</template>
