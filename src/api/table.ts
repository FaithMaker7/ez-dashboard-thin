import { http } from "@/utils/http";

export interface TableStatisticItem {
  id: number;
  period: string;
  type: "HCaptchaClassification" | "ImageClassification" | "TextClassification";
  amount: string;
  count: number;
  time: number;
}

export interface TableStatisticResult {
  code: number;
  success: boolean;
  data: {
    list: TableStatisticItem[];
    total: number;
    pageSize: number;
    current: number;
    totalPage: number;
  };
}

export interface TableStatisticParams {
  current?: number;
  pageSize?: number;
  sortOrder?: "desc" | "asc";
  type?: string;
  [key: string]: any;
}

export const getStatisticTable = (params?: TableStatisticParams) => {
  return http.request<TableStatisticResult>("get", "/table/statistic", {
    params
  });
};
