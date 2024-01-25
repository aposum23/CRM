<script setup>
import TableContainer from "@/components/table/TableContainer.vue";
import { CONTRACTORS_FILTERS } from "./structures/filters";
</script>

<template>
  <TableContainer :filter-structure="CONTRACTORS_FILTERS"/>
</template>

<style scoped>

</style>
