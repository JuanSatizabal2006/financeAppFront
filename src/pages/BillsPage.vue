<script setup lang="ts">
import { useTemplateRef } from "vue";

import ListBills from "@src/components/bills/ListBills.vue";
import ButtonCustom from "@src/components/ButtonCustom.vue";
import DrawerCustom from "@src/components/DrawerCustom.vue";
import FormBills from "@src/components/bills/FormBills.vue";

const drawer = useTemplateRef("drawer");

function setOpenDrawer(state: boolean) {
  drawer.value?.toggleDrawer(state);
}
</script>

<template>
  <header class="flex-beetwen header">
    <h1 class="title">Gastos fijos</h1>
    <ButtonCustom label="Hola mundo" @on-click="setOpenDrawer(true)" />
  </header>
  <section>
    <ListBills />
  </section>

  <drawer-custom title="Prueba drawer" ref="drawer">
    <form-bills />
  </drawer-custom>
</template>

<style scoped>
.header {
  margin-bottom: 0.8rem;
}
</style>
