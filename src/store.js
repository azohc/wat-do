import { defineStore } from "pinia";
export const useActivityStore = defineStore("activity", () => {
  const activity = ref(undefined);
  function set(a) {
    activity.value = a;
  }
  return { activity, set };
});
