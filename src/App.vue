<script setup lang="ts">
import { RouterView } from 'vue-router'

import Header from '@/components/Header/Header.vue'
import Sidebar from '@/components/Sidebar/Sidebar.vue'
</script>

<template>
  <v-app>
    <Header />
    <v-main>
      <Sidebar />
      <v-container fluid>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
@import '@/assets/style/reset.css';
@import '@/assets/style/vuetify.css';
@import '@/assets/style/base.css';
@import '@/assets/style/layout.css';
@import '@/assets/style/vue-theme.css';
@import '@/assets/style/theme.css';
</style>
