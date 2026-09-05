<script setup>
// This file used to point straight at HelloWorld.vue.
// Now it just hosts the router, and the router points '/' at
// views/Home.vue — the actual portfolio page.
</script>

<template>
  <router-view />
</template>

<style>
/* Global resets so the black & white design is consistent everywhere */
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: #ffffff;
  color: #0a0a0a;
  -webkit-font-smoothing: antialiased;
}
</style>
