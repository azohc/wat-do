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

const rolling = ref(true);

const roll = () => (rolling.value = true);
</script>

<template>
  <Suspense>
    <Activity
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

  <StickyFooter>
    <div :class="FOOTER_CONTAINER_CLASSES">
      <router-link
        :to="{ name: ROUTE_DOING }"
        :class="BUTTON_CLASSES.concat(' bg-green-700')"
      >
        ok
      </router-link>
      <button
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
