/**
 * description 根据环境变量中的VITE_API_URL来切换url地址，并且在调用这个工具方法时传入标识后端的key来切换不同的后端服务
 */
// 将环境变量字符串转换为布尔值
export const toBoolean = (val: string | undefined): boolean => {
  return val?.toLowerCase() === "true";
};

export interface ApiConfig {
  name: string;
  baseUrl: string; // 环境配置内的代理前缀
}

export const API_CONFIG: ApiConfig[] = [
  // mock 服务
  {
    name: "Mock",
    baseUrl: "/mock"
  },
  {
    name: "Default",
    baseUrl: import.meta.env.VITE_Backend_Default
  },
  {
    name: "Long",
    baseUrl: import.meta.env.VITE_Backend_Long
  },
  {
    name: "Hu",
    baseUrl: import.meta.env.VITE_Backend_Hu
  },
  {
    name: "xxx",
    baseUrl: import.meta.env.VITE_Backend_xxx
  }
];

class BaseUrlManager {
  private static instance: BaseUrlManager;
  private currentApi: ApiConfig;

  private constructor() {
    this.currentApi = API_CONFIG[1]; // 默认使用默认服务
  }

  public static getInstance(): BaseUrlManager {
    if (!BaseUrlManager.instance) {
      BaseUrlManager.instance = new BaseUrlManager();
    }
    return BaseUrlManager.instance;
  }
  public getBaseUrl(): string {
    console.log("MODE", import.meta.env.MODE);
    console.log("VITE_MOCK", import.meta.env.VITE_MOCK);
    if (
      // import.meta.env.MODE === "development" &&
      toBoolean(import.meta.env.VITE_MOCK)
    ) {
      // 如果开发环境开启了mock，则使用mock服务
      return API_CONFIG[0].baseUrl;
    } else {
      // 根据环境变量指定的后端服务，返回不同的 baseUrl
      const currentBackend = import.meta.env.VITE_API_Backend;
      const currentApi = API_CONFIG.find(item => item.name === currentBackend);
      if (currentApi) {
        return currentApi.baseUrl;
      } else {
        throw new Error(`API configuration "${currentBackend}" not found`);
      }
    }
  }
  // 在开发环境下支持让管理员切换使用不同baseUrl
  // public setBaseUrl(apiName: string): void {
  //   const selectedApi = API_CONFIG.find(item => item.name === apiName);
  //   if (selectedApi) {
  //     this.currentApi = selectedApi;
  //   } else {
  //     throw new Error(`API configuration "${apiName}" not found`);
  //   }
  // }
  public getCurrentApiName(): string {
    return this.currentApi.name;
  }

  public getAllApis(): ApiConfig[] {
    return API_CONFIG;
  }
}

export const baseUrlManager = BaseUrlManager.getInstance();
