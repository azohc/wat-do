<script setup>
import Pill from "./Pill.vue";
import { computed, ref } from "vue";

const BUTTON_CLASSES =
  "basis-36 inline-block rounded border-2 border-black border-b-black  px-3 py-1 text-white shadow-md hover:font-bold hover:shadow-xl";
const { timeout } = defineProps({
  timeout: {
    type: Number,
    default: Math.random() * 1000,
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
const participants = computed(() =>
  response.value.participants === 1
    ? "solo"
    : `${response.value.participants} people`
);
const price = computed(() => {
  const p = response.value.price;
  return p === 0
    ? "🫰 free 🤑"
    : Array(1 + Math.floor(p * 3))
        .fill("🫰")
        .join("");
});
await roll();
</script>

<template>
  <!--TODO apply Suspense to these elems (h1, pill, ok/nah buttons), 
    not from parent to this component as a whole -->
  <h1 class="flex basis-3/4 items-center text-center text-7xl">
    {{ response.activity }}
  </h1>

  <div class="flex w-10/12 justify-around">
    <Pill>
      {{ participants }}
    </Pill>
    <Pill>
      {{ response.type }}
    </Pill>
    <Pill>
      {{ price }}
    </Pill>
  </div>

  <div class="flex w-4/5 justify-between">
    <button
      :class="BUTTON_CLASSES.concat(' bg-green-700')"
      @click="start"
    >
      ok
    </button>
    <button
      :class="BUTTON_CLASSES.concat(' bg-red-700')"
      @click="roll"
    >
      nah
    </button>
  </div>
</template>

<style scoped>
/* TODO */
</style>
