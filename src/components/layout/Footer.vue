<template>
  <footer
    :class="
      mode.darkMode
        ? 'bg-[#030712] text-slate-100 border-t border-slate-900'
        : 'bg-[#fafafa] text-slate-900 border-t border-slate-200'
    "
    class="pt-24 pb-12 transition-all duration-500 relative overflow-hidden"
  >
    <!-- Background Ambient Glow (Luxury Tech Vibe) -->
    <div v-if="mode.darkMode" class="absolute top-0 left-1/4 w-125 h-37.5 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      
      <!-- 1. Premium Editorial Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b" :class="mode.darkMode ? 'border-slate-900' : 'border-slate-200'">

        <!-- Column 1: Brand & Identity -->
        <div class="space-y-6">
          <h2 class="text-3xl font-black tracking-[0.25em] bg-clip-text text-transparent bg-linear-to-r from-current via-slate-400 to-current select-none">
            ELYSIA
          </h2>
          
          <p 
            :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'" 
            class="text-sm leading-relaxed font-light pr-4"
          >
            Redefining the intersection of high-fashion craftsmanship and next-generation technology. Creating pieces that celebrate individuality.
          </p>

          <!-- Social Connect Icons with Floating Glow Effect -->
          <div class="flex items-center gap-4 pt-2">
            <a 
              v-for="(icon, index) in ['globe', 'envelope-at', 'link-45deg', 'instagram']" 
              :key="index"
              href="#"
              :class="mode.darkMode ? 'bg-slate-900/80 text-slate-300 border-slate-800 hover:text-white hover:border-slate-600' : 'bg-slate-100 text-slate-600 border-slate-200 hover:text-black hover:border-slate-400'"
              class="w-10 h-10 rounded-xl flex items-center justify-center border text-base transition-all duration-300 active:scale-90 hover:-translate-y-1"
            >
              <i :class="`bi bi-${icon}`"></i>
            </a>
          </div>
        </div>

        <!-- Column 2: Company Directory -->
        <div>
          <h3 class="text-xs tracking-[0.3em] font-bold mb-8 uppercase opacity-90" :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'">
            Company
          </h3>

          <ul class="space-y-4 text-sm font-medium">
            <li 
              v-for="item in ['Sustainability', 'Journal', 'Careers', 'Store Locator']" 
              :key="item"
              :class="mode.darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-black'"
              class="group flex items-center gap-2 cursor-pointer transition-all duration-300 translate-x-0 hover:translate-x-2"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Column 3: Customer Support -->
        <div>
          <h3 class="text-xs tracking-[0.3em] font-bold mb-8 uppercase opacity-90" :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'">
            Support
          </h3>

          <ul class="space-y-4 text-sm font-medium">
            <li 
              v-for="item in ['Shipping & Returns', 'Contact Us', 'Privacy Policy', 'Terms of Service']" 
              :key="item"
              :class="mode.darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-black'"
              class="group flex items-center gap-2 cursor-pointer transition-all duration-300 translate-x-0 hover:translate-x-2"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Column 4: Premium App Download & Newsletter -->
        <div class="space-y-6">
          <h3 class="text-xs tracking-[0.3em] font-bold mb-2 uppercase opacity-90" :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'">
            Exclusive Access
          </h3>

          <p :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'" class="text-sm leading-relaxed font-light">
            Download the Elysia App for a seamless high-fashion shopping experience.
          </p>

          <!-- Redesigned Store Download Buttons (Zero-dependence on local images) -->
          <div class="space-y-3">
            <!-- App Store -->
            <button
              :class="mode.darkMode ? 'bg-white hover:bg-slate-100 text-slate-900 shadow-md shadow-white/5' : 'bg-slate-900 hover:bg-slate-800 text-white shadow-md shadow-slate-950/10'"
              class="w-full py-3 px-4 flex items-center justify-center gap-3 rounded-xl transition-all duration-300 active:scale-98 hover:-translate-y-0.5 cursor-pointer font-semibold text-sm"
            >
              <i class="bi bi-apple text-lg"></i>
              <span>Download on App Store</span>
            </button>

            <!-- Play Store (Using clean vector icons for high accessibility) -->
            <button
              :class="mode.darkMode ? 'bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white' : 'bg-white border border-slate-200 hover:bg-slate-50 text-slate-800'"
              class="w-full py-3 px-4 flex items-center justify-center gap-3 rounded-xl transition-all duration-300 active:scale-98 hover:-translate-y-0.5 cursor-pointer font-semibold text-sm"
            >
              <i class="bi bi-google-play text-lg text-indigo-500"></i>
              <span>Get it on Google Play</span>
            </button>
          </div>
        </div>

      </div>

      <!-- 2. Footer Bottom Info (Editorial Copyright & Back to Top) -->
      <div class="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p :class="mode.darkMode ? 'text-slate-500' : 'text-slate-400'" class="text-xs tracking-widest text-center md:text-left">
          © 2026 RICHHAT & BUNTHAI. ALL RIGHTS RESERVED.
        </p>

        <!-- Dynamic Back To Top Button (Premium Interaction) -->
        <button 
          @click="window.scrollTo({ top: 0, behavior: 'smooth' })"
          :class="mode.darkMode ? 'border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 bg-slate-950/40' : 'border-slate-200 text-slate-500 hover:text-black hover:border-slate-400 bg-white'"
          class="flex items-center gap-2.5 px-4 py-2 rounded-xl border text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer active:scale-95 group"
        >
          <span>Back to top</span>
          <i class="bi bi-arrow-up transition-transform duration-300 group-hover:-translate-y-1"></i>
        </button>
      </div>
    
    </div>
  </footer>
</template>





<script setup>

import { useDarkModeStore } from '../../stores/darkMode'

const mode = useDarkModeStore()

const window = globalThis.window;

</script>