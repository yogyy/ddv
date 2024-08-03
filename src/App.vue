<template><RouterView /></template>

<script lang="ts" setup>
import { provide } from "vue";
import { state } from "./store";

provide("store", state);
</script>
