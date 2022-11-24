<script setup>
import { ref } from "vue";
import { EVENT__PILL_CLICKED } from "../commons";

const { clickable, active, type } = defineProps({
  clickable: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    required: true,
  },
});

const emit = defineEmits([EVENT__PILL_CLICKED]);
const emitPillClicked = () => emit(EVENT__PILL_CLICKED);

const isActive = ref(active);

const CLASSES =
  "inline-block rounded border-2 border-black border-b-black\
 px-3 py-1 shadow-md text-center hi text-xl flex justify-around\
 items-center flex-grow ";
const CLASSES_CLICKABLE = "hover:font-bold hover:shadow-xl";
const CLASSES_UNCLICKABLE = "cursor-default";

const ACTIVITY_TYPE_COLORS = {
  education: {
    active: "bg-slate-400",
    inactive: "bg-slate-300",
  },
  recreational: {
    active: "bg-red-400",
    inactive: "bg-red-300",
  },
  social: {
    active: "bg-orange-400",
    inactive: "bg-orange-400",
  },
  diy: { active: "bg-amber-400", inactive: "bg-amber-400" },
  charity: {
    active: "bg-lime-400",
    inactive: "bg-lime-400",
  },
  cooking: {
    active: "bg-emerald-400",
    inactive: "bg-emerald-400",
  },
  relaxation: {
    active: "bg-sky-400",
    inactive: "bg-sky-400",
  },
  music: {
    active: "bg-violet-400",
    inactive: "bg-violet-400",
  },
  busywork: {
    active: "bg-rose-400",
    inactive: "bg-rose-400",
  },
};
</script>

<template>
  <div class="flex items-center justify-center">
    <button
      @click="emitPillClicked"
      :class="
        [CLASSES]
          .concat(
            clickable
              ? CLASSES_CLICKABLE
              : CLASSES_UNCLICKABLE
          )
          .concat(
            isActive
              ? ACTIVITY_TYPE_COLORS[type].active
              : ACTIVITY_TYPE_COLORS[type].inactive
          )
      "
      href="#"
    >
      {{ type }}
    </button>
  </div>
</template>

<style scoped></style>
