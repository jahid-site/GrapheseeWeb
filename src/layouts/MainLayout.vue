<template>
    <v-theme-provider :theme="isDark ? 'dark' : 'light'">
        <v-app>
            <v-layout class="h-100 w-100 d-flex " :class="isDark ? 'bg-black-grey-lighten-5' : 'bg-blue-grey-lighten-5'">
                <v-layout v-if="!isMobile" class="h-100 d-flex justify-center align-center">
                    <v-img class="ml-16 h-50" src="@/assets/graphesee.png" alt="Graphesee" />
                </v-layout>
                <v-layout class="h-100 d-flex align-center justify-center flex-column">
                    <div class="d-flex flex-column justify-center align-center">
                        <v-img v-if="isMobile" class="ma-1" style="height: 100px;width: 100px;" src="@/assets/graphesee.png"
                            alt="Graphesee" />

                        <v-btn @click="isDark = !isDark" class="mr-3 pa-1 position-absolute" style="top: 45px;right: 16px;" :icon="isDark ? 'mdi-lightbulb-on-50' : 'mdi-brightness-6'"
                            color="primary" size="45" variant="outlined" />

                        <span style="font-size: 25px;">Wellcome to</span>
                        <span class="font-weight-bold" style="font-size: 60px; color: #1867C0;">Graphesee</span>

                    </div>

                    <v-card class="mx-16 pa-3 w-50" :class="isDark ? 'bg-shades-black' : 'bg-shades-white'" min-width="375px" elevation="4" style="margin-top: 16px;">
                        <v-card-text class="w-100 d-flex flex-column align-center">
                            <v-text-field color="primary" label="Email or username" type="text" variant="outlined"
                                class="w-100"></v-text-field>
                            <v-text-field color="primary" label="Password" type="password" variant="outlined"
                                class="w-100"></v-text-field>
                            <v-btn class="align-center" color="primary" prepend-icon="mdi-login" variant="outlined"
                                rounded="xl" size="x-large" style="width: 50%;">
                                <span>Login</span>
                            </v-btn>

                            <a class="mt-4" href="">Forgotten password?</a>

                            <v-divider class="ma-4 w-100" thickness="4" />
                            <v-btn class=" align-center" color="primary" prepend-icon="mdi-account-arrow-right-outline"
                                rounded="xl" size="x-large">
                                <span>Create new account</span>
                            </v-btn>
                        </v-card-text>
                    </v-card>
                    <div class="d-flex w-25">
                        <v-divider class="w-25 mt-6" thickness="4" />
                        <span style="font-size: 26px;margin: 8px;">Or</span>
                        <v-divider class="w-25 mt-6" thickness="4" />
                    </div>
                    <v-btn class="w-25" min-width="290px" color="primary" prepend-icon="mdi-google" variant="outlined"
                        rounded="xl" size="x-large">
                        <span>Google singup</span>
                    </v-btn>
                    <div class="mt-4">
                        <v-switch v-model="langModel" hide-details inset
                            :label="`${langModel ? 'Bangla' : 'English'}`"></v-switch>
                    </div>
                </v-layout>
            </v-layout>
        </v-app>
    </v-theme-provider>
</template>

<script setup>
import { ref } from 'vue';
import vuetify from '@/plugins/vuetify';
import { onMounted, onBeforeMount, watch } from 'vue';

const isDark = ref(window.localStorage.getItem('theme') == 'dark');

watch(isDark, (newValue) => {
  window.localStorage.setItem('theme', newValue ? 'dark' : 'light');
});

const langModel = ref(false);

const isMobile = ref(vuetify.display.name.value == 'xs');

const handleResize = () => {
    isMobile.value = vuetify.display.name.value == "xs";
}

onMounted(() => {
    window.addEventListener("resize", handleResize);
});

onBeforeMount(() => {
    window.removeEventListener("resize", handleResize);
});

</script>
