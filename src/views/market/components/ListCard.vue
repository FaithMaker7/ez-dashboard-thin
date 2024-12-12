<script setup lang="ts">
import { computed, PropType } from "vue";
// import shopIcon from "@/assets/svg/shop.svg?component";
// import laptopIcon from "@/assets/svg/laptop.svg?component";
// import serviceIcon from "@/assets/svg/service.svg?component";
// import calendarIcon from "@/assets/svg/calendar.svg?component";
// import userAvatarIcon from "@/assets/svg/user_avatar.svg?component";
import { Recaptcha, Funcaptcha, Datacom } from "@/assets/svg/logo";
import NavButton from "@/components/NavButton/index.vue";
import More2Fill from "@iconify-icons/ri/more-2-fill";

defineOptions({
  name: "ReCard"
});

interface CardProductType {
  id: number;
  name: string;
  groups: string;
  price: number;
  quantity: number;
  period: number;
  unitPrice: number;
  unitPoint: number;
  features: Array<string>;
  isSetup: boolean;
  // description: string;
}

const props = defineProps({
  product: {
    type: Object as PropType<CardProductType>
  }
});
console.log(props.product);
const emit = defineEmits(["manage-product", "delete-item"]);

const handleClickManage = (product: CardProductType) => {
  emit("manage-product", product);
};

const handleClickDelete = (product: CardProductType) => {
  emit("delete-item", product);
};

const cardClass = computed(() => [
  "list-card-item",
  { "list-card-item__disabled": !props.product.isSetup }
]);

const cardLogoClass = computed(() => [
  "list-card-item_detail--logo",
  { "list-card-item_detail--logo__disabled": !props.product.isSetup }
]);
</script>

<template>
  <div :class="cardClass">
    <div class="list-card-item_detail bg-bg_color">
      <div class="flex-bc w-full">
        <div>
          <Recaptcha v-if="product.groups === 'reCAPTCHA'" />
          <Funcaptcha v-if="product.groups === 'DataDome'" />
          <Datacom v-if="product.groups === 'Akamai'" />
        </div>
        <!-- <div class="list-card-item_detail--operation">
          <el-tag
            :color="product.isSetup ? '#00a870' : '#eee'"
            effect="dark"
            class="mx-1 list-card-item_detail--operation--tag"
          >
            {{ product.isSetup ? "已启用" : "已停用" }}
          </el-tag>
          <el-dropdown trigger="click" :disabled="!product.isSetup">
            <IconifyIconOffline :icon="More2Fill" class="text-[24px]" />
            <template #dropdown>
              <el-dropdown-menu :disabled="!product.isSetup">
                <el-dropdown-item @click="handleClickManage(product)">
                  管理
                </el-dropdown-item>
                <el-dropdown-item @click="handleClickDelete(product)">
                  删除
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div> -->
        <p
          class="list-card-item_detail--name w-[80%] text-text_color_primary whitespace-break-spaces"
        >
          {{ product.name }}
        </p>
        <!-- </el-row> -->
      </div>
      <el-divider direction="horizontal" class="border-t-[#2C3E96]" />
      <p class="text-white text-2xl font-bold">${{ product.price }}</p>
      <p class="text-white text-lg font-bold">
        <span class="text-[#ed6d46]">${{ product.unitPoint }}</span> per
        {{ product.quantity }} times request
      </p>
      <el-divider direction="horizontal" class="border-t-[#2C3E96]" />
      <div class="feat-box max-h-[60px] overflow-y-auto">
        <div
          v-for="(item, index) in product.features"
          :key="index"
          class="list-card-item_detail--desc text-text_color_regular"
        >
          <div class="flex items-center gap-1">
            <IconifyIconOnline icon="ep:check" class="w-4 h-3 flex-shrink-0" />
            <span>{{ item }}</span>
          </div>
        </div>
      </div>
      <el-divider direction="horizontal" class="border-t-[#2C3E96]" />
      <p class="flex-bc text-white">
        <span class="title">total request:</span>
        <span class="value">{{ product.quantity }}</span>
      </p>
      <p class="flex-bc text-white">
        <span class="title">time limit:</span>
        <span class="value">{{ product.period }} days</span>
      </p>
      <el-divider direction="horizontal" class="border-t-[#2C3E96]" />
      <NavButton text="Subscribe Now" class="w-full h-[50px] flex-c" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.list-card-item {
  display: flex;
  flex-direction: column;
  height: clamp(96%, 30.208vw, 96%);
  margin-bottom: 10px;

  // min-height: 560px;
  overflow: hidden;
  cursor: pointer;
  background: linear-gradient(135deg, rgb(7 16 45), rgb(58 60 84));
  background-color: rgb(7 16 45);
  border: 1px solid rgb(84 90 106);
  border-radius: 20px;

  &_detail {
    flex: 1;
    min-height: 140px;
    padding: 24px 32px;

    &--logo {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 46px;
      height: 46px;
      font-size: 26px;
      color: #0052d9;
      background: #e0ebff;
      border-radius: 50%;

      &__disabled {
        color: #a1c4ff;
      }
    }

    &--operation {
      display: flex;
      height: 100%;

      &--tag {
        border: 0;
      }
    }

    &--name {
      font-size: 20px;
      font-weight: 700;

      // margin: 24px 0 8px;
      vertical-align: bottom;
    }

    &--desc {
      display: -webkit-box;

      // height: 40px;
      // margin-bottom: 24px;
      overflow: hidden;
      font-size: 12px;
      line-height: 20px;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  &__disabled {
    .list-card-item_detail--name,
    .list-card-item_detail--desc {
      color: var(--el-text-color-disabled);
    }

    .list-card-item_detail--operation--tag {
      color: #bababa;
    }
  }
}
</style>
