import { defineFakeRoute } from "vite-plugin-fake-server/client";
import { isAllEmpty } from "@pureadmin/utils";
export default defineFakeRoute([
  {
    url: "/mock/goodsList",
    method: "get",
    // 模拟分页查询
    response: ({ query }) => {
      const pageNum = Number(query.pageNum || 1);
      const pageSize = Number(query.pageSize || 10);
      const category = query.category || "All Service";
      // 先根据分类筛选数据
      let filteredData =
        category && category !== "All Service"
          ? fakeData.filter(item => item.groups === category)
          : fakeData;
      const start = (pageNum - 1) * pageSize;
      const end = start + pageSize;
      // 如果query为空就默认返回一页数据
      if (isAllEmpty(query)) {
        return {
          code: 200,
          success: true,
          data: {
            list: fakeData.slice(0, pageSize),
            page: 1,
            pageSize: pageSize,
            totalPage: Math.ceil(fakeData.length / pageSize),
            total: fakeData.length
          }
        };
      } else {
        return {
          code: 200,
          success: true,
          query: query,
          data: {
            list: filteredData.slice(start, end),
            page: Number(pageNum),
            pageSize: Number(pageSize),
            totalPage: Math.ceil(filteredData.length / pageSize),
            total: filteredData.length
          }
        };
      }
    }
  },
  // 获取数据分类的接口
  {
    url: "/mock/cateList",
    method: "get",
    response: () => {
      return {
        code: 200,
        success: true,
        data: {
          list: ["All Service", "reCAPTCHA", "DataDome", "Akamai"]
        }
      };
    }
  }
]);

// const specCateDataList = (cate: string) => {

