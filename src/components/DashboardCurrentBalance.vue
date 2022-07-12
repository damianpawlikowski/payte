<template>
  <section class="dashboard-panel">
    <div class="dashboard-panel-header">
      <h2 class="dashboard-panel-header-title">
        {{ $t("dashboardCurrentBalance.currentBalance") }}
      </h2>
      <button type="button" class="button-blank">
        <span class="icon icon-dots"></span>
      </button>
    </div>
    <div class="dashboard-panel-body">
      <p class="text-hero"><span class="text-muted fw-300">$</span>21 432.23</p>
      <div class="current-balance-info">
        <img src="../assets/icons/grow.svg" alt="Grow Icon" />
        <p>12% {{ $t("dashboardCurrentBalance.vsLastMonth") }}</p>
      </div>
    </div>
    <div class="dashboard-panel-footer">
      <button class="button button-primary">
        {{ $t("dashboardCurrentBalance.quickInvest") }}
      </button>
      <button class="button button-secondary">
        {{ $t("dashboardCurrentBalance.showReport") }}
      </button>
    </div>
  </section>
</template>

<style scoped>
.current-balance-info {
  display: flex;
  align-items: center;
  gap: 6px;
  color: rgba(45, 199, 143, 1);
  font-size: 18px;
  line-height: 24px;
}
</style>
