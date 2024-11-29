import { $t } from "@/plugins/i18n";
import Dashboard from "@/assets/svg/menu-icon/dashboard.svg?component";
const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  // name: "Welcome",
  component: Layout,
  redirect: "/welcome",
  meta: {
    icon: Dashboard,
    title: $t("menus.pureHome"),
    rank: 0
  },
  children: [
    {
      path: "/welcome",
      name: "Welcome",
      component: () => import("@/views/welcome/index.vue"),
      meta: {
        title: $t("menus.pureHome"),
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
