import { http } from "@/utils/http";

export type GoodsListResult = {
  code: number;
  success: boolean;
  data: {
    list: Array<object>;
    page: number;
    pageSize: number;
    totalPage: number;
  };
};
export const getGoodsList = (data?: object) => {
  return http.request<GoodsListResult>("get", "/mock/goodsList", { data });
};

export type CateListResult = {
  code: number;
  success: boolean;
  data: Array<object>;
};

export const getCateList = (data?: object) => {
  return http.request<CateListResult>("get", "/mock/cateList", { data });
};
