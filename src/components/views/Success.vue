<script setup>
import { useDarkModeStore } from "@/stores/darkMode";
import { useRouter } from "vue-router";

const mode = useDarkModeStore();
const router = useRouter();

const goHome = () => {
  router.push("/");
};

const goShop = () => {
  router.push("/shop");
};
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center px-4 transition-all duration-300"
    :class="mode.darkMode ? 'bg-[#0f172a]' : 'bg-[#f8fafc]'"
  >
    <div
      class="w-full max-w-2xl rounded-3xl shadow-2xl p-10 text-center"
      :class="mode.darkMode
        ? 'bg-[#1e293b] border border-[#334155]'
        : 'bg-white border border-gray-200'"
    >

      <!-- ICON -->
      <div
        class="mx-auto w-24 h-24 flex items-center justify-center rounded-full mb-6"
        :class="mode.darkMode ? 'bg-blue-500/20' : 'bg-green-100'"
      >
        <i class="bi bi-check2-circle text-5xl text-green-500"></i>
      </div>

      <!-- TITLE -->
      <h1
        class="text-3xl lg:text-4xl font-extrabold mb-3"
        :class="mode.darkMode ? 'text-white' : 'text-gray-900'"
      >
        Order Placed Successfully
      </h1>

      <!-- DESCRIPTION -->
      <p
        class="mb-8 leading-7"
        :class="mode.darkMode ? 'text-slate-300' : 'text-gray-500'"
      >
        Thank you for your purchase! Your order has been received and is now being processed.
        You will receive a confirmation email shortly.
      </p>

      <!-- ORDER INFO BOX -->
      <div
        class="rounded-2xl p-5 mb-8 text-left"
        :class="mode.darkMode
          ? 'bg-[#0f172a] border border-[#334155]'
          : 'bg-gray-50 border border-gray-200'"
      >
        <p class="flex justify-between mb-2">
          <span class="text-gray-400">Order ID</span>
          <span class="font-semibold">#ORD-2026-001</span>
        </p>

        <p class="flex justify-between mb-2">
          <span class="text-gray-400">Status</span>
          <span class="text-green-500 font-semibold">Processing</span>
        </p>

        <p class="flex justify-between">
          <span class="text-gray-400">Payment</span>
          <span class="font-semibold">Successful</span>
        </p>
      </div>

      <!-- BUTTONS -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">

        <button
          @click="goShop"
          class="px-6 cursor-pointer py-4 rounded-2xl font-semibold transition-all duration-300"
          :class="mode.darkMode
            ? 'bg-blue-500 hover:bg-blue-600 text-white'
            : 'bg-black hover:bg-gray-800 text-white'"
        >
          Continue Shopping
        </button>

        <button
          @click="goHome"
          class="px-6 cursor-pointer py-4 rounded-2xl font-semibold transition-all duration-300 border"
          :class="mode.darkMode
            ? 'border-[#334155] text-white hover:bg-[#1e293b]'
            : 'border-gray-300 text-gray-700 hover:bg-gray-100'"
        >
          Go Home
        </button>

      </div>

    </div>
  </div>
</template>