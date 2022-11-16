<script setup>
import { ref } from "vue";
import Activity from "./components/Activity.vue";
import YesNo from "./components/YesNo.vue";
</script>

<template>
  <Suspense>
    <Activity />
    <template #fallback> Loading.. </template>
  </Suspense>
</template>

<style></style>
