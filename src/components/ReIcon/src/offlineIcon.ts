// 这里存放本地图标，在 src/layout/index.vue 文件中加载，避免在首启动加载
import { addIcon } from "@iconify/vue/dist/offline";

// 本地菜单图标，后端在路由的 icon 中返回对应的图标字符串并且前端在此处使用 addIcon 添加即可渲染菜单图标
// @iconify-icons/ep
import Lollipop from "@iconify-icons/ep/lollipop";
import HomeFilled from "@iconify-icons/ep/home-filled";
addIcon("ep:lollipop", Lollipop);
addIcon("ep:home-filled", HomeFilled);
// @iconify-icons/ri
import Search from "@iconify-icons/ri/search-line";
import InformationLine from "@iconify-icons/ri/information-line";
addIcon("ri:search-line", Search);
addIcon("ri:information-line", InformationLine);

// 菜单栏图标
// import Dashboard from "@/assets/svg/dashboard.svg";
// import Contact from "@/assets/svg/contact.svg";
// import Developer from "@/assets/svg/developer.svg";
// import Inventation from "@/assets/svg/inventation.svg";
// import Notification from "@/assets/svg/notification.svg";
// import Orderhistory from "@/assets/svg/orderhistory.svg";
// import Statics from "@/assets/svg/statics.svg";
// import Topup from "@/assets/svg/topup.svg";
// import Price from "@/assets/svg/price.svg";

// addIcon("dashboard", Dashboard);
// addIcon("contact", Contact);
// addIcon("developer", Developer);
// addIcon("inventation", Inventation);
// addIcon("notification", Notification);
// addIcon("orderhistory", Orderhistory);
// addIcon("statics", Statics);
// addIcon("topup", Topup);
// addIcon("price", Price);
