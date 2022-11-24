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
  <div
    class="fixed top-0 -z-10 flex w-full flex-row-reverse"
  >
    <router-link
      :to="{ name: to }"
      class="m-2 flex h-[40px] w-[40px] items-center justify-center rounded border-2 border-black border-b-black bg-slate-400 font-bold opacity-30 hover:opacity-80"
    >
      {{ text }}
    </router-link>
  </div>
</template>

<style scoped></style>
