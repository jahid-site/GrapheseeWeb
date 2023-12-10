<template>
  <v-theme-provider :theme="appPrefs.isDark ? 'dark' : 'light'">
    <router-view />
  </v-theme-provider>
</template>

<script setup>
import { onBeforeMount, onMounted } from "vue";
import vuetify from "./plugins/vuetify";
import { useAppPrefsStore } from "./store/appPrefs";

const appPrefs = useAppPrefsStore();

const handleResize = () => {
  appPrefs.isMobile = vuetify.display.name.value == "xs";
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeMount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>