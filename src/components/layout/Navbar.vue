<script setup>
import { watch } from "vue";
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
</script>

<template>
  <header
    :class="
      mode.darkMode
        ? 'bg-[#0f172a]/70 border-b border-b-white/40'
        : 'bg-white/70'
    "
    class="backdrop-blur-xl border-b border-b-black/5 w-full h-auto sticky top-0 z-50"
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
      <div class="logo">
        <h1 class="lg:text-5xl text-2xl font-bold">ELYSIA</h1>
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
            <i v-if="mode.darkMode" class="bi text-3xl bi-moon-fill"></i>
            <i v-else class="bi text-3xl bi-sun-fill"></i>
          </button>
        </div>
        <!-- cart bag -->
        <div class="icon-bag relative">
          <router-link to="/checksummery">
            <i class="bi text-2xl cursor-pointer bi-bag-fill"></i>
          </router-link>
          <span
            class="bg-red-500 py-0 px-1 rounded-[50%] font-bold text-white text-[13px] absolute left-3 top-0"
            >{{ cartStore.cartCount }}</span
          >
        </div>

        <!-- account -->
        <div class="icon-person">
          <button @click="goToAccount">
            <!-- If user has profile image -->

            <img
            :class="mode.darkMode ? 'border-blue-500' : ' border-gray-400 '"
              v-if="authStore.user?.profile"
              :src="authStore.user.profile"
              class="w-11 h-11 rounded-full border-2 shadow-sm object-cover  cursor-pointer"
            />

            <!-- If login but no profile -->
            <div
              v-else-if="authStore.user"
              class="w-11 h-11 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg cursor-pointer"
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
              class="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
            >
              <i class="bi bi-person-fill text-2xl"></i>
            </div>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>