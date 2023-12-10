import vuetify from "./vuetify";
import pinia from "../store";
import router from "../router";
import '@/styles/global.css'

export function registerPlugins(app) {
  app.use(vuetify).use(router).use(pinia);
}
