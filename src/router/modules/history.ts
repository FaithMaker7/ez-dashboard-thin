import { $t } from "@/plugins/i18n";
import History from "@/assets/svg/menu-icon/paymenthistory.svg?component";
export default {
  path: "/history",
  redirect: "/history/index",
  meta: {
    icon: History,
    // showLink: false,
    title: $t("menus.pureHistory"),
    rank: 6
  },
  children: [
    {
      path: "/history/index",
      name: "history",
      component: () => import("@/views/history/index.vue"),
      meta: {
        title: $t("menus.pureHistory")
      }
    }
  ]
} satisfies RouteConfigsTable;
