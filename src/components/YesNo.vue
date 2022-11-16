<script setup>
import { ref } from "vue";

const { timeout } = defineProps({
  timeout: {
    type: Number,
    default: 200,
  },
});

await new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, timeout);
});

const response = ref({});
const res = await fetch("https://yesno.wtf/api");
if (res.ok) {
  response.value = await res.json();
} else {
  console.error("YesNo:: HTTP Error: " + res.status, res);
}
</script>

<template>
  <div>
    <p>{{ response.answer }}</p>
    <img :src="response.image" />
  </div>
</template>
