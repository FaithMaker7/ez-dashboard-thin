export default {
  path: "/demo",
  redirect: "/demo/index",
  meta: {
    icon: "ri:information-line",
    // showLink: false,
    title: "Demo",
    rank: 11
  },
  children: [
    {
      path: "/demo/index",
      name: "Demo",
      component: () => import("@/views/demo/index.vue"),
      meta: {
        title: "demo" // 标签标题
      }
    }
  ]
} satisfies RouteConfigsTable;
