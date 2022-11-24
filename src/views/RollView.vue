<script setup>
import { ref } from "vue";
import Activity from "../components/Activity.vue";
import Spinner from "../components/Spinner.vue";
import StickyFooter from "../components/StickyFooter.vue";
import {
  BUTTON_CLASSES,
  FOOTER_CONTAINER_CLASSES,
  ROUTE_DOING,
} from "../commons";
import Pill from "../components/Pill.vue";
import { useActivityStore } from "../stores/activity";

const store = useActivityStore();

const ACTIVITY_TYPES = [
  "education",
  "recreational",
  "social",
  "diy",
  "charity",
  "cooking",
  "relaxation",
  "music",
  "busywork",
];

const rolling = ref(true);
const typeToFetch = ref(null);
const activeTypes = ref([...ACTIVITY_TYPES]);
const showTypePicker = ref(false);

const roll = () => {
  store.set(null);
  rolling.value = true;
};
const resetActiveTypes = () =>
  (activeTypes.value = [...ACTIVITY_TYPES]);

const handleTypePickerClick = () => {
  showTypePicker.value = true;
};
const handleActivityTypeClick = (type) => {
  activeTypes.value = [type];
};
const applyTypeSelection = async () => {
  typeToFetch.value = activeTypes.value[0];
  showTypePicker.value = false;
  roll();
};
</script>

<template>
  <Suspense>
    <Activity
      :type="typeToFetch"
      :rolling="rolling"
      @rolled="rolling = false"
    />
    <template #fallback>
      <div
        class="mi-auto fallback-activity flex w-full items-center justify-center"
      >
        <Spinner />
      </div>
    </template>
  </Suspense>
  <template v-if="store.activity">
    <Pill
      v-if="!showTypePicker"
      :type="store.activity.type"
      :clickable="true"
      :active="typeToFetch"
      @pillClicked="handleTypePickerClick"
      class="mi-auto mt-16 h-12 w-4/6 sm:w-3/5"
    />
    <div
      v-else
      class="mi-auto mt-16 flex max-h-56 w-4/6 flex-col overflow-scroll overflow-x-auto rounded border-2 border-zinc-400 pt-2 sm:max-h-64 sm:w-3/5"
    >
      <div class="absolute ml-2 flex flex-col">
        <button
          class="mb-1 h-9 w-9 rounded-lg border-2 border-zinc-300 text-xl text-zinc-500 hover:border-zinc-500 hover:text-zinc-900"
          :disabled="rolling"
          @click="applyTypeSelection"
        >
          ✔️
        </button>
        <button
          class="mb-1 h-9 w-9 rounded-lg border-2 border-zinc-300 text-xl text-zinc-500 hover:border-zinc-500 hover:text-zinc-900"
          :disabled="rolling"
          @click="resetActiveTypes"
        >
          ♻
        </button>
        <button
          class="h-9 w-9 rounded-lg border-2 border-zinc-300 text-xl text-zinc-500 hover:border-zinc-500 hover:text-zinc-900"
          :disabled="rolling"
          @click="showTypePicker = false"
        >
          ✖️
        </button>
      </div>
      <Pill
        v-for="type in ACTIVITY_TYPES"
        :id="type"
        :clickable="true"
        :type="type"
        :active="activeTypes.includes(type)"
        @pillClicked="() => handleActivityTypeClick(type)"
        class="mi-auto mb-2 h-12 w-3/5"
      />
    </div>
  </template>

  <StickyFooter>
    <div :class="FOOTER_CONTAINER_CLASSES">
      <router-link
        :disabled="rolling"
        :to="{ name: ROUTE_DOING }"
        :class="BUTTON_CLASSES.concat(' bg-green-700')"
      >
        ok
      </router-link>
      <button
        :disabled="rolling"
        :class="BUTTON_CLASSES.concat(' bg-red-700')"
        @click="roll"
      >
        nah
      </button>
    </div>
  </StickyFooter>
</template>

<style scoped>
.fallback-activity {
  height: 400px;
  width: 90vw;
}
</style>
