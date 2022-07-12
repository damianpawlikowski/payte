<template>
  <div class="sidebar-bottom-favorites">
    <div class="sidebar-bottom-favorites-header">
      <span class="text-bolder text-muted">{{ $t("sidebar.favorites") }}</span>
      <button type="button" class="button-blank">
        <span class="icon icon-dots"></span>
      </button>
    </div>
    <div v-if="!isLoading" class="sidebar-bottom-favorites-content">
      <div
        class="sidebar-bottom-favorites-content-entry"
        v-for="cryptocurrency in data"
        :key="cryptocurrency['id']"
      >
        <div class="sidebar-bottom-favorites-content-entry-brand">
          <div class="sidebar-bottom-favorites-content-entry-brand-logo">
            <img
              width="20"
              height="20"
              style="border-radius: 50%"
              :src="
                'https://s2.coinmarketcap.com/static/img/coins/32x32/' +
                cryptocurrency['id'].toString() +
                '.png'
              "
              :alt="cryptocurrency['name'] + ' Icon'"
            />
          </div>
          <div class="sidebar-bottom-favorites-content-entry-brand-info">
            <span class="text-muted">{{ cryptocurrency["symbol"] }}</span>
            <span class="text-bolder">{{ cryptocurrency["name"] }}</span>
          </div>
        </div>
        <div v-if="cryptocurrency['quote']['USD']['percent_change_24h'] < 0">
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
            :width="80"
            :height="40"
          />
        </div>
        <div v-else>
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
            :width="80"
            :height="40"
          />
        </div>
      </div>
    </div>
    <div v-else>
      <AbstractLoader />
    </div>
  </div>
</template>

<script>
import useGetLatestListings from "@/composables/getLatestListings";
import AbstractLoader from "@/components/AbstractLoader.vue";
import ChartSparkline from "@/components/ChartSparkline.vue";

export default {
  components: {
    ChartSparkline,
    AbstractLoader,
  },
  setup() {
    const { getLatestListings, isLoading, data } = useGetLatestListings();

    getLatestListings(3);

    return { isLoading, data };
  },
};
</script>
