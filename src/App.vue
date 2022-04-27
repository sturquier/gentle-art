<script setup lang="ts">
import { RouterView } from 'vue-router'

import Header from '@/components/Header/Header.vue'
import Sidebar from '@/components/Sidebar/Sidebar.vue'
</script>

<template>
  <Header />
    <div class="page">
      <Sidebar />
      <main>
        <RouterView />
      </main>
    </div>
</template>

<style>
@import '@/assets/style/reset.css';
@import '@/assets/style/base.css';
@import '@/assets/style/layout.css';
@import '@/assets/style/theme.css';
</style>
