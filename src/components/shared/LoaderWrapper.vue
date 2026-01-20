<script setup lang="ts">
import LoaderCustom from "./LoaderCustom.vue";
defineProps<{
  loading: boolean;
}>();
</script>

<template>
  <div v-if="loading" class="loading-wrapper">
    <loader-custom />
    <p class="loading-wrapper__text">Cargando...</p>
  </div>

  <template v-else>
    <slot />
  </template>
</template>

<style scoped>
.loading-wrapper__text {
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.2rem;
}

.loading-wrapper {
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
</style>
