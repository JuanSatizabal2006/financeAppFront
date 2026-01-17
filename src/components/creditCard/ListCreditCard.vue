<script setup lang="ts">
import { useGetCreditCard } from "@src/composables/useCreditCard";
import { ICONS } from "@src/lib/icons";

import FormatedNumber from "../shared/FormatedNumber.vue";
import LoaderCustom from "@src/components/shared/LoaderCustom.vue";

const { data, isFetching: loadingGet } = useGetCreditCard();
</script>

<template>
  <div v-show="loadingGet">
    <loader-custom />
  </div>
  <section v-if="!loadingGet">
    <div
      class="card"
      v-for="{ id, name, interests, quotaManage, maxTotal } in data?.data || []"
      :key="id"
    >
      <header class="card__header">
        <div class="card__header__content">
          <p class="card__title">{{ name }}</p>
        </div>
        <div class="card__actions">
          <button>
            <component :is="ICONS.PENCIL" class="icon-action" />
          </button>
        </div>
      </header>
      <section class="card__info">
        <formated-number :value="maxTotal" symbol="$" title="Cupo" size="xl" />
        <formated-number
          :value="quotaManage"
          symbol="$"
          title="Cuota de manejo"
        />
        <formated-number :value="interests" symbol="%" title="Intereses" />
      </section>
    </div>
  </section>
</template>
