<script setup>
import { useDarkModeStore } from "../../stores/darkMode";

const mode = useDarkModeStore();
</script>

<template>
  <div
    :class="mode.darkMode ? 'bg-[#030712]' : 'bg-[#fafafa]'"
    class="about-page min-h-screen transition-colors duration-500 pb-20"
  >
    <!-- 1. Hero Content Section -->
    <section class="max-w-7xl mx-auto px-4 lg:px-6 pt-20 pb-16 text-center space-y-6">
      <span class="text-xs font-bold tracking-[0.3em] text-indigo-500 uppercase">Our Identity</span>
      <h1
        :class="mode.darkMode ? 'text-white' : 'text-slate-900'"
        class="text-4xl lg:text-6xl font-black tracking-tight"
      >
        About ELYSIA
      </h1>
      <p
        :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'"
        class="max-w-2xl mx-auto text-sm lg:text-base font-light leading-relaxed"
      >
        ELYSIA is a modern fashion powerhouse built at the nexus of simplicity, elegance, and tactile comfort. We curate high-tier product experiences directly to your fingertips via an ultra-seamless digital architecture.
      </p>
      <div class="pt-4">
        <router-link
          to="/exploretech"
          :class="mode.darkMode ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-slate-900 hover:bg-black'"
          class="text-white px-8 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase inline-block shadow-lg transition-all duration-300 active:scale-97"
        >
          Explore Shop
        </router-link>
      </div>
    </section>

    <!-- 2. Data Metric Stats Section -->
    <section class="max-w-7xl mx-auto px-4 lg:px-6 py-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Metric Card -->
        <div
          v-for="(val, label) in { '10K+': 'Happy Customers', '500+': 'Premium Products', '24/7': 'Global Support' }"
          :key="label"
          :class="mode.darkMode ? 'bg-[#090d16] border-slate-900 text-white shadow-black/40' : 'bg-white border-slate-100 text-slate-900 shadow-slate-200/50'"
          class="p-8 rounded-2xl text-center border shadow-lg hover:-translate-y-1 transition-all duration-500 group"
        >
          <h2 class="text-3xl lg:text-4xl font-black tracking-tight text-indigo-500 group-hover:scale-105 transition-transform duration-300">
            {{ label }}
          </h2>
          <p :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'" class="mt-2 text-xs font-bold tracking-wider uppercase opacity-80">
            {{ val }}
          </p>
        </div>
      </div>
    </section>

    <!-- 3. Corporate Mission Section (Asymmetrical Grid) -->
    <section class="max-w-7xl mx-auto px-4 lg:px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      <!-- Media Frame Showcase -->
      <div class="relative rounded-3xl overflow-hidden shadow-2xl group border" :class="mode.darkMode ? 'border-slate-900' : 'border-slate-100'">
        <img
          src="https://images.unsplash.com/photo-1521334884684-d80222895322"
          alt="Elysia Design Workshop"
          class="w-full h-[400px] object-cover transform scale-100 group-hover:scale-103 transition-transform duration-1000"
        />
        <div class="absolute inset-0 bg-black/5 mix-blend-multiply"></div>
      </div>

      <!-- Narrative Text Block -->
      <div class="space-y-6">
        <span class="text-xs font-bold tracking-[0.25em] text-indigo-500 uppercase">The Purpose</span>
        <h2 :class="mode.darkMode ? 'text-white' : 'text-slate-900'" class="text-2xl lg:text-3xl font-black tracking-tight">
          Our Mission
        </h2>
        <p :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'" class="font-light text-sm lg:text-base leading-relaxed">
          We engineering digital ecosystems that bridge luxury item design and advanced customer accessibility. By combining minimalist layouts, high-velocity performance, and clean interactive cues, we make premium shopping intuitive.
        </p>
        
        <!-- Checklist Focus Items -->
        <ul :class="mode.darkMode ? 'text-slate-300' : 'text-slate-700'" class="space-y-3 text-sm font-medium">
          <li v-for="point in ['Premium lifestyle fashion quality', 'High-velocity & encrypted checkout', '24/7 Dedicated client relationship support', 'Next-gen fluid UI/UX interactions']" 
              :key="point" class="flex items-center gap-3">
            <i class="bi bi-check-circle-fill text-indigo-500 text-base"></i>
            <span>{{ point }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- 4. Value Propositions Section (Why Choose Us) -->
    <section class="max-w-7xl mx-auto px-4 lg:px-6 py-16">
      <div class="text-center mb-16 space-y-2">
        <span class="text-xs font-bold tracking-[0.3em] text-indigo-500 uppercase">Core Strengths</span>
        <h2 :class="mode.darkMode ? 'text-white' : 'text-slate-900'" class="text-2xl lg:text-3xl font-black tracking-tight">
          Why Choose Us
        </h2>
        <p :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'" class="max-w-xl mx-auto text-sm font-light">
          We direct our collective resources towards uncompromising standards, functional digital interfaces, and continuous user validation.
        </p>
      </div>

      <!-- Feature Highlight Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="card in [
            { icon: 'truck', title: 'Express Delivery', desc: 'Accelerated and trackable logistic networks delivering directly to your door.' },
            { icon: 'shield-check', title: 'Encrypted Checkout', desc: 'State-of-the-art tokenized transaction processing protecting personal data.' },
            { icon: 'stars', title: 'Premium Materialization', desc: 'Strict selection parameters securing pristine craftsmanship and longevity.' },
            { icon: 'headset', title: 'Concierge Care', desc: 'Attentive, skilled communication paths waiting on standby for immediate resolution.' }
          ]"
          :key="card.title"
          :class="mode.darkMode ? 'bg-[#090d16] border-slate-900 text-white shadow-black/40' : 'bg-white border-slate-100 text-slate-900 shadow-slate-200/50'"
          class="p-6 rounded-2xl border shadow-lg hover:-translate-y-1.5 transition-all duration-500 group/item"
        >
          <div class="w-12 h-12 rounded-xl flex items-center justify-center text-xl text-indigo-500 transition-colors duration-300" :class="mode.darkMode ? 'bg-slate-950 border border-slate-900' : 'bg-slate-50 border border-slate-100'">
            <i :class="`bi bi-${card.icon}`"></i>
          </div>
          <h3 class="font-bold text-base tracking-tight mt-5">{{ card.title }}</h3>
          <p :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'" class="mt-2 text-xs font-light leading-relaxed">
            {{ card.desc }}
          </p>
        </div>
      </div>
    </section>

    <!-- 5. Curated Testimonials Section -->
    <section :class="mode.darkMode ? 'bg-[#060a12]' : 'bg-[#f4f4f5]'" class="py-20 rounded-3xl my-12 mx-4 lg:mx-6 overflow-hidden relative">
      <div class="max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
        <div class="text-center mb-16 space-y-2">
          <span class="text-xs font-bold tracking-[0.3em] text-indigo-500 uppercase">Client Feedback</span>
          <h2 :class="mode.darkMode ? 'text-white' : 'text-slate-900'" class="text-2xl lg:text-3xl font-black tracking-tight">
            Customer Reviews
          </h2>
          <p :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'" class="text-sm font-light">
            Genuine expressions shared by verified patrons of the Elysia Ecosystem.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="review in [
              { name: 'Sophia', text: 'Impeccable product build standards and incredibly swift deployment. The UI responsiveness sets a new bar.' },
              { name: 'Daniel', text: 'Easily sits among the top virtual fashion hubs. Pristine minimalism combined with exceptional curated utility.' },
              { name: 'Emma', text: 'The clarity of checkout flow and overall spatial harmony makes this my default storefront recommendation.' }
            ]"
            :key="review.name"
            :class="mode.darkMode ? 'bg-slate-950/60 text-white border-slate-900' : 'bg-white text-slate-900 border-slate-100'"
            class="p-6 rounded-2xl border shadow-xl flex flex-col justify-between group/rev hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <div class="text-amber-400 text-xs tracking-widest">★★★★★</div>
              <p :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'" class="mt-4 text-xs lg:text-sm font-light leading-relaxed italic">
                "{{ review.text }}"
              </p>
            </div>
            <h4 class="mt-6 font-bold text-sm tracking-wide text-indigo-500">— {{ review.name }}</h4>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Bottom Call To Action & Inline Newsletter Section -->
    <section class="max-w-4xl mx-auto px-4 lg:px-6 pt-16 text-center space-y-6">
      <h2 :class="mode.darkMode ? 'text-white' : 'text-slate-900'" class="text-2xl lg:text-4xl font-black tracking-tight">
        Subscribe to Our Newsletter
      </h2>
      <p :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'" class="text-xs lg:text-sm font-light max-w-lg mx-auto">
        Join the digital dispatch to acquire immediate priority notice regarding new architectural capsule drops and corporate events.
      </p>

      <div class="pt-4 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email address"
          :class="mode.darkMode ? 'bg-slate-950 border-slate-900 text-white placeholder:text-slate-600 focus:border-indigo-500' : 'bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-slate-400'"
          class="px-5 py-3.5 rounded-xl border outline-none w-full text-sm font-medium transition-colors duration-300"
        />
        <button
          :class="mode.darkMode ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-slate-900 hover:bg-black'"
          class="text-white px-8 py-3.5 cursor-pointer rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 active:scale-97 whitespace-nowrap"
        >
          Subscribe
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped></style>