<template>
  <div v-if="!isLoading" class="dashboard-action-centre-content-summary">
    <div
      v-for="cryptocurrency in data"
      :key="cryptocurrency['id']"
      class="dashboard-action-centre-content-summary-entry"
    >
      <div class="dashboard-action-centre-content-summary-entry-brand">
        <div class="dashboard-action-centre-content-summary-entry-brand-logo">
          <img
            width="32"
            height="32"
            style="border-radius: 50%"
            :src="
              'https://s2.coinmarketcap.com/static/img/coins/32x32/' +
              cryptocurrency['id'].toString() +
              '.png'
            "
            :alt="cryptocurrency['name'] + ' Icon'"
          />
        </div>
        <div class="dashboard-action-centre-content-summary-entry-detail">
          <span class="text-muted">{{ cryptocurrency["symbol"] }}</span>
          <span class="text-bolder">{{ cryptocurrency["name"] }}</span>
        </div>
      </div>
      <div class="dashboard-action-centre-content-summary-entry-detail">
        <span class="text-muted">{{
          $t("dashboardActionCentreSummary.price")
        }}</span>
        <div class="tooltip">
          <span class="text-bolder">{{
            currencyFormat(cryptocurrency["quote"]["USD"]["price"])
          }}</span>
          <span class="tooltip-content"
            >${{ cryptocurrency["quote"]["USD"]["price"] }}</span
          >
        </div>
      </div>
      <div class="dashboard-action-centre-content-summary-entry-detail">
        <span class="text-muted">{{
          $t("dashboardActionCentreSummary.change")
        }}</span>
        <span v-if="cryptocurrency['quote']['USD']['percent_change_24h'] < 0">
          <div class="tooltip">
            <span class="text-danger text-bolder flex-center flex-gap-7">
              -
              {{
                (
                  cryptocurrency["quote"]["USD"]["percent_change_24h"] * -1
                ).toFixed(2)
              }}%
              <img src="../assets/icons/decrease.svg" alt="Decrease Icon" />
            </span>
            <div class="tooltip-content" style="color: #ea4d4d">
              {{ cryptocurrency["quote"]["USD"]["percent_change_24h"] }}%
            </div>
          </div>
        </span>
        <span v-else>
          <div class="tooltip">
            <span class="text-success text-bolder flex-center flex-gap-7">
              +
              {{
                cryptocurrency["quote"]["USD"]["percent_change_24h"].toFixed(2)
              }}%
              <img src="../assets/icons/grow.svg" alt="Grow Icon" />
            </span>
            <div class="tooltip-content" style="color: #2dc78f">
              +{{ cryptocurrency["quote"]["USD"]["percent_change_24h"] }}%
            </div>
          </div>
        </span>
      </div>
      <div
        v-if="cryptocurrency['quote']['USD']['percent_change_24h'] < 0"
        class="dashboard-action-centre-content-summary-entry-axis"
      >
        <ChartSparkline
          sparklineId="testSpark"
          sparklineColor="#ea4d4d"
          :seriesLabels="[
            '2H',
            '4H',
            '6H',
            '8H',
            '10H',
            '12H',
            '14H',
            '16H',
            '18H',
            '20H',
            '22H',
            '24H',
          ]"
          :series="[4, 4.5, 6, 6.7, 5.6, 5.7, 5.7, 6.1, 7, 6.8, 6.4, 6.1]"
          :width="150"
          :height="50"
        />
      </div>
      <div v-else class="dashboard-action-centre-content-summary-entry-axis">
        <ChartSparkline
          sparklineId="testSpark"
          sparklineColor="#2dc78f"
          :seriesLabels="[
            '2H',
            '4H',
            '6H',
            '8H',
            '10H',
            '12H',
            '14H',
            '16H',
            '18H',
            '20H',
            '22H',
            '24H',
          ]"
          :series="[4, 3.7, 3.6, 3.5, 3.4, 3.0, 3.3, 3.4, 3.5, 3.7, 4.2, 4.5]"
          :width="150"
          :height="50"
        />
      </div>
      <div class="button-group">
        <button type="button" class="button button-secondary">
          {{ $t("dashboardActionCentreSummary.sell") }}
        </button>
        <button type="button" class="button button-primary">
          {{ $t("dashboardActionCentreSummary.buy") }}
        </button>
      </div>
    </div>
    <div class="ml-auto">
      <button
        @click="listingsCount += 5"
        type="button"
        class="button button-secondary button-full-width"
      >
        {{ $t("dashboardActionCentreSummary.more") }}
      </button>
    </div>
  </div>
  <div v-else>
    <AbstractLoader />
  </div>
</template>

<script>
import { ref } from "vue";
import { watch } from "vue";

import useGetLatestListings from "@/composables/getLatestListings";
import AbstractLoader from "@/components/AbstractLoader.vue";
import ChartSparkline from "@/components/ChartSparkline.vue";

export default {
  components: {
    AbstractLoader,
    ChartSparkline,
  },

  setup() {
    const { getLatestListings, isLoading, data } = useGetLatestListings();
    let listingsCount = ref(5);
    const currencyFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });

    const currencyFormat = (value) => {
      return currencyFormatter.format(value);
    };

    getLatestListings(listingsCount.value);

    watch(listingsCount, (newCount) => {
      getLatestListings(newCount);
    });

    return { isLoading, data, listingsCount, currencyFormat };
  },
};
</script>
