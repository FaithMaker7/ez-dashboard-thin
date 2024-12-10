import { $t } from "@/plugins/i18n";
import Topup from "@/assets/svg/menu-icon/topup.svg?component";
export default {
  path: "/addfunds",
  redirect: "/addfunds/index",
  meta: {
    icon: Topup,
    // showLink: false,
    title: $t("menus.pureFunds"),
    rank: 2
  },
  children: [
    {
      path: "/addfunds/index",
      name: "addfunds",
      component: () => import("@/views/addfunds/index.vue"),
      meta: {
        title: $t("menus.pureFunds")
      }
    }
  ]
} satisfies RouteConfigsTable;
