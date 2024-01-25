<script setup>
import { defineProps } from 'vue';
import router from "@/router";

defineProps([
    'buttonLabel',
    'route',
])

const goToPage = (pageRoute) => {
  router.push(pageRoute);
}
</script>

<template>
  <div class="menu-button" @click="goToPage(route)">
    <p>{{buttonLabel}}</p>
  </div>
</template>

<style scoped>
.menu-button p {
  padding: 0 0 0 2rem;
  margin: 0;
}

.menu-button:hover {
  cursor: pointer;
  border: 1px solid #3d9b76;
  border-radius: 16px;
}
</style>
