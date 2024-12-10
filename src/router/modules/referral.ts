import { $t } from "@/plugins/i18n";
import Inventation from "@/assets/svg/menu-icon/inventation.svg?component";
export default {
  path: "/referral",
  redirect: "/referral/index",
  meta: {
    icon: Inventation,
    // showLink: false,
    title: $t("menus.pureReferral"),
    rank: 4
  },
  children: [
    {
      path: "/referral/index",
      name: "referral",
      component: () => import("@/views/referral/index.vue"),
      meta: {
        title: $t("menus.pureReferral")
      }
    }
  ]
} satisfies RouteConfigsTable;
