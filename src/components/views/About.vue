<script setup>
import { useDarkModeStore } from "../../stores/darkMode";

const mode = useDarkModeStore();
</script>

<template>
  <div
    :class="mode.darkMode ? 'bg-[#0f172a]' : 'bg-white'"
    class="min-h-screen transition-all duration-300"
  >
    <!-- HERO -->
    <section class="max-w-6xl mx-auto px-5 py-16 text-center">
      <h1
        :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
        class="lg:text-4xl text-2xl font-black"
      >
        About ELYSIA
      </h1>
      <p
        :class="mode.darkMode ? 'text-slate-300' : 'text-gray-500'"
        class="mt-5 mb-10 max-w-2xl mx-auto text-base leading-relaxed"
      >
        ELYSIA is a modern fashion brand built for simplicity, elegance, and
        comfort. We bring high-quality fashion directly to your fingertips with
        a seamless shopping experience.
      </p>
      <router-link
        to="/exploretech"
        :class="mode.darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-black'"
        class="text-white px-6 py-3 rounded-xl cursor-pointer font-semibold shadow-md transition"
      >
        Explore Shop
      </router-link>
    </section>
    <!-- STATS -->
    <section class="max-w-6xl mx-auto px-5 py-10">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        <!-- Card -->
        <div
          :class="
            mode.darkMode
              ? 'bg-[#1e293b] border-slate-700 text-white'
              : 'bg-white border-gray-200 text-gray-800'
          "
          class="p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl text-center border transition-all duration-300"
        >
          <h2 class="text-2xl sm:text-3xl font-bold text-blue-500">10K+</h2>
          <p class="mt-2 text-sm sm:text-base opacity-80">Happy Customers</p>
        </div>
        <!-- Card -->
        <div
          :class="
            mode.darkMode
              ? 'bg-[#1e293b] border-slate-700 text-white'
              : 'bg-white border-gray-200 text-gray-800'
          "
          class="p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl text-center border transition-all duration-300"
        >
          <h2 class="text-2xl sm:text-3xl font-bold text-blue-500">500+</h2>
          <p class="mt-2 text-sm sm:text-base opacity-80">Products</p>
        </div>
        <!-- Card -->
        <div
          :class="
            mode.darkMode
              ? 'bg-[#1e293b] border-slate-700 text-white'
              : 'bg-white border-gray-200 text-gray-800'
          "
          class="p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl text-center border transition-all duration-300"
        >
          <h2 class="text-2xl sm:text-3xl font-bold text-blue-500">24/7</h2>
          <p class="mt-2 text-sm sm:text-base opacity-80">Support</p>
        </div>
      </div>
    </section>
    <!-- MISSION -->
    <section
      class="max-w-6xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-10 items-center"
    >
      <!-- IMAGE -->
      <div>
        <img
          src="https://images.unsplash.com/photo-1521334884684-d80222895322"
          class="rounded-2xl shadow-xl w-full object-cover"
        />
      </div>
      <!-- TEXT -->
      <div>
        <h2
          :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
          class="text-3xl font-bold"
        >
          Our Mission
        </h2>
        <p
          :class="mode.darkMode ? 'text-slate-300' : 'text-gray-500'"
          class="mt-5 leading-relaxed"
        >
          We aim to deliver a smooth and enjoyable online shopping experience by
          combining modern design, fast performance, and user-friendly
          interfaces. Every product is carefully selected for quality and style.
        </p>
        <ul
          :class="mode.darkMode ? 'text-slate-300' : 'text-gray-600'"
          class="mt-5 space-y-2"
        >
          <li>
            <i class="bi text-blue-500 bi-check-circle-fill"></i> Premium
            fashion quality
          </li>
          <li>
            <i class="bi text-blue-500 bi-check-circle-fill"></i> Fast & secure
            checkout
          </li>
          <li>
            <i class="bi text-blue-500 bi-check-circle-fill"></i> 24/7 customer
            support
          </li>
          <li>
            <i class="bi text-blue-500 bi-check-circle-fill"></i> Modern UI/UX
            experience
          </li>
        </ul>
      </div>
    </section>
    
    <!-- CTA -->
    <section class="text-center py-16">
      <h2
        :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
        class="text-3xl font-bold"
      >
        Ready to explore fashion?
      </h2>
      <p
        :class="mode.darkMode ? 'text-slate-300' : 'text-gray-500'"
        class="mt-3"
      >
        Discover premium products made for your lifestyle.
      </p>
      <router-link
        :class="mode.darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-black'"
        to="/shop"
        class="inline-block mt-6 text-white px-8 py-3 rounded-xl font-semibold shadow-md transition"
      >
        Go to Shop
      </router-link>
    </section>
  </div>

  <!-- WHY CHOOSE US -->
  <section class="max-w-6xl mx-auto px-5 py-16">
    <div class="text-center mb-12">
      <h2
        :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
        class="text-3xl font-bold"
      >
        Why Choose Us
      </h2>

      <p
        :class="mode.darkMode ? 'text-slate-300' : 'text-gray-500'"
        class="mt-3 max-w-2xl mx-auto"
      >
        We focus on quality, modern fashion, and customer satisfaction.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- ITEM -->
      <div
        :class="
          mode.darkMode
            ? 'bg-[#1e293b] border-slate-700 text-white'
            : 'bg-white border-gray-200 text-gray-800'
        "
        class="p-6 rounded-2xl border shadow-md hover:-translate-y-2 transition-all duration-300"
      >
        <div class="text-4xl text-blue-500">
          <i class="bi bi-truck"></i>
        </div>

        <h3 class="font-bold text-xl mt-4">Fast Delivery</h3>

        <p class="mt-3 opacity-80 text-sm leading-relaxed">
          Quick and reliable shipping directly to your location.
        </p>
      </div>

      <!-- ITEM -->
      <div
        :class="
          mode.darkMode
            ? 'bg-[#1e293b] border-slate-700 text-white'
            : 'bg-white border-gray-200 text-gray-800'
        "
        class="p-6 rounded-2xl border shadow-md hover:-translate-y-2 transition-all duration-300"
      >
        <div class="text-4xl text-purple-500">
          <i class="bi bi-shield-check"></i>
        </div>

        <h3 class="font-bold text-xl mt-4">Secure Payment</h3>

        <p class="mt-3 opacity-80 text-sm leading-relaxed">
          Your payment information is always protected and encrypted.
        </p>
      </div>

      <!-- ITEM -->
      <div
        :class="
          mode.darkMode
            ? 'bg-[#1e293b] border-slate-700 text-white'
            : 'bg-white border-gray-200 text-gray-800'
        "
        class="p-6 rounded-2xl border shadow-md hover:-translate-y-2 transition-all duration-300"
      >
        <div class="text-4xl text-pink-500">
          <i class="bi bi-stars"></i>
        </div>

        <h3 class="font-bold text-xl mt-4">Premium Quality</h3>

        <p class="mt-3 opacity-80 text-sm leading-relaxed">
          Carefully selected products with elegant and modern style.
        </p>
      </div>

      <!-- ITEM -->
      <div
        :class="
          mode.darkMode
            ? 'bg-[#1e293b] border-slate-700 text-white'
            : 'bg-white border-gray-200 text-gray-800'
        "
        class="p-6 rounded-2xl border shadow-md hover:-translate-y-2 transition-all duration-300"
      >
        <div class="text-4xl text-green-500">
          <i class="bi bi-headset"></i>
        </div>

        <h3 class="font-bold text-xl mt-4">Customer Support</h3>

        <p class="mt-3 opacity-80 text-sm leading-relaxed">
          Friendly support team available anytime you need help.
        </p>
      </div>
    </div>
  </section>

  <!-- CUSTOMER REVIEWS -->
  <section :class="mode.darkMode ? 'bg-[#111827]' : 'bg-gray-50'" class="py-16">
    <div class="max-w-6xl mx-auto px-5">
      <div class="text-center mb-12">
        <h2
          :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
          class="text-3xl font-bold"
        >
          Customer Reviews
        </h2>

        <p
          :class="mode.darkMode ? 'text-slate-300' : 'text-gray-500'"
          class="mt-3"
        >
          What our customers say about ELYSIA.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- REVIEW -->
        <div
          :class="
            mode.darkMode ? 'bg-[#1e293b] text-white' : 'bg-white text-gray-800'
          "
          class="p-6 rounded-2xl shadow-lg"
        >
          <div class="text-yellow-400 text-xl">★★★★★</div>

          <p class="mt-4 leading-relaxed opacity-80">
            Amazing quality and super fast delivery. The UI experience is also
            very smooth.
          </p>

          <h4 class="mt-5 font-bold">Sophia</h4>
        </div>

        <!-- REVIEW -->
        <div
          :class="
            mode.darkMode ? 'bg-[#1e293b] text-white' : 'bg-white text-gray-800'
          "
          class="p-6 rounded-2xl shadow-lg"
        >
          <div class="text-yellow-400 text-xl">★★★★★</div>

          <p class="mt-4 leading-relaxed opacity-80">
            One of the best fashion stores I’ve used online. Clean design and
            premium products.
          </p>

          <h4 class="mt-5 font-bold">Daniel</h4>
        </div>

        <!-- REVIEW -->
        <div
          :class="
            mode.darkMode ? 'bg-[#1e293b] text-white' : 'bg-white text-gray-800'
          "
          class="p-6 rounded-2xl shadow-lg"
        >
          <div class="text-yellow-400 text-xl">★★★★★</div>

          <p class="mt-4 leading-relaxed opacity-80">
            Beautiful interface and easy checkout process. Highly recommended.
          </p>

          <h4 class="mt-5 font-bold">Emma</h4>
        </div>
      </div>
    </div>
  </section>

  <!-- NEWSLETTER -->
  <section class="max-w-4xl mx-auto px-5 py-16 text-center">
    <h2
      :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
      class="text-3xl font-bold"
    >
      Subscribe to Our Newsletter
    </h2>

    <p :class="mode.darkMode ? 'text-slate-300' : 'text-gray-500'" class="mt-4">
      Get updates about new arrivals, offers, and fashion trends.
    </p>

    <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
      <input
        type="email"
        placeholder="Enter your email"
        :class="
          mode.darkMode
            ? 'bg-[#1e293b] border-slate-700 text-white placeholder:text-slate-400'
            : 'bg-white border-gray-300 text-gray-800'
        "
        class="px-5 py-3 rounded-xl border outline-none w-full sm:w-87.5"
      />

      <button
        :class="
          mode.darkMode
            ? 'bg-blue-500 hover:bg-blue-600'
            : 'bg-black hover:bg-gray-800'
        "
        class="text-white px-6 py-3 rounded-xl font-semibold transition"
      >
        Subscribe
      </button>
    </div>
  </section>
</template>

<style scoped></style>