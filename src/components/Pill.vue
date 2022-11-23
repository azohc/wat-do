<script setup>
import { ref } from "vue";
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
});

const emit = defineEmits([EVENT__PILL_CLICKED]);
const emitPillClicked = () => emit(EVENT__PILL_CLICKED);

const isActive = ref(props.active);

const CLASSES =
  "inline-block rounded border-2 border-black border-b-black\
 px-3 py-1 shadow-md text-center hi text-xl flex justify-around\
 items-center flex-grow ";
const CLASSES_CLICKABLE = "hover:font-bold hover:shadow-xl";
const CLASSES_UNCLICKABLE = "cursor-default";

// TODO map each activity to a color, set from parent?
const CLASSES_ACTIVE = " bg-slate-400";
const CLASSES_INACTIVE = " bg-slate-300";
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
            isActive ? CLASSES_ACTIVE : CLASSES_INACTIVE
          )
      "
      href="#"
    >
      <slot></slot>
    </button>
  </div>
</template>

<style scoped></style>
