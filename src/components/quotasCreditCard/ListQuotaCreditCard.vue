<script setup lang="ts">
import { useGetQuotasCreditCard } from "@src/composables/useQuotasCreditCard";
import BadgeCustom from "../shared/BadgeCustom.vue";
import FormatedValue from "@src/components/shared/FormatedValue.vue";
import CountQuotaCreditCard from "./CountQuotaCreditCard.vue";
import LoaderWrapper from "../shared/LoaderWrapper.vue";

const { data, isFetching } = useGetQuotasCreditCard();
</script>

<template>
  <loader-wrapper :loading="isFetching">
    <count-quota-credit-card />
    <section class="list-col">
      <div
        class="card"
        v-for="{
          id,
          name,
          creditCard,
          price,
          paidQuotas,
          priceQuota,
          purchaseDate,
          totalQuotas,
        } in data?.data || []"
        :key="id"
      >
        <header class="card__header">
          <div class="card__header__content">
            <p class="card__title">{{ name }}</p>
            <badge-custom :label="creditCard.name" />
          </div>
        </header>
        <section class="card__info">
          <formated-value
            :value="price"
            symbol="$"
            title="Valor compra"
            size="xl"
            type="number"
          />
          <formated-value
            :value="`${paidQuotas}/${totalQuotas}`"
            title="Cuotas"
          />
          <formated-value
            :value="priceQuota"
            symbol="$"
            title="Precio cuota"
            type="number"
          />
          <formated-value
            :value="purchaseDate"
            title="Fecha de compra"
            type="date"
          />
        </section>
      </div>
    </section>
  </loader-wrapper>
</template>
