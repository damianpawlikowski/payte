<template>
  <div class="dashboard-action-centre">
    <nav class="dashboard-action-centre-menu">
      <ul class="dashboard-action-centre-menu-list">
        <li>
          <a
            id="summary"
            role="button"
            class="dashboard-action-centre-menu-link dashboard-action-centre-menu-link-active"
            @click="setActiveTab('summary')"
          >
            {{ $t("dashboardActionCentre.summary") }}
          </a>
        </li>
        <li>
          <a
            id="table"
            role="button"
            class="dashboard-action-centre-menu-link"
            @click="setActiveTab('table')"
          >
            {{ $t("dashboardActionCentre.table") }}
          </a>
        </li>
        <li>
          <a
            id="charts"
            role="button"
            class="dashboard-action-centre-menu-link"
            @click="setActiveTab('charts')"
          >
            {{ $t("dashboardActionCentre.charts") }}
          </a>
        </li>
        <li>
          <a
            id="reporting"
            role="button"
            class="dashboard-action-centre-menu-link"
            @click="setActiveTab('reporting')"
          >
            {{ $t("dashboardActionCentre.reporting") }}
          </a>
        </li>
        <li>
          <a
            id="analysis"
            role="button"
            class="dashboard-action-centre-menu-link"
            @click="setActiveTab('analysis')"
          >
            {{ $t("dashboardActionCentre.analysis") }}
          </a>
        </li>
      </ul>
    </nav>
    <div class="dashboard-action-centre-content">
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import { useDashboardStore } from "@/stores/dashboardStore";
import DashboardActionCentreSummary from "@/components/DashboardActionCentreSummary.vue";
import DashboardActionCentreTable from "@/components/DashboardActionCentreTable.vue";
import DashboardActionCentreCharts from "@/components/DashboardActionCentreCharts.vue";
import DashboardActionCentreReporting from "@/components/DashboardActionCentreReporting.vue";
import DashboardActionCentreAnalysis from "@/components/DashboardActionCentreAnalysis.vue";

export default {
  components: {
    DashboardActionCentreSummary,
    DashboardActionCentreTable,
    DashboardActionCentreCharts,
    DashboardActionCentreReporting,
    DashboardActionCentreAnalysis,
  },
  setup() {
    let currentComponent = ref("DashboardActionCentreSummary");
    const dashboardStore = useDashboardStore();

    const setActiveTab = (tabName) => {
      const currentActiveTab = document.getElementById(
        dashboardStore.$state.activeTab
      );
      currentActiveTab.classList.remove(
        "dashboard-action-centre-menu-link-active"
      );

      dashboardStore.$state.activeTab = tabName;
      document
        .getElementById(tabName)
        .classList.add("dashboard-action-centre-menu-link-active");

      currentComponent.value =
        "DashboardActionCentre" +
        tabName.charAt(0).toUpperCase() +
        tabName.slice(1);
    };

    return { setActiveTab, currentComponent };
  },
};
</script>
