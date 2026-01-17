<script setup lang="ts">
import { ref, useTemplateRef } from "vue";

import FormCreditCard from "@src/components/creditCard/FormCreditCard.vue";
import ListCreditCard from "@src/components/creditCard/ListCreditCard.vue";
import ButtonCustom from "@src/components/shared/ButtonCustom.vue";
import DrawerCustom from "@src/components/shared/DrawerCustom.vue";

const drawer = useTemplateRef("drawer");
const drawerOpen = ref(false);

function setOpenDrawer(state: boolean) {
  drawer.value?.toggleDrawer(state);
  drawerOpen.value = state;
}
</script>

<template>
  <header class="flex-beetwen header">
    <h1 class="title">Tarjetas de crédito</h1>
    <ButtonCustom label="Agregar" @on-click="setOpenDrawer(true)" />
  </header>
  <ListCreditCard />
  <drawer-custom
    title="Tarjeta de crédito"
    ref="drawer"
    @on-close="setOpenDrawer(false)"
  >
    <form-credit-card v-if="drawerOpen" />
  </drawer-custom>
</template>
