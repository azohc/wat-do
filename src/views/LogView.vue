<script setup>
import { getAllLogs } from "../db";
import { ref } from "vue";

const activityLogEntries = ref(
  Object.entries(getAllLogs())
);

const formatTimeSegment = (time, unit) => {
  let formatted = `${time} ${unit}`;
  if (time !== 1) formatted += "s";
  return formatted;
};
</script>

<template>
  <div class="mi-auto my-6 flex w-4/5 flex-col">
    <div
      v-if="activityLogEntries.length"
      v-for="activity in activityLogEntries"
    >
      <span> you did </span>
      <span class="font-semibold"> {{ activity[0] }}</span>

      <div
        class="flex justify-end"
        v-for="log in activity[1]"
      >
        <span> for </span>
        <span class="mx-2">
          <span v-if="log.elapsedTime.hours">
            {{
              formatTimeSegment(
                log.elapsedTime.hours,
                "hour"
              )
            }}
          </span>
          <span v-if="log.elapsedTime.minutes">
            {{
              formatTimeSegment(
                log.elapsedTime.minutes,
                "minute"
              )
            }}
          </span>
          <span>
            {{
              formatTimeSegment(
                log.elapsedTime.seconds,
                "second"
              )
            }}
          </span>
        </span>
        <span>
          on
          {{
            new Date(log.date).toLocaleDateString("es-ES")
          }}
        </span>
      </div>
      <hr class="m-3 flex-grow rounded border-2" />
    </div>
    <div v-else>
      <span>
        there is no record of any done activities...
      </span>
    </div>
  </div>
</template>

<style scoped></style>
