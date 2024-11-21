/**
 * @description ⚠️：此文件仅供主题插件使用，请不要在此文件中导出别的工具函数（仅在页面加载前运行）
 */

import type { multipleScopeVarsOptions } from "@pureadmin/theme";

/** 预设主题色 */
const themeColors = {
  // newez 主题色
  newez: {
    menuBg: "#18204B", // 菜单未激活时的整体背景色
    menuText: "#fff", // 菜单未激活时字体和图标的颜色
    menuActiveText: "#80D5FF",
    menuHover: "#80D5FF",
    menuTitleHover: "#80D5FF",
    subMenuBg: "#18204B", // 子菜单未激活时的背景色
    subMenuActiveBg: "#4091f7", // 子菜单激活时字体和图标的颜色
    subMenuActiveText: "#80D5FF", // 子菜单激活时字体和图标的颜色
    sidebarLogo: "#18204B" // 左上logo区 的背景色
    // menuActiveBefore: "#fff"
  },
  /* 亮白色 */
  light: {
    subMenuActiveText: "#000000d9",
    menuBg: "#fff",
    menuHover: "#f6f6f6",
    subMenuBg: "#fff",
    subMenuActiveBg: "#e0ebf6",
    menuText: "rgb(0 0 0 / 60%)",
    sidebarLogo: "#fff",
    menuTitleHover: "#000",
    menuActiveBefore: "#4091f7"
  },
  /* 道奇蓝 */
  default: {
    subMenuActiveText: "#fff",
    menuBg: "#001529",
    menuHover: "rgb(64 145 247 / 15%)",
    subMenuBg: "#0f0303",
    subMenuActiveBg: "#4091f7",
    menuText: "rgb(254 254 254 / 65%)",
    sidebarLogo: "#002140",
    menuTitleHover: "#fff",
    menuActiveBefore: "#4091f7"
  },
  /* 深紫罗兰色 */
  saucePurple: {
    subMenuActiveText: "#fff",
    menuBg: "#130824",
    menuHover: "rgb(105 58 201 / 15%)",
    subMenuBg: "#000",
    subMenuActiveBg: "#693ac9",
    menuText: "#7a80b4",
    sidebarLogo: "#1f0c38",
    menuTitleHover: "#fff",
    menuActiveBefore: "#693ac9"
  },
  /* 深粉色 */
  pink: {
    subMenuActiveText: "#fff",
    menuBg: "#28081a",
    menuHover: "rgb(216 68 147 / 15%)",
    subMenuBg: "#000",
    subMenuActiveBg: "#d84493",
    menuText: "#7a80b4",
    sidebarLogo: "#3f0d29",
    menuTitleHover: "#fff",
    menuActiveBefore: "#d84493"
  },
  /* 猩红色 */
  dusk: {
    subMenuActiveText: "#fff",
    menuBg: "#2a0608",
    menuHover: "rgb(225 60 57 / 15%)",
    subMenuBg: "#000",
    subMenuActiveBg: "#e13c39",
    menuText: "rgb(254 254 254 / 65.1%)",
    sidebarLogo: "#42090c",
    menuTitleHover: "#fff",
    menuActiveBefore: "#e13c39"
  },
  /* 橙红色 */
  volcano: {
    subMenuActiveText: "#fff",
    menuBg: "#2b0e05",
    menuHover: "rgb(232 95 51 / 15%)",
    subMenuBg: "#0f0603",
    subMenuActiveBg: "#e85f33",
    menuText: "rgb(254 254 254 / 65%)",
    sidebarLogo: "#441708",
    menuTitleHover: "#fff",
    menuActiveBefore: "#e85f33"
  },
  /* 绿宝石 */
  mingQing: {
    subMenuActiveText: "#fff",
    menuBg: "#032121",
    menuHover: "rgb(89 191 193 / 15%)",
    subMenuBg: "#000",
    subMenuActiveBg: "#59bfc1",
    menuText: "#7a80b4",
    sidebarLogo: "#053434",
    menuTitleHover: "#fff",
    menuActiveBefore: "#59bfc1"
  },
  /* 酸橙绿 */
  auroraGreen: {
    subMenuActiveText: "#fff",
    menuBg: "#0b1e15",
    menuHover: "rgb(96 172 128 / 15%)",
    subMenuBg: "#000",
    subMenuActiveBg: "#60ac80",
    menuText: "#7a80b4",
    sidebarLogo: "#112f21",
    menuTitleHover: "#fff",
    menuActiveBefore: "#60ac80"
  }
};

/**
 * @description 将预设主题色处理成主题插件所需格式
 */
export const genScssMultipleScopeVars = (): multipleScopeVarsOptions[] => {
  const result = [] as multipleScopeVarsOptions[];
  Object.keys(themeColors).forEach(key => {
    result.push({
      scopeName: `layout-theme-${key}`,
      varsContent: `
        $subMenuActiveText: ${themeColors[key].subMenuActiveText} !default;
        $menuBg: ${themeColors[key].menuBg} !default;
        $menuHover: ${themeColors[key].menuHover} !default;
        $subMenuBg: ${themeColors[key].subMenuBg} !default;
        $subMenuActiveBg: ${themeColors[key].subMenuActiveBg} !default;
        $menuText: ${themeColors[key].menuText} !default;
        $sidebarLogo: ${themeColors[key].sidebarLogo} !default;
        $menuTitleHover: ${themeColors[key].menuTitleHover} !default;
        $menuActiveBefore: ${themeColors[key].menuActiveBefore} !default;
      `
    } as multipleScopeVarsOptions);
  });
  return result;
};
