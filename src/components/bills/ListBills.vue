<script setup lang="ts">
import { useGetBills } from "@src/hooks/useBill";
import BadgeCustom from "../BadgeCustom.vue";

const { data } = useGetBills();
</script>

<template>
  <div
    v-for="{ id, name, price, category } in data.data"
    className="card"
    :key="id"
  >
    <header className="card__header">
      <p className="card__title">{{ name }}</p>
      <BadgeCustom :label="category.name" />
    </header>
    <p className="card__price">${{ price }}</p>
  </div>
</template>
