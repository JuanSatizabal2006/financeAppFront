<script setup lang="ts">
import { X } from "lucide-vue-next";
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  open: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["onClose"]);

const isOpen = computed(() => props.open);
const drawerStatus = computed(() => ({
  overlay: {
    drawer__overlay: true,
    "drawer__overlay--open": isOpen.value,
    "drawer__overlay--close": !isOpen.value,
  },
  container: {
    drawer__container: true,
    "drawer__container--open": isOpen.value,
    "drawer__container--close": !isOpen.value,
  },
}));

function close() {
  emit("onClose");
}
</script>

<template>
  <div class="drawer">
    <div :class="drawerStatus.overlay" @click="close()" />

    <div :class="drawerStatus.container">
      <div class="drawer__header">
        <div class="header__container">
          <h2 class="drawer__title">{{ title }}</h2>
          <button class="title__button" @click="close()">
            <X class="button__close" />
          </button>
        </div>

        <div class="drawer__slot">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
