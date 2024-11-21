import { $t } from "@/plugins/i18n";
import Developer from "@/assets/svg/menu-icon/developer.svg?component";
export default {
  path: "/developer",
  redirect: "/developer/index",
  meta: {
    icon: Developer,
    // showLink: false,
    title: $t("menus.pureDeveloper"),
    rank: 5
  },
  children: [
    {
      path: "/developer/index",
      name: "developer",
      component: () => import("@/views/developer/index.vue"),
      meta: {
        title: $t("menus.pureDeveloper")
      }
    }
  ]
} satisfies RouteConfigsTable;
