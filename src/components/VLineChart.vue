<template>
  <Line
    :chartId="chartId"
    :chartOptions="chartOptions"
    :chartData="chartData"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Line } from "vue-chartjs";
import {
  Chart,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
} from "chart.js";

Chart.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
);

// Custom Plugins

Chart.register({
  id: "PointVerticalLine",
  afterDatasetsDraw: (chart) => {
    const activeElements = chart.tooltip.getActiveElements();
    if (activeElements.length > 0) {
      const chartContext = chart.ctx;
      const chartY = chart.scales.y;
      const pointRadius = activeElements[0].element.options.hoverRadius;
      const pointBorderWidth =
        activeElements[0].element.options.hoverBorderWidth;
      const pointX = activeElements[0].element.x;
      const pointY =
        activeElements[0].element.y + pointRadius + pointBorderWidth;
      const chartBottomY = chartY.bottom;

      chartContext.save();
      chartContext.beginPath();
      chartContext.moveTo(pointX, pointY);
      chartContext.lineTo(pointX, chartBottomY);
      chartContext.lineWidth = 1;
      chartContext.strokeStyle = "#d5d5d6";
      chartContext.stroke();
      chartContext.restore();
    }
  },
});

Chart.register({
  id: "PointVerticalLabel",
  afterDatasetsDraw: (chart) => {
    const activeElements = chart.tooltip.getActiveElements();
    if (activeElements.length > 0) {
      const chartContext = chart.ctx;
      const pointX = activeElements[0].element.x;
      let pointXOffset = pointX + 10;
      const pointLabel = chart.tooltip.dataPoints[0].dataset["label"];
      const chartY = chart.scales.y;
      const chartBottomY = chartY.bottom;
      const chartWidth = chart.width;

      const monthLabel = () => {
        if (pointLabel == "This Month") {
          return new Date().toLocaleString("en-US", {
            month: "long",
          });
        } else {
          const lastMonth = new Date();
          lastMonth.setMonth(lastMonth.getMonth() - 1);
          return lastMonth.toLocaleString("en-US", {
            month: "long",
          });
        }
      };

      chartContext.save();
      chartContext.beginPath();

      if (pointX > (chartWidth * 80) / 100) {
        chartContext.textAlign = "right";
        pointXOffset = pointX - 10;
      } else {
        chartContext.textAlign = "left";
      }

      chartContext.font = "12px SF Pro Display";
      chartContext.fillStyle = "#0a041c";
      chartContext.fillText(
        chart.tooltip.title + " " + monthLabel(),
        pointXOffset,
        chartBottomY - 14
      );
      chartContext.restore();
    }
  },
});

export default {
  components: {
    Line,
  },
  props: {
    chartId: {
      type: String,
      required: true,
    },
    chartOptions: {
      type: Object,
      required: true,
    },
    chartData: {
      type: Object,
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
};
</script>
