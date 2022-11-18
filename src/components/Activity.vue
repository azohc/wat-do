<script setup>
import Pill from "./Pill.vue";
import { computed, ref } from "vue";

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

const participants = computed(() =>
  response.value.participants === 1
    ? "solo"
    : `${response.value.participants} people`
);
const price = computed(() => {
  const cashEmojis = ["🫰", "💰", "💸", "🤑"];
  const p = response.value.price;
  const priceBand = 1 + Math.floor(p * 3);
  return p === 0
    ? "🫰🤑🤑"
    : Array(priceBand)
        .fill(cashEmojis[(cashEmojis.length * Math.random()) | 0])
        .join("");
});
await roll();
</script>

<template>
  <!--TODO apply Suspense to these elems (h1, pill, ok/nah buttons), 
    not from parent to this component as a whole -->
  <h1
    style="hyphens: auto"
    class="flex h-96 basis-1/2 items-center break-words text-center text-5xl lowercase"
  >
    {{ response.activity }}
  </h1>

  <div
    class="my-10 flex w-11/12 basis-1/4 flex-wrap items-center justify-around"
  >
    <Pill>
      {{ response.type }}
    </Pill>
    <Pill>
      {{ participants }}
    </Pill>
    <Pill>
      {{ price }}
    </Pill>
  </div>
</template>

<style scoped>
/* TODO */
</style>
