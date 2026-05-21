<template>
  <div
    :class="mode.darkMode ? 'bg-[#0f172a]' : 'bg-gray-100'"
    class="min-h-screen py-10 flex items-center justify-center px-4 transition-all duration-300"
  >
    <!-- Card -->
    <div
      :class="
        mode.darkMode
          ? 'bg-[#1e293b] border-slate-700'
          : 'bg-white border-gray-200'
      "
      class="w-full max-w-md shadow-2xl rounded-3xl p-8 border transition-all duration-300"
    >
      <!-- Profile -->
      <div class="flex flex-col items-center">

        <!-- Profile Image -->
        <div class="relative">
          <!-- If Has Image -->
          <img
            v-if="authStore.user?.profile"
            :src="authStore.user.profile"
            :class="mode.darkMode ? 'border-blue-500' : 'border border-gray-400'"
            class="w-28 h-28 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
          />

          <!-- Default Letter -->
          <div
            v-else
            class="w-28 h-28 rounded-full bg-blue-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg"
          >
            {{ authStore.user?.name?.charAt(0).toUpperCase() }}
          </div>

          <!-- Upload Button -->
          <label
            class="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full cursor-pointer shadow-lg"
          >
            <input
              type="file"
              class="hidden"
              accept="image/*"
              @change="uploadImage"
            />

            <i class="bi bi-camera-fill"></i>
          </label>
        </div>

        <!-- Name -->
        <h1
          :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
          class="text-3xl font-bold mt-5"
        >
          {{ authStore.user.name }}
        </h1>

        <!-- Welcome -->
        <p
          :class="mode.darkMode ? 'text-slate-400' : 'text-gray-500'"
          class="mt-1 text-center"
        >
          Welcome back {{ authStore.user.name }}
        </p>
      </div>

      <!-- User Info -->
      <div class="mt-8 space-y-5">

        <!-- Name -->
        <div
          :class="
            mode.darkMode
              ? 'bg-[#0f172a] border-slate-700'
              : 'bg-gray-50 border-gray-200'
          "
          class="rounded-2xl p-4 shadow-sm border transition-all duration-300"
        >
          <p
            :class="mode.darkMode ? 'text-slate-400' : 'text-gray-500'"
            class="text-sm mb-1"
          >
            Full Name
          </p>

          <h3
            :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
            class="text-lg font-semibold"
          >
            {{ authStore.user.name }}
          </h3>
        </div>

        <!-- Email -->
        <div
          :class="
            mode.darkMode
              ? 'bg-[#0f172a] border-slate-700'
              : 'bg-gray-50 border-gray-200'
          "
          class="rounded-2xl p-4 shadow-sm border transition-all duration-300"
        >
          <p
            :class="mode.darkMode ? 'text-slate-400' : 'text-gray-500'"
            class="text-sm mb-1"
          >
            Email Address
          </p>

          <h3
            :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
            class="text-lg font-semibold break-all"
          >
            {{ authStore.user.email }}
          </h3>
        </div>
      </div>

      <!-- Logout -->
      <div class="mt-8">
        <button
          @click="logout"
          class="w-full cursor-pointer py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold transition duration-300 shadow-md"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

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

// Logout
const logout = () => {
  authStore.logout();
  router.push("/login");
};

const uploadImage = (event) => {
  const file = event.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {
    authStore.saveProfile(reader.result);
  };

  reader.readAsDataURL(file);
};
</script>

<style scoped>
</style>