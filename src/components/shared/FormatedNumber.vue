<script setup lang="ts">
import type { FormatedNumberProps } from "@src/models/components/formatedNumber.interface";
import { computed } from "vue";

const props = withDefaults(defineProps<FormatedNumberProps>(), { size: "md" });

const formatedNumberClass = computed(() => ({
  title: {
    "formated-number__title": true,
    [`formated-number__title--${props.size}`]: true,
  },
  value: {
    "formated-number__value": true,
    [`formated-number__value--${props.size}`]: true,
  },
}));
</script>

<template>
  <div class="formated-number">
    <p :class="formatedNumberClass.title">{{ title }}</p>
    <p :class="formatedNumberClass.value" v-thousand="{ symbol }">
      {{ value }}
    </p>
  </div>
</template>
