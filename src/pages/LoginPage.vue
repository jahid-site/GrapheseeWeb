<template>
  <v-app>
    <v-layout
      class="h-100 w-100 d-flex"
      :class="
        appPrefs.isDark ? 'bg-grey-darken-8' : 'bg-blue-grey-lighten-5'
      "
    >
      <v-layout
        v-if="!appPrefs.isMobile"
        class="h-100 d-flex justify-center align-center"
      >
        <v-img
          class="ml-16 h-50"
          src="@/assets/graphesee.png"
          alt="Graphesee"
        />
      </v-layout>
      <v-layout class="h-100 d-flex align-center justify-center flex-column">
        <div class="d-flex flex-column justify-center align-center">
          <v-img
            v-if="appPrefs.isMobile"
            class="ma-1"
            style="height: 100px; width: 100px"
            src="@/assets/graphesee.png"
            alt="Graphesee"
          />

          <v-btn
            @click="appPrefs.isDark = !appPrefs.isDark"
            class="mr-3 pa-1 position-absolute"
            style="top: 45px; right: 16px"
            :icon="appPrefs.isDark ? 'mdi-lightbulb-on-50' : 'mdi-brightness-6'"
            color="primary"
            size="45"
            variant="outlined"
          />

          <span style="font-size: 25px">{{ t('login_welcome') }}</span>
          <span class="font-weight-bold" style="font-size: 35px; color: #1867c0"
            >Graphesee</span
          >
        </div>
        <v-card
          class="mt-4 w-50"
          :class="appPrefs.isDark ? 'bg-shades-black' : 'bg-shades-white'"
          :min-width="appPrefs.isMobile ? '85%' : '310px'"
          elevation="4"
        >
          <v-card-text class="w-100 d-flex flex-column align-center">
            <v-text-field
              color="primary"
              :label="t('login_email_phone')"
              type="text"
              density="comfortable"
              variant="outlined"
              class="w-100"
            ></v-text-field>
            <v-text-field
              color="primary"
              :label="t('login_password')"
              type="password"
              variant="outlined"
              density="comfortable"
              class="w-100"
            ></v-text-field>
            <v-btn
              class="align-center"
              color="primary"
              prepend-icon="mdi-login"
              variant="outlined"
              rounded="xl"
              style="width: 50%"
            >
              <span>{{ t('login_login') }}</span>
            </v-btn>

            <a class="mt-4" href="">{{ t('login_forget_password') }}</a>

            <v-divider class="ma-2 w-100" thickness="2" />
            <v-btn
              @click="router.push('create_new_account')"
              class="align-center"
              color="primary"
              prepend-icon="mdi-account-arrow-right-outline"
              rounded="xl"
            >
              <span>{{ t('login_create_new_account') }}</span>
            </v-btn>
          </v-card-text>
        </v-card>
        <div class="d-flex w-25">
          <v-divider class="w-50 mt-6" thickness="2" />
          <span style="font-size: 14px; margin: 16px 16px">{{ t('login_or') }}</span>
          <v-divider class="w-50 mt-6" thickness="2" />
        </div>
        <v-btn
          class="w-25"
          min-width="290px"
          color="primary"
          prepend-icon="mdi-google"
          variant="outlined"
          rounded="xl"
        >
          <span>{{ t('login_google_signup') }}</span>
        </v-btn>
        <div class="mt-2">
          <v-switch
          @change="appPrefs.lang == 'en' ? appPrefs.lang = 'bn' : appPrefs.lang = 'en'"
            hide-details
            inset
            :label="appPrefs.lang == 'en' ? 'English' : 'বাংলা'"
          ></v-switch>
        </div>
      </v-layout>
    </v-layout>
  </v-app>
</template>

<script setup>
import router from "@/router";
import { useAppPrefsStore } from "@/store/appPrefs";
import { t } from '@/langs'

const appPrefs = useAppPrefsStore();

</script>