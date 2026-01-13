<script setup lang="ts">
import ListBills from "@src/components/bills/ListBills.vue";
import ButtonCustom from "@src/components/ButtonCustom.vue";
function prueba() {
  console.log("hola mundo");
}
</script>

<template>
  <header class="flex-beetwen">
    <h1 class="title">Gastos fijos</h1>
    <ButtonCustom label="Hola mundo" @on-click="prueba()" />
  </header>
  <section>
    <ListBills />
  </section>
</template>
