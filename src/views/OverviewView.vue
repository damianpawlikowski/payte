<template>
  <div class="dashboard-wrapper">
    <DashboardCurrentBalance />
    <DashboardSummary />
    <DashboardActionCentre />
  </div>
</template>

<script>
import { onMounted } from "vue";

import DashboardCurrentBalance from "@/components/DashboardCurrentBalance.vue";
import DashboardSummary from "@/components/DashboardSummary.vue";
import DashboardActionCentre from "@/components/DashboardActionCentre.vue";

export default {
  components: {
    DashboardCurrentBalance,
    DashboardSummary,
    DashboardActionCentre,
  },
  setup() {
    onMounted(() => {
      document.title = "Payte - Overview";
    });
  },
};
</script>
