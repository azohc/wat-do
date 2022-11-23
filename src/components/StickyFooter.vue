<script setup></script>

<template>
  <footer class="fixed bottom-0 w-full py-6">
    <slot></slot>
  </footer>
</template>

<style scoped>
footer {
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
