<script setup lang="ts">
import { useGetQuotasCreditCard } from "@src/composables/useQuotasCreditCard";
import FormatedValue from "../shared/FormatedValue.vue";
import { computed } from "vue";
import type {
  CountQuotaCreditCard,
  QuotaCreditCard,
} from "@src/models/core/quotaCreditCard.interface";

const { data, isFetching } = useGetQuotasCreditCard();

const count = computed(() => {
  return getCountCreditCards(data.value?.data || []);
});

function getCountCreditCards(
  quotas: QuotaCreditCard[],
  // ): CountQuotaCreditCard[] {
) {
  const creditCards: Record<string, CountQuotaCreditCard> = {};

  quotas.forEach(({ creditCardId, creditCard, priceQuota }) => {
    if (creditCards?.[creditCardId]) {
      creditCards[creditCardId].priceMin += Number(priceQuota);
      creditCards[creditCardId].totalPurchases++;
    } else {
      creditCards[creditCardId] = {
        id: creditCardId,
        name: creditCard.name,
        priceMin: Number(priceQuota),
        totalPurchases: 1,
      };
    }
  });

  console.log(creditCards);

  const creditCardsArray = Object.entries(creditCards).map(
    (values) => values[1],
  );
  console.log(creditCardsArray);

  return creditCardsArray;
}
</script>

<template>
  <section class="list-grid">
    <div
      class="card"
      v-for="{ id, name, priceMin, totalPurchases } in count"
      :key="id"
    >
      <header class="card__header">
        <div class="card__header__content">
          <p class="card__title">{{ name }}</p>
        </div>
      </header>
      <section class="card__info">
        <formated-value
          :value="priceMin"
          title="Pago mínimo"
          symbol="$"
          size="xl"
          type="number"
        />
        <formated-value title="Cantidad de compras" :value="totalPurchases" />
      </section>
    </div>
  </section>
</template>
