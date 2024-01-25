<script setup>
import SidebarLayout from "@/layout/SidebarLayout.vue";
</script>

<template>
  <SidebarLayout/>
  <router-view/>
</template>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>
