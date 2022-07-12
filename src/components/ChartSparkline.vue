<template>
  <Line
    :chartId="sparklineId"
    :chart-options="chartOptions"
    :chart-data="chartData"
    :height="height"
    :width="width"
  />
</template>

<script>
import { Line } from "vue-chartjs";
import {
  Chart,
  CategoryScale,
  LinearScale,
  Tooltip,
  LineElement,
  PointElement,
} from "chart.js";

Chart.register(Tooltip, CategoryScale, LinearScale, LineElement, PointElement);

export default {
  components: {
    Line,
  },
  props: {
    sparklineId: {
      type: String,
      required: true,
    },
    series: {
      type: Object,
      required: true,
    },
    seriesLabels: {
      type: Object,
      required: true,
    },
    sparklineColor: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const chartOptions = {
      borderColor: props.sparklineColor,
      borderWidth: 1.5,
      responsive: false,
      plugins: {
        PointVerticalLine: false,
        PointVerticalLabel: false,
        legend: {
          display: false,
          label: {
            display: false,
          },
        },
        tooltip: {
          display: true,
          displayColors: false,
          callbacks: {
            title: () => {
              return "";
            },
            label: (data) => {
              return data["formattedValue"] + "%";
            },
          },
        },
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
    };

    const chartData = {
      labels: props.seriesLabels,
      datasets: [
        {
          data: props.series,
          fill: false,
          pointRadius: 0.0000000001,
          pointHitRadius: 5,
          spanGaps: true,
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: props.sparklineColor,
        },
      ],
    };

    return { chartOptions, chartData };
  },
};
</script>
