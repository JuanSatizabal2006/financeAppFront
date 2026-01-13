<script setup lang="ts">
import ListBills from "@src/components/bills/ListBills.vue";
import ButtonCustom from "@src/components/ButtonCustom.vue";
import DrawerCustom from "@src/components/DrawerCustom.vue";
import { ref } from "vue";

const openDrawer = ref(false);

function setOpenDrawer(state: boolean) {
  openDrawer.value = state;
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
  <DrawerCustom
    title="Prueba drawer"
    :open="openDrawer"
    @on-close="setOpenDrawer(false)"
  >
  </DrawerCustom>
</template>

<style scoped>
.header {
  margin-bottom: 0.8rem;
}
</style>
