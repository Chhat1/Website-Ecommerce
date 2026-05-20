<script setup>
import Navbar from './components/layout/Navbar.vue';
import { useDarkModeStore } from './stores/darkMode';

const mode = useDarkModeStore()

</script>

<template>


  <div :class="mode.darkMode ? 'bg-[#0f172a] text-white' : 'bg-white text-black' ">
      <Navbar/>
      <router-view></router-view>
  </div>


</template>



