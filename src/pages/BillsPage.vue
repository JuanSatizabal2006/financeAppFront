<script setup lang="ts">
import { nextTick, ref, useTemplateRef } from "vue";

import ListBills from "@src/components/bills/ListBills.vue";
import ButtonCustom from "@src/components/shared/ButtonCustom.vue";
import DrawerCustom from "@src/components/shared/DrawerCustom.vue";
import FormBills from "@src/components/bills/FormBills.vue";
import type { BillUpdate } from "@src/models/core/bill.interface";

const drawer = useTemplateRef("drawer");
const form = useTemplateRef("form");

const drawerOpen = ref(false);

function setOpenDrawer(state: boolean) {
  drawer.value?.toggleDrawer(state);
  drawerOpen.value = state;
}

async function editBill(bill: BillUpdate) {
  setOpenDrawer(true);

  await nextTick();

  form.value?.setFormEdit(bill);
}
</script>

<template>
  <header class="flex-beetwen header">
    <h1 class="title">Gastos fijos</h1>
    <ButtonCustom label="Agregar" @on-click="setOpenDrawer(true)" />
  </header>
  <section>
    <ListBills @on-edit="editBill" />
  </section>

  <drawer-custom title="Gasto fijo" ref="drawer" @on-close="setOpenDrawer(false)">
    <form-bills
      v-if="drawerOpen"
      ref="form"
      @finish-form="setOpenDrawer(false)"
    />
  </drawer-custom>
</template>

