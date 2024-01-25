<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps([
    'buttonLabel',
]);

const emit = defineEmits(['click'])
</script>

<template>
  <div class="ui-button" @click="(e) => emit('click', e)">
    <p>{{buttonLabel}}</p>
  </div>
</template>

<style scoped>

</style>