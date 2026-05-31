<template>
  <div class="home-page max-w-7xl mx-auto lg:px-6 px-4 py-6 transition-colors duration-500">
    
    <!-- 1. Hero Banner Section (Editorial Style) -->
    <section class="banner relative w-full lg:h-[85vh] h-100 lg:rounded-3xl rounded-2xl overflow-hidden shadow-2xl group/banner">
      <!-- Background Image with Parallax & Smooth Scale -->
      <div 
        class="absolute inset-0 bg-[url('/src/assets/images/image-banner.png')] bg-cover bg-center bg-no-repeat transform scale-100 group-hover/banner:scale-102 transition-transform duration-1000"
      ></div>
      <!-- Premium Dual-Layer Overlay -->
      <div class="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent"></div>
      <div class="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>

      <!-- Banner Content -->
      <div class="absolute top-1/2 -translate-y-1/2 lg:left-20 left-6 right-6 z-10 max-w-2xl space-y-6">
        <!-- Floating Glassmorphism Badge -->
        <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold tracking-[0.2em] uppercase px-4 py-1.5 text-[10px] lg:text-xs rounded-full shadow-lg animate-fade-in">
          <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
          AW24 COLLECTION
        </div>

        <!-- Typography Heading -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
          The Future of <br />
          <span class="bg-clip-text text-transparent bg-linear-to-r from-white via-slate-200 to-slate-400">Style & Tech</span>
        </h1>

        <!-- Call to Action Buttons -->
        <div class="flex flex-wrap items-center gap-4 pt-4">
          <router-link
            to="/shop"
            class="py-3.5 lg:py-4 px-8 bg-white text-black rounded-xl font-bold text-xs lg:text-sm tracking-wider uppercase shadow-xl hover:bg-slate-100 hover:-translate-y-0.5 transition-all duration-300 active:scale-98"
          >
            Shop New Arrivals
          </router-link>

          <router-link
            to="/exploretech"
            class="py-3.5 lg:py-4 px-8 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-bold text-xs lg:text-sm tracking-wider uppercase hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300 active:scale-98"
          >
            Explore Tech
          </router-link>
        </div>
      </div>
    </section>

    <!-- 2. Curated Categories Section -->
    <section class="lg:mt-32 mt-20">

      <!-- Section Header -->
      <div v-if="productStore.isLoading" class="flex justify-between items-center mb-8 animate-pulse">
        <div :class="mode.darkMode ? 'bg-slate-800' : 'bg-slate-200'" class="h-8 w-56 rounded-xl"></div>
        <div :class="mode.darkMode ? 'bg-slate-800' : 'bg-slate-200'" class="h-6 w-24 rounded-xl"></div>
      </div>

      <div v-else class="flex justify-between items-end mb-8 border-b pb-4" :class="mode.darkMode ? 'border-slate-900' : 'border-slate-100'">
        <div>
          <span class="text-xs font-bold tracking-[0.25em] text-indigo-500 uppercase">Elysia Select</span>
          <h2 class="text-2xl lg:text-3xl font-black tracking-tight mt-1" :class="mode.darkMode ? 'text-white' : 'text-slate-900'">
            Curated Categories
          </h2>
        </div>

        <router-link
          to="/shop"
          :class="mode.darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-black'"
          class="text-xs lg:text-sm font-bold tracking-wider uppercase flex items-center gap-2 transition-colors duration-300 group"
        >
          <span>View All</span>
          <i class="bi bi-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
        </router-link>
      </div>


      <!-- Products Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">

        <!-- Skeleton Loading -->
        <template v-if="productStore.isLoading">
          <div
            v-for="n in 4"
            :key="n"
            :class="mode.darkMode ? 'bg-[#0b0f19] border-slate-900' : 'bg-white border-slate-100'"
            class="rounded-2xl border p-4 space-y-4 animate-pulse"
          >
            <div :class="mode.darkMode ? 'bg-slate-800' : 'bg-slate-200'" class="h-48 lg:h-64 rounded-xl"></div>
            <div class="space-y-2">
              <div :class="mode.darkMode ? 'bg-slate-800' : 'bg-slate-200'" class="h-4 w-3/4 rounded-md"></div>
              <div :class="mode.darkMode ? 'bg-slate-800' : 'bg-slate-200'" class="h-3 w-full rounded-md"></div>
              <div :class="mode.darkMode ? 'bg-slate-800' : 'bg-slate-200'" class="h-5 w-1/3 rounded-md"></div>
            </div>
            <div :class="mode.darkMode ? 'bg-slate-800' : 'bg-slate-200'" class="h-11 rounded-xl w-full"></div>
          </div>
        </template>

        <!-- Premium Product Card -->
        <template v-else>
          <div
            v-for="item in productStore.products.slice(0, 4)"
            :key="item.id"
            :class="mode.darkMode ? 'bg-[#090d16] border-slate-900/60 shadow-black/40' : 'bg-white border-slate-100 shadow-slate-200/50'"
            class="rounded-2xl border p-3 lg:p-4 flex flex-col justify-between group/card transition-all duration-500 hover:-translate-y-1.5 shadow-lg hover:shadow-2xl"
          >
            <!-- Product Image Container -->
            <div :class="mode.darkMode ? 'bg-slate-950' : 'bg-[#fafafa]'" class="relative rounded-xl overflow-hidden p-6 h-48 lg:h-64 flex items-center justify-center transition-colors duration-500">
              <img
                :src="item.image"
                :alt="item.title"
                class="max-w-full max-h-full object-contain  transform scale-95 group-hover/card:scale-100 transition-transform duration-500"
              />
              <!-- Quick Badge (Optional Tech Tag) -->
              <span :class="mode.darkMode ? 'bg-black/5 dark:bg-white/5 text-indigo-500' : ''" class="absolute top-3 left-3 px-2 py-0.5 rounded  backdrop-blur-md text-[9px] font-bold uppercase tracking-wider opacity-60">
                Premium
              </span>
            </div>

            <!-- Product Details Details -->
            <div class="pt-4 flex flex-col grow justify-between">
              <div class="mb-4">
                <h3 :class="mode.darkMode ? 'text-slate-100' : 'text-slate-900'" class="text-sm lg:text-base font-bold tracking-tight line-clamp-1 group-hover/card:text-indigo-500 transition-colors duration-300">
                  {{ item.title }}
                </h3>
                <p :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'" class="text-xs mt-1.5 line-clamp-2 font-light leading-relaxed">
                  {{ item.description }}
                </p>
                <p :class="mode.darkMode ? 'text-white' : 'text-slate-900'" class="text-lg lg:text-xl font-black tracking-tight mt-3">
                  ${{ item.price }}
                </p>
              </div>

              <!-- Action Button -->
              <router-link
                :to="`/productdetails/${item.id}`"
                :class="mode.darkMode ? 'bg-slate-900 text-white hover:bg-indigo-600' : 'bg-slate-900 text-white hover:bg-black'"
                class="w-full py-3 rounded-xl font-bold text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 shadow-sm transition-all duration-300 active:scale-98"
              >
                <span>View Details</span>
                <i class="bi bi-arrow-up-right text-xs"></i>
              </router-link>
            </div>
          </div>
        </template>
      </div>
    </section>


    <!-- 3. Flash Sale Section (Luxury Dark Card) -->
    <section
      :class="mode.darkMode ? 'bg-linear-to-br from-[#090d16] to-[#04070e] border border-slate-900' : 'bg-linear-to-br from-slate-950 to-slate-900'"
      class="mt-24 rounded-3xl overflow-hidden shadow-2xl relative"
    >
      <!-- Decorative Ambient Light -->
      <div class="absolute -right-24 -bottom-24 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div class="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 lg:px-16 py-12 lg:py-16 relative z-10">
        <!-- Event Info & Countdown -->
        <div class="text-center lg:text-left space-y-6 lg:max-w-xl">
          <div class="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 font-bold tracking-widest text-[10px] uppercase px-3 py-1 rounded-full">
            <span class="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            Limited Time Offer
          </div>
          
          <h2 class="text-3xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Flash Sale Event
          </h2>

          <p class="text-slate-400 text-sm lg:text-base font-light leading-relaxed">
            Experience the pinnacle of audio luxury. Get an exclusive 20% discount on premium tech accessories and smart audio wearables.
          </p>

          <!-- Luxury Minimalist Timer Grid -->
          <div class="flex justify-center lg:justify-start gap-4 pt-2">
            <div v-for="(val, unit) in { hours: hours, mins: minutes, secs: seconds }" :key="unit" 
                 class="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center shadow-inner">
              <span class="text-white font-black text-2xl tracking-tight">{{ val }}</span>
              <span class="text-slate-500 text-[9px] font-bold tracking-widest uppercase mt-1">{{ unit }}</span>
            </div>
          </div>
        </div>

        <!-- Event Image Showcase -->
        <div class="w-full lg:w-120 h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl group/sale relative border border-white/5">
          <img
            src="/src/assets/images/headphone2.jpg"
            alt="Flash Sale Product Showcase"
            class="w-full h-full object-cover transform scale-100 group-hover/sale:scale-105 transition-transform duration-700"
          />
          <div class="absolute inset-0 bg-black/5 group-hover/sale:bg-transparent transition-colors duration-300"></div>
        </div>
      </div>
    </section>


    <!-- 4. Newsletter / Subscription Section (Minimalist Elegance) -->
    <section
      :class="mode.darkMode ? 'bg-[#060a12] border border-slate-900' : 'bg-[#f4f4f5]'"
      class="mt-24 mb-16 rounded-3xl p-4 lg:p-8"
    >
      <div
        :class="mode.darkMode ? 'bg-slate-950/40' : 'bg-white'"
        class="rounded-2xl py-16 lg:py-20 px-6 lg:px-16 shadow-xl relative overflow-hidden"
      >
        <div class="max-w-2xl mx-auto text-center space-y-4 relative z-10">
          <span class="text-xs font-bold tracking-[0.3em] text-indigo-500 uppercase">The Community</span>
          <h2 class="text-3xl lg:text-4xl font-black tracking-tight" :class="mode.darkMode ? 'text-white' : 'text-slate-900'">
            Join the Elysia Circle
          </h2>

          <p :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'" class="text-sm lg:text-base font-light max-w-lg mx-auto leading-relaxed">
            Subscribe to unlock private access to upcoming collections, experiential tech drops, and members-only pricing.
          </p>

          <!-- Input Fields & Button Form -->
          <form
            @submit.prevent="handleSubscribe"
            class="flex flex-col sm:flex-row justify-center gap-3 pt-6 max-w-md mx-auto"
          >
            <input
              v-model="email"
              type="email"
              required
              placeholder="Enter your email address"
              :class="
                mode.darkMode
                  ? 'bg-slate-900 border-slate-800 text-white placeholder:text-slate-600 focus:border-indigo-500'
                  : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-slate-400'
              "
              class="w-full py-3.5 px-5 rounded-xl outline-none border font-medium text-[16px] transition-all duration-300"
            />

            <button
              type="submit"
              :class="mode.darkMode ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-slate-900 hover:bg-black'"
              class="text-white px-8 py-3.5 cursor-pointer rounded-xl text-xs font-bold tracking-wider uppercase shadow-lg transition-all duration-300 active:scale-97 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          <p :class="mode.darkMode ? 'text-slate-600' : 'text-slate-400'" class="text-[11px] tracking-wide pt-4">
            By subscribing, you consent to our privacy guidelines. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useProductStore } from "../../stores/productStore";
import { useDarkModeStore } from "../../stores/darkMode";

const productStore = useProductStore();
const mode = useDarkModeStore();

const email = ref("");


const hours = ref("00");
const minutes = ref("00");
const seconds = ref("00");

let interval = null;

// Target Time
const targetTime = new Date().getTime() + 5 * 60 * 60 * 1000;

// Update Timer
const updateTimer = () => {
  const now = new Date().getTime();
  const distance = targetTime - now;

  if (distance <= 0) {
    clearInterval(interval);

    hours.value = "00";
    minutes.value = "00";
    seconds.value = "00";

    return;
  }

  hours.value = String(
    Math.floor((distance / (1000 * 60 * 60)) % 24)
  ).padStart(2, "0");

  minutes.value = String(
    Math.floor((distance / (1000 * 60)) % 60)
  ).padStart(2, "0");

  seconds.value = String(
    Math.floor((distance / 1000) % 60)
  ).padStart(2, "0");
};



const handleSubscribe = () => {
  alert(`Subscribed with: ${email.value}`);
  email.value = "";
};


onMounted(async () => {
  updateTimer();

  interval = setInterval(updateTimer, 1000);

  if (!productStore.products.length) {
    await productStore.getAllProducts();
  }
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>