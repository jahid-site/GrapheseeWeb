import { useAppPrefsStore } from "@/store/appPrefs";
import EN from "./en.json";
import BN from "./bn.json";

const langs = {
  en: EN,
  bn: BN,
};

const t = (id) => {
  return langs[useAppPrefsStore().lang][id];
};

export { t };