let fakeData = [
  {
    updateTime: "2024-06-09 16:43:35",
    createTime: "2024-06-09 16:43:31",
    id: "3",
    name: "reCAPTCHA v2 Enterprise/v3 Enterprise 50k",
    groups: "reCAPTCHA",
    quantity: 50000,
    period: 30,
    price: 50,
    features: [
      "RecaptchaV2TaskProxyless",
      "RecaptchaV3TaskProxyless",
      "RecaptchaV2EnterpriseTaskProxyless",
      "RecaptchaV3EnterpriseTaskProxyless",
      "RecaptchaV3TaskProxylessS9",
      "RecaptchaV2STaskProxyless",
      "RecaptchaV2SEnterpriseTaskProxyless",
      "RecaptchaV2TaskProxylessS9"
    ],
    remark: null,
    unitPrice: 1.0,
    unitPoint: 10,
    status: "0",
    filedOrder: 150,
    avaUser: null,
    oriFeatures:
      "RecaptchaV2TaskProxyless,RecaptchaV3TaskProxyless,RecaptchaV2EnterpriseTaskProxyless,RecaptchaV3EnterpriseTaskProxyless,RecaptchaV3TaskProxylessS9,RecaptchaV2STaskProxyless,RecaptchaV2SEnterpriseTaskProxyless,RecaptchaV2TaskProxylessS9,"
  },
  {
    updateTime: "2024-06-09 16:43:35",
    createTime: "2024-06-09 16:43:31",
    id: "1",
    name: "reCAPTCHA v2/v3 200K",
    groups: "reCAPTCHA",
    quantity: 200000,
    period: 30,
    price: 100,
    features: [
      "RecaptchaV2TaskProxyless",
      "RecaptchaV3TaskProxyless",
      "RecaptchaV2STaskProxyless"
    ],
    remark: null,
    unitPrice: 0.5,
    unitPoint: 5,
    status: "0",
    filedOrder: 151,
    avaUser: null,
    oriFeatures:
      "RecaptchaV2TaskProxyless,RecaptchaV3TaskProxyless,RecaptchaV2STaskProxyless,"
  },
  {
    updateTime: "2024-06-09 16:43:35",
    createTime: "2024-06-09 16:43:31",
    id: "4",
    name: "reCAPTCHA v2 Enterprise/v3 Enterprise 200k",
    groups: "reCAPTCHA",
    quantity: 200000,
    period: 30,
    price: 160,
    features: [
      "RecaptchaV2TaskProxyless",
      "RecaptchaV3TaskProxyless",
      "RecaptchaV2EnterpriseTaskProxyless",
      "RecaptchaV3EnterpriseTaskProxyless",
      "RecaptchaV3TaskProxylessS9",
      "RecaptchaV2STaskProxyless",
      "RecaptchaV2SEnterpriseTaskProxyless",
      "RecaptchaV2TaskProxylessS9"
    ],
    remark: null,
    unitPrice: 0.8,
    unitPoint: 8,
    status: "0",
    filedOrder: 152,
    avaUser: null,
    oriFeatures:
      "RecaptchaV2TaskProxyless,RecaptchaV3TaskProxyless,RecaptchaV2EnterpriseTaskProxyless,RecaptchaV3EnterpriseTaskProxyless,RecaptchaV3TaskProxylessS9,RecaptchaV2STaskProxyless,RecaptchaV2SEnterpriseTaskProxyless,RecaptchaV2TaskProxylessS9,"
  },
  {
    updateTime: "2024-06-09 16:43:35",
    createTime: "2024-06-09 16:43:31",
    id: "2",
    name: "reCAPTCHA v2/v3 1000K",
    groups: "reCAPTCHA",
    quantity: 1000000,
    period: 30,
    price: 400,
    features: [
      "RecaptchaV2TaskProxyless",
      "RecaptchaV3TaskProxyless",
      "RecaptchaV2STaskProxyless"
    ],
    remark: null,
    unitPrice: 0.4,
    unitPoint: 4,
    status: "0",
    filedOrder: 153,
    avaUser: null,
    oriFeatures:
      "RecaptchaV2TaskProxyless,RecaptchaV3TaskProxyless,RecaptchaV2STaskProxyless,"
  },
  {
    updateTime: "2024-06-09 16:43:35",
    createTime: "2024-06-09 16:43:31",
    id: "5",
    name: "reCAPTCHA v2 Enterprise/v3 Enterprise 1000k",
    groups: "reCAPTCHA",
    quantity: 1000000,
    period: 30,
    price: 600,
    features: [
      "RecaptchaV2TaskProxyless",
      "RecaptchaV3TaskProxyless",
      "RecaptchaV2EnterpriseTaskProxyless",
      "RecaptchaV3EnterpriseTaskProxyless",
      "RecaptchaV3TaskProxylessS9",
      "RecaptchaV2STaskProxyless",
      "RecaptchaV2SEnterpriseTaskProxyless",
      "RecaptchaV2TaskProxylessS9"
    ],
    remark: null,
    unitPrice: 0.6,
    unitPoint: 6,
    status: "0",
    filedOrder: 154,
    avaUser: null,
    oriFeatures:
      "RecaptchaV2TaskProxyless,RecaptchaV3TaskProxyless,RecaptchaV2EnterpriseTaskProxyless,RecaptchaV3EnterpriseTaskProxyless,RecaptchaV3TaskProxylessS9,RecaptchaV2STaskProxyless,RecaptchaV2SEnterpriseTaskProxyless,RecaptchaV2TaskProxylessS9,"
  },
  {
    updateTime: "2024-06-28 16:43:35",
    createTime: "2024-06-28 16:43:31",
    id: "6",
    name: "reCAPTCHA v2/v3 10M",
    groups: "reCAPTCHA",
    quantity: 10000000,
    period: 30,
    price: 3000,
    features: [
      "RecaptchaV2TaskProxyless",
      "RecaptchaV3TaskProxyless",
      "RecaptchaV2STaskProxyless"
    ],
    remark: null,
    unitPrice: 0.3,
    unitPoint: 3,
    status: "0",
    filedOrder: 155,
    avaUser: null,
    oriFeatures:
      "RecaptchaV2TaskProxyless,RecaptchaV3TaskProxyless,RecaptchaV2STaskProxyless,"
  },
  {
    updateTime: "2024-06-09 16:43:35",
    createTime: "2024-06-28 16:43:31",
    id: "7",
    name: "reCAPTCHA v2 Enterprise/v3 Enterprise 10M",
    groups: "reCAPTCHA",
    quantity: 10000000,
    period: 30,
    price: 5000,
    features: [
      "RecaptchaV2TaskProxyless",
      "RecaptchaV3TaskProxyless",
      "RecaptchaV2EnterpriseTaskProxyless",
      "RecaptchaV3EnterpriseTaskProxyless",
      "RecaptchaV3TaskProxylessS9",
      "RecaptchaV2STaskProxyless",
      "RecaptchaV2SEnterpriseTaskProxyless",
      "RecaptchaV2TaskProxylessS9"
    ],
    remark: null,
    unitPrice: 0.5,
    unitPoint: 5,
    status: "0",
    filedOrder: 156,
    avaUser: null,
    oriFeatures:
      "RecaptchaV2TaskProxyless,RecaptchaV3TaskProxyless,RecaptchaV2EnterpriseTaskProxyless,RecaptchaV3EnterpriseTaskProxyless,RecaptchaV3TaskProxylessS9,RecaptchaV2STaskProxyless,RecaptchaV2SEnterpriseTaskProxyless,RecaptchaV2TaskProxylessS9,"
  },
  {
    updateTime: "2024-06-09 16:43:35",
    createTime: "2024-06-28 16:43:31",
    id: "8",
    name: "reCAPTCHA v2 Enterprise/v3 Enterprise 20M",
    groups: "reCAPTCHA",
    quantity: 20000000,
    period: 30,
    price: 8000,
    features: [
      "RecaptchaV2TaskProxyless",
      "RecaptchaV3TaskProxyless",
      "RecaptchaV2EnterpriseTaskProxyless",
      "RecaptchaV3EnterpriseTaskProxyless",
      "RecaptchaV3TaskProxylessS9",
      "RecaptchaV2STaskProxyless",
      "RecaptchaV2SEnterpriseTaskProxyless",
      "RecaptchaV2TaskProxylessS9"
    ],
    remark: null,
    unitPrice: 0.4,
    unitPoint: 4,
    status: "0",
    filedOrder: 157,
    avaUser: null,
    oriFeatures:
      "RecaptchaV2TaskProxyless,RecaptchaV3TaskProxyless,RecaptchaV2EnterpriseTaskProxyless,RecaptchaV3EnterpriseTaskProxyless,RecaptchaV3TaskProxylessS9,RecaptchaV2STaskProxyless,RecaptchaV2SEnterpriseTaskProxyless,RecaptchaV2TaskProxylessS9,"
  },
  {
    updateTime: "2024-06-28 16:43:35",
    createTime: "2024-06-28 16:43:31",
    id: "9",
    name: "reCAPTCHA v2/v3 100k",
    groups: "reCAPTCHA",
    quantity: 100000,
    period: 7,
    price: 50,
    features: [
      "RecaptchaV2TaskProxyless",
      "RecaptchaV3TaskProxyless",
      "RecaptchaV2STaskProxyless"
    ],
    remark: null,
    unitPrice: 0.5,
    unitPoint: 5,
    status: "0",
    filedOrder: 158,
    avaUser: null,
    oriFeatures:
      "RecaptchaV2TaskProxyless,RecaptchaV3TaskProxyless,RecaptchaV2STaskProxyless,"
  },
  {
    updateTime: "2024-06-28 16:43:35",
    createTime: "2024-06-28 16:43:31",
    id: "12",
    name: "reCAPTCHA v2 Enterprise/v3 Enterprise 200k",
    groups: "reCAPTCHA",
    quantity: 200000,
    period: 7,
    price: 140,
    features: [
      "RecaptchaV2TaskProxyless",
      "RecaptchaV3TaskProxyless",
      "RecaptchaV2EnterpriseTaskProxyless",
      "RecaptchaV3EnterpriseTaskProxyless",
      "RecaptchaV3TaskProxylessS9",
      "RecaptchaV2STaskProxyless",
      "RecaptchaV2SEnterpriseTaskProxyless",
      "RecaptchaV2TaskProxylessS9"
    ],
    remark: null,
    unitPrice: 0.7,
    unitPoint: 7,
    status: "0",
    filedOrder: 159,
    avaUser: null,
    oriFeatures:
      "RecaptchaV2TaskProxyless,RecaptchaV3TaskProxyless,RecaptchaV2EnterpriseTaskProxyless,RecaptchaV3EnterpriseTaskProxyless,RecaptchaV3TaskProxylessS9,RecaptchaV2STaskProxyless,RecaptchaV2SEnterpriseTaskProxyless,RecaptchaV2TaskProxylessS9,"
  },
  {
    updateTime: "2024-06-28 16:43:35",
    createTime: "2024-06-28 16:43:31",
    id: "10",
    name: "reCAPTCHA v2/v3 500k",
    groups: "reCAPTCHA",
    quantity: 500000,
    period: 7,
    price: 200,
    features: [
      "RecaptchaV2TaskProxyless",
      "RecaptchaV3TaskProxyless",
      "RecaptchaV2STaskProxyless"
    ],
    remark: null,
    unitPrice: 0.4,
    unitPoint: 4,
    status: "0",
    filedOrder: 160,
    avaUser: null,
    oriFeatures:
      "RecaptchaV2TaskProxyless,RecaptchaV3TaskProxyless,RecaptchaV2STaskProxyless,"
  },
  {
    updateTime: "2024-06-28 16:43:35",
    createTime: "2024-06-28 16:43:31",
    id: "13",
    name: "reCAPTCHA v2 Enterprise/v3 Enterprise 500k",
    groups: "reCAPTCHA",
    quantity: 500000,
    period: 7,
    price: 300,
    features: [
      "RecaptchaV2TaskProxyless",
      "RecaptchaV3TaskProxyless",
      "RecaptchaV2EnterpriseTaskProxyless",
      "RecaptchaV3EnterpriseTaskProxyless",
      "RecaptchaV3TaskProxylessS9",
      "RecaptchaV2STaskProxyless",
      "RecaptchaV2SEnterpriseTaskProxyless",
      "RecaptchaV2TaskProxylessS9"
    ],
    remark: null,
    unitPrice: 0.6,
    unitPoint: 6,
    status: "0",
    filedOrder: 161,
    avaUser: null,
    oriFeatures:
      "RecaptchaV2TaskProxyless,RecaptchaV3TaskProxyless,RecaptchaV2EnterpriseTaskProxyless,RecaptchaV3EnterpriseTaskProxyless,RecaptchaV3TaskProxylessS9,RecaptchaV2STaskProxyless,RecaptchaV2SEnterpriseTaskProxyless,RecaptchaV2TaskProxylessS9,"
  },
  {
    updateTime: "2024-06-28 16:43:35",
    createTime: "2024-06-28 16:43:31",
    id: "11",
    name: "reCAPTCHA v2/v3 2M",
    groups: "reCAPTCHA",
    quantity: 2000000,
    period: 7,
    price: 600,
    features: [
      "RecaptchaV2TaskProxyless",
      "RecaptchaV3TaskProxyless",
      "RecaptchaV2STaskProxyless"
    ],
    remark: null,
    unitPrice: 0.3,
    unitPoint: 3,
    status: "0",
    filedOrder: 162,
    avaUser: null,
    oriFeatures:
      "RecaptchaV2TaskProxyless,RecaptchaV3TaskProxyless,RecaptchaV2STaskProxyless,"
  },
  {
    updateTime: "2024-06-28 16:43:35",
    createTime: "2024-06-28 16:43:31",
    id: "16",
    name: "reCAPTCHA v2 Enterprise/v3 Enterprise 5M",
    groups: "reCAPTCHA",
    quantity: 5000000,
    period: 7,
    price: 2000,
    features: [
      "RecaptchaV2TaskProxyless",
      "RecaptchaV3TaskProxyless",
      "RecaptchaV2EnterpriseTaskProxyless",
      "RecaptchaV3EnterpriseTaskProxyless",
      "RecaptchaV3TaskProxylessS9",
      "RecaptchaV2STaskProxyless",
      "RecaptchaV2SEnterpriseTaskProxyless",
      "RecaptchaV2TaskProxylessS9"
    ],
    remark: null,
    unitPrice: 0.4,
    unitPoint: 4,
    status: "0",
    filedOrder: 163,
    avaUser: null,
    oriFeatures:
      "RecaptchaV2TaskProxyless,RecaptchaV3TaskProxyless,RecaptchaV2EnterpriseTaskProxyless,RecaptchaV3EnterpriseTaskProxyless,RecaptchaV3TaskProxylessS9,RecaptchaV2STaskProxyless,RecaptchaV2SEnterpriseTaskProxyless,RecaptchaV2TaskProxylessS9,"
  },
  {
    updateTime: "2024-06-28 12:45:22",
    createTime: "2024-06-28 12:45:20",
    id: "15",
    name: "DataDome 200k",
    groups: "DataDome",
    quantity: 200000,
    period: 30,
    price: 300,
    features: ["DataDomeTaskProxyless"],
    remark: null,
    unitPrice: 1.5,
    unitPoint: 15,
    status: "0",
    filedOrder: 200,
    avaUser: null,
    oriFeatures: "DataDomeTaskProxyless,"
  },
  {
    updateTime: "2024-06-28 12:45:22",
    createTime: "2024-06-28 12:45:20",
    id: "14",
    name: "DataDome 1000k",
    groups: "DataDome",
    quantity: 1000000,
    period: 30,
    price: 1000,
    features: ["DataDomeTaskProxyless"],
    remark: null,
    unitPrice: 1.0,
    unitPoint: 10,
    status: "0",
    filedOrder: 201,
    avaUser: null,
    oriFeatures: "DataDomeTaskProxyless,"
  },
  {
    updateTime: "2024-08-01 21:45:01",
    createTime: "2024-08-01 21:44:57",
    id: "25",
    name: "Akamai 50K",
    groups: "Akamai",
    quantity: 50000,
    period: 30,
    price: 150,
    features: ["AkamaiWEBTaskProxyless", "AkamaiBMPTaskProxyless"],
    remark: null,
    unitPrice: 3.0,
    unitPoint: 3,
    status: "0",
    filedOrder: 230,
    avaUser: null,
    oriFeatures: "AkamaiWEBTaskProxyless,AkamaiBMPTaskProxyless,"
  },
  {
    updateTime: "2024-08-01 21:45:01",
    createTime: "2024-08-01 21:44:57",
    id: "26",
    name: "Akamai 200K",
    groups: "Akamai",
    quantity: 200000,
    period: 30,
    price: 460,
    features: ["AkamaiWEBTaskProxyless", "AkamaiBMPTaskProxyless"],
    remark: null,
    unitPrice: 2.3,
    unitPoint: 2,
    status: "0",
    filedOrder: 231,
    avaUser: null,
    oriFeatures: "AkamaiWEBTaskProxyless,AkamaiBMPTaskProxyless,"
  },
  {
    updateTime: "2024-08-01 21:45:01",
    createTime: "2024-08-01 21:44:57",
    id: "27",
    name: "Akamai 500K",
    groups: "Akamai",
    quantity: 500000,
    period: 30,
    price: 1000,
    features: ["AkamaiWEBTaskProxyless", "AkamaiBMPTaskProxyless"],
    remark: null,
    unitPrice: 2.0,
    unitPoint: 2,
    status: "0",
    filedOrder: 232,
    avaUser: null,
    oriFeatures: "AkamaiWEBTaskProxyless,AkamaiBMPTaskProxyless,"
  },
  {
    updateTime: "2024-08-01 21:45:01",
    createTime: "2024-08-01 21:44:57",
    id: "28",
    name: "Akamai 1M",
    groups: "Akamai",
    quantity: 1000000,
    period: 30,
    price: 1600,
    features: ["AkamaiWEBTaskProxyless", "AkamaiBMPTaskProxyless"],
    remark: null,
    unitPrice: 1.6,
    unitPoint: 2,
    status: "0",
    filedOrder: 233,
    avaUser: null,
    oriFeatures: "AkamaiWEBTaskProxyless,AkamaiBMPTaskProxyless,"
  }
];
