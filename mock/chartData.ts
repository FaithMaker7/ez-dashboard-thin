import { defineFakeRoute } from "vite-plugin-fake-server/client";

const typeList = [
  "RecaptchaV2TaskProxyless",
  "RecaptchaV3TaskProxyless",
  "RecaptchaV2EnterpriseTaskProxyless",
  "RecaptchaV3EnterpriseTaskProxyless",
  "RecaptchaV3TaskProxylessS9",
  "RecaptchaV2STaskProxyless",
  "RecaptchaV2SEnterpriseTaskProxyless",
  "RecaptchaV2TaskProxylessS9",
  "HcaptchaTaskProxyless",
  "FuncaptchaTaskProxyless",
  "AkamaiBMPTaskProxyless",
  "DataDomeTaskProxyless",
  "KasadaTaskProxyless",
  "AkamaiWEBTaskProxyless",
  "KasadaWorkTimeTaskProxyless",
  "TlsTask"
];

// 生成小时数据
function generateHourlyData() {
  const list = [];
  const now = new Date();
  // const types = typeList.map(item => item.task);

  // 生成过去24小时的数据
  for (let i = 0; i < 24; i++) {
    const date = new Date(now.getTime() - i * 60 * 60 * 1000);

    // 为每种类型生成数据
    typeList.forEach(type => {
      list.push({
        id: Math.random().toString(36).substr(2, 9),
        userId: Math.floor(Math.random() * 10000) + 10000,
        type,
        avgCostTime: Math.floor(Math.random() * 5000) + 1000,
        queryTime: Math.floor(Math.random() * 10) + 1,
        costPoint: Math.floor(Math.random() * 100) + 1,
        dataTime: date.toISOString().replace("T", " ").substr(0, 19),
        dataTimeStamp: Math.floor(date.getTime() / 1000),
        updateTime: date.toISOString().replace("T", " ").substr(0, 19),
        createTime: date.toISOString().replace("T", " ").substr(0, 19)
      });
    });
  }
  return list;
}

// 生成天数据
function generateDailyData() {
  const list = [];
  const now = new Date();
  // const types = typeList.map(item => item.task);

  // 生成过去30天的数据
  for (let i = 0; i < 30; i++) {
    const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
    date.setHours(0, 0, 0, 0); // 设置为当天的0点

    // 为每种类型生成数据
    typeList.forEach(type => {
      list.push({
        id: null,
        userId: null,
        type,
        avgCostTime: Math.floor(Math.random() * 5000) + 1000,
        queryTime: Math.floor(Math.random() * 20) + 1,
        costPoint: Math.floor(Math.random() * 1000) + 1,
        dataTime: date.toISOString().replace("T", " ").substr(0, 19),
        dataTimeStamp: Math.floor(date.getTime() / 1000),
        updateTime: null,
        createTime: null
      });
    });
  }
  console.log("mock hour list:", list);
  return list;
}

export default defineFakeRoute([
  {
    url: "/mock/chart/hours",
    method: "get",
    response: ({ query }) => {
      try {
        let list = generateHourlyData();
        // 根据type筛选
        if (query.type) list = list.filter(item => item.type === query.type);
        console.log("mock hour list:", list);
        return {
          code: 200,
          success: true,
          data: {
            total: list.length,
            list
          }
        };
      } catch (error) {
        console.log("error", error);
        // 添加错误时的返回
        return {
          code: 500,
          success: false,
          message: "Internal Server Error",
          data: null
        };
      }
    }
  },
  {
    url: "/mock/chart/daily",
    method: "get",
    response: ({ query }) => {
      let list = generateDailyData();

      // 根据type筛选
      if (query.type) {
        list = list.filter(item => item.type === query.type);
      }

      return {
        code: 200,
        success: true,
        data: {
          total: list.length,
          list
        }
      };
    }
  }
]);
