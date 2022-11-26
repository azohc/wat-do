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
  color: {
    type: String,
    default: "slate",
  },
});

const emit = defineEmits([EVENT__PILL_CLICKED]);
const emitPillClicked = () => emit(EVENT__PILL_CLICKED);

const active = toRef(props, "active");

const CLASSES =
  "inline-block rounded border-2 border-black \
 px-3 py-1 shadow-md text-center hi text-xl flex justify-around\
 items-center flex-grow";
const CLASSES_CLICKABLE = "hover:font-bold hover:shadow-xl";
const CLASSES_UNCLICKABLE = "cursor-default";
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
                  `bg-${props.color}-active`
              : `bg-${props.color}-inactive`
          )
      "
      href="#"
    >
      <slot></slot>
    </button>
  </div>
</template>

<style scoped>
button {
  transition: background 1s ease;
}
</style>
