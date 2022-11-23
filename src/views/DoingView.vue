<script setup>
import StickyFooter from "../components/StickyFooter.vue";
import {
  BUTTON_CLASSES,
  FOOTER_CONTAINER_CLASSES,
} from "../commons";
import { ref } from "vue";
import { logActivityDone } from "../db";
import { useActivityStore } from "../stores/activity";

const store = useActivityStore();

const doing = ref(true);
const timer = ref({
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const startTimer = () =>
  setInterval(() => {
    timer.value.seconds++;
    if (timer.value.seconds === 60) {
      timer.value.seconds = 0;
      timer.value.minutes++;
    }
    if (timer.value.minutes === 60) {
      timer.value.minutes = 0;
      timer.value.hours++;
    }
  }, 1000);

let timerInterval = startTimer();

const togglePause = () => {
  doing.value = !doing.value;
  if (doing.value) {
    timerInterval = startTimer();
  } else {
    clearInterval(timerInterval);
  }
};

const formatTimeSegment = (num) => {
  return (num < 10 ? "0" : "") + num;
};

const done = () => {
  logActivityDone(store.activity.activity, timer.value);
  // TODO programatic redirect
};
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="my-6 text-center text-4xl">
      you started to
      {{ store.activity.activity }}
    </h1>

    <main class="mt-12 text-8xl">
      <span>{{ formatTimeSegment(timer.hours) }}</span>
      <span>:</span>
      <span>{{ formatTimeSegment(timer.minutes) }}</span>
      <span>:</span>
      <span>{{ formatTimeSegment(timer.seconds) }}</span>
    </main>
  </div>

  <StickyFooter>
    <div :class="FOOTER_CONTAINER_CLASSES">
      <div
        v-if="doing"
        :class="
          BUTTON_CLASSES.concat(
            ' max-w-xs flex-grow bg-amber-700'
          )
        "
        @click="togglePause"
      >
        pause
      </div>
      <template v-else>
        <button
          @click="togglePause"
          :class="BUTTON_CLASSES.concat(' bg-green-700')"
        >
          resume
        </button>
        <button
          @click="done"
          :class="BUTTON_CLASSES.concat(' bg-red-700')"
        >
          finish
        </button>

        <!-- TODO remove for programatic redirect in finish-->
        <!-- <router-link
          to="/log"
          :class="BUTTON_CLASSES.concat(' bg-red-700')"
        >
          finish
        </router-link> -->
      </template>
    </div>
  </StickyFooter>
</template>

<style scoped></style>
