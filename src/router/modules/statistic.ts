import { $t } from "@/plugins/i18n";
import Statistic from "@/assets/svg/menu-icon/statics.svg?component";
export default {
  path: "/statistic",
  redirect: "/statistic/index",
  meta: {
    icon: Statistic,
    // showLink: false,
    title: $t("menus.pureStatistic"),
    rank: 1
  },
  children: [
    {
      path: "/statistic/index",
      name: "statistic",
      component: () => import("@/views/statistic/index.vue"),
      meta: {
        title: $t("menus.pureStatistic")
      }
    }
  ]
} satisfies RouteConfigsTable;
