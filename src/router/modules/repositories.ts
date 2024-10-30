import { $t } from "@/plugins/i18n";
import { repositories } from "@/router/enums";

export default {
  path: "/repositories",
  redirect: "/classify/repositories",
  meta: {
    icon: "ep:menu",
    title: $t("仓库分类"),
    rank: repositories
  },
  children: [
    {
      path: "/classify/repositories/web",
      name: "web",
      component: () => import("@/views/classify/repositories/web/web.vue"),
      meta: {
        title: $t("Web前端开发")
      }
    },
    {
      path: "/classify/repositories/backEnd",
      name: "backEnd",
      component: () =>
        import("@/views/classify/repositories/backEnd/backEnd.vue"),
      meta: {
        title: $t("web后端开发")
      }
    },
    {
      path: "/classify/repositories/mobile",
      name: "mobile",
      component: () =>
        import("@/views/classify/repositories/mobile/mobile.vue"),
      meta: {
        title: $t("移动应用开发")
      }
    },
    {
      path: "/classify/repositories/dataRobot",
      name: "dataRobot",
      component: () =>
        import("@/views/classify/repositories/dataRobot/dataRobot.vue"),
      meta: {
        title: $t("数据科学与机器学习")
      }
    },
    {
      path: "/classify/repositories/game",
      name: "game",
      component: () => import("@/views/classify/repositories/game/game.vue"),
      meta: {
        title: $t("游戏开发")
      }
    },
    {
      path: "/classify/repositories/systemTools",
      name: "systemTools",
      component: () =>
        import("@/views/classify/repositories/systemTools/systemTools.vue"),
      meta: {
        title: $t("系统工具")
      }
    },
    {
      path: "/classify/repositories/opensource",
      name: "opensource",
      component: () =>
        import("@/views/classify/repositories/opensource/opensource.vue"),
      meta: {
        title: $t("开源库和框架")
      }
    },
    {
      path: "/classify/repositories/machineLearning",
      name: "machineLearning",
      component: () =>
        import(
          "@/views/classify/repositories/machineLearning/machineLearning.vue"
        ),
      meta: {
        title: $t("人工智能与机器学习")
      }
    },
    {
      path: "/classify/repositories/blockchain",
      name: "blockchain",
      component: () =>
        import("@/views/classify/repositories/blockchain/blockchain.vue"),
      meta: {
        title: $t("区块链")
      }
    },
    {
      path: "/classify/repositories/internet",
      name: "internet",
      component: () =>
        import("@/views/classify/repositories/internet/internet.vue"),
      meta: {
        title: $t("物联网（IoT）")
      }
    }
  ]
} satisfies RouteConfigsTable;
