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

const sidebar = () =>{
  isOpen.value = !isOpen.value;
}

</script>

<template>
  <header
    :class="
      mode.darkMode
        ? 'bg-[#0f172a]/70 border-b border-b-white/40'
        : 'bg-white/70'
    "
    class="backdrop-blur-xl border-b border-b-black/5 w-full h-auto sticky top-0 z-50 "
  >
    <!-- nav-top -->
    <div
      :class="mode.darkMode ? 'bg-gray-600 text-white' : 'bg-black text-white'"
      class="nav-top w-full py-2"
    >
      <p class="font-medium text-center lg:text-base md:text-base text-[13px]">
        Free Shipping On All Domestic Orders Over $250
      </p>
    </div>
    <!-- nav-bottom -->
    <div
      class="nav-bottom w-full shadow lg:py-5 lg:px-20 py-5 px-5 flex justify-between items-center"
    >
      <!-- logo -->
      <div class="logo flex items-center gap-5">
        <!-- menu Mobile -->
        <div class="lg:hidden">
          <button @click="sidebar" class="cursor-pointer">
            <i class="bi lg:text-2xl text-xl bi-list"></i>
          </button>
        </div>
        <!-- Logo text -->
        <h1 class="lg:text-5xl text-xl font-bold">ELYSIA</h1>
      </div>

      <!-- menu-links  -->
      <ul class="menu-links lg:flex hidden gap-10 items-center">
        <router-link
          :class="
            mode.darkMode
              ? 'text-white after:bg-white'
              : 'text-gray-500 after:bg-black'
          "
          class="relative py-2 font-medium transition-all ease-in-out after:absolute after:bottom-1 after:left-0 after:h-0.75 after:w-0 after:transition-all after:duration-300"
          active-class="text-black after:w-full"
          to="/"
        >
          Home
        </router-link>

        <router-link
          :class="
            mode.darkMode
              ? 'text-white after:bg-white'
              : 'text-gray-500 after:bg-black'
          "
          class="relative py-2 font-medium transition-all ease-in-out after:absolute after:bottom-1 after:left-0 after:h-0.75 after:w-0 after:transition-all after:duration-300"
          active-class="text-black after:w-full"
          to="/shop"
        >
          Shop
        </router-link>

        <router-link
          :class="
            mode.darkMode
              ? 'text-white after:bg-white'
              : 'text-gray-500 after:bg-black'
          "
          class="relative py-2 font-medium transition-all ease-in-out after:absolute after:bottom-1 after:left-0 after:h-0.75 after:w-0 after:transition-all after:duration-300"
          active-class="text-black after:w-full"
          to="/about"
        >
          About
        </router-link>

        <router-link
          :class="
            mode.darkMode
              ? 'text-white after:bg-white'
              : 'text-gray-500 after:bg-black'
          "
          class="relative py-2 font-medium transition-all ease-in-out after:absolute after:bottom-1 after:left-0 after:h-0.75 after:w-0 after:transition-all after:duration-300"
          active-class="text-black after:w-full"
          to="/contact"
        >
          Contact
        </router-link>
      </ul>

      <!-- icons -->
      <div class="icons flex items-center lg:gap-5 gap-5">
        <div>
          <button class="cursor-pointer" @click="mode.toggleDarkMode">
            <i
              v-if="mode.darkMode"
              class="bi lg:text-3xl text-xl bi-moon-fill"
            ></i>
            <i v-else class="bi lg:text-3xl text-xl bi-sun-fill"></i>
          </button>
        </div>
        <!-- cart bag -->
        <div class="icon-bag relative">
          <router-link to="/checksummery">
            <i class="bi lg:text-2xl text-xl cursor-pointer bi-bag-fill"></i>
          </router-link>
          <span
            class="bg-red-500 py-0 px-1 rounded-[50%] font-bold text-white text-[13px] absolute left-3 top-0"
            >{{ cartStore.cartCount }}</span
          >
        </div>

        <!-- account -->
        <div class="icon-person  lg:flex lg:items-center hidden">
          <button @click="goToAccount">
            <!-- If user has profile image -->
            <img
              :class="mode.darkMode ? 'border-blue-500' : ' border-gray-400 '"
              v-if="authStore.user?.profile"
              :src="authStore.user.profile"
              class="lg:w-10 lg:h-10 w-7 h-7 rounded-full border-2 shadow-sm object-cover cursor-pointer"
            />

            <!-- If login but no profile -->
            <div
              v-else-if="authStore.user"
              class="lg:w-10 lg:h-10 w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold lg:text-lg text-[10px] cursor-pointer"
            >
              {{ authStore.user.name.charAt(0).toUpperCase() }}
            </div>

            <!-- If not login -->
            <div
              v-else
              :class="
                mode.darkMode
                  ? 'bg-slate-700 text-white'
                  : 'bg-gray-200 text-black'
              "
              class="lg:w-10 lg:h-10 w-7 h-7 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
            >
              <i class="bi bi-person-fill lg:text-2xl text-xl"></i>
            </div>
          </button>

        </div>

      </div>
    </div>

    

  </header>

<!-- Menu Mobile -->
<div class="fixed top-16 left-0 w-full overflow-hidden bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out" 
     :class="isOpen ? 'max-h-100 opacity-100 z-40': 'max-h-0 opacity-0 z-[-1] pointer-events-none'">
  
  <ul class="flex flex-col px-6 py-6 space-y-2 mt-10">
    <li>
      <router-link to="/" 
                   class="flex items-center justify-between px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                   active-class="bg-blue-50 text-blue-600">
        <span>Home</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </router-link>
    </li>
    <li>
      <router-link to="/shop" 
                   class="flex items-center justify-between px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                   active-class="bg-blue-50 text-blue-600">
        <span>Shop</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </router-link>
    </li>
    <li>
      <router-link to="/About" 
                   class="flex items-center justify-between px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                   active-class="bg-blue-50 text-blue-600">
        <span>About</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </router-link>
    </li>
    <li>
      <router-link to="/contact" 
                   class="flex items-center justify-between px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                   active-class="bg-blue-50 text-blue-600">
        <span>Contact</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </router-link>
    </li>
    <li>
      <router-link to="/account" 
                   class="flex items-center justify-between px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                   active-class="bg-blue-50 text-blue-600">
        <span>Account</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </router-link>
    </li>
  </ul>


</div>
      

</template>