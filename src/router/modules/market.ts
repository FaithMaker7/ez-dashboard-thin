import { $t } from "@/plugins/i18n";
export default {
  path: "/market",
  redirect: "/market/index",
  meta: {
    icon: "ep:goods",
    // showLink: false,
    title: $t("menus.pureMarket"),
    rank: 3
  },
  children: [
    {
      path: "/market/index",
      name: "market",
      component: () => import("@/views/market/market.vue"),
      meta: {
        title: $t("menus.pureMarket")
      }
    }
  ]
} satisfies RouteConfigsTable;
