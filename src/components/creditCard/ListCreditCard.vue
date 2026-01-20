<script setup lang="ts">
import { useGetCreditCard } from "@src/composables/useCreditCard";
import { ICONS } from "@src/lib/icons";

import FormatedValue from "../shared/FormatedValue.vue";
import LoaderWrapper from "../shared/LoaderWrapper.vue";

const { data, isFetching: loadingGet } = useGetCreditCard();

const emit = defineEmits(["onEdit"]);
</script>

<template>
  <loader-wrapper :loading="loadingGet">
    <section v-if="!loadingGet" class="list">
      <div
        class="card"
        v-for="{ id, name, interests, quotaManage, maxTotal } in data?.data ||
        []"
        :key="id"
      >
        <header class="card__header">
          <div class="card__header__content">
            <p class="card__title">{{ name }}</p>
          </div>
          <div class="card__actions">
            <button
              @click="
                emit('onEdit', { id, name, interests, quotaManage, maxTotal })
              "
            >
              <component :is="ICONS.PENCIL" class="icon-action" />
            </button>
          </div>
        </header>
        <section class="card__info">
          <formated-value
            :value="maxTotal"
            symbol="$"
            type="number"
            title="Cupo"
            size="xl"
          />
          <formated-value
            :value="quotaManage"
            symbol="$"
            type="number"
            title="Cuota de manejo"
          />
          <formated-value
            :value="interests"
            symbol="%"
            type="number"
            title="Intereses"
          />
        </section>
      </div>
    </section>
  </loader-wrapper>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
