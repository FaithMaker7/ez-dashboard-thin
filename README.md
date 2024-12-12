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

## 项目目录结构

```bash
.
├── public # 项目公共资源
├── src # 项目源码
    ├── assets # 静态资源
    ├── components # 组件
    ├── style # 项目样式文件
    ├── layout # 布局
    ├── views # 页面组件
    ├── router # 路由
    ├── store # 状态管理
    ├── directives # 指令
    ├── config # 公用配置文件
    ├── utils # 工具函数
    ├── App.vue # 项目入口文件
    ├── main.ts # 项目主入口文件
├── mock # mock路由和数据
├── locales # 国际化
├── .husky # husky配置文件
├── .env # 环境变量
├── tailwind.config.ts # tailwindcss配置文件
├── vite.config.ts # vite配置文件
├── .eslintrc.js # eslint配置文件
├── .prettierrc.js # prettier配置文件
├── .stylelintrc.js # stylelint配置文件
├── .lintstagedrc # lint-staged配置文件
├── .commitlintrc.js # commitlint配置文件
·
```

## 代码规范工具链

### husky

- husky 是一个 Git Hooks 工具，用于在 Git 提交和推送时运行特定的脚本。
- 当开发者执行 git 操作时，git 会自动触发对应的 hooks。
- husky 的配置文件位于 `.husky` 目录下，其中包含多个文件，每个文件对应一个 Git Hooks 钩子。

```bash
    commit-msg文件，用于在每次提交代码时使用commitlint工具检查commit的message格式是否符合规范
    pre-commit文件，用于在每次提交代码时执行 lint-staged对暂存区的文件的规范进行检查
    common.sh文件，提供了一些共用的 shell 函数来被 pre-commit 钩子引用
```

### commitlint

- commitlint 用于检查 Git commit message 的格式是否符合规范。
- 结合husky脚本做到在每次提交代码时执行 commitlint 检查。
- 通过配置 `.commitlintrc.js` 文件，可以指定哪些文件在提交时需要进行那种 commitlint 检查。

### lint-staged

- lint-staged 用于在 Git 暂存区文件上运行 lint 工具。
- 结合husky脚本做到在提交代码之前，对暂存区的文件进行 lint 检查。
- 通过配置 `.lintstagedrc` 文件，可以指定哪些文件在提交时需要进行那种 lint 检查。

### Eslint

### Stylelint 用于检查 CSS 代码的格式是否符合规范

### Prettier 用于检查代码的格式是否符合规范
