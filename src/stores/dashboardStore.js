import { defineStore } from "pinia";

export const useDashboardStore = defineStore("dashboardStore", {
  state: () => ({
    activeTab: "summary",
  }),
});
