// 项目自定义颜色配置
export const customColors = {
  custom: {
    // 基础色系
    bg: "rgba(var(--color-bg),<alpha-value>)",
    cardBg: "rgba(var(--color-card-bg),<alpha-value>)",
    primary: "rgba(var(--color-primary),<alpha-value>)",
    norText: "rgba(var(--color-norText),<alpha-value>)",
    smText: "rgba(var(--color-smText),<alpha-value>)",
    yellow: "rgba(var(--color-yellow),<alpha-value>)",
    // 功能色系
    error: "rgba(var(--color-error),<alpha-value>)",
    hint: "rgba(var(--color-hint),<alpha-value>)",
    // 标签色系
    tagYellow: "rgba(var(--color-tag-yellow),<alpha-value>)",
    tagGreen: "rgba(var(--color-tag-green),<alpha-value>)"
    // ... 其他颜色分类
  }
};

// 导出所有颜色
export const colors = {
  ...customColors
};
