<template>
  <p>{{ store.count }}</p>

  <div class="flex gap-3">
    <button @click="store.increment()" class="p-[0.2em_0.6em] bg-white/20 rounded-sm">
      increment
    </button>
    <button @click="store.waitAndAdd()" class="p-[0.2em_0.6em] bg-white/20 rounded-sm">
      wait and increment
    </button>
  </div>

  <span>{{ store.oddOrEven }}</span>
</template>

<script lang="ts" setup>
import { useCounterStore } from "../store/pinia-store";

const store = useCounterStore();
</script>
