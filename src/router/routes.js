const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/", component: () => import("pages/Financas.vue") },
      { path: "/Financas", component: () => import("pages/Financas.vue") },
      { path: "/Bancos", component: () => import("pages/Bancos.vue") },
      {
        path: "/GanharDinheiro",
        component: () => import("pages/GanharDinheiro.vue"),
      },
      {
        path: "/EconomizarDinheiro",
        component: () => import("pages/EconomizarDinheiro.vue"),
      },
      { path: "/Empregos", component: () => import("pages/Empregos.vue") },
      { path: "/Estudar", component: () => import("pages/Estudar.vue") },
      // { path: "/", component: () => import("pages/Carrinho.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
