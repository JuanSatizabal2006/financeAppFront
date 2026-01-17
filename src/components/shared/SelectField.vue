<script setup lang="ts">
import type { SelectFieldProps } from "@src/models/components/selectField.interface";
import { useField } from "vee-validate";
import { computed } from "vue";

const props = withDefaults(defineProps<SelectFieldProps>(), {
  placeholder: "Selecciona una opción",
});

const { errorMessage, value } = useField(() => props.inputId);

const selectClass = computed(() => ({
  select: {
    "input-field__select": true,
    "input-field__select--error": errorMessage.value,
  },
  label: {
    "input-field__label": true,
    "input-field__label--required": props.isRequired,
  },
}));
</script>

<template>
  <div class="input-field">
    <label v-if="label" :for="inputId" :class="selectClass.label">
      {{ label }}
    </label>

    <select
      v-model="value"
      :id="inputId"
      :class="selectClass.select"
      :required="isRequired"
    >
      <option value="" disabled selected class="select__option">
        {{ placeholder }}
      </option>

      <option
        v-for="option in options"
        :key="option.id"
        :value="option.id"
        class="select__option"
      >
        {{ option.name }}
      </option>
    </select>

    <span v-show="errorMessage" class="input-field__error">
      {{ errorMessage }}
    </span>
  </div>
</template>
