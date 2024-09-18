import { projectTrends } from "@/router/enums";

export default {
  path: "/project-trends",
  redirect: "/project-trends/index",
  meta: {
    icon: "ep:set-up",
    title: "project-trends",
    rank: projectTrends
  },
  children: [
    {
      path: "/project-trends/index",
      name: "projectTrends",
      component: () => import("@/views/project-trends/index.vue"),
      meta: {
        title: "github项目趋势",
        extraIcon: "IF-pure-iconfont-new svg"
      }
    }
  ]
} satisfies RouteConfigsTable;
