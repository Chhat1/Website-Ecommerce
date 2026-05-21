

<script setup>
import { useDarkModeStore } from "../../stores/darkMode";

const mode = useDarkModeStore();
</script>

<template>
  <div class="container mx-auto min-h-screen px-4 py-10">
    <form
      :class="
        mode.darkMode
          ? 'bg-blue-950 border-blue-800/50'
          : 'bg-[#ececf2]  border-gray-300'
      "
      class="w-full sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto 0 shadow-2xl border rounded-2xl px-5 sm:px-8 md:px-12 lg:px-16 py-8"
    >
      <!-- Title -->
      <div class="title text-center py-5">
        <h1 class="text-2xl sm:text-3xl font-medium mb-3">Join Elysia</h1>
        <p
          :class="mode.darkMode ? 'text-white' : 'text-gray-500'"
          class="text-sm sm:text-base"
        >
          Experience the future of curated luxury.
        </p>
      </div>

      <!-- Full Name -->
      <div class="mb-5">
        <label
          :class="mode.darkMode ? 'text-white' : 'text-gray-500'"
          class="text-sm sm:text-base"
        >
          Full Name
        </label>

        <input
          :class="
            mode.darkMode
              ? 'text-white border-blue-800'
              : 'bg-white border-gray-300'
          "
          class="border outline-0 mt-2 py-3 sm:py-4 px-4 sm:px-5 rounded-xl b w-full"
          type="text"
          placeholder="Alexander Elysian"
        />
      </div>

      <!-- Email -->
      <div class="mb-5">
        <label
          :class="mode.darkMode ? 'text-white' : 'text-gray-500'"
          class="text-sm sm:text-base"
        >
          Email Address
        </label>

        <input
          :class="
            mode.darkMode
              ? 'text-white border-blue-800'
              : 'bg-white border-gray-300'
          "
          class="border outline-0 mt-2 py-3 sm:py-4 px-4 sm:px-5 rounded-xl b w-full"
          type="email"
          placeholder="name@example.com"
        />
      </div>

      <!-- Password -->
      <div class="mb-6">
        
          <label
            :class="mode.darkMode ? 'text-white ' : ''"
            class="text-gray-500 text-sm sm:text-base"
          >
            Password
          </label>

          
        

        <input
          :class="
            mode.darkMode
              ? 'text-white border-blue-800'
              : 'bg-white border-gray-300'
          "
          class="border outline-0 mt-2 py-3 sm:py-4 px-4 sm:px-5 rounded-xl w-full"
          type="password"
          placeholder="Password"
        />
      </div>

      <!-- Confirm Password -->
      <div class="mb-6">
        
          <label
            :class="mode.darkMode ? 'text-white ' : ''"
            class="text-gray-500 text-sm sm:text-base"
          >
            Confirm Password
          </label>
        

        <input
          :class="
            mode.darkMode
              ? 'text-white border-blue-800'
              : 'bg-white border-gray-300'
          "
          class="border outline-0 mt-2 py-3 sm:py-4 px-4 sm:px-5 rounded-xl w-full"
          type="password"
          placeholder="Confirm Password"
        />
      </div>

      <!-- Sign In Button -->
      <div class="btn mb-8">
        <router-link
          to=""
          :class="
            mode.darkMode
              ? 'bg-blue-700 hover:bg-blue-800'
              : 'bg-black text-white hover:bg-gray-800'
          "
          class="py-3 sm:py-4 font-medium cursor-pointer w-full rounded-xl flex justify-center items-center duration-300"
        >
            Register
        </router-link>
      </div>

      <!-- Divider -->
      <div class="flex items-center gap-3 sm:gap-5 justify-center mb-8">
        <div class="line w-[25%] h-px bg-gray-400"></div>

        <h1 class="text-gray-500 text-sm sm:text-base whitespace-nowrap">
          Or continue with
        </h1>

        <div class="line w-[25%] h-px bg-gray-400"></div>
      </div>

      <!-- Social Login -->
      <div
        class="btn-connect-account flex flex-col sm:flex-row items-center gap-4 mb-10"
      >
        <router-link
          to=""
          :class="
            mode.darkMode
              ? 'bg-blue-950/40 border-blue-800 text-white hover:bg-blue-900/40'
              : 'bg-white border-gray-300 text-black hover:bg-gray-100'
          "
          class="py-3 sm:py-4 cursor-pointer border font-medium w-full sm:w-[50%] rounded-xl flex justify-center items-center gap-2 duration-300 backdrop-blur-xl"
        >
          <i class="bi bi-google"></i>
          Google
        </router-link>

        <router-link
          to=""
          :class="
            mode.darkMode
              ? 'bg-blue-950/40 border-blue-800 text-white hover:bg-blue-900/40'
              : 'bg-white border-gray-300 text-black hover:bg-gray-100'
          "
          class="py-3 sm:py-4 cursor-pointer border font-medium w-full sm:w-[50%] rounded-xl flex justify-center items-center gap-2 duration-300 backdrop-blur-xl"
        >
          <i class="bi bi-apple"></i>
          Apple
        </router-link>
      </div>

      <!-- Register -->
      <div class="flex justify-center text-center">
        <p
          class="text-gray-500 font-medium text-sm sm:text-base flex flex-wrap justify-center gap-1"
        >
          Already have an account?

          <router-link
            :class="mode.darkMode ? 'text-white' : 'text-black'"
            class="font-bold hover:underline"
            to="/login"
          >
           Login Here
          </router-link>
        </p>
      </div>
    </form>
  </div>
</template>