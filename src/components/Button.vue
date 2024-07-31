<template>
  <button @click="handleButtonClick">{{ text }}</button>
</template>

<script lang="ts" setup>
const { text } = defineProps<{
  text: string;
}>();

const emit = defineEmits(["clickButton"]);
const handleButtonClick = () => emit("clickButton");
</script>

<!-- <script lang="ts">
export default {
  props: {
    text: {
      type: String,
      default: "No text specified",
    },
  },
  emits: ["clickButton"],
};
</script> -->
