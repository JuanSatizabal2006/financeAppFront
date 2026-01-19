<script setup lang="ts">
import { computed } from "vue";
import { formatDate } from "@src/lib/dayjs";
import type { FormatedValueProps } from "@src/models/components/formatedValue.interface";

const props = withDefaults(defineProps<FormatedValueProps>(), {
  size: "md",
  type: "none",
});

const FormatedValueClass = computed(() => ({
  title: {
    "formated-value__title": true,
    [`formated-value__title--${props.size}`]: true,
  },
  value: {
    "formated-value__value": true,
    [`formated-value__value--${props.size}`]: true,
  },
}));

const valueComputed = computed(() => {
  const { value: valueProp, type } = props;
  if (type === "none") {
    return valueProp;
  }

  if (type === "date") {
    return dateFormat(valueProp as string);
  }

  if (type === "number") {
    return numberFormat(valueProp as number);
  }

  return valueProp
});

function numberFormat(value: string | number): string {
  if (value === null || value === undefined) return "";

  const number = Number(value);

  if (isNaN(number)) return "";

  const numberFormatted = number.toLocaleString("de-DE");

  return props.symbol ? `${props.symbol} ${numberFormatted}` : numberFormatted;
}

function dateFormat(value: string | Date): string {
  if (!value) return "";

  return formatDate(value, 'D MMMM, YYYY');
}
</script>

<template>
  <div class="formated-value">
    <p :class="FormatedValueClass.title">{{ title }}</p>
    <p :class="FormatedValueClass.value">
      {{ valueComputed }}
    </p>
  </div>
</template>
