// 根据角色动态生成路由
import { defineFakeRoute } from "vite-plugin-fake-server/client";

export default defineFakeRoute([
  {
    url: "/mock/register",
    method: "post",
    response: ({ body }) => {
      if (body.accessToken !== "") {
        return { code: 0, data: "注册成功", success: true };
      } else {
        return { code: 0, data: "注册失败", success: false };
      }
    }
  }
]);
