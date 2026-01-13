<script setup lang="ts">
import type { BadgeStatus } from "@src/models/badge.interface";
import { computed, type PropType } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  status: {
    type: String as PropType<BadgeStatus>,
    default: "info",
  },
});

const badgeClass = computed(() => ({
  badge: true,
  [`badge--${props.status}`]: true,
}));
</script>
<template>
  <span :class="badgeClass"> {{ label }} </span>
</template>
