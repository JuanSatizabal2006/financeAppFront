<script setup lang="ts">
import { X } from "lucide-vue-next";
import { computed, ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["onClose"]);

const isOpen = ref(false);

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

function toggleDrawer(state: boolean) {
  // emit("onClose");
  isOpen.value = state;
}

defineExpose({ toggleDrawer });
</script>

<template>
  <div class="drawer">
    <div :class="drawerStatus.overlay" @click="emit('onClose')" />

    <div :class="drawerStatus.container">
      <div class="drawer__header">
        <div class="header__container">
          <h2 class="drawer__title">{{ props.title }}</h2>
          <button class="title__button" @click="emit('onClose')">
            <X class="button__close" />
          </button>
        </div>

        <div class="drawer__slot custom-scroll">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
