<script setup>
import { ref } from "vue";

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

const isActive = ref(props.active);

const CLASSES =
  "inline-block rounded border-2 border-black border-b-black\
   px-3 py-1 shadow-md text-center hi text-xl flex justify-around\
   items-center ";
const CLASSES_CLICKABLE = "hover:font-bold hover:shadow-xl";
const CLASSES_UNCLICKABLE = "cursor-default";

// TODO map each activity to a color, set from parent?
const CLASSES_ACTIVE = " bg-slate-400";
const CLASSES_INACTIVE = " bg-slate-300";
</script>

<template>
  <div>
    <a
      :class="
        [CLASSES]
          .concat(
            props.clickable
              ? CLASSES_CLICKABLE
              : CLASSES_UNCLICKABLE
          )
          .concat(isActive ? CLASSES_ACTIVE : CLASSES_INACTIVE)
      "
      href="#"
    >
      <slot></slot>
    </a>
  </div>
</template>

<style scoped>
/* TODO 

label is a little pill with a text on it
it has an onhover efect that can hint that it's clickable
can go active/inactive potentially, as if part of a selector 
    e.g. a multi-select filter that includes the types of activity 
    so as to view them or not view them


*/
</style>
