<script setup>
import { useDarkModeStore } from "../../stores/darkMode";

const mode = useDarkModeStore();
</script>

<template>
  <section
    :class="mode.darkMode ? 'bg-[#0f172a]' : 'bg-[#F3F0EF]'"
    class="min-h-screen px-4 sm:px-8 lg:px-16 py-12 transition-all duration-300"
  >
    <!-- Header -->
    <div class="max-w-7xl mx-auto lg:mb-12 mb-5 text-center">
      <h1
        :class="mode.darkMode ? 'text-white' : 'text-black'"
        class="lg:text-4xl text-2xl font-black tracking-tight mb-4"
      >
        Get in touch
      </h1>

      <p
        :class="mode.darkMode ? 'text-slate-300' : 'text-gray-500'"
        class="max-w-2xl lg:text-base text-[10px] mx-auto leading-relaxed"
      >
        We're here to assist you with any inquiries regarding our collections,
        orders, or styling advice. Expect a response within 24 hours.
      </p>
    </div>

    <!-- Main Grid -->
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6"
    >
      <!-- LEFT FORM -->
      <div
        :class="
          mode.darkMode
            ? 'bg-[#1e293b] border-slate-700'
            : 'bg-[#efedf3] border-gray-300'
        "
        class="rounded-2xl p-6 sm:p-8 shadow border"
      >
        <form class="space-y-6">
          <!-- Name + Email -->
          <div class="grid sm:grid-cols-2 gap-4">
            <!-- Name -->
            <div>
              <label
                :class="mode.darkMode ? 'text-slate-300' : 'text-gray-600'"
                class="block text-sm mb-2 font-medium"
              >
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                :class="
                  mode.darkMode
                    ? 'bg-[#0f172a] border-slate-600 text-white'
                    : 'bg-[#f5f3f8] border-gray-300 text-black'
                "
                class="w-full border rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            <!-- Email -->
            <div>
              <label
                :class="mode.darkMode ? 'text-slate-300' : 'text-gray-600'"
                class="block text-sm mb-2 font-medium"
              >
                Email Address
              </label>

              <input
                type="email"
                placeholder="email@example.com"
                :class="
                  mode.darkMode
                    ? 'bg-[#0f172a] border-slate-600 text-white'
                    : 'bg-[#f5f3f8] border-gray-300 text-black'
                "
                class="w-full border rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          <!-- Subject -->
          <div>
            <label
              :class="mode.darkMode ? 'text-slate-300' : 'text-gray-600'"
              class="block text-sm mb-2 font-medium"
            >
              Subject
            </label>

            <select
              :class="
                mode.darkMode
                  ? 'bg-[#0f172a] border-slate-600 text-white'
                  : 'bg-[#f5f3f8] border-gray-300 text-black'
              "
              class="w-full border rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-blue-500 transition-all"
            >
              <option>General Inquiry</option>
              <option>Order Support</option>
              <option>Refund</option>
              <option>Partnership</option>
            </select>
          </div>

          <!-- Message -->
          <div>
            <label
              :class="mode.darkMode ? 'text-slate-300' : 'text-gray-600'"
              class="block text-sm mb-2 font-medium"
            >
              Message
            </label>

            <textarea
              rows="6"
              placeholder="How can we help?"
              :class="
                mode.darkMode
                  ? 'bg-[#0f172a] border-slate-600 text-white placeholder:text-white'
                  : 'bg-[#f5f3f8] border-gray-300 text-black placeholder:text-gray-400'
              "
              class="w-full resize-none border rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-blue-500 transition-all"
            ></textarea>
          </div>

          <!-- Button -->
          <div class="lg:flex lg:justify-start  flex justify-center">
            <button
            :class="
              mode.darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-black'
            "
            class="text-white lg:px-8 px-5 py-3 lg:py-4 cursor-pointer rounded-full font-semibold shadow-lg transition-all duration-300"
          >
            Send Message
          </button>
          </div>
        </form>
      </div>

      <!-- RIGHT SIDE -->
      <div class="space-y-6">
        <!-- Support Card -->
        <div
          :class="
            mode.darkMode
              ? 'bg-[#1e293b] border-slate-700'
              : 'bg-[#efedf3] border-gray-300'
          "
          class="rounded-2xl p-8 shadow border"
        >
          <h2
            :class="mode.darkMode ? 'text-white' : 'text-black'"
            class="text-3xl  font-bold mb-8"
          >
            Customer Support
          </h2>

          <!-- Email -->
          <div class="flex gap-4 mb-8">
            <i class="bi bi-envelope text-xl text-blue-500"></i>

            <div>
              <p
                :class="mode.darkMode ? 'text-white' : 'text-black'"
                class="text-sm font-semibold mb-1"
              >
                Email Us
              </p>

              <p :class="mode.darkMode ? 'text-slate-300' : 'text-gray-500'">
                support@elysia.com
              </p>
            </div>
          </div>

          <!-- Phone -->
          <div class="flex gap-4">
            <i class="bi bi-telephone text-xl text-green-500"></i>

            <div>
              <p
                :class="mode.darkMode ? 'text-white' : 'text-black'"
                class="text-sm font-semibold mb-1"
              >
                Phone Support
              </p>

              <p :class="mode.darkMode ? 'text-slate-300' : 'text-gray-500'">
                +855 972-425-545
              </p>

              <p class="text-xs text-gray-400 mt-1">Mon–Fri, 9am–5pm EST</p>
            </div>
          </div>
        </div>

        <!-- Store Card -->
        <div class="relative overflow-hidden rounded-2xl h-60 group">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1400&auto=format&fit=crop"
            class="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
          />

          <div class="absolute inset-0 bg-black/60"></div>

          <div
            class="absolute inset-0 p-6 flex flex-col justify-end text-white"
          >
            <h3 class="text-3xl font-bold mb-2">Flagship Store</h3>

            <p class="text-gray-200 mb-5">Phnom Penh, Cambodia</p>

            <button
              class="flex items-center gap-2 text-sm font-semibold hover:translate-x-1 transition-all"
            >
              Store Locator
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>

        <!-- Social -->
        <div
          :class="
            mode.darkMode
              ? 'bg-[#1e293b] border-slate-700'
              : 'bg-[#efedf3] border-gray-300'
          "
          class="rounded-2xl p-6 shadow-sm border"
        >
          <p
            :class="mode.darkMode ? 'text-white' : 'text-gray-500'"
            class="text-xs text-center font-bold uppercase tracking-[4px] mb-5"
          >
            Connect
          </p>

          <div class="flex justify-center gap-6">
            <i class="bi bi-instagram text-xl hover:text-pink-500 cursor-pointer"></i>
            <i class="bi bi-facebook text-xl hover:text-blue-500 cursor-pointer"></i>
            <i class="bi bi-telegram text-xl hover:text-sky-500 cursor-pointer"></i>
            <i class="bi bi-twitter text-xl hover:text-sky-400 cursor-pointer"></i>
            <i class="bi bi-tiktok text-xl hover:text-gray-500 cursor-pointer"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>