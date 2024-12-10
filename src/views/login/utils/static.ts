import avatar from "@/assets/login/avatar.svg?component";
// import illustration from "@/assets/login/illustration.svg?component";
import { Recaptcha, Funcaptcha, Datacom } from "@/assets/svg/logo";
const captchaList = [
  {
    icon: Recaptcha,
    title: "ReCaptcha",
    dec: "V2/V3"
  },
  {
    icon: Datacom,
    title: "ReCaptcha Enterprise",
    dec: "V2/V3"
  },
  {
    icon: Funcaptcha,
    title: "FunCaptcha",
    dec: ""
  }
];
export { avatar, captchaList };
