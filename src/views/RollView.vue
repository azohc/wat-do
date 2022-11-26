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
import { useRouter } from "vue-router";

const router = useRouter();
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
const ACTIVITY_TYPE_COLORS = {
  education: "slate",
  recreational: "red",
  social: "orange",
  diy: "amber",
  charity: "lime",
  cooking: "emerald",
  relaxation: "sky",
  music: "violet",
  busywork: "rose",
};

const rolling = ref(true);
const typeToFetch = ref(null);
const activeTypes = ref([...ACTIVITY_TYPES]);
const showTypePicker = ref(false);
const previousActivityType = ref("slate");

const roll = () => {
  showTypePicker.value = false;
  previousActivityType.value = store.activity.type;
  store.set(null);
  rolling.value = true;
};
const resetActiveTypes = () => {
  activeTypes.value = [...ACTIVITY_TYPES];
};
const handleTypePickerClick = () => {
  showTypePicker.value = true;
};
const handleActivityTypeClick = (type) => {
  activeTypes.value = [type];
};
const applyTypeSelection = async () => {
  typeToFetch.value =
    activeTypes.value.length === 1
      ? activeTypes.value[0]
      : null;
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
        class="mi-auto my-10 flex h-[111px] w-full items-center justify-center"
      >
        <Spinner />
      </div>
    </template>
  </Suspense>
  <div
    v-if="!store.activity"
    :class="
      'mi-auto mt-16 flex h-12 w-4/6 items-center justify-center rounded border-2 border-black sm:w-3/5 '.concat(
        `bg-${ACTIVITY_TYPE_COLORS[previousActivityType]}-${
          !!typeToFetch ? 'active' : 'inactive'
        }`
      )
    "
  >
    <Spinner :color="'black'" />
  </div>
  <template v-else>
    <Pill
      v-if="!showTypePicker"
      :color="ACTIVITY_TYPE_COLORS[store.activity.type]"
      :clickable="true"
      :active="!!typeToFetch"
      @pillClicked="handleTypePickerClick"
      class="mi-auto mt-16 h-12 w-4/6 sm:w-3/5"
      >{{ store.activity.type }}</Pill
    >
    <div
      v-else
      class="mi-auto mt-16 flex max-h-56 w-4/6 flex-col overflow-y-scroll rounded border-2 border-zinc-400 pt-2 sm:max-h-64 sm:w-3/5"
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
        :color="ACTIVITY_TYPE_COLORS[type]"
        :active="activeTypes.includes(type)"
        @pillClicked="() => handleActivityTypeClick(type)"
        class="mi-auto mb-2 h-12 w-3/5"
        >{{ type }}</Pill
      >
    </div>
  </template>

  <StickyFooter>
    <div :class="FOOTER_CONTAINER_CLASSES">
      <button
        :disabled="rolling"
        :class="BUTTON_CLASSES.concat(' bg-green-700')"
        @click="router.push(ROUTE_DOING)"
      >
        ok
      </button>
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
button {
  transition: background-color 0.5s;
}
</style>
