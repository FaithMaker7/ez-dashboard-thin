<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ""
  },
  placeholder: {
    type: String,
    default: "请输入"
  }
});

const emit = defineEmits(["update:modelValue", "change"]);

const inputValue = ref(props.modelValue);

// 监听 props 变化
watch(
  () => props.modelValue,
  newValue => {
    inputValue.value = newValue;
  }
);

// 修改输入值处理函数
const handleInput = (value: string) => {
  inputValue.value = value;
  emit("update:modelValue", value);
  emit("change", value);
};
</script>

<template>
  <div class="re-input">
    <!-- 输入框容器 -->
    <el-input
      v-model="inputValue"
      :placeholder="placeholder"
      @input="handleInput"
    >
      <!-- 将前置图标以插槽形式插入 -->
      <template #prefix>
        <slot name="prefix" />
      </template>

      <!-- 后置按钮插槽 -->
      <template #append>
        <slot name="append" />
      </template>
    </el-input>
  </div>
</template>

<style lang="scss" scoped>
.re-input {
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 100%;

  :deep(.el-input) {
    height: 100%;
    background-color: #001529;
    border-radius: 10px;
  }

  :deep(.el-input-group--append > .el-input__wrapper) {
    box-shadow: none;
  }

  :deep(.el-input-group__append) {
    padding: 20px;
    overflow: hidden;
    background-color: #001529;
    border-radius: 10px;
    box-shadow: none;
  }
}
</style>
