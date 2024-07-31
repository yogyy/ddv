<template>
  <h1 @click="changeBio">my name is {{ name }}, I'm {{ age }} years old.</h1>
  <Button @click-button="showAlert" :text="name" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Button from "./components/Button.vue";

const name = ref("moretti");
const age = ref(24);

function changeBio() {
  name.value = "klein";
  age.value = 20;
}

const showAlert = () => alert("Child button was clicked");
</script>

<!-- <script lang="ts">
import { ref } from "vue";
import Button from "./components/Button.vue";

export default {
  setup() {
    const name = ref("moretti");
    const age = ref(24);

    const changeBio = () => {
      name.value = "klein";
      age.value = 20;
    };

    const showAlert = () => alert("Child button was clicked");

    return {
      name,
      age,
      changeBio,
      showAlert,
    };
  },
  components: {
    Button,
  },
};
</script> -->
