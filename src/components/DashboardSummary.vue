<template>
  <section class="dashboard-panel">
    <div class="dashboard-panel-header">
      <h2 class="dashboard-panel-header-title">
        {{ $t("dashboardSummary.summary") }}
      </h2>
      <button type="button" class="button-blank">
        <span class="icon icon-dots"></span>
      </button>
    </div>
    <SummaryChart />
  </section>
</template>

<script>
import SummaryChart from "@/components/SummaryChart.vue";

export default {
  components: {
    SummaryChart,
  },
};
</script>

<style scoped>
.dashboard-panel {
  display: block;
  padding: 32px 32px 0 32px;
  max-height: 336px !important;
}

.dashboard-panel-header {
  margin-bottom: 24px;
}

@media (max-width: 767px) {
  .dashboard-panel {
    display: none;
  }
}
</style>
