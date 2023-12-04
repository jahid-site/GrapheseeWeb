<template>
  <v-app-bar>
    <v-app-bar-nav-icon>
      <v-avatar image="@/assets/logo.png" />
    </v-app-bar-nav-icon>
    <v-app-bar-title>
     Graphesee
    </v-app-bar-title>
    <v-spacer/>
    <v-app-bar-nav-icon icon="mdi-weather-night"/>
    <v-app-bar-nav-icon icon="mdi-lightbulb-on-outline"/>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue';

const lightDark = ref(localStorage.getItem("theme")||"light") 

const toggleTheme = () => {

}
</script>
