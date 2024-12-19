import { tableData } from "../../data";
import { delay } from "@pureadmin/utils";
import { ref, onMounted, reactive } from "vue";
import type { PaginationProps } from "@pureadmin/table";
// import ThumbUp from "@iconify-icons/ri/thumb-up-line";
// import Hearts from "@iconify-icons/ri/hearts-line";
import Empty from "./empty.svg?component";
import { useTranslationLang } from "@/layout/hooks/useTranslationLang";

export function useColumns() {
  const { t } = useTranslationLang();
  const dataList = ref([]);
  const loading = ref(true);
  const columns: TableColumnList = [
    {
      sortable: true,
      label: t("table.statistic.columns.period"),
      prop: "period"
    },
    {
      sortable: true,
      label: t("table.statistic.columns.type"),
      prop: "type"
    },
    {
      sortable: true,
      label: t("table.statistic.columns.amount"),
      prop: "amount"
    },
    {
      sortable: true,
      label: t("table.statistic.columns.count"),
      prop: "count"
    },
    {
      sortable: true,
      label: t("table.statistic.columns.time"),
      minWidth: 100,
      prop: "time"
    }
  ];

  /** 分页配置 */
  const pagination = reactive<PaginationProps>({
    pageSize: 10,
    currentPage: 1,
    layout: "prev, pager, next",
    total: 0,
    align: "center"
  });

  function onCurrentChange(page: number) {
    console.log("onCurrentChange", page);
    loading.value = true;
    delay(300).then(() => {
      loading.value = false;
    });
  }

  onMounted(() => {
    dataList.value = tableData;
    pagination.total = dataList.value.length;
    loading.value = false;
  });

  return {
    Empty,
    loading,
    columns,
    dataList,
    pagination,
    onCurrentChange
  };
}
