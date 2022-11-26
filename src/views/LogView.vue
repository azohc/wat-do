<script setup>
import { getAllLogs, getTotalTimeInvested } from "../db";
import { ref, watch } from "vue";

const activityLogEntries = ref(
  Object.entries(getAllLogs())
);

const totalTime = ref(getTotalTimeInvested());
watch(
  activityLogEntries,
  () => (totalTime.value = getTotalTimeInvested())
);

const formatTime = (time) => {
  const formatTimeSegment = (seg, unit) => {
    let formatted = `${seg} ${unit}`;
    if (seg !== 1) formatted += "s";
    return formatted + " ";
  };
  let str = "";
  if (time.hours) {
    str += formatTimeSegment(time.hours, "hour");
  }
  if (time.minutes) {
    str += formatTimeSegment(time.minutes, "minute");
  }
  if (time.seconds) {
    str += formatTimeSegment(time.seconds, "second");
  }
  return str.trim();
};
</script>

<template>
  <div class="mi-auto my-10 flex w-4/5 flex-col">
    <h1 v-if="totalTime" class="text-center text-3xl">
      you've invested a grand total of
      <strong>
        {{ formatTime(totalTime) }}
      </strong>
      into random activities
    </h1>

    <div
      :class="
        'mt-10 max-h-96  px-3'.concat(
          activityLogEntries.length
            ? 'overflow-y-scroll'
            : ''
        )
      "
    >
      <hr v-if="activityLogEntries.length" />
      <div
        v-if="activityLogEntries.length"
        v-for="activity in activityLogEntries"
      >
        <span> you did </span>
        <span class="font-semibold">
          {{ activity[0] }}</span
        >
        <div
          class="flex justify-end"
          v-for="log in activity[1]"
        >
          <span> for </span>
          <span class="mx-2">
            {{ formatTime(log.elapsedTime) }}
          </span>
          <span>
            on
            {{
              new Date(log.date).toLocaleDateString("es-ES")
            }}
          </span>
        </div>
        <hr />
      </div>
      <div v-else class="text-center">
        there is no record of any done activities...
      </div>
    </div>
  </div>
</template>

<style scoped></style>
