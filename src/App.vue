<script setup>
import Navbar from './components/layout/Navbar.vue';
import { useDarkModeStore } from './stores/darkMode';
import Footer from './components/layout/Footer.vue'
import Contact from './components/views/Contact.vue'
const mode = useDarkModeStore()
mode.initTheme();
</script>

<template>

  <div :class="mode.darkMode ? 'bg-[#0f172a] text-white' : 'bg-white text-black' ">
      <Navbar/>
      <router-view></router-view>
      <Footer/>
  </div>


</template>