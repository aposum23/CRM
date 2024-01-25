<script setup>
import { MENU_STRUCTURE } from "@/constants/sidebarConstants";
import MenuButton from "@/components/buttons/MenuButton.vue";

let lastMenuGroup = ''

const isNewMenuGroup = (menuItem) => {
  if (menuItem.group !== lastMenuGroup) {
    lastMenuGroup = menuItem.group;
    return true;
  } else return false;
}
</script>

<template>
  <div class="sidebar">
    <template v-for="menuItem in MENU_STRUCTURE">
      <div class="sidebar__group-title" v-if="isNewMenuGroup(menuItem)">
        <p>{{menuItem.group}}</p>
      </div>
      <MenuButton :button-label="menuItem.label" :route="menuItem.route"/>
    </template>
  </div>
</template>

<style scoped>
  .sidebar {
    width: 20vw;
    height: 100vh;
    border: 1px solid rgba(0, 0, 0, 0);
    transition: 100ms ease-in;
  }
</style>
