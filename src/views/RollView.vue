<script setup>
import { ref } from "vue";
import Activity from "../components/Activity.vue";
import Spinner from "../components/Spinner.vue";

const BUTTON_CLASSES =
  "h-14 flex justify-around items-center text-2xl \
  basis-32 inline-block rounded border-2 border-black \
  border-b-black px-3 py-1 text-white shadow-md \
  hover:font-bold hover:shadow-xl";

const rolling = ref(true);

const start = () => {
  // TODO log time spent doing activity?
  console.log(`starting to ${response.value.activity}...`);
};
const roll = () => (rolling.value = true);
</script>

<template>
  <Suspense>
    <Activity :rolling="rolling" @rolled="rolling = false" />
    <template #fallback>
      <div
        class="mi-auto fallback-activity flex w-full items-center justify-center"
      >
        <Spinner />
      </div>
    </template>
  </Suspense>
  <div class="mi-auto flex w-[77vw] justify-between">
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
.fallback-activity {
  height: 400px;
  width: 90vw;
}
</style>
