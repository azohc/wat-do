<script setup>
import { ref } from "vue";

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const isActive = ref(props.active);

// TODO map each activity to a color
const CLASSES =
  "inline-block rounded border-2 border-black border-b-black px-3 py-1 shadow-md hover:font-bold hover:shadow-xl";

// TODO map each activity to a color, set from parent?
const CLASSES_ACTIVE = "bg-slate-400";
const CLASSES_INACTIVE = "bg-slate-300";
</script>

<template>
  <div>
    <a
      :class="
        [CLASSES].concat(
          isActive ? CLASSES_ACTIVE : CLASSES_INACTIVE
        )
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
