<script setup>

import { useRouter } from "vue-router";
import { useDarkModeStore } from "../../stores/darkMode";
import { useAuthStore } from "../../stores/AuthStore";
import { ref } from "vue";

const mode = useDarkModeStore();
const router = useRouter()
const AuthStore = useAuthStore()

const email = ref('')
const password = ref('')

const login = () =>{
  const saveUser = JSON.parse(localStorage.getItem('registerUser'))
  if(email.value === saveUser.email && password.value === saveUser.password){
    AuthStore.login(saveUser)
  alert("Login Success!")
  router.push('/account')
  }else{
    alert('Invalid email or password!')
  }
}
</script>

<template>
  <div class="container mx-auto min-h-screen px-4 py-10">
    <form
      :class="
        mode.darkMode
          ? 'bg-[#1e293b]  border-[#334155]'
          : 'bg-[#ececf2]  border-gray-300'
      "
      class="w-full sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto 0 shadow-2xl border rounded-2xl px-5 sm:px-8 md:px-12 lg:px-16 py-8"
    >
      <!-- Title -->
      <div class="title text-center py-5">
        <h1 class="text-2xl sm:text-3xl font-medium mb-3">Welcome Back</h1>
        <p
          :class="mode.darkMode ? 'text-white' : 'text-gray-500'"
          class="text-sm sm:text-base"
        >
          Sign in to your Elysia account
        </p>
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
          v-model="email"
          :class="
            mode.darkMode
              ? 'text-white bg-blue-950/40 border-blue-800'
              : 'bg-white border-gray-300'
          "
          class="border outline-0 mt-2 py-3 sm:py-4 px-4 sm:px-5 rounded-xl b w-full"
          type="email"
          placeholder="name@example.com"
        />
      </div>

      <!-- Password -->
      <div class="mb-6">
        <div class="flex justify-between items-center gap-2">
          <label
            :class="mode.darkMode ? 'text-white  ' : ''"
            class="text-gray-500 text-sm sm:text-base"
          >
            Password
          </label>

          <router-link class="font-bold text-sm hover:underline" to="">
            Forgot password?
          </router-link>
        </div>

        <input
          v-model="password"
          :class="
            mode.darkMode
              ? 'text-white bg-blue-950/40 border-blue-800'
              : 'bg-white border-gray-300'
          "
          class="border outline-0 mt-2 py-3 sm:py-4 px-4 sm:px-5 rounded-xl w-full"
          type="password"
          placeholder="Password"
        />
      </div>

      <!-- Sign In Button -->
      <div class="btn mb-8">
        <button @click="login"
          to=""
          :class="
            mode.darkMode
              ? 'bg-blue-700 hover:bg-blue-800'
              : 'bg-black text-white hover:bg-gray-800'
          "
          class="py-3 sm:py-4 font-medium cursor-pointer w-full rounded-xl flex justify-center items-center duration-300"
        >
          Login
        </button>
      </div>

      <!-- Divider -->
      <div class="flex items-center gap-3 sm:gap-5 justify-center mb-8">
        <div class="line w-[25%] h-px bg-gray-400"></div>

        <h1 :class="mode.darkMode ? 'text-white' : 'text-gray-500'" class=" text-sm sm:text-base whitespace-nowrap">
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
        :class="mode.darkMode ? 'text-gray-400' : 'text-gray-500'"
          class=" font-medium text-sm sm:text-base flex flex-wrap justify-center gap-1"
        >
          Don't have an account?

          <router-link
            :class="mode.darkMode ? 'text-white' : 'text-black'"
            class="font-bold hover:underline"
            to="/register"
          >
            Sign up for free
          </router-link>
        </p>
      </div>
    </form>
  </div>
</template>