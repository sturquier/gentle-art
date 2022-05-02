<script setup lang="ts">
import { routes, Route } from '../router'

const routesHavingChildren: Array<Route> = routes.filter(route => route.children)
</script>

<template>
  <v-navigation-drawer>
    <v-list>
      <v-list-item
        v-for="(route, i) in routesHavingChildren"
        :key="i"
      >
        <v-list-item-subtitle>{{ route.label }}</v-list-item-subtitle>
        <v-list>
          <v-list-item
            v-for="(child, j) in route.children"
            :key="j"
          >
            <router-link
              :to="child.path"
              class="link"
              active-class="link-active"
            >
              {{ child.label }}
            </router-link>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style>
  .link {
    font-size: 14px;
    color: var(--black);
  }

  .link:hover {
    color: var(--indigo-400);
  }

  .link-active {
    color: var(--indigo-700);
  }
</style>
