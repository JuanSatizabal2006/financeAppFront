<script setup lang="ts">
import ListQuotaCreditCard from "@src/components/quotasCreditCard/ListQuotaCreditCard.vue";
import ButtonCustom from "@src/components/shared/ButtonCustom.vue";
import DrawerCustom from "@src/components/shared/DrawerCustom.vue";
import FormQuotaCreditCard from "@src/components/quotasCreditCard/FormQuotaCreditCard.vue";
import { ref, useTemplateRef } from "vue";

const drawer = useTemplateRef("drawer");
// const form = useTemplateRef("form");

const drawerOpen = ref(false);

function setOpenDrawer(state: boolean) {
  drawer.value?.toggleDrawer(state);
  drawerOpen.value = state;
}
</script>

<template>
  <header class="flex-beetwen header">
    <h1 class="title">Cuotas</h1>
    <button-custom label="Agregar cuota" @on-click="setOpenDrawer(true)" />
  </header>
  <list-quota-credit-card />
  <drawer-custom
    title="Tarjeta de crédito"
    ref="drawer"
    @on-close="setOpenDrawer(false)"
  >
    <form-quota-credit-card
      v-if="drawerOpen"
      @finish-form="setOpenDrawer(false)"
      ref="form"
    />
  </drawer-custom>
</template>
