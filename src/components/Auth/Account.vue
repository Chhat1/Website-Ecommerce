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
  <div
    :class="mode.darkMode ? 'bg-[#0f172a]' : 'bg-[#F3F0EF]'"
    class="min-h-screen flex items-center justify-center px-4 py-10 transition-all duration-300"
  > 
    <!-- PROFILE CARD -->
    <div
      :class="
        mode.darkMode
          ? 'bg-[#1e293b] border border-[#334155]'
          : 'bg-white border border-gray-200'
      "
      class="w-full max-w-md rounded-3xl shadow-2xl overflow-hidden transition-all duration-300"
    >

      <div
        :class="
          mode.darkMode
            ? 'bg-linear-to-r from-blue-500/50 to-blue-950'
            : 'bg-linear-to-r from-gray-500/50 to-black/80'
        "
        class="h-40 relative"
      >

        <!-- Decoration -->
        <div
          class="absolute -bottom-12 left-1/2 -translate-x-1/2"
        >
          <!-- PROFILE IMAGE -->
          <div class="relative">

            <!-- Has Profile -->
            <img
              v-if="authStore.user?.profile"
              :src="authStore.user.profile"
              :alt="authStore.user.name"
              class="lg:w-35 lg:h-35 w-28 h-28 rounded-full object-cover border-4 border-white shadow-2xl"
            />

            <!-- Default Letter -->
            <div
              v-else
              class="lg:w-35 lg:h-35 w-28 h-28 rounded-full bg-white text-black flex items-center justify-center text-4xl font-bold border-4 border-white shadow-2xl"
            >
              {{
                authStore.user?.name?.charAt(0).toUpperCase()
              }}
            </div>

            <!-- Upload Button -->
            <label
              class="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center text-white shadow-lg cursor-pointer transition-all duration-300"
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
        </div>
      </div>

     
      <div class="px-6 pb-8 pt-16">

        <!-- Name -->
        <div class="text-center">
          <h1
            :class="
              mode.darkMode ? 'text-white' : 'text-gray-900'
            "
            class="text-3xl font-bold"
          >
            {{ authStore.user?.name }}
          </h1>

          <p
            :class="
              mode.darkMode
                ? 'text-slate-400'
                : 'text-gray-500'
            "
            class="mt-2 text-sm"
          >
            Welcome back,
            {{ authStore.user?.name }}
          </p>
        </div>

       
        <!-- USER INFO -->
        <div class="mt-8 space-y-5">

          <!-- FULL NAME -->
          <div
            :class="
              mode.darkMode
                ? 'bg-[#0f172a] border border-[#334155]'
                : 'bg-gray-50 border border-gray-200'
            "
            class="rounded-2xl p-5 transition-all duration-300"
          >
            <div class="flex items-center gap-3 mb-2">

              <div
                :class="
                  mode.darkMode
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'bg-black text-white'
                "
                class="w-10 h-10 rounded-xl flex items-center justify-center"
              >
                <i class="bi bi-person-fill"></i>
              </div>

              <div>
                <p
                  :class="
                    mode.darkMode
                      ? 'text-slate-400'
                      : 'text-gray-500'
                  "
                  class="text-sm"
                >
                  Full Name
                </p>

                <h2
                  :class="
                    mode.darkMode
                      ? 'text-white'
                      : 'text-gray-900'
                  "
                  class="font-semibold text-lg"
                >
                  {{ authStore.user?.name }}
                </h2>
              </div>
            </div>
          </div>

          <!-- EMAIL -->
          <div
            :class="
              mode.darkMode
                ? 'bg-[#0f172a] border border-[#334155]'
                : 'bg-gray-50 border border-gray-200'
            "
            class="rounded-2xl p-5 transition-all duration-300"
          >
            <div class="flex items-center gap-3 mb-2">

              <div
                :class="
                  mode.darkMode
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'bg-black text-white'
                "
                class="w-10 h-10 rounded-xl flex items-center justify-center"
              >
                <i class="bi bi-envelope-fill"></i>
              </div>

              <div class="min-w-0">
                <p
                  :class="
                    mode.darkMode
                      ? 'text-slate-400'
                      : 'text-gray-500'
                  "
                  class="text-sm"
                >
                  Email Address
                </p>

                <h2
                  :class="
                    mode.darkMode
                      ? 'text-white'
                      : 'text-gray-900'
                  "
                  class="font-semibold text-lg break-all"
                >
                  {{ authStore.user?.email }}
                </h2>
              </div>
            </div>
          </div>

        </div>

        <!-- LOGOUT -->
        <div class="mt-8">
          <button
            @click="logout"
            class="w-full py-4 rounded-2xl bg-red-500 hover:bg-red-600 text-white font-semibold transition-all duration-300 shadow-lg hover:scale-[1.01] cursor-pointer"
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
</style>