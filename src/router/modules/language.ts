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
      path: "/classify/language/python",
      name: "python",
      component: () => import("@/views/classify/language/python/python.vue"),
      meta: {
        title: $t("python")
      }
    },
    {
      path: "/classify/language/javascript",
      name: "javascript",
      component: () =>
        import("@/views/classify/language/javascript/javascript.vue"),
      meta: {
        title: $t("javascript")
      }
    },
    {
      path: "/classify/language/java",
      name: "java",
      component: () => import("@/views/classify/language/java/java.vue"),
      meta: {
        title: $t("java")
      }
    },
    {
      path: "/classify/language/c++",
      name: "c++",
      component: () => import("@/views/classify/language/c++/c++.vue"),
      meta: {
        title: $t("c++")
      }
    },
    {
      path: "/classify/language/C-Sharp",
      name: "C-Sharp",
      component: () => import("@/views/classify/language/C-Sharp/C-Sharp.vue"),
      meta: {
        title: $t("C-Sharp")
      }
    },
    {
      path: "/classify/language/php",
      name: "php",
      component: () => import("@/views/classify/language/php/php.vue"),
      meta: {
        title: $t("php")
      }
    },
    {
      path: "/classify/language/c",
      name: "c",
      component: () => import("@/views/classify/language/c/c.vue"),
      meta: {
        title: $t("c")
      }
    },
    {
      path: "/classify/language/Ruby",
      name: "Ruby",
      component: () => import("@/views/classify/language/Ruby/Ruby.vue"),
      meta: {
        title: $t("Ruby")
      }
    },
    {
      path: "/classify/language/go",
      name: "go",
      component: () => import("@/views/classify/language/go/go.vue"),
      meta: {
        title: $t("menus.go")
      }
    },
    {
      path: "/classify/language/Rust",
      name: "Rust",
      component: () => import("@/views/classify/language/Rust/Rust.vue"),
      meta: {
        title: $t("Rust")
      }
    }
  ]
} satisfies RouteConfigsTable;
