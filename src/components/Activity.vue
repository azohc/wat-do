<script setup>
import Pill from "./Pill.vue";
import { ref } from "vue";

const { timeout } = defineProps({
  timeout: {
    type: Number,
    default: Math.random() * 1500,
  },
});

await new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, timeout);
});

const response = ref({});
const roll = async () => {
  console.debug("Activity:: Fetching... ");
  const res = await fetch(
    "http://www.boredapi.com/api/activity/"
  );
  if (res.ok) {
    console.debug("Activity:: HTTP OK: ", res.status);
    response.value = await res.json();
  } else {
    console.error("Activity:: HTTP Error: " + res.status, res);
  }
};

const start = () => {
  // TODO log time spent doing activity?
  console.log(`starting to ${response.value.activity}...`);
};

await roll();
</script>

<template>
  <!--TODO apply Suspense to these elems (h1, pill, ok/nah buttons), 
    not from parent to this component as a whole -->
  <h1 class="text-center text-3xl">
    {{ response.activity }}
  </h1>
  <Pill>
    {{ response.type }}
  </Pill>

  <div class="flex w-4/5 justify-evenly">
    <button
      class="inline-block rounded border-2 border-black border-b-black bg-green-700 px-3 py-1 text-white shadow-md hover:font-bold hover:shadow-xl"
      @click="start"
    >
      ok
    </button>
    <button
      class="inline-block rounded border-2 border-black border-b-black bg-red-700 px-3 py-1 text-white shadow-md hover:font-bold hover:shadow-xl"
      @click="roll"
    >
      nah
    </button>
  </div>
</template>

<style scoped>
/* TODO */
</style>
