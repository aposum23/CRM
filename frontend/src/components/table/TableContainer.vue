<script setup>
import { defineProps } from 'vue';
import HeaderGroup from "@/components/table/HeaderGroup.vue";

defineProps([
    'filterStructure',
]);
</script>

<template>
  <Transition class="table-container">
    <HeaderGroup :filter-structure="filterStructure"/>
  </Transition>
</template>

<style scoped>

</style>