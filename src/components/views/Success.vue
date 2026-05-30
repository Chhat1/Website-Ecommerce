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
  <div :class="mode.darkMode ? 'bg-[#030712]' : 'bg-[#fafafa]'" 
       class="min-h-screen flex items-center justify-center px-4 transition-colors duration-500">
    
    <!-- Main Card -->
    <div :class="mode.darkMode ? 'bg-[#090d16] border-slate-900 shadow-black/40' : 'bg-white border-slate-100 shadow-slate-200/50'"
         class="w-full max-w-xl rounded-3xl p-8 lg:p-12 border text-center transition-all duration-500">

      <!-- Success Icon -->
      <div class="mx-auto w-20 h-20 flex items-center justify-center rounded-full mb-8"
           :class="mode.darkMode ? 'bg-indigo-900/30 text-indigo-400' : 'bg-indigo-50 text-indigo-600'">
        <i class="bi bi-check2 text-4xl"></i>
      </div>

      <!-- Title -->
      <h1 class="text-3xl lg:text-4xl font-black tracking-tight mb-4" 
          :class="mode.darkMode ? 'text-white' : 'text-slate-950'">
        Order Successful
      </h1>

      <!-- Description -->
      <p class="mb-10 leading-relaxed font-light text-sm lg:text-base" 
         :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'">
        Thank you for your purchase. Your order has been confirmed and is being processed by our concierge team.
      </p>

      <!-- Order Details Box -->
      <div class="rounded-2xl p-6 mb-10 text-left space-y-4"
           :class="mode.darkMode ? 'bg-[#030712] border-slate-900' : 'bg-slate-50 border-slate-200'">
        <div class="flex justify-between text-xs font-bold uppercase tracking-[0.2em]" 
             :class="mode.darkMode ? 'text-slate-500' : 'text-slate-400'">
          <span>Order ID</span>
          <span>Status</span>
        </div>
        <div class="flex justify-between font-black text-sm">
          <span>#ORD-2026-001</span>
          <span class="text-indigo-500">Processing</span>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4">
        <button @click="goShop" 
                class="flex-1 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all active:scale-95"
                :class="mode.darkMode ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-slate-950 hover:bg-black text-white'">
          Continue Shopping
        </button>
        <button @click="goHome" 
                class="flex-1 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest border transition-all active:scale-95"
                :class="mode.darkMode ? 'border-slate-800 hover:bg-slate-900 text-white' : 'border-slate-200 hover:bg-slate-50 text-slate-900'">
          Go Home
        </button>
      </div>

    </div>
  </div>
</template>