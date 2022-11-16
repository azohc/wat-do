<script setup>
import Activity from "./components/Activity.vue";
</script>

<template>
  <Suspense>
    <Activity />
    <template #fallback> Loading.. </template>
  </Suspense>
</template>

<style></style>
