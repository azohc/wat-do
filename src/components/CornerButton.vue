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
  <router-link
    :to="{ name: to }"
    class="fixed top-0 right-0 m-2 flex h-[36px] w-[36px] items-center justify-center rounded border-2 border-black bg-zinc-400 opacity-30 hover:font-extrabold hover:opacity-80"
  >
    {{ text }}
  </router-link>
</template>

<style scoped></style>
