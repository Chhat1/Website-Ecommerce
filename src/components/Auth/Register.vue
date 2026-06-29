

<script setup>
import { useRouter } from "vue-router";
import { useDarkModeStore } from "../../stores/darkMode";
import { ref } from "vue";


const mode = useDarkModeStore();
const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')
const confirm_password = ref('')
const register = () =>{
  if(password.value !== confirm_password.value){
    alert('Password does not match')
    return
  }
  const user = {
    name : name.value,
    email : email.value,
    password : password.value,
  }
  
  localStorage.setItem('registerUser',JSON.stringify(user))
  alert("Register Success!")
  router.push('/login')
}

</script>

<template>
  <div :class="mode.darkMode ? 'bg-[#030712]' : 'bg-[#fafafa]'" 
       class="min-h-screen flex items-center justify-center px-4 py-10 transition-colors duration-500">
    
    <!-- Register Card -->
    <form @submit.prevent="register"
          :class="mode.darkMode ? 'bg-[#090d16] border-slate-900 shadow-black/40' : 'bg-white border-slate-100 shadow-slate-200/50'"
          class="w-full max-w-lg rounded-3xl border p-8 lg:p-12 shadow-2xl transition-all duration-500">
      
      <!-- Title -->
      <div class="text-center mb-10">
        <h1 class="text-3xl lg:text-4xl font-black tracking-tight mb-3" 
            :class="mode.darkMode ? 'text-white' : 'text-slate-950'">
          Join Elysia
        </h1>
        <p class="text-sm font-light tracking-wide" 
           :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'">
          Experience the future of curated luxury.
        </p>
      </div>

      <!-- Input Fields -->
      <div class="space-y-6 mb-8">
        <div>
          <label class="block text-[10px] font-bold uppercase tracking-[0.2em] mb-2" 
                 :class="mode.darkMode ? 'text-slate-500' : 'text-slate-400'">Full Name</label>
          <input v-model="name" type="text" placeholder="Alexander Elysian"
                 :class="mode.darkMode ? 'bg-[#030712] border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'"
                 class="w-full py-4 px-5 rounded-xl border outline-none focus:border-indigo-500 transition-all" />
        </div>

        <div>
          <label class="block text-[10px] font-bold uppercase tracking-[0.2em] mb-2" 
                 :class="mode.darkMode ? 'text-slate-500' : 'text-slate-400'">Email Address</label>
          <input v-model="email" type="email" placeholder="name@example.com"
                 :class="mode.darkMode ? 'bg-[#030712] border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'"
                 class="w-full py-4 px-5 rounded-xl border outline-none focus:border-indigo-500 transition-all" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-[10px] font-bold uppercase tracking-[0.2em] mb-2" 
                   :class="mode.darkMode ? 'text-slate-500' : 'text-slate-400'">Password</label>
            <input v-model="password" type="password" placeholder="••••••••"
                   :class="mode.darkMode ? 'bg-[#030712] border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'"
                   class="w-full py-4 px-5 rounded-xl border outline-none focus:border-indigo-500 transition-all" />
          </div>
          <div>
            <label class="block text-[10px] font-bold uppercase tracking-[0.2em] mb-2" 
                   :class="mode.darkMode ? 'text-slate-500' : 'text-slate-400'">Confirm</label>
            <input v-model="confirm_password" type="password" placeholder="••••••••"
                   :class="mode.darkMode ? 'bg-[#030712] border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'"
                   class="w-full py-4 px-5 rounded-xl border outline-none focus:border-indigo-500 transition-all" />
          </div>
        </div>
      </div>

      <!-- Register Button -->
      <button type="submit" 
              class="w-full py-4 cursor-pointer rounded-xl font-black text-[11px] uppercase tracking-widest text-white transition-all active:scale-95 shadow-lg bg-indigo-600 hover:bg-indigo-500 mb-8">
        Register
      </button>

      <!-- Divider -->
      <div class="flex items-center gap-4 mb-8">
        <div class="flex-1 h-px" :class="mode.darkMode ? 'bg-slate-800' : 'bg-slate-200'"></div>
        <span class="text-[10px] font-bold uppercase tracking-[0.2em]" :class="mode.darkMode ? 'text-slate-600' : 'text-slate-400'">Or continue with</span>
        <div class="flex-1 h-px" :class="mode.darkMode ? 'bg-slate-800' : 'bg-slate-200'"></div>
      </div>

      <!-- Social Login -->
      <div class="flex gap-4 mb-10">
        <router-link to="" class="flex-1 py-4 border rounded-xl flex items-center justify-center gap-2 font-bold text-[11px] uppercase tracking-widest transition-all"
                     :class="mode.darkMode ? 'border-slate-800 text-white hover:bg-slate-900' : 'border-slate-200 text-slate-900 hover:bg-slate-50'">
          <i class="bi bi-google"></i> Google
        </router-link>
        <router-link to="" class="flex-1 py-4 border rounded-xl flex items-center justify-center gap-2 font-bold text-[11px] uppercase tracking-widest transition-all"
                     :class="mode.darkMode ? 'border-slate-800 text-white hover:bg-slate-900' : 'border-slate-200 text-slate-900 hover:bg-slate-50'">
          <i class="bi bi-apple"></i> Apple
        </router-link>
      </div>

      <!-- Login Link -->
      <p class="text-center text-sm font-light" :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'">
        Already have an account? 
        <router-link to="/login" class="font-bold text-indigo-500 hover:underline">Login Here</router-link>
      </p>
    </form>
  </div>
</template>