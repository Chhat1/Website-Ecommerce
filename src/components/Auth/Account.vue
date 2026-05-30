<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/AuthStore";
import { onMounted } from "vue";
import { useDarkModeStore } from "../../stores/darkMode";

const router = useRouter();
const authStore = useAuthStore();
const mode = useDarkModeStore();

onMounted(() => {
  if (!authStore.user) {
    router.push("/login");
  }
});

const logout = () => {
  authStore.logout();
  router.push("/login");
};


const uploadImage = (event) => {
  const file = event.target.files[0];

  if (!file) return;

  // check image type
  if (!file.type.startsWith("image/")) {
    alert("Please upload an image file.");
    return;
  }

  // max size 2MB
  if (file.size > 2 * 1024 * 1024) {
    alert("Image size must be less than 2MB.");
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {
    authStore.saveProfile(reader.result);
  };

  reader.readAsDataURL(file);
};


</script>

<template>
  <div :class="mode.darkMode ? 'bg-[#030712]' : 'bg-[#fafafa]'" 
       class="min-h-screen flex items-center justify-center px-4 py-10 transition-colors duration-500">
    
    <div :class="mode.darkMode ? 'bg-[#090d16] border-slate-900 shadow-black/40' : 'bg-white border-slate-100 shadow-slate-200/50'"
         class="w-full max-w-md rounded-3xl border shadow-2xl overflow-hidden transition-all duration-500">

      <div class="h-32 relative" :class="mode.darkMode ? 'bg-slate-900' : 'bg-slate-100'">
        <div class="absolute -bottom-12 left-1/2 -translate-x-1/2">
          <div class="relative">
            <img v-if="authStore.user?.profile" :src="authStore.user.profile" :alt="authStore.user.name"
                 class="w-28 h-28 rounded-full object-cover border-4 border-white dark:border-[#090d16] shadow-lg" />
            
            <div v-else class="w-28 h-28 rounded-full bg-indigo-500 text-white flex items-center justify-center text-3xl font-black border-4 border-white dark:border-[#090d16] shadow-lg">
              {{ authStore.user?.name?.charAt(0).toUpperCase() }}
            </div>

            <label class="absolute bottom-0 right-0 w-9 h-9 rounded-full bg-slate-950 dark:bg-indigo-600 flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-105 transition-transform">
              <input type="file" class="hidden" accept="image/*" @change="uploadImage" />
              <i class="bi bi-camera-fill text-xs"></i>
            </label>
          </div>
        </div>
      </div>

      <div class="px-8 pb-10 pt-16 text-center">
        <h1 class="text-2xl font-black tracking-tight" :class="mode.darkMode ? 'text-white' : 'text-slate-950'">
          {{ authStore.user?.name }}
        </h1>
        <p class="text-[11px] font-bold uppercase tracking-[0.25em] mt-2" :class="mode.darkMode ? 'text-slate-500' : 'text-slate-400'">
          Account Settings
        </p>

        <div class="mt-8 space-y-4">
          <div v-for="(item, index) in [{label: 'Full Name', val: authStore.user?.name, icon: 'person'}, {label: 'Email', val: authStore.user?.email, icon: 'envelope'}]" 
               :key="index"
               :class="mode.darkMode ? 'bg-[#030712] border-slate-900' : 'bg-slate-50 border-slate-100'"
               class="rounded-2xl p-4 flex items-center gap-4 border text-left">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center text-indigo-500" 
                 :class="mode.darkMode ? 'bg-slate-900' : 'bg-white'">
              <i :class="`bi bi-${item.icon}`"></i>
            </div>
            <div>
              <p class="text-[10px] font-bold uppercase tracking-[0.2em]" :class="mode.darkMode ? 'text-slate-500' : 'text-slate-400'">{{ item.label }}</p>
              <h2 class="text-sm font-semibold truncate max-w-[200px]" :class="mode.darkMode ? 'text-white' : 'text-slate-900'">{{ item.val }}</h2>
            </div>
          </div>
        </div>

        <button @click="logout" 
                class="w-full mt-8 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest text-white transition-all active:scale-95 shadow-lg bg-red-600 hover:bg-red-700">
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>