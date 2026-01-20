<script setup lang="ts">
import { useField } from "vee-validate";
import { computed } from "vue";

import type { InputFieldProps } from "@src/models/components/inputField.interface";

const props = withDefaults(defineProps<InputFieldProps>(), {
  type: "text",
});

const { value, errorMessage } = useField(() => props.inputId);

const inputProps = computed(() => ({
  input: {
    "input-field__input": true,
    "input-field__input--error": errorMessage.value,
    [`input-field__input--${props.type}`]: true,
  },
  label: {
    "input-field__label": true,
    "input-field__label--required": props.isRequired,
  },
}));
</script>

<template>
  <div class="input-field">
    <label v-if="label" :for="inputId" :class="inputProps.label">
      {{ label }}
    </label>

    <input
      v-model="value"
      :id="inputId"
      :name="inputId"
      :class="inputProps.input"
      :type="type"
      :placeholder="placeholder"
      :required="isRequired"
      step="any"
    />

    <span v-show="errorMessage" class="input-field__error">{{
      errorMessage
    }}</span>
  </div>
</template>
