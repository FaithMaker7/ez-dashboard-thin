import { http } from "@/utils/http";

export type GoodsListResult = {
  code: number;
  success: boolean;
  data: {
    list: Array<object>;
    page: number;
    pageSize: number;
    totalPage: number;
    total: number;
  };
};
export const getGoodsList = (params?: object) => {
  return http.request<GoodsListResult>("get", "goodsList", { params });
};

export type CateListResult = {
  code: number;
  success: boolean;
  data: {
    list: Array<String>;
  };
};

export const getCateList = (data?: object) => {
  return http.request<CateListResult>("get", "cateList", { data });
};
