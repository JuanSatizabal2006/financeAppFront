<script setup lang="ts">
import { ref, useTemplateRef } from "vue";

import ListBills from "@src/components/bills/ListBills.vue";
import ButtonCustom from "@src/components/ButtonCustom.vue";
import DrawerCustom from "@src/components/DrawerCustom.vue";
import FormBills from "@src/components/bills/FormBills.vue";

const drawer = useTemplateRef("drawer");
const drawerOpen = ref(false);

function setOpenDrawer(state: boolean) {
  drawer.value?.toggleDrawer(state);
  drawerOpen.value = state;
}
</script>

<template>
  <header class="flex-beetwen header">
    <h1 class="title">Gastos fijos</h1>
    <ButtonCustom label="Agregar" @on-click="setOpenDrawer(true)" />
  </header>
  <section>
    <ListBills />
  </section>

  <drawer-custom title="Agregar" ref="drawer" @on-close="setOpenDrawer(false)">
    <form-bills v-if="drawerOpen" @finish-form="setOpenDrawer(false)" />
  </drawer-custom>
</template>

<style scoped>
.header {
  margin-bottom: 0.8rem;
}
</style>
