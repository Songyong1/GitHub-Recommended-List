import { $t } from "@/plugins/i18n";
import { language } from "@/router/enums";

export default {
  path: "/language",
  redirect: "/classify/language",
  meta: {
    icon: "ep:menu",
    title: $t("language"),
    rank: language
  },
  children: [
    {
      path: "/classify/python",
      name: "python",
      component: () => import("@/views/classify/python/python.vue"),
      meta: {
        title: $t("python")
      }
    },
    {
      path: "/classify/javascript",
      name: "javascript",
      component: () => import("@/views/classify/javascript/javascript.vue"),
      meta: {
        title: $t("javascript")
      }
    },
    {
      path: "/classify/java",
      name: "java",
      component: () => import("@/views/classify/java/java.vue"),
      meta: {
        title: $t("java")
      }
    },
    {
      path: "/classify/c++",
      name: "c++",
      component: () => import("@/views/classify/c++/c++.vue"),
      meta: {
        title: $t("c++")
      }
    },
    {
      path: "/classify/C-Sharp",
      name: "C-Sharp",
      component: () => import("@/views/classify/C-Sharp/C-Sharp.vue"),
      meta: {
        title: $t("C-Sharp")
      }
    },
    {
      path: "/classify/php",
      name: "php",
      component: () => import("@/views/classify/php/php.vue"),
      meta: {
        title: $t("php")
      }
    },
    {
      path: "/classify/c",
      name: "c",
      component: () => import("@/views/classify/c/c.vue"),
      meta: {
        title: $t("c")
      }
    },
    {
      path: "/classify/Ruby",
      name: "Ruby",
      component: () => import("@/views/classify/Ruby/Ruby.vue"),
      meta: {
        title: $t("Ruby")
      }
    },
    {
      path: "/classify/go",
      name: "go",
      component: () => import("@/views/classify/go/go.vue"),
      meta: {
        title: $t("menus.go")
      }
    },
    {
      path: "/classify/Rust",
      name: "Rust",
      component: () => import("@/views/classify/Rust/Rust.vue"),
      meta: {
        title: $t("Rust")
      }
    }
  ]
} satisfies RouteConfigsTable;
