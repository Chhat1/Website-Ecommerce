<script setup>
import { useDarkModeStore } from "../../stores/darkMode";

const mode = useDarkModeStore();
</script>

<template>
  <div
    :class="mode.darkMode ? 'bg-[#0f172a]' : 'bg-[#F3F0EF]'"
    class="min-h-screen transition-all duration-300"
  >
    <!-- HERO -->
    <section class="max-w-6xl mx-auto px-5 py-16 text-center">
      <h1
        :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
        class="text-4xl md:text-6xl font-black"
      >
        About ELYSIA
      </h1>

      <p
        :class="mode.darkMode ? 'text-slate-300' : 'text-gray-500'"
        class="mt-5 mb-10 max-w-2xl mx-auto text-lg leading-relaxed"
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

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

    <!-- Card -->
    <div
      :class="mode.darkMode
        ? 'bg-[#1e293b] border-slate-700 text-white'
        : 'bg-white border-gray-200 text-gray-800'"
      class="p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl text-center border transition-all duration-300"
    >
      <h2 class="text-2xl sm:text-3xl font-bold text-blue-500">
        10K+
      </h2>
      <p class="mt-2 text-sm sm:text-base opacity-80">
        Happy Customers
      </p>
    </div>

    <!-- Card -->
    <div
      :class="mode.darkMode
        ? 'bg-[#1e293b] border-slate-700 text-white'
        : 'bg-white border-gray-200 text-gray-800'"
      class="p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl text-center border transition-all duration-300"
    >
      <h2 class="text-2xl sm:text-3xl font-bold text-blue-500">
        500+
      </h2>
      <p class="mt-2 text-sm sm:text-base opacity-80">
        Products
      </p>
    </div>

    <!-- Card -->
    <div
      :class="mode.darkMode
        ? 'bg-[#1e293b] border-slate-700 text-white'
        : 'bg-white border-gray-200 text-gray-800'"
      class="p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl text-center border transition-all duration-300"
    >
      <h2 class="text-2xl sm:text-3xl font-bold text-blue-500">
        24/7
      </h2>
      <p class="mt-2 text-sm sm:text-base opacity-80">
        Support
      </p>
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

<!-- TEAM -->
<section class="max-w-6xl mx-auto px-5 py-16">

  <h2
    :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
    class="text-3xl font-bold text-center mb-10"
  >
    Our Team
  </h2>

  <div class="flex flex-wrap justify-center gap-6">

    <!-- Card 1 -->
    <div
      :class="mode.darkMode ? 'bg-[#1e293b] border-slate-700' : 'bg-white border-gray-200'"
      class="w-full sm:w-[48%] lg:w-[23%] shadow-lg rounded-2xl p-6 text-center border hover:-translate-y-2 transition-all duration-300"
    >
      <div class="flex justify-center">
        <div class="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-500">
          <img
            src="https://i.pravatar.cc/300?img=12"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <div class="mt-5">
        <h1 :class="mode.darkMode ? 'text-white' : 'text-gray-800'" class="text-lg font-bold">
          Phuk Richhat
        </h1>

        <p class="text-sm text-blue-500 font-medium mt-1">
          Frontend Developer
        </p>
      </div>
    </div>

    <!-- Card 2 -->
    <div
      :class="mode.darkMode ? 'bg-[#1e293b] border-slate-700' : 'bg-white border-gray-200'"
      class="w-full sm:w-[48%] lg:w-[23%] shadow-lg rounded-2xl p-6 text-center border hover:-translate-y-2 transition-all duration-300"
    >
      <div class="flex justify-center">
        <div class="w-28 h-28 rounded-full overflow-hidden border-4 border-purple-500">
          <img
            src="https://i.pravatar.cc/300?img=32"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <div class="mt-5">
        <h1 :class="mode.darkMode ? 'text-white' : 'text-gray-800'" class="text-lg font-bold">
          Phuk Richhat
        </h1>

        <p class="text-sm text-purple-500 font-medium mt-1">
          UI/UX Designer
        </p>
      </div>
    </div>

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
</template>

<style scoped></style>