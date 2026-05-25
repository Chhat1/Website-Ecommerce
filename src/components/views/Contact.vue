<script setup>
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex items-center justify-center px-6 py-10"
  >
    <!-- Main Container -->
    <div
      class="w-full max-w-7xl bg-white rounded-[40px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.12)] grid lg:grid-cols-2"
    >
      
      <!-- Left Side -->
      <div
        class="hidden lg:flex flex-col justify-center bg-black text-white p-16 relative overflow-hidden"
      >
        <!-- Background Blur -->
        <div
          class="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl top-[-100px] right-[-100px]"
        ></div>

        <div
          class="absolute w-80 h-80 bg-gray-500/20 rounded-full blur-3xl bottom-[-100px] left-[-100px]"
        ></div>

        <!-- Content -->
        <div class="relative z-10">
          <div
            class="w-20 h-20 rounded-3xl bg-white/10 border border-white/20 flex items-center justify-center text-4xl mb-8 backdrop-blur-xl"
          >
            ✨
          </div>

          <h1 class="text-6xl font-black leading-tight mb-6">
            Welcome <br />
            To Elysia
          </h1>

          <p class="text-gray-300 text-lg leading-relaxed max-w-lg">
            Discover a premium luxury experience designed for modern creators,
            innovators, and dreamers. Elegant design meets powerful technology.
          </p>

          <!-- Features -->
          <div class="mt-12 space-y-5">
            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center"
              >
                🚀
              </div>

              <div>
                <h3 class="font-semibold text-lg">
                  Fast Experience
                </h3>

                <p class="text-sm text-gray-400">
                  Optimized modern performance.
                </p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center"
              >
                🔒
              </div>

              <div>
                <h3 class="font-semibold text-lg">
                  Secure Platform
                </h3>

                <p class="text-sm text-gray-400">
                  Enterprise-level security system.
                </p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center"
              >
                🎨
              </div>

              <div>
                <h3 class="font-semibold text-lg">
                  Elegant Design
                </h3>

                <p class="text-sm text-gray-400">
                  Crafted for premium aesthetics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side -->
      <div class="p-8 sm:p-12 lg:p-16 flex items-center">
        <div class="w-full max-w-md mx-auto">

          <!-- Mobile Logo -->
          <div class="flex justify-center mb-8 lg:hidden">
            <div
              class="w-16 h-16 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center text-2xl shadow-md"
            >
              ✨
            </div>
          </div>

          <!-- Header -->
          <div class="mb-10 text-center lg:text-left">
            <h2
              class="text-5xl font-black text-gray-900 mb-4 tracking-tight"
            >
              Create Account
            </h2>

            <p class="text-gray-500 text-base">
              Join the future of premium digital experience.
            </p>
          </div>

          <!-- Form -->
          <form class="space-y-6">

            <!-- Name -->
            <div>
              <label class="block mb-2 text-sm font-semibold text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                class="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition duration-300"
              />
            </div>

            <!-- Email -->
            <div>
              <label class="block mb-2 text-sm font-semibold text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                class="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition duration-300"
              />
            </div>

            <!-- Password -->
            <div>
              <label class="block mb-2 text-sm font-semibold text-gray-700">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                class="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition duration-300"
              />
            </div>

            <!-- Confirm -->
            <div>
              <label class="block mb-2 text-sm font-semibold text-gray-700">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm your password"
                class="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition duration-300"
              />
            </div>

            <!-- Remember -->
            <div class="flex items-center justify-between text-sm">
              <label class="flex items-center gap-2 text-gray-500">
                <input type="checkbox" class="accent-black" />
                Remember me
              </label>

              <a
                href="#"
                class="text-gray-600 hover:text-black transition"
              >
                Forgot password?
              </a>
            </div>

            <!-- Button -->
            <button
              class="w-full bg-black text-white font-bold py-4 rounded-2xl hover:bg-gray-800 hover:scale-[1.01] transition duration-300 shadow-xl"
            >
              Create Account
            </button>

          </form>

          <!-- Divider -->
          <div class="flex items-center my-8">
            <div class="flex-1 h-px bg-gray-300"></div>

            <span class="px-4 text-xs tracking-[4px] text-gray-400">
              OR CONTINUE WITH
            </span>

            <div class="flex-1 h-px bg-gray-300"></div>
          </div>

          <!-- Social -->
          <div class="grid grid-cols-2 gap-4">

            <button
              class="flex items-center justify-center gap-3 bg-gray-50 border border-gray-300 py-4 rounded-2xl hover:bg-gray-100 transition duration-300"
            >
              <i class="bi bi-google text-lg"></i>
              Google
            </button>

            <button
              class="flex items-center justify-center gap-3 bg-gray-50 border border-gray-300 py-4 rounded-2xl hover:bg-gray-100 transition duration-300"
            >
              <i class="bi bi-apple text-lg"></i>
              Apple
            </button>

          </div>

          <!-- Footer -->
          <div class="text-center mt-8 text-sm text-gray-500">
            Already have an account?

            <a
              href="#"
              class="text-black font-bold hover:underline"
            >
              Login here
            </a>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
</style>