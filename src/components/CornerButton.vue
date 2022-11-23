<script setup>
const { text, to } = defineProps({
  text: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="fixed flex w-full flex-row-reverse">
    <!-- TODO abstract out router-link to app and conditionally show on certain routes? -->
    <router-link
      :to="to"
      class="m-2 flex h-[40px] w-[40px] items-center justify-center rounded-md bg-slate-400"
    >
      {{ text }}
    </router-link>
  </div>
</template>

<style scoped>
/* TODO */
</style>
