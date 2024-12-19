// mock表格数据
import { defineFakeRoute } from "vite-plugin-fake-server/client";
import Mock from "mockjs";

// 生成模拟数据的函数
function generateTableData(count = 100) {
  const list = [];
  // 获取当前时间
  const now = new Date();

  for (let i = 0; i < count; i++) {
    // 生成最近30天内的随机时间
    const randomDate = new Date(
      now.getTime() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)
    );

    list.push(
      Mock.mock({
        id: "@increment",
        period: randomDate.toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false
        }),
        "type|1": [
          "HCaptchaClassification",
          "ImageClassification",
          "TextClassification"
        ],
        amount: () => `$${(Math.random() * 0.001).toFixed(4)}`,
        "count|50-200": 100,
        "time|60-180": 120,
        // 保存原始时间戳用于排序
        timestamp: randomDate.getTime()
      })
    );
  }
  return list;
}

export default defineFakeRoute([
  {
    url: "/mock/table/statistic",
    method: "get",
    response: ({ query }) => {
      // 获取查询参数
      const {
        current = 1,
        pageSize = 10,
        // sortOrder = "desc",
        ...filters
      } = query;

      // 生成所有数据
      let list = generateTableData();

      // 根据时间戳排序
      list = list.sort((a, b) => {
        // return sortOrder === "desc"
        //   ? b.timestamp - a.timestamp
        //   : a.timestamp - b.timestamp;
        return b.timestamp - a.timestamp;
      });

      // 根据筛选条件过滤数据
      let filteredList = [...list];
      Object.entries(filters).forEach(([key, value]) => {
        if (value) {
          filteredList = filteredList.filter(item =>
            String(item[key])
              .toLowerCase()
              .includes(String(value).toLowerCase())
          );
        }
      });

      // 计算分页数据
      const start = (Number(current) - 1) * Number(pageSize);
      const end = start + Number(pageSize);
      const pageList = filteredList.slice(start, end);

      // 移除返回数据中的timestamp字段
      const finalList = pageList.map(
        ({ timestamp: _timestamp, ...rest }) => rest
      );

      return {
        code: 200,
        success: true,
        data: {
          list: finalList,
          total: filteredList.length,
          pageSize: Number(pageSize),
          current: Number(current)
        }
      };
    }
  }
]);
