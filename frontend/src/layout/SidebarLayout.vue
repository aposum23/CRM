<script setup>
import { MENU_STRUCTURE } from "@/constants/sidebarConstants";
import MenuButton from "@/components/buttons/MenuButton.vue";

let lastMenuGroup = ''

const isNewMenuGroup = (menuItem) => {
  if (menuItem.group && menuItem.group !== lastMenuGroup) {
    lastMenuGroup = menuItem.group;
    return true;
  } else return false;
}
</script>

<template>
  <div class="sidebar">
    <template v-for="menuItem in MENU_STRUCTURE" :key="menuItem.label">
      <div class="sidebar__group-title" v-if="isNewMenuGroup(menuItem)">
        <p>{{menuItem.group}}</p>
      </div>
      <MenuButton :button-label="menuItem.label" :route-name="menuItem.route"/>
    </template>
  </div>
</template>

<style scoped>
  @keyframes sidebarAppearLeft {
    0% {
      transform: translate(-1000px, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  .sidebar {
    width: 20vw;
    height: 100vh;
    padding: 2rem .5rem;
    border-right: 1px solid #000000;
    animation: sidebarAppearLeft 500ms ease-in;
    position: fixed;
    overflow-y: scroll;
  }

  .sidebar::-webkit-scrollbar {
    width: .3rem;
  }

  .sidebar::-webkit-scrollbar-thumb {
    background-color: #3d9b76;
    border-radius: 16px;
  }

  .sidebar__group-title p {
    color: #3d9b76;
    font-weight: bold;
    height: 70px;
  }
</style>
