# Ez-Dashboard

## 项目相关命令

### 启动项目

```bash
pnpm run dev
```

### 打包项目

```bash
pnpm run build
```

### 打包并预览项目

```bash
pnpm run preview
```

## 部署Nginx配置文件参考

```bash
server {
    listen 80;
    server_name xxx;

    root /usr/share/nginx/ez-dashboard/dist; # 替换成Vue项目打包后的dist目录路径
    index index.html;

    location / {
        try_files $uri $uri/ /index.html; # 支持SPA应用的路由配置
    }
}
```
