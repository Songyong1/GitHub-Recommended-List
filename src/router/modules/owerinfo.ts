import { projectOwer } from "@/router/enums";

export default {
  path: "/project-ower",
  redirect: "/project-ower/index",
  meta: {
    icon: "ep:set-up",
    title: "project-ower",
    rank: projectOwer
  },
  children: [
    {
      path: "/project-ower/index",
      name: "projectOwer",
      component: () => import("@/views/project-ower/index.vue"),
      meta: {
        title: "项目作者",
        extraIcon: "IF-pure-iconfont-new svg"
      }
    }
  ]
} satisfies RouteConfigsTable;
