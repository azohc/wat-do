<script setup>
import { ROUTE_ROLL } from "../commons";
</script>

<template>
  <section
    class="grid grid-cols-1 justify-items-center py-16"
  >
    <h2 class="py-16">nothing to see here...</h2>
    <h3>
      ever ask yourself {{ " " }}
      <router-link
        :to="{ name: ROUTE_ROLL }"
        class="text-blue-900"
      >
        wat do?</router-link
      >
    </h3>
  </section>
</template>

<style scoped></style>
