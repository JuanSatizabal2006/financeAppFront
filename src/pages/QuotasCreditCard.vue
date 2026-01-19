<script setup lang="ts">
import ListQuotaCreditCard from "@src/components/quotasCreditCard/ListQuotaCreditCard.vue";
import ButtonCustom from "@src/components/shared/ButtonCustom.vue";
</script>

<template>
  <header class="flex-beetwen header">
    <h1 class="title">Cuotas</h1>
    <button-custom label="Agregar cuota" />
  </header>
  <list-quota-credit-card />
</template>
