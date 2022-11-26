<script setup>
import { computed, ref, toRef, watch } from "vue";
import Spinner from "./Spinner.vue";
import { EVENT__ACTIVIY_ROLLED } from "../commons";
import { useActivityStore } from "../stores/activity";

const store = useActivityStore();

const props = defineProps({
  rolling: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String,
    default: null,
  },
});

const emit = defineEmits([EVENT__ACTIVIY_ROLLED]);

const typeToFetch = toRef(props, "type");
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
  <div
    class="flex h-[400px] w-full items-center justify-center"
    v-if="doFetch"
  >
    <Spinner />
  </div>
  <template v-else>
    <h1
      :class="
        'hyphens-auto m-10 break-words pt-3 text-center '.concat(
          headingFontSize
        )
      "
    >
      {{ response.activity }}
    </h1>
  </template>
</template>

<style scoped></style>
