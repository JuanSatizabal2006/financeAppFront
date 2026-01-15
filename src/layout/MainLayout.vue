<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const SideBar = defineAsyncComponent(() => import("@src/layout/SideBar.vue"));
</script>

<template>
  <div class="mainContainer gradient-bg">
    <SideBar />
    <main class="mainContainer__slot custom-scroll">
      <slot />
    </main>
  </div>
</template>
