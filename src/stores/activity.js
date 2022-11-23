import { defineStore } from "pinia";
import { ref } from "vue";

export const useActivityStore = defineStore(
  "activity",
  () => {
    const activity = ref(undefined);
    function set(a) {
      activity.value = a;
    }
    return { activity, set };
  }
);
