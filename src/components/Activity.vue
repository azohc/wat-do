<script setup>
import Pill from "./Pill.vue";
import { computed, ref, toRef, watch } from "vue";
import Spinner from "./Spinner.vue";
import { EVENT__ACTIVIY_ROLLED } from "../commons";

const props = defineProps({
  rolling: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits([EVENT__ACTIVIY_ROLLED]);

const doFetch = toRef(props, "rolling");
const response = ref({});

// TODO REMOVE
// const participants = computed(() =>
//   response.value.participants === 1
//     ? "solo"
//     : `${response.value.participants} people`
// );
// const price = computed(() => {
//   const cashEmojis = ["🫰", "💰", "💸", "🤑"];
//   const p = response.value.price;
//   const priceBand = 1 + Math.floor(p * 3);
//   return p === 0
//     ? "zero cost"
//     : Array(priceBand)
//         .fill(cashEmojis[(cashEmojis.length * Math.random()) | 0])
//         .join("");
// });

const roll = async () => {
  console.debug("Activity:: Fetching... ");
  // await new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve();
  //   }, 10000);
  // });
  const res = await fetch(
    "http://www.boredapi.com/api/activity/"
  );
  if (res.ok) {
    console.debug("Activity:: HTTP OK: ", res.status);
    response.value = await res.json();
  } else {
    console.error("Activity:: HTTP Error: " + res.status, res);
  }
  emit(EVENT__ACTIVIY_ROLLED);
};

watch(doFetch, async () => doFetch.value && roll());

if (doFetch) {
  await roll();
}

const handleTypePillClicked = () => {
  console.log("pill clicked");
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
        'hyphens-auto mi-auto my-6  w-4/5  break-words text-center lowercase '.concat(
          headingFontSize
        )
      "
    >
      {{ response.activity }}
    </h1>
    <Pill
      :clickable="true"
      @pillClicked="handleTypePillClicked"
      class="mi-auto mt-16 h-12 w-3/5"
    >
      {{ response.type }}
    </Pill>

    <!-- TODO REMOVE?  -->
    <!-- <div
      class="mi-auto my-10 flex w-11/12 basis-1/4 flex-wrap items-center justify-around"
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
    </div> -->
  </template>
</template>

<style scoped></style>
