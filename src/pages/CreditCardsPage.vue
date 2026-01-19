<script setup lang="ts">
import { nextTick, ref, useTemplateRef } from "vue";

import FormCreditCard from "@src/components/creditCard/FormCreditCard.vue";
import ListCreditCard from "@src/components/creditCard/ListCreditCard.vue";
import ButtonCustom from "@src/components/shared/ButtonCustom.vue";
import DrawerCustom from "@src/components/shared/DrawerCustom.vue";
import type { UpdateCreditCard } from "@src/models/core/creditCard.interface";

const drawer = useTemplateRef("drawer");
const form = useTemplateRef("form");

const drawerOpen = ref(false);

function setOpenDrawer(state: boolean) {
  drawer.value?.toggleDrawer(state);
  drawerOpen.value = state;
}

async function editBill(bill: UpdateCreditCard) {
  setOpenDrawer(true);

  await nextTick();

  form.value?.setFormEdit(bill);
}
</script>

<template>
  <header class="flex-beetwen header">
    <h1 class="title">Tarjetas de crédito</h1>
    <ButtonCustom label="Agregar" @on-click="setOpenDrawer(true)" />
  </header>
  <ListCreditCard @on-edit="editBill" />
  <drawer-custom
    title="Tarjeta de crédito"
    ref="drawer"
    @on-close="setOpenDrawer(false)"
  >
    <form-credit-card
      v-if="drawerOpen"
      @finish-form="setOpenDrawer(false)"
      ref="form"
    />
  </drawer-custom>
</template>
