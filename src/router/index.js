import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Overview",
    component: () => import("@/views/OverviewView.vue"),
  },
  {
    path: "/trade",
    name: "Trade",
    component: () => import("@/views/TradeView.vue"),
  },
  {
    path: "/wallets",
    name: "Wallets",
    component: () => import("@/views/WalletsView.vue"),
  },
  {
    path: "/bundles",
    name: "Bundles",
    component: () => import("@/views/BundlesView.vue"),
  },
  {
    path: "/reporting",
    name: "Reporting",
    component: () => import("@/views/ReportingView.vue"),
  },
  {
    path: "/community",
    name: "Community",
    component: () => import("@/views/CommunityView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
