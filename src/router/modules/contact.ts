import { $t } from "@/plugins/i18n";
import Contact from "@/assets/svg/menu-icon/contact.svg?component";
export default {
  path: "/contact",
  redirect: "/contact/index",
  meta: {
    icon: Contact,
    // showLink: false,
    title: $t("menus.pureContact"),
    rank: 8
  },
  children: [
    {
      path: "/contact/index",
      name: "contact",
      component: () => import("@/views/contact/index.vue"),
      meta: {
        title: $t("menus.pureContact")
      }
    }
  ]
} satisfies RouteConfigsTable;
