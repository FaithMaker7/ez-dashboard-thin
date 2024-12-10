import { $t } from "@/plugins/i18n";
import Price from "@/assets/svg/menu-icon/price.svg?component";
export default {
  path: "/price",
  redirect: "/price/index",
  meta: {
    icon: Price,
    // showLink: false,
    title: $t("menus.purePrice"),
    rank: 9
  },
  children: [
    {
      path: "/price/index",
      name: "price",
      component: () => import("@/views/price/index.vue"),
      meta: {
        title: $t("menus.purePrice")
      }
    }
  ]
} satisfies RouteConfigsTable;
