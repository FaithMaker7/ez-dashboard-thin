import { reactive } from "vue";
import type { FormRules } from "element-plus";
import { $t, transformI18n } from "@/plugins/i18n";

export const REGEXP_EMAIL = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // 邮箱格式
export const REGEXP_PWD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,18}$/; // 密码格式应为8-18位数字、字母、符号的任意两种组合
/** 密码正则（密码格式应为8-18位数字、字母、符号的任意两种组合） */
// /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)(?!^.*[\u4E00-\u9FA5].*$)([^(0-9a-zA-Z)]|[()]|[a-z]|[A-Z]|[0-9]){8,18}$/;

/** 登录和注册的通用输入校验 */
const loginRules = reactive(<FormRules>{
  username: [
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error(transformI18n($t("login.pureUsernameReg"))));
        } else if (!REGEXP_EMAIL.test(value)) {
          callback(new Error(transformI18n($t("login.pureUsernameRuleReg"))));
        } else {
          callback();
        }
      },
      required: true,
      trigger: "blur"
    }
  ],
  password: [
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error(transformI18n($t("login.purePassWordReg"))));
        } else if (!REGEXP_PWD.test(value)) {
          callback(new Error(transformI18n($t("login.purePassWordRuleReg"))));
        } else {
          callback();
        }
      },
      required: true,
      trigger: "blur"
    }
  ]
});

export { loginRules };
