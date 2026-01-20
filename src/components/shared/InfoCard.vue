<script setup lang="ts">
import { computed, type FunctionalComponent } from "vue";
import { AlertCircle, CircleX, InfoIcon } from "lucide-vue-next";

import type {
  InfoCardProps,
  InfoCardVariant,
} from "@src/models/components/infoCard.interface";

const props = withDefaults(defineProps<InfoCardProps>(), {
  variant: "info",
  showIcon: true,
});

const iconByVariant: Record<InfoCardVariant, FunctionalComponent> = {
  info: InfoIcon,
  alert: AlertCircle,
  error: CircleX,
};

const icon = computed(() => iconByVariant[props.variant]);
</script>

<template>
  <div class="info-card" :class="`info-card--${variant}`" role="status">
    <span v-if="showIcon" class="info-card__icon" aria-hidden="true">
      <component :is="icon" />
    </span>

    <p class="info-card__message">
      {{ message }}
    </p>
  </div>
</template>
