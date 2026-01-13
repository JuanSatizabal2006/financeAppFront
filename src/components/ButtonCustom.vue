<script setup lang="ts">
import { computed } from "vue";
import type { ButtonProps } from "@src/models/button.interface";

const props = withDefaults(defineProps<ButtonProps>(), {
  size: "md",
  variant: "primary",
  loading: false,
  fullWidth: false,
  iconPosition: "left",
  isDisabled: false,
});

const emit = defineEmits(["onClick"]);

const buttonClases = computed(() => ({
  button: true,
  [`button--${props.size}`]: true,
  [`button--${props.variant}`]: true,
  "button--disabled": props.isDisabled,
}));
</script>

<template>
  <button :class="buttonClases" @click="emit('onClick')">
    {{ label }}
  </button>
</template>
