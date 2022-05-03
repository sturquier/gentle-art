<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

import { routes, Route } from '../router'

const routesHavingChildren: Array<Route> = routes.filter(route => route.children)

const openedGroup: Ref<number> = ref(0)
const toggleGroup = (index: number) => openedGroup.value === index ? openedGroup.value = null : openedGroup.value = index
</script>

<template>
  <v-navigation-drawer>
    <v-list class="routes">
      <v-list-item
        v-for="(route, i) in routesHavingChildren"
        :key="i"
      >
        <v-list-item-subtitle
          class="label"
          @click="toggleGroup(i)"
        >
          {{ route.label }}
        </v-list-item-subtitle>
        <v-icon
          size="x-small"
          :icon="i === openedGroup ? 'mdi-arrow-up' : 'mdi-arrow-down'"
          class="arrow"
          @click="toggleGroup(i)"
        ></v-icon>
        <v-list v-if="i === openedGroup">
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
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style>
  .routes {
    margin-top: 15px;
  }

  .arrow {
    float: right;
    bottom: 16px;
    opacity: 0.5;
  }

  .label, .arrow {
    cursor: pointer;
  }

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
