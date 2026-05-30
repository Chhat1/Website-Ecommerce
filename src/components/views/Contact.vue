<script setup>
import { useDarkModeStore } from "../../stores/darkMode";
const sendSuccess = () => {
  alert("Message sent successfully.");
};
const mode = useDarkModeStore();
</script>

<template>
  <div
    :class="mode.darkMode ? 'bg-[#030712]' : 'bg-[#fafafa]'"
    class="contact-page min-h-screen transition-colors duration-500 pb-20"
  >
    <!-- 1. Editorial Header Section -->
    <section class="max-w-7xl mx-auto px-4 lg:px-6 pt-20 pb-16 text-center space-y-6">
      <span class="text-xs font-bold tracking-[0.3em] text-indigo-500 uppercase">Connect With Us</span>
      <h1
        :class="mode.darkMode ? 'text-white' : 'text-slate-900'"
        class="text-4xl lg:text-6xl font-black tracking-tight"
      >
        Get in touch
      </h1>
      <p
        :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'"
        class="max-w-2xl mx-auto text-sm lg:text-base font-light leading-relaxed"
      >
        We are here to assist you with any inquiries regarding our premium collections, orders, or styling advice. Expect an attentive response from our concierge team within 24 hours.
      </p>
    </section>

    <!-- 2. Main Content Grid Layout -->
    <section class="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-start">
      
      <!-- LEFT: Luxury Message Form -->
      <div
        :class="mode.darkMode ? 'bg-[#090d16] border-slate-900 shadow-black/40' : 'bg-white border-slate-100 shadow-slate-200/50'"
        class="rounded-3xl p-6 sm:p-10 border shadow-2xl transition-all duration-500"
      >
        <form @submit.prevent="sendSuccess" class="space-y-6">
          <!-- Name & Email Inputs -->
          <div class="grid sm:grid-cols-2 gap-6">
            <!-- Name -->
            <div class="space-y-2">
              <label 
                :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'"
                class="text-xs font-bold tracking-[0.2em] uppercase"
              >
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                :class="mode.darkMode ? 'bg-[#030712] border-slate-800 text-white placeholder:text-slate-700 focus:border-indigo-500 focus:ring-indigo-500/10' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:ring-slate-950/5'"
                class="w-full border rounded-xl px-5 py-4 outline-none text-sm transition-all duration-300 focus:ring-4 font-medium"
              />
            </div>

            <!-- Email -->
            <div class="space-y-2">
              <label 
                :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'"
                class="text-xs font-bold tracking-[0.2em] uppercase"
              >
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="email@example.com"
                :class="mode.darkMode ? 'bg-[#030712] border-slate-800 text-white placeholder:text-slate-700 focus:border-indigo-500 focus:ring-indigo-500/10' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:ring-slate-950/5'"
                class="w-full border rounded-xl px-5 py-4 outline-none text-sm transition-all duration-300 focus:ring-4 font-medium"
              />
            </div>
          </div>

          <!-- Subject Selection -->
          <div class="space-y-2">
            <label 
              :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'"
              class="text-xs font-bold tracking-[0.2em] uppercase"
            >
              Subject
            </label>
            <div class="relative">
              <select
                :class="mode.darkMode ? 'bg-[#030712] border-slate-800 text-white focus:border-indigo-500' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-slate-400'"
                class="w-full border rounded-xl px-5 py-4 outline-none text-sm transition-all duration-300 appearance-none cursor-pointer font-medium"
              >
                <option class="bg-white dark:bg-slate-950">General Inquiry</option>
                <option class="bg-white dark:bg-slate-950">Order Support</option>
                <option class="bg-white dark:bg-slate-950">Refund Request</option>
                <option class="bg-white dark:bg-slate-950">Corporate Partnership</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5 text-slate-400">
                <i class="bi bi-chevron-down text-xs"></i>
              </div>
            </div>
          </div>

          <!-- Message Textarea -->
          <div class="space-y-2">
            <label 
              :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'"
              class="text-xs font-bold tracking-[0.2em] uppercase"
            >
              Message
            </label>
            <textarea
              rows="6"
              required
              placeholder="How can our concierge team assist you today?"
              :class="mode.darkMode ? 'bg-[#030712] border-slate-800 text-white placeholder:text-slate-700 focus:border-indigo-500 focus:ring-indigo-500/10' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:ring-slate-950/5'"
              class="w-full resize-none border rounded-xl px-5 py-4 outline-none text-sm transition-all duration-300 focus:ring-4 font-medium"
            ></textarea>
          </div>

          <!-- Submit Action Button (Consistent About Design) -->
          <div class="flex justify-center lg:justify-start">
            <button
              type="submit"
              :class="mode.darkMode ? 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/20' : 'bg-slate-900 hover:bg-black shadow-slate-950/15'"
              class="text-white px-10 py-4 cursor-pointer rounded-xl font-bold text-xs tracking-wider uppercase shadow-lg transition-all duration-300 active:scale-97 whitespace-nowrap"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <!-- RIGHT: Customer Support & Brand Spatial Info -->
      <div class="space-y-8">
        
        <!-- Support Channels Card -->
        <div
          :class="mode.darkMode ? 'bg-[#090d16] border-slate-900 shadow-black/40' : 'bg-white border-slate-100 shadow-slate-200/50'"
          class="rounded-3xl p-8 border shadow-lg space-y-8"
        >
          <span class="text-xs font-bold tracking-[0.3em] text-indigo-500 uppercase">Concierge Support</span>
          
          <div class="space-y-6">
            <!-- Email Vector -->
            <div class="flex gap-4 items-start">
              <div 
                :class="mode.darkMode ? 'bg-slate-950 border border-slate-900' : 'bg-slate-50 border border-slate-100'"
                class="w-12 h-12 rounded-xl flex items-center justify-center text-lg text-indigo-500 shrink-0"
              >
                <i class="bi bi-envelope"></i>
              </div>
              <div>
                <p 
                  :class="mode.darkMode ? 'text-white' : 'text-slate-900'"
                  class="text-sm font-bold tracking-tight mb-1"
                >
                  Email Us
                </p>
                <p :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'" class="text-sm font-light">
                  support@elysia.com
                </p>
              </div>
            </div>

            <!-- Phone Vector -->
            <div class="flex gap-4 items-start">
              <div 
                :class="mode.darkMode ? 'bg-slate-950 border border-slate-900' : 'bg-slate-50 border border-slate-100'"
                class="w-12 h-12 rounded-xl flex items-center justify-center text-lg text-indigo-500 shrink-0"
              >
                <i class="bi bi-telephone"></i>
              </div>
              <div>
                <p 
                  :class="mode.darkMode ? 'text-white' : 'text-slate-900'"
                  class="text-sm font-bold tracking-tight mb-1"
                >
                  Phone Support
                </p>
                <p :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'" class="text-sm font-light">
                  +855 972-425-545
                </p>
                <p :class="mode.darkMode ? 'text-slate-600' : 'text-slate-400'" class="text-[11px] tracking-wide mt-1">
                  Mon–Fri, 9am–5pm EST
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Luxury Concept Space Card (Asymmetric Hover Zoom) -->
        <div class="relative overflow-hidden rounded-3xl h-64 group border" :class="mode.darkMode ? 'border-slate-900' : 'border-slate-100'">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1400&auto=format&fit=crop"
            alt="Elysia Flagship Studio"
            class="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-1000"
          />
          <div class="absolute inset-0 bg-black/50"></div>
          
          <div class="absolute inset-0 p-8 flex flex-col justify-end text-white space-y-2">
            <span class="text-xs uppercase tracking-widest text-indigo-400 font-bold">Flagship Studio</span>
            <h3 class="text-2xl font-black tracking-tight">Phnom Penh, Cambodia</h3>
            <button class="flex items-center gap-2 text-xs uppercase tracking-wider font-bold hover:text-indigo-400 transition-colors w-fit">
              <span>Store Locator</span>
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>

        <!-- Social Connections (Consolidated Design) -->
        <div
          :class="mode.darkMode ? 'bg-[#090d16] border-slate-900 shadow-black/40' : 'bg-white border-slate-100 shadow-slate-200/50'"
          class="rounded-3xl p-6 border shadow-sm"
        >
          <p
            :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'"
            class="text-[11px] text-center font-bold uppercase tracking-[0.25em] mb-4"
          >
            Connect
          </p>
          <div class="flex justify-center gap-6">
            <a 
              v-for="social in ['instagram', 'facebook', 'telegram', 'twitter', 'tiktok']" 
              :key="social"
              href="#"
              :class="mode.darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-black'"
              class="text-xl transition-all duration-300 hover:-translate-y-1 block"
            >
              <i :class="`bi bi-${social}`"></i>
            </a>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>
<style scoped></style>