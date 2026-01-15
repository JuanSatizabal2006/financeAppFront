<script setup lang="ts">
import { useGetBills } from "@src/composables/useBill";
import { ICONS } from "@src/lib/icons";

import BadgeCustom from "../BadgeCustom.vue";
import LoaderCustom from "../LoaderCustom.vue";

const { data, isFetching } = useGetBills();

const emit = defineEmits(["onEdit", "onDelete"]);
</script>

<template>
  <div v-show="isFetching">
    <loader-custom />
  </div>
  <section v-if="!isFetching" class="list">
    <div
      v-for="{ id, name, price, category } in data?.data || []"
      class="card"
      :key="id"
    >
      <header class="card__header">
        <div class="card__header__content">
          <p class="card__title">{{ name }}</p>
          <BadgeCustom :label="category.name" />
        </div>
        <div class="card__actions">
          <button>
            <component
              :is="ICONS.TRASH"
              class="icon-action icon-action--delete"
            />
          </button>
          <button
            @click="emit('onEdit', { id, name, price, categoryId: category.id })"
          >
            <component :is="ICONS.PENCIL" class="icon-action" />
          </button>
        </div>
      </header>
      <p class="card__price" v-thousand="{ symbol: '$' }">{{ price }}</p>
    </div>
  </section>
</template>

<style scoped>
.list {
  display: grid;
  flex-direction: column;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
</style>
