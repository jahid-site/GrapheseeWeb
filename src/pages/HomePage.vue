<template>
  <v-app
    :class="appPrefs.isDark ? 'bg-grey-darken-8' : 'bg-blue-grey-lighten-5'"
  >
    <v-layout class="h-100 w-100 d-flex">
      <v-layout
        class="h-100 d-flex flex-column align-center"
        style="
          flex: 1;
          width: 225px;
          min-width: 225px;
          border-right: 0.5px solid gray;
        "
      >
        <v-avatar
          class="ma-8"
          image="@/assets/graphesee.png"
          rounded="0"
          size="70"
        />
        <v-list class="bg-transparent w-100">
          <v-list-item
            v-for="(item, i) in menuItems"
            :key="i"
            :value="item"
            color="primary"
            rounded="xl">
            <template v-slot:prepend>
              <v-icon color="primary" v-if="item.icon" :icon="item.icon" />
              <v-avatar
                v-if="!item.icon"
                class="mr-4"
                rounded="0"
                size="20"
                image="@/assets/graphesee.png"
              />
            </template>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-btn
          class="mt-5 align-center"
          color="primary"
          prepend-icon="mdi-image-edit-outline"
          append-icon="mdi-format-text"
          rounded="xl"
          size="large"
        >
          <span style="text-transform: capitalize" class="ml-4 mr-4">Post</span>
        </v-btn>
      </v-layout>
      <v-layout
        class="overflow-y-auto d-flex flex-column align-center"
        style="
          height: 100vh;
          flex: auto;
          width: 50%;
          border-right: 1px solid gray;
        "
      >
        <div v-for="post in posts" :key="post.user_info.name">
          <div class="d-flex align-center">
            <v-avatar icon="mdi-account" image="@/assets/me.png" size="45" />
            <div class="pa-3 d-flex flex-column">
              <b style="font-size: 18px"
                >{{ post.user_info.name }}
                <v-icon
                  icon="mdi-check-decagram"
                  size="16"
                  color="primary"
                ></v-icon
              ></b>
              <i style="font-size: 12px">{{ post.user_info.username }}</i>
            </div>
          </div>
          <div>
            <span> {{ post.title }}</span>
          </div>
          <div>
            {{ post.description }}
          </div>
          <div>
            <v-img width="350" :src="post.src" />
          </div>
          <div class="mt-5 d-flex justify-center">
            <v-icon class="mr-3">mdi-heart-outline</v-icon>
            <v-icon class="mr-3">mdi-comment-text-outline</v-icon>
            <v-icon>mdi-share-variant-outline</v-icon>
          </div>
          <v-divider class="mt-5 mb-5" thickness="2" />
        </div>
      </v-layout>
      <v-layout> </v-layout>
    </v-layout>
  </v-app>
</template>

<script setup>
import { useAppPrefsStore } from "@/store/appPrefs";

const appPrefs = useAppPrefsStore();

const menuItems = [
  {
    title: "Home",
    icon: "mdi-home-outline",
  },
  {
    title: "Search",
    icon: "mdi-magnify",
  },
  {
    title: "Profile",
    icon: "mdi-account-circle-outline",
  },
  {
    title: "Notifications",
    icon: "mdi-bell-outline",
  },
  {
    title: "Settings",
    icon: "mdi-cog-outline",
  },
  {
    title: "GS Premium",
  },
  {
    title: "Messaging",
    icon: "mdi-chat-processing-outline",
  },
];

const posts = [
  {
    user_info: {
      name: "Jahid Hasan",
      username: "@jahid8920",
      profile: "@/assets/me.png",
    },
    title: "This drinks is very awsome",
    description: "#drinks",
    type: "image",
    src: "https://hips.hearstapps.com/hmg-prod/images/drinks-to-avoid-1621959532.jpg",
  },
  {
    user_info: {
      name: "Arafat Hasan",
      username: "@arafat8920",
      profile: "@/assets/graphesee.png",
    },
    title: "This drinks is very awsome",
    description: "#drinks",
    type: "image",
    src: "https://hips.hearstapps.com/hmg-prod/images/drinks-to-avoid-1621959532.jpg",
  },
  {
    user_info: {
      name: "Rafid",
      username: "@rafid8920",
      profile: "@/assets/graphesee.png",
    },
    title: "This drinks is very awsome",
    description: "#drinks",
    type: "image",
    src: "https://hips.hearstapps.com/hmg-prod/images/drinks-to-avoid-1621959532.jpg",
  },
];
</script>
