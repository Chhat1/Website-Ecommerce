<template>
  <footer
    :class="mode.darkMode ? 'bg-[#0f172a] text-white border-t-blue-950' : 'bg-[#ececf2] text-black border-t-gray-300'"
    class="pt-20 pb-10 transition-colors duration-300 border-t "
  >
    <div class="max-w-7xl mx-auto px-6">

      <!-- GRID -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        <!-- Column 1 -->
        <div>
          <h2 class="text-4xl font-semibold tracking-wide mb-5">
            ELYSIA
          </h2>

          <p :class="mode.darkMode ? 'text-gray-300' : 'text-gray-600'">
            Redefining the intersection of high-fashion craftsmanship and next-generation technology.
          </p>

          <!-- icons -->
          <div class="flex items-center gap-5 mt-6 text-xl">
            <i class="bi bi-globe hover:text-white/80 transition cursor-pointer"></i>
            <i class="bi bi-at hover:text-white/80 transition cursor-pointer"></i>
            <i class="bi bi-link-45deg hover:text-white/80 transition cursor-pointer"></i>
          </div>
        </div>

        <!-- Column 2 -->
        <div>
          <h3 class="text-sm tracking-[0.25em] font-medium mb-6">
            COMPANY
          </h3>

          <ul :class="mode.darkMode ? 'text-gray-300' : 'text-gray-600'" class="space-y-4">
            <li :class="mode.darkMode ? 'hover:text-blue-400' : 'hover:text-black'"  class=" transition cursor-pointer">Sustainability</li>
            <li :class="mode.darkMode ? 'hover:text-blue-400' : 'hover:text-black'"  class=" transition cursor-pointer">Journal</li>
            <li :class="mode.darkMode ? 'hover:text-blue-400' : 'hover:text-black'"  class=" transition cursor-pointer">Careers</li>
            <li :class="mode.darkMode ? 'hover:text-blue-400' : 'hover:text-black'"  class=" transition cursor-pointer">Store Locator</li>
          </ul>
        </div>

        <!-- Column 3 -->
        <div>
          <h3 class="text-sm tracking-[0.25em] font-medium mb-6">
            SUPPORT
          </h3>

          <ul :class="mode.darkMode ? 'text-gray-300 ' : 'text-gray-600 '" class="space-y-4">
            
            <li :class="mode.darkMode ? 'hover:text-blue-400' : 'hover:text-black'" class=" transition cursor-pointer">Shipping & Returns</li>
            <li :class="mode.darkMode ? 'hover:text-blue-400' : 'hover:text-black'"  class=" transition cursor-pointer">Contact Us</li>
            <li :class="mode.darkMode ? 'hover:text-blue-400' : 'hover:text-black'"  class=" transition cursor-pointer">Privacy Policy</li>
            <li :class="mode.darkMode ? 'hover:text-blue-400' : 'hover:text-black'"  class=" transition cursor-pointer">Terms of Service</li>
          </ul>
        </div>

        <!-- Column 4 -->
        <div>
          <h3 class="text-sm tracking-[0.25em] font-medium mb-6">
            EXCLUSIVE ACCESS
          </h3>

          <p :class="mode.darkMode ? 'text-gray-300' : 'text-gray-600'" class="mb-6 leading-relaxed">
            Download the Elysia App for a seamless shopping experience.
          </p>

          <!-- buttons -->
          <button
          :class="mode.darkMode ? 'bg-blue-500' : 'bg-black text-white'"
            class="w-full  py-3 flex items-center justify-center gap-2 rounded-md mb-3 hover:opacity-90 transition cursor-pointer"
          >
            <i class="bi bi-apple"></i>
            App Store
          </button>

          <button
          :class="mode.darkMode ? 'bg-white text-black' : 'bg-white border border-gray-300 hover:bg-gray-100'"
            class="w-full   py-3 flex items-center justify-center gap-2 rounded-md  transition cursor-pointer"
          >
            <img class="w-4" src="/src/assets/icons/icon-playstore.png" alt="">
            Play Store
          </button>
        </div>

      </div>
      <!-- Copyright -->
      <div class="text-center text-gray-500 mt-16 text-lg">
        © 2024 ELYSIA RETAIL GROUP. ALL RIGHTS RESERVED.


      <!-- Divider -->
      <div
        :class="mode.darkMode ? 'text-gray-400' : 'text-gray-500'"
        class="mt-16 text-center text-sm tracking-wide"
      >
        © 2026 RICHHAT & BUNTHAI. ALL RIGHTS RESERVED.
      </div>
    </div>
    </div>
  </footer>
</template>

<script setup>

import { useDarkModeStore } from '../../stores/darkMode'

const mode = useDarkModeStore()
</script>