<script setup lang="ts">
import { RouterLink } from "vue-router";
import { routes } from "@src/constants/routes.constants";

const sideRoutes = routes;
</script>

<template>
  <aside class="sidebar">
    <h2 class="sidebar__title">Finance App</h2>

    <RouterLink
      :to="path"
      v-for="({ icon, path, text }, index) in sideRoutes"
      :key="index"
      class="sidebar__option"
      active-class="sidebar__option--active"
    >
      <div class="option__line"></div>

      <div class="option__item">
        <component :is="icon" class="sidebar__icon" />
        <p class="tracking-wider group-hover:font-semibold">{{ text }}</p>
      </div>
    </RouterLink>
  </aside>
</template>
