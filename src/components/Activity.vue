<script setup>
import Pill from "./Pill.vue";
import { computed, ref, toRef, watch } from "vue";
import Spinner from "./Spinner.vue";
import { EVENT__ACTIVIY_ROLLED } from "../commons";
import { useActivityStore } from "../stores/activity";

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

const store = useActivityStore();

const props = defineProps({
  rolling: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits([EVENT__ACTIVIY_ROLLED]);

const typeToFetch = ref(null);
const doFetch = toRef(props, "rolling");
const response = ref({});
const activityURL = () => {
  let url = "http://www.boredapi.com/api/activity";
  if (typeToFetch.value) {
    url += `?type=${typeToFetch.value}`;
  }
  return url;
};
const roll = async () => {
  console.debug("Activity:: Fetching... ");
  const res = await fetch(activityURL());
  if (res.ok) {
    console.debug("Activity:: HTTP OK: ", res.status);
    response.value = await res.json();
    response.value.activity =
      response.value.activity.toLowerCase();
    store.set(response.value);
  } else {
    console.error(
      "Activity:: HTTP Error: " + res.status,
      res
    );
  }
  emit(EVENT__ACTIVIY_ROLLED);
};

watch(doFetch, async () => doFetch.value && roll());

if (doFetch) {
  await roll();
}

const activeTypes = ref([...ACTIVITY_TYPES]);
const resetActiveTypes = () =>
  (activeTypes.value = [...ACTIVITY_TYPES]);

const showTypePicker = ref(false);
const handleTypePickerClick = () => {
  showTypePicker.value = true;
};
const handleActivityTypeClick = (type) => {
  activeTypes.value = [type];
};
const applyTypeSelection = async () => {
  typeToFetch.value = activeTypes.value[0];
  showTypePicker.value = false;
  await roll();
};

// HEADING FONT SIZE
const SHORT_ACTIVITY_TEXT = "text-7xl";
const LONG_ACTIVITY_TEXT = "text-6xl";
const LONG_LONG_ACTIVITY_TEXT = "text-5xl";
const MEGA_LONG_ACTIVITY_TEXT = "text-4xl";

const headingFontSize = computed(() =>
  megaLongActivity.value
    ? MEGA_LONG_ACTIVITY_TEXT
    : longLongActivity.value
    ? LONG_LONG_ACTIVITY_TEXT
    : longActivity.value
    ? LONG_ACTIVITY_TEXT
    : SHORT_ACTIVITY_TEXT
);
const longActivity = computed(
  () => response.value.activity.length > 22
);
const longLongActivity = computed(
  () => response.value.activity.length > 33
);
const megaLongActivity = computed(
  () => response.value.activity.length > 60
);
</script>

<template>
  <!--TODO apply Suspense to these elems (h1, pill, ok/nah buttons), 
    not from parent to this component as a whole -->
  <div
    class="flex h-[400px] w-full items-center justify-center"
    v-if="doFetch"
  >
    <Spinner />
  </div>
  <template v-else>
    <h1
      :class="
        'hyphens-auto mi-auto my-6  w-4/5  break-words text-center '.concat(
          headingFontSize
        )
      "
    >
      {{ response.activity }}
    </h1>
    <Pill
      v-if="!showTypePicker"
      :type="response.type"
      :clickable="true"
      @pillClicked="handleTypePickerClick"
      class="mi-auto mt-16 h-12 w-3/5"
    />
    <div
      v-else
      class="mi-auto flex max-h-64 w-3/5 flex-col overflow-scroll overflow-x-auto rounded border-2 border-zinc-400 pt-2"
    >
      <div class="absolute ml-2 flex flex-col">
        <button
          class="mb-1 h-9 w-9 rounded-lg border-2 border-zinc-300 text-3xl text-zinc-500 hover:border-zinc-500 hover:text-zinc-900"
          @click="applyTypeSelection"
        >
          ✔
        </button>
        <button
          class="mb-1 h-9 w-9 rounded-lg border-2 border-zinc-300 text-3xl text-zinc-500 hover:border-zinc-500 hover:text-zinc-900"
          @click="resetActiveTypes"
        >
          ♻
        </button>
        <button
          class="h-9 w-9 rounded-lg border-2 border-zinc-300 text-3xl text-zinc-500 hover:border-zinc-500 hover:text-zinc-900"
          @click="showTypePicker = false"
        >
          ❌
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
</template>

<style scoped></style>
