import { repoFav } from "@/router/enums";

export default {
  path: "/repo",
  redirect: "/repo/index",
  meta: {
    icon: "ep:set-up",
    title: "repo",
    rank: repoFav
  },
  children: [
    {
      path: "/repo/index",
      name: "repo",
      component: () => import("@/views/repo/index.vue"),
      meta: {
        title: "收藏夹",
        extraIcon: "IF-pure-iconfont-new svg"
      }
    }
  ]
} satisfies RouteConfigsTable;
