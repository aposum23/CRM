<script setup>
import { defineProps } from 'vue';
import {useRoute, useRouter} from "vue-router";

defineProps([
    'buttonLabel',
    'routeName',
])

const route = useRoute();
const router = useRouter();

const goToPage = (pageRoute) => {
  router.push(pageRoute);
}
</script>

<template>
  <div class="menu-button" @click="goToPage(routeName)">
    <p :class="route.name === routeName ? 'menu-button__active' : ''">{{buttonLabel}}</p>
  </div>
</template>

<style scoped>
.menu-button {
  height: 70px;
}

.menu-button p {
  padding: 0 0 0 2rem;
  margin: 0;
}

.menu-button:hover {
  cursor: pointer;
  color: #3d9b76;
}

.menu-button__active {
  color: #679921;
  font-weight: bolder;
}
</style>
