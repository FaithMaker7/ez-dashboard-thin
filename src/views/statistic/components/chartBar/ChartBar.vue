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
    type: Array as PropType<
      Array<{
        dataTime: string;
        costPoint: number;
        // ... other fields
      }>
    >,
    default: () => []
  },
  period: {
    type: String as PropType<string>,
    default: "hour"
  }
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

// const formatHours = hours.map(item => item.split(" ")[0]);
const formatHours = hours.map(item => {
  const time = item.split(" ")[1]; // 获取时间部分
  return time.substring(0, 5); // 只保留 HH:mm 格式
});

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

const yInterval = computed(() => {
  return props.period === "hour" ? 10 : 100;
});

// 根据 period 计算要显示的 x 轴数据
const xAxisData = computed(() => {
  if (props.period === "hour") {
    return formatHours;
  } else {
    // 使用 30 天数据
    return formatDays; // 已经处理好的天数数组
  }
});

// 处理数据映射
const chartData = computed(() => {
  if (!props.requireData.length) return [];

  // 创建一个映射来存储每个时间点的 costPoint
  const dataMap = new Map();

  props.requireData.forEach(item => {
    let timeKey;
    if (props.period === "hour") {
      // 对于小时数据，使用 HH:mm 格式
      const date = new Date(item.dataTime);
      timeKey = `${date.getHours().toString().padStart(2, "0")}:00`;
    } else {
      // 对于天数据，保持原来的处理方式
      timeKey = item.dataTime.split(" ")[0].split("-")[2];
    }

    // 添加调试日志
    // console.log("Processing item:", {
    //   original: item.dataTime,
    //   timeKey,
    //   costPoint: item.costPoint
    // });

    dataMap.set(timeKey, (dataMap.get(timeKey) || 0) + item.costPoint);
  });

  // 使用对应的时间格式数组
  const timeFormat = props.period === "hour" ? formatHours : formatDays;

  // 添加调试日志
  console.log("Time format:", timeFormat);
  console.log("Data map:", Object.fromEntries(dataMap));

  // 按照时间轴顺序返回对应的 costPoint 值
  const result = timeFormat.map(time => dataMap.get(time) || 0);
  console.log("Final result:", result);

  return result;
});

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
          // 使用计算属性的值
          data: xAxisData.value,
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
          interval: yInterval.value
          // name: "单位: 个"
        }
      ],
      series: [
        {
          name: "Average Time Spent:",
          type: "bar",
          barWidth: 8,
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
          data: chartData.value // 使用计算后的数据
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
      ],
      dataZoom: [
        {
          type: "inside",
          start: 0, // 默认显示前50%的数据
          end: 50
        },
        {
          type: "slider", // 添加滑动条
          show: true,
          bottom: 10
        }
      ]
    });
  },
  {
    deep: true,
    immediate: true
  }
);

// 添加 resize 观察
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
