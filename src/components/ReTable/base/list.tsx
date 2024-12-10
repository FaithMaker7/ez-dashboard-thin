import Base from "./base.vue";
import Stripe from "./stripe.vue";
import Border from "./border.vue";

const rendContent = (val: string) =>
  `代码位置： src/components/ReTable/base/${val}.vue`;

export const list = [
  {
    key: "base",
    content: rendContent("base"),
    title: "基础表格",
    component: Base
  },
  {
    key: "stripe",
    content: rendContent("stripe"),
    title: "带斑马纹表格",
    component: Stripe
  },
  {
    key: "border",
    content: rendContent("border"),
    title: "带边框表格",
    component: Border
  }
];
