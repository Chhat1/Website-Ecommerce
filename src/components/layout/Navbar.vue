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
      <div class="logo flex items-center gap-5">
        <!-- menu Mobile -->
        <div class="lg:hidden">
          <button @click="sidebar" class="cursor-pointer">
            <i class="bi text-2xl bi-list"></i>
          </button>
        </div>

        <!-- Logo text -->
        <h1 class="lg:text-3xl text-xl font-bold">ELYSIA</h1>
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
              class="bi lg:text-2xl text-xl bi-moon-fill"
            ></i>
            <i v-else class="bi lg:text-2xl text-xl bi-sun-fill"></i>
          </button>
        </div>
        <!-- cart bag -->
        <div class="icon-bag relative">
          <router-link to="/checksummery">
            <i class="bi lg:text-xl text-xl cursor-pointer bi-bag-fill"></i>
          </router-link>
          <span
            class="bg-red-500 py-0 px-1 rounded-[50%] font-bold text-white text-[13px] absolute left-3 top-0"
            >{{ cartStore.cartCount }}</span
          >
        </div>

        <!-- account -->
        <div class="icon-person lg:flex lg:items-center hidden">
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
  <div
    class="fixed top-25 left-0 w-[80%] h-full overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform"
    :class="[
      isOpen
        ? 'translate-x-0 opacity-100 z-40'
        : '-translate-x-full opacity-0 z-[-1] pointer-events-none',

      mode.darkMode
        ? 'bg-[#0f172a] border-b border-b-[#334155]'
        : 'bg-white border-b border-b-gray-300',
    ]"
  >
  <!-- close -->
  <div  class="mt-3 flex justify-end pr-5 py-1">
    <button @click="sidebar"><i class="bi bi-x-lg cursor-pointer hover:text-gray-500"></i></button>
  </div>
    <ul class="flex flex-col px-6 py-1 space-y-2 mt-5">
      <li>
        <div
          :class="mode.darkMode ? 'bg-slate-800' : 'bg-gray-200'"
          class="w-full h-15 rounded-xl mb-2 flex items-center justify-between px-3"
        >
          <!-- profile -->
          <div class="profile-username flex items-center gap-2">
            <!-- profile-image -->
            <div
              class="w-8 h-8 border border-gray-400 shadow rounded-full overflow-hidden"
            >
              <!-- Profile Image -->
              <img
                v-if="authStore.user?.profile"
                :src="authStore.user.profile"
                :alt="authStore.user.name"
                class="w-full h-full object-cover"
              />

              <!-- First Letter -->
              <div
                v-else-if="authStore.user?.name"
                :class="
                  mode.darkMode
                    ? 'bg-slate-700 text-white'
                    : 'bg-white text-black'
                "
                class="w-full h-full flex items-center justify-center font-bold uppercase"
              >
                {{ authStore.user.name.charAt(0) }}
              </div>

              <!-- Default Icon -->
              <div
                v-else
                :class="
                  mode.darkMode
                    ? 'bg-slate-700 text-white'
                    : 'bg-white text-black'
                "
                class="w-full h-full flex items-center justify-center"
              >
                <i class="bi bi-person-fill text-sm"></i>
              </div>
            </div>

            <!-- username -->
            <div>
              <p
                :class="mode.darkMode ? 'text-white' : 'text-black'"
                class="text-sm font-medium"
              >
                {{ authStore.user?.name || "Username" }}
              </p>
            </div>
          </div>

          <!-- logout -->
          <div v-if="authStore.user" class="logout">
            <button
              @click="logout"
              class="cursor-pointer flex items-center gap-1 text-[10px] bg-red-500 text-white px-2 py-1 rounded-[5px]"
            >
              <i class="bi bi-box-arrow-in-left"></i>
              Logout
            </button>
          </div>
        </div>
      </li>

      <!-- home -->
      <li>
        <router-link
          to="/"
          :class="
            mode.darkMode
              ? 'text-blue-500 hover:bg-blue-950 hover:text-white'
              : 'text-gray-700 hover:bg-gray-200 hover:text-black'
          "
          class="flex items-center justify-between px-4 py-3 font-medium rounded-xl transition-colors duration-200"
          :active-class="
            mode.darkMode ? 'bg-slate-800 text-white' : 'bg-gray-100 text-black'
          "
        >
          <span>Home</span>

          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </router-link>
      </li>

      <!-- shop -->
      <li>
        <router-link
          to="/shop"
          :class="
            mode.darkMode
              ? 'text-blue-500 hover:bg-blue-950 hover:text-white'
              : 'text-gray-700 hover:bg-gray-200 hover:text-black'
          "
          class="flex items-center justify-between px-4 py-3 font-medium rounded-xl transition-colors duration-200"
          :active-class="
            mode.darkMode ? 'bg-slate-800 text-white' : 'bg-gray-100 text-black'
          "
        >
          <span>Shop</span>

          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </router-link>
      </li>

      <!-- about -->
      <li>
        <router-link
          to="/About"
          :class="
            mode.darkMode
              ? 'text-blue-500 hover:bg-blue-950 hover:text-white'
              : 'text-gray-700 hover:bg-gray-200 hover:text-black'
          "
          class="flex items-center justify-between px-4 py-3 font-medium rounded-xl transition-colors duration-200"
          :active-class="
            mode.darkMode ? 'bg-slate-800 text-white' : 'bg-gray-100 text-black'
          "
        >
          <span>About</span>

          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </router-link>
      </li>

      <!-- contact -->
      <li>
        <router-link
          to="/contact"
          :class="
            mode.darkMode
              ? 'text-blue-500 hover:bg-blue-950 hover:text-white'
              : 'text-gray-700 hover:bg-gray-200 hover:text-black'
          "
          class="flex items-center justify-between px-4 py-3 font-medium rounded-xl transition-colors duration-200"
          :active-class="
            mode.darkMode ? 'bg-slate-800 text-white' : 'bg-gray-100 text-black'
          "
        >
          <span>Contact</span>

          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </router-link>
      </li>

      <!-- account -->
      <li>
        <router-link
          to="/account"
          :class="
            mode.darkMode
              ? 'text-blue-500 hover:bg-blue-950 hover:text-white'
              : 'text-gray-700 hover:bg-gray-200 hover:text-black'
          "
          class="flex items-center justify-between px-4 py-3 font-medium rounded-xl transition-colors duration-200"
          :active-class="
            mode.darkMode ? 'bg-slate-800 text-white' : 'bg-gray-100 text-black'
          "
        >
          <span>Account</span>

          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </router-link>
      </li>
    </ul>
    <!-- Copyright -->
      <div class="text-center  text-gray-500 mt-20 text-lg ">
        <!-- Divider -->
        <div
          :class="mode.darkMode ? 'text-gray-400' : 'text-gray-500'"
          class="mt-16 text-center text-sm tracking-wide border-t border-t-gray-200 pt-5"
        >
          © 2026 RICHHAT & BUNTHAI. ALL RIGHTS RESERVED.
        </div>
        <div class="flex justify-center gap-6 mt-5">
            <i
              class="bi bi-instagram text-xl hover:text-pink-500 cursor-pointer"
            ></i>
            <i
              class="bi bi-facebook text-xl hover:text-blue-500 cursor-pointer"
            ></i>
            <i
              class="bi bi-telegram text-xl hover:text-sky-500 cursor-pointer"
            ></i>
            <i
              class="bi bi-twitter text-xl hover:text-sky-400 cursor-pointer"
            ></i>
            <i
              class="bi bi-tiktok text-xl hover:text-gray-500 cursor-pointer"
            ></i>
          </div> 
    </div>
  </div>
</template>