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

</style>
