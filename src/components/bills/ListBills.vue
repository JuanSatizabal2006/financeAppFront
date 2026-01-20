<script setup lang="ts">
import { useDeleteBill, useGetBills } from "@src/composables/useBill";
import { ICONS } from "@src/lib/icons";

import { showAlert } from "@src/lib/alert";
import BadgeCustom from "../shared/BadgeCustom.vue";
import FormatedValue from "../shared/FormatedValue.vue";
import LoaderWrapper from "../shared/LoaderWrapper.vue";

const { data, isFetching: loadingGet } = useGetBills();
const { mutate, isPending: loadingDelete } = useDeleteBill();

const emit = defineEmits(["onEdit"]);

async function deleteBill(id: string, name: string) {
  const { isConfirmed } = await showAlert({
    title: `¿Estás seguro de eliminar ${name}?`,
    icon: "question",
    showCancelButton: true,
  });
  if (isConfirmed) {
    mutate(id);
  }
}
</script>

<template>
  <loader-wrapper :loading="loadingGet || loadingDelete">
    <section class="list">
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
            <button @click="deleteBill(id, name)">
              <component
                :is="ICONS.TRASH"
                class="icon-action icon-action--delete"
              />
            </button>
            <button
              @click="
                emit('onEdit', { id, name, price, categoryId: category.id })
              "
            >
              <component :is="ICONS.PENCIL" class="icon-action" />
            </button>
          </div>
        </header>
        <formated-value :value="price" size="xl" symbol="$" type="number" />
      </div>
    </section>
  </loader-wrapper>
</template>

<style scoped>
.list {
  display: grid;
  flex-direction: column;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
</style>
