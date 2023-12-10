import vuetify from "@/plugins/vuetify";
import { defineStore } from "pinia";
import { ref, watch } from "vue";


export const useAppPrefsStore = defineStore("appPrefs", () => {
  const isMobile = ref(vuetify.display.name.value == "xs");

  const theme = localStorage.getItem("theme");
  const isDark = ref(
    (theme
      ? theme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light") == "dark"
  );

  watch(isDark, (_isDark) => {
    window.localStorage.setItem("theme", _isDark ? "dark" : "light");
  });

  const lang = ref(localStorage.getItem("lang") || "en");
  watch(lang, (_lang) => {
    window.localStorage.setItem("lang", _lang);
  });

  return { isMobile, isDark, lang };
});
