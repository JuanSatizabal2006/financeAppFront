<script setup lang="ts">
import { computed } from "vue";
import type { ButtonProps } from "@src/models/components/button.interface";
import { LoaderCircle } from "lucide-vue-next";

const props = withDefaults(defineProps<ButtonProps>(), {
  size: "md",
  variant: "primary",
  loading: false,
  fullWidth: false,
  iconPosition: "left",
  isDisabled: false,
  type: "button",
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
  <button
    :class="buttonClases"
    @click="emit('onClick')"
    :disabled="isDisabled || loading"
    :type="type"
  >
    <LoaderCircle class="button__loader" v-show="loading" />
    {{ label }}
  </button>
</template>
