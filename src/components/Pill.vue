<script setup>
import { toRef } from "vue";
import { EVENT__PILL_CLICKED } from "../commons";

const props = defineProps({
  clickable: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
  type: {
    // Pill doesn't need to know about activity type, but without it I can't color the Pill depending on the activity. haven't found a way to decouple this because I'm committing to the usage of tailwind
    type: String,
    required: true,
  },
});

const emit = defineEmits([EVENT__PILL_CLICKED]);
const emitPillClicked = () => emit(EVENT__PILL_CLICKED);

const active = toRef(props, "active");

const CLASSES =
  "inline-block rounded border-2 border-black \
 px-3 py-1 shadow-md text-center hi text-xl flex justify-around\
 items-center flex-grow ";
const CLASSES_CLICKABLE = "hover:font-bold hover:shadow-xl";
const CLASSES_UNCLICKABLE = "cursor-default";

// tailwind requires the classnames in full to be included in the source... so it doesn't seem possible to create the classnames programatically i.e. we cant take a color (e.g. slate) from the parent to programatically add bg-slate-200 in this component (tailwind wont bind the class)
const ACTIVITY_TYPE_COLORS = {
  education: {
    active: "bg-slate-400",
    inactive: "bg-slate-200",
  },
  recreational: {
    active: "bg-red-400",
    inactive: "bg-red-200",
  },
  social: {
    active: "bg-orange-400",
    inactive: "bg-orange-200",
  },
  diy: { active: "bg-amber-400", inactive: "bg-amber-200" },
  charity: {
    active: "bg-lime-400",
    inactive: "bg-lime-200",
  },
  cooking: {
    active: "bg-emerald-400",
    inactive: "bg-emerald-200",
  },
  relaxation: {
    active: "bg-sky-400",
    inactive: "bg-sky-200",
  },
  music: {
    active: "bg-violet-400",
    inactive: "bg-violet-200",
  },
  busywork: {
    active: "bg-rose-400",
    inactive: "bg-rose-200",
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
            props.clickable
              ? CLASSES_CLICKABLE
              : CLASSES_UNCLICKABLE
          )
          .concat(
            active
              ? ' font-extrabold ' +
                  ACTIVITY_TYPE_COLORS[props.type].active
              : ACTIVITY_TYPE_COLORS[props.type].inactive
          )
      "
      href="#"
    >
      {{ props.type }}
    </button>
  </div>
</template>

<style scoped>
button {
  transition: background 1s ease;
}
</style>
