import { $t } from "@/plugins/i18n";
import Notify from "@/assets/svg/menu-icon/notification.svg?component";
export default {
  path: "/notification",
  redirect: "/notification/index",
  meta: {
    icon: Notify,
    // showLink: false,
    title: $t("menus.pureNotify"),
    rank: 7
  },
  children: [
    {
      path: "/notification/index",
      name: "notification",
      component: () => import("@/views/notification/index.vue"),
      meta: {
        title: $t("menus.pureNotify")
      }
    }
  ]
} satisfies RouteConfigsTable;
