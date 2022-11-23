<script setup>
import {
  ROUTE_ROLL,
  ROUTE_DOING,
  ROUTE_LOG,
} from "./commons";
import { useRoute } from "vue-router";
import CornerButton from "./components/CornerButton.vue";

const route = useRoute();
</script>

<template>
  <CornerButton
    v-if="route.name === ROUTE_ROLL"
    :to="ROUTE_LOG"
    text="log"
  />
  <CornerButton
    v-else-if="
      [ROUTE_DOING, ROUTE_LOG].includes(route.name)
    "
    :to="ROUTE_ROLL"
    text="x"
  />
  <router-view />
</template>

<style></style>
