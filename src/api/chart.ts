import { http } from "@/utils/http";

export interface ChartDataItem {
  id: string | null;
  userId: number | null;
  type: string;
  avgCostTime: number;
  queryTime: number;
  costPoint: number;
  dataTime: string;
  dataTimeStamp: number;
  updateTime: string | null;
  createTime: string | null;
}

export interface ChartDataResult {
  code: number;
  success: boolean;
  data: {
    total: number;
    list: ChartDataItem[];
  };
}

export interface ChartDataParams {
  type?: string;
  [key: string]: any;
}

// 获取小时数据
export const getHourlyData = (params?: ChartDataParams) => {
  return http.request<ChartDataResult>("get", "/chart/hours", { params });
};

// 获取天数据
export const getDailyData = (params?: ChartDataParams) => {
  return http.request<ChartDataResult>("get", "/chart/daily", { params });
};
