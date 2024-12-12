// @ts-check

/** @type {import("@commitlint/types").UserConfig} */
export default {
  // 忽略包含 "init" 的提交信息
  ignores: [commit => commit.includes("init")],
  // 使用 @commitlint/config-conventional 配置
  extends: ["@commitlint/config-conventional"],
  // 自定义校验规则
  rules: {
    // 提交信息正文前必须有空格
    "body-leading-blank": [2, "always"],
    // 提交信息尾部必须有空格
    "footer-leading-blank": [1, "always"],
    // 提交信息头部最大长度为 108 个字符
    "header-max-length": [2, "always", 108],
    // 提交信息主题不能为空
    "subject-empty": [2, "never"],
    // 提交类型不能为空
    "type-empty": [2, "never"],
    // 提交类型必须为以下之一
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "perf",
        "style",
        "docs",
        "test",
        "refactor",
        "build",
        "ci",
        "chore",
        "revert",
        "wip",
        "workflow",
        "types",
        "release"
      ]
    ]
  }
};
