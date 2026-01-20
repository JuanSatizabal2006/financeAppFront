<script setup lang="ts">
import { useGetQuotasCreditCard } from "@src/composables/useQuotasCreditCard";
import FormatedValue from "../shared/FormatedValue.vue";
import { computed } from "vue";

const { data, isFetching } = useGetQuotasCreditCard();

const count = computed(() => {
  console.log("results => ", data.value?.data);
  return data;
});
</script>

<template>
  <section class="list-grid">
    <div class="card">
      <header class="card__header">
        <div class="card__header__content">
          <p class="card__title">Nu</p>
        </div>
      </header>
      <section class="card__info">
        <formated-value
          :value="123456"
          title="Pago mínimo"
          symbol="$"
          size="xl"
          type="number"
        />
        <formated-value title="Cantidad de compras" :value="12" />
      </section>
    </div>
    <div class="card">
      <header class="card__header">
        <div class="card__header__content">
          <p class="card__title">Nu</p>
        </div>
      </header>
      <section class="card__info">
        <formated-value
          :value="123456"
          symbol="$"
          title="Pago mínimo"
          size="xl"
          type="number"
        />
        <formated-value title="Cantidad de compras" :value="12" />
      </section>
    </div>
  </section>
</template>
