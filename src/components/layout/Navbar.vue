<script setup>
import { ref, watch } from "vue";
import { useCartStore } from "../../stores/cartStore";
import { useDarkModeStore } from "../../stores/darkMode";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/AuthStore";
const router = useRouter();
const cartStore = useCartStore();
const mode = useDarkModeStore();
const authStore = useAuthStore();

const goToAccount = () => {
  if (!authStore.user) {
    router.push("/register");
  } else {
    router.push("/account");
  }
};

const isOpen = ref(false);

const sidebar = () => {
  isOpen.value = !isOpen.value;
};

const logout = () => {
  authStore.logout();
  router.push("/login");
};
</script>

<template>
  <!-- Main Header -->
  <header
    :class="
      mode.darkMode
        ? 'bg-[#0b0f19]/70 border-b border-slate-800 text-slate-100'
        : 'bg-white/70 border-b border-slate-200/80 text-slate-800'
    "
    class="backdrop-blur-xl w-full h-auto sticky top-0 z-50 transition-all duration-500"
  >
    <!-- 1. Announcement Bar (Smooth Text Ticker Layout) -->
    <div
      :class="mode.darkMode ? 'bg-linear-to-r from-indigo-900 via-slate-900 to-indigo-900 text-slate-200' : 'bg-linear-to-r from-slate-900 via-indigo-950 to-slate-900 text-white'"
      class="w-full py-2.5 px-4 overflow-hidden relative group border-b border-white/5"
    >
      <p class="font-medium text-center tracking-wide text-xs md:text-sm transition-transform duration-300 group-hover:scale-105">
        ✨ Free Shipping On All Domestic Orders Over $250
      </p>
    </div>

    <!-- 2. Main Navigation Bar -->
    <div class="w-full max-w-7xl mx-auto lg:px-12 md:px-8 px-5 py-4 flex justify-between items-center">
      
      <!-- Logo & Mobile Toggle -->
      <div class="flex items-center gap-4">
        <!-- Mobile Menu Trigger -->
        <button 
          @click="sidebar" 
          class="lg:hidden flex flex-col gap-1.5 justify-center items-center w-9 h-9 rounded-xl border border-slate-500/20 active:scale-95 transition-all"
        >
          <span :class="isOpen ? 'rotate-45 translate-y-2' : ''" class="w-5 h-0.5 bg-current transition-all duration-300"></span>
          <span :class="isOpen ? 'opacity-0' : ''" class="w-5 h-0.5 bg-current transition-all duration-300"></span>
          <span :class="isOpen ? '-rotate-45 -translate-y-1' : ''" class="w-5 h-0.5 bg-current transition-all duration-300"></span>
        </button>

        <!-- Luxury Brand Logo -->
        <h1 class="text-2xl md:text-3xl font-black tracking-[0.2em] bg-clip-text text-transparent bg-linear-to-r from-current via-slate-400 to-current cursor-pointer select-none">
          ELYSIA
        </h1>
      </div>

      <!-- Desktop Navigation Menu (Advance Interactions) -->
      <nav class="hidden lg:flex items-center gap-8">
        <router-link
          v-for="link in ['Home', 'Shop', 'About', 'Contact']"
          :key="link"
          :to="link === 'Home' ? '/' : `/${link.toLowerCase()}`"
          class="relative py-2 text-sm font-semibold tracking-wider uppercase transition-colors duration-300 group"
          :class="mode.darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'"
          active-class="!text-indigo-500 font-bold"
        >
          {{ link }}
          <!-- Underline Animation Effect -->
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
        </router-link>
      </nav>

      <!-- Utility Icons Section -->
      <div class="flex items-center gap-3 md:gap-5">
        
        <!-- Theme Toggle Button -->
        <button 
          @click="mode.toggleDarkMode" 
          class="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-500/10 hover:border-slate-500/30 hover:bg-slate-500/5 active:scale-90 transition-all duration-300 cursor-pointer"
        >
          <i v-if="mode.darkMode" class="bi bi-moon-stars-fill text-lg text-amber-400 animate-pulse"></i>
          <i v-else class="bi bi-sun-fill text-lg text-amber-500"></i>
        </button>

        <!-- Shopping Cart Icon -->
        <router-link 
          to="/checksummery" 
          class="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-500/10 hover:border-slate-500/30 hover:bg-slate-500/5 active:scale-90 transition-all duration-300 relative"
        >
          <i class="bi bi-bag-heart text-xl"></i>
          <span class="absolute -top-1.5 -right-1.5 bg-linear-to-r from-rose-500 to-red-600 text-white text-[11px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg shadow-red-500/30 animate-bounce">
            {{ cartStore.cartCount }}
          </span>
        </router-link>

        <!-- User Profile Avatar (Premium Glow) -->
        <div class="hidden md:block">
          <button @click="goToAccount" class="relative group active:scale-95 transition-all">
            <div class="absolute -inset-0.5 bg-linear-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
            
            <!-- Conditionally Render Profile -->
            <img
              v-if="authStore.user?.profile"
              :src="authStore.user.profile"
              class="relative w-10 h-10 rounded-full object-cover border border-white/20 shadow-md"
            />
            <div
              v-else-if="authStore.user"
              class="relative w-10 h-10 rounded-full bg-linear-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md"
            >
              {{ authStore.user.name.charAt(0).toUpperCase() }}
            </div>
            <div
              v-else
              :class="mode.darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'"
              class="relative w-10 h-10 rounded-full flex items-center justify-center border border-slate-500/10"
            >
              <i class="bi bi-person text-xl"></i>
            </div>
          </button>
        </div>

      </div>
    </div>
  </header>

  <!-- 3. Mobile Sidebar Overlay & Navigation Menu -->
  <div 
    v-if="isOpen" 
    @click="sidebar" 
    class="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
  ></div>

  <aside
    :class="[
      isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full pointer-events-none',
      mode.darkMode ? 'bg-[#0b0f19]/95 border-r border-slate-800' : 'bg-white/95 border-r border-slate-200'
    ]"
    class="fixed top-0 left-0 w-[85%] sm:w-95 h-full z-50 backdrop-blur-xl transition-transform duration-500 ease-out lg:hidden flex flex-col justify-between p-6"
  >
    <div>
      <!-- Header Sidebar -->
      <div class="flex items-center justify-between pb-6 border-b border-slate-500/10">
        <h2 class="text-xl font-black tracking-widest">ELYSIA</h2>
        <button 
          @click="sidebar" 
          class="w-9 h-9 rounded-xl flex items-center justify-center border border-slate-500/10 hover:bg-rose-500/10 hover:text-rose-500 active:scale-90 transition-all"
        >
          <i class="bi bi-x-lg text-sm"></i>
        </button>
      </div>

      <!-- User Profile Card in Sidebar -->
      <div 
        :class="mode.darkMode ? 'bg-slate-900/60' : 'bg-slate-50/80'" 
        class="mt-6 p-4 rounded-2xl border border-slate-500/10 flex items-center justify-between shadow-sm animate-fade-in"
      >
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-xl overflow-hidden border border-slate-500/20 shadow-inner">
            <img v-if="authStore.user?.profile" :src="authStore.user.profile" class="w-full h-full object-cover" />
            <div v-else-if="authStore.user?.name" class="w-full h-full bg-indigo-500 text-white flex items-center justify-center font-bold uppercase text-sm">
              {{ authStore.user.name.charAt(0) }}
            </div>
            <div v-else class="w-full h-full flex items-center justify-center text-slate-400">
              <i class="bi bi-person text-lg"></i>
            </div>
          </div>
          <div>
            <h4 class="text-sm font-bold tracking-wide">{{ authStore.user?.name || "Welcome Guest" }}</h4>
            <p class="text-[11px] text-slate-400">Premium Member</p>
          </div>
        </div>
        
        <button 
          v-if="authStore.user" 
          @click="logout" 
          class="flex items-center gap-1.5 text-xs bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white px-3 py-1.5 rounded-xl font-medium transition-all duration-300"
        >
          <i class="bi bi-box-arrow-right"></i> Log out
        </button>
      </div>

      <!-- Mobile Navigation Links -->
      <nav class="flex flex-col gap-2 mt-8">
        <router-link
          v-for="link in ['Home', 'Shop', 'About', 'Contact', 'Account']"
          :key="link"
          :to="link === 'Home' ? '/' : `/${link.toLowerCase()}`"
          class="flex items-center justify-between p-4 font-semibold text-sm uppercase tracking-wider rounded-2xl border border-transparent transition-all duration-300"
          :class="mode.darkMode ? 'text-slate-400 hover:bg-slate-900 hover:text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'"
          active-class="!bg-indigo-500/10 !text-indigo-500 !border-indigo-500/20"
        >
          <span>{{ link }}</span>
          <i class="bi bi-chevron-right text-xs opacity-70"></i>
        </router-link>
      </nav>
    </div>

    <!-- Sidebar Footer -->
    <div class="border-t border-slate-500/10 pt-6">
      <div class="flex justify-center gap-5 mb-5 text-slate-400">
        <i v-for="social in ['instagram', 'facebook', 'telegram', 'twitter', 'tiktok']" :key="social" :class="`bi bi-${social}`" class="text-lg hover:text-indigo-500 cursor-pointer transition-colors duration-300"></i>
      </div> 
      <p class="text-[10px] text-center tracking-wider text-slate-400 font-medium">
        © 2026 RICHHAT & BUNTHAI. ALL RIGHTS RESERVED.
      </p>
    </div>
  </aside>
</template>