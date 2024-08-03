<template>
  <h1 class="text-xl font-semibold" :style="{ color: store.colorCode }">
    {{ store.counter }}
  </h1>
  <div class="flex gap-3">
    <button
      @click="method.decreseCounter"
      class="bg-white/10 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-9 px-4 py-2">
      -
    </button>
    <button
      @click="method.increaseCoutner"
      class="bg-white/10 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-9 px-4 py-2">
      +
    </button>
  </div>
  <label for="counter-color">Add hex code to change counter color</label>
  <input
    type="text"
    id="counter-color"
    v-model="colorCode"
    class="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none" />
</template>

<script lang="ts" setup>
import { computed, inject } from "vue";
import { method, StateType } from "../store";

const store = inject("store") as StateType;

const colorCode = computed({
  get() {
    return store.colorCode;
  },
  set(color) {
    method.changeColorCode(color);
  },
});
</script>
