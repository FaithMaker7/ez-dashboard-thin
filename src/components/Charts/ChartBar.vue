<script setup lang="ts">
import { useDark, useECharts } from "@pureadmin/utils";
import {
  type PropType,
  ref,
  computed,
  watch,
  nextTick,
  onMounted,
  onBeforeUnmount
} from "vue";

const props = defineProps({
  requireData: {
    type: Array as PropType<Array<number>>,
    default: () => []
  },
  period: {
    type: String as PropType<string>,
    default: "hour"
  }
  // questionData: {
  //   type: Array as PropType<Array<number>>,
  //   default: () => []
  // }
});

const { isDark } = useDark();

const theme = computed(() => (isDark.value ? "dark" : "light"));

const chartRef = ref();
const { setOptions, resize } = useECharts(chartRef, {
  theme
});

const hours = getLastDayHour(new Date(), 24);
function getLastDayHour(date, s) {
  let result = [];
  for (let i = 0; i < s; i++) {
    // 使用时间戳正确计算每个小时点
    let newdate = new Date(date.getTime() - i * 60 * 60 * 1000);

    // 格式化日期
    let year = newdate.getFullYear();
    let mon = (newdate.getMonth() + 1).toString().padStart(2, "0");
    let day = newdate.getDate().toString().padStart(2, "0");
    let hours = newdate.getHours().toString().padStart(2, "0");
    let minu = "00";

    let fullValue = `${year}-${mon}-${day} ${hours}:${minu}`;
    result.push(fullValue);
  }
  return result.reverse();
}

const formatHours = hours.map(item => item.split(" ")[0]);

// function setHours(date, item) {

// }

const days = getLast30Days(new Date(), 30);
function getLast30Days(date, days) {
  const result = [];
  for (let i = 0; i < days; i++) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() - i);
    const formattedDate = newDate.toISOString().split("T")[0];
    result.push(formattedDate);
  }
  return result.reverse();
}
const formatDays = days.map(item => item.split("-")[2]);
// console.log(formatDays);
watch(
  () => props,
  async () => {
    await nextTick(); // 确保DOM更新完成后再执行
    setOptions({
      container: ".bar-card",
      color: ["#41b6ff", "#e85f33"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "none"
        }
      },
      grid: {
        top: "20px",
        left: "50px",
        right: 0
      },
      // legend: {
      //   data: ["需求人数", "提问数量"],
      //   textStyle: {
      //     color: "#606266",
      //     fontSize: "0.875rem"
      //   },
      //   bottom: 0
      // },
      xAxis: [
        {
          type: "category",
          data: [
            "01:00",
            "04:00",
            "06:00",
            "08:00",
            "10:00",
            "12:00",
            "14:00",
            "16:00",
            "18:00",
            "20:00",
            "22:00",
            "00:00"
          ],
          axisLabel: {
            fontSize: "0.875rem"
          },
          axisPointer: {
            type: "shadow"
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            fontSize: "0.875rem"
          },
          splitLine: {
            show: true, // 网格线
            lineStyle: {
              type: "solid", // 可选值：'solid'、'dashed'、'dotted'
              color: "#232F69",
              width: 1,
              opacity: 1
            }
          },
          interval: 2000
          // name: "单位: 个"
        }
      ],
      series: [
        {
          name: "Average Time Spent:",
          type: "bar",
          barWidth: 10,
          itemStyle: {
            // color: "#41b6ff",
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#3FFE9E" // 起始颜色
                },
                {
                  offset: 0.5,
                  color: "#40FEEE" // 中间颜色
                },
                {
                  offset: 1,
                  color: "#42C2E7" // 结束颜色
                }
              ]
            },
            borderRadius: [10, 10, 0, 0]
          },
          data: props.requireData
        }
        // {
        //   name: "",
        //   type: "bar",
        //   barWidth: 10,
        //   itemStyle: {
        //     color: "#e86033ce",
        //     borderRadius: [10, 10, 0, 0]
        //   },
        //   data: props.questionData
        // }
      ]
    });
  },
  {
    deep: true,
    immediate: true
  }
);

// 添加 resize 观察器
onMounted(() => {
  const observer = new ResizeObserver(() => {
    resize();
  });

  if (chartRef.value) {
    observer.observe(chartRef.value);
  }

  onBeforeUnmount(() => {
    observer.disconnect();
  });
});
</script>

<template>
  <div ref="chartRef" style="width: 100%; height: 365px" />
</template>
