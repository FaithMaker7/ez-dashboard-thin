export default {
  path: "/demo",
  redirect: "/demo/index",
  meta: {
    icon: "ri:information-line",
    // showLink: false,
    title: "Demo页面",
    rank: 9
  },
  children: [
    {
      path: "/demo/index",
      name: "Demo",
      component: () => import("@/views/demo/index.vue"),
      meta: {
        title: "demo"
      }
    }
  ]
} satisfies RouteConfigsTable;
