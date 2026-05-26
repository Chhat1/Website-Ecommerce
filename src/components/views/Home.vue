<template>
  <div class="home-page container mx-auto lg:px-0 lg:py-0 px-5 py-5">
    <!-- Banner -->
    <section
      class="banner relative w-full lg:h-screen h-56 bg-[url('/src/assets/images/image-banner.png')] bg-cover bg-center bg-no-repeat lg:rounded-none rounded-2xl overflow-hidden shadow"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/10"></div>

      <!-- Content -->
      <div
        class="absolute top-1/2 -translate-y-1/2 lg:left-30 left-4 z-10"
      >
        <!-- Badge -->
        <p
          class="inline-flex items-center bg-white/10 backdrop-blur-xl border border-white/20 text-white font-medium lg:px-5 px-3 py-1 lg:text-sm text-[9px] rounded-full shadow-2xl"
        >
          AW24 COLLECTION
        </p>

        <!-- Title -->
        <h1
          class="lg:text-6xl md:text-5xl text-2xl font-bold tracking-tight lg:text-black text-white lg:mt-5 mt-3 leading-tight"
        >
          The Future of <br />
          Style & Tech
        </h1>

        <!-- Buttons -->
        <div class="flex items-center gap-3 lg:gap-5 mt-5 lg:mt-10">
          <router-link
            to="/shop"
            class="lg:py-5 py-2.5 lg:px-16 px-5 lg:text-base text-[11px] bg-black text-white rounded-lg font-medium shadow-sm shadow-white/20 hover:scale-105 transition-all duration-300 "
          >
            Shop New Arrivals
          </router-link>

          <router-link
            to="/exploretech"
            class="lg:py-5 py-2.5 hover:scale-105 lg:px-16 px-5 lg:text-base text-[11px] bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-lg font-medium hover:bg-white/20 transition-all duration-300"
          >
            Explore Tech
          </router-link>
        </div>
      </div>
    </section>

    <!-- Curated Categories -->
    <section class="lg:mt-30 mt-16">
      <!-- Header -->
      <div
        v-if="productStore.isLoading"
        class="flex justify-between items-center mb-5 animate-pulse"
      >
        <div
          :class="
            mode.darkMode
              ? 'bg-[#1e293b] border border-[#334155]'
              : 'bg-gray-300'
          "
          class="h-5 lg:h-7 w-40 lg:w-56 rounded-md"
        ></div>

        <div
          :class="
            mode.darkMode
              ? 'bg-[#1e293b] border border-[#334155]'
              : 'bg-gray-300'
          "
          class="h-5 lg:h-7 w-20 rounded-md"
        ></div>
      </div>

      <div v-else class="flex justify-between items-center mb-6">
        <h1 class="lg:text-3xl text-lg font-bold">
          Curated Categories
        </h1>

        <router-link
          to="/shop"
          :class="mode.darkMode ? 'hover:text-blue-500 text-white' : 'text-gray-500 hover:text-black'"
          class="lg:text-lg text-sm ease-in-out font-medium transition-all"
        >
          View All <i class="bi bi-arrow-right"></i>
        </router-link>
      </div>

      <!-- Products -->
      <div
        class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        <!-- Skeleton loading-->
        <template v-if="productStore.isLoading">
          <div
            v-for="n in 4"
            :key="n"
            :class="
              mode.darkMode
                ? 'bg-[#1e293b] border border-[#334155]'
                : 'bg-white border border-gray-200'
            "
            class="rounded-2xl overflow-hidden shadow-xl animate-pulse"
          >
            <div
              :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-300'"
              class="h-48 lg:h-72"
            ></div>

            <div class="p-3 lg:p-5">
              <div
                :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-300'"
                class="h-4 rounded w-[80%] mb-3"
              ></div>

              <div
                :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-300'"
                class="h-3 rounded w-full mb-2"
              ></div>

              <div
                :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-300'"
                class="h-3 rounded w-[70%] mb-4"
              ></div>

              <div
                :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-300'"
                class="h-5 rounded w-[35%] mb-5"
              ></div>

              <div
                :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-300'"
                class="h-10 rounded-lg"
              ></div>
            </div>
          </div>
        </template>

        <!-- Product Card -->
        <template v-else >
          <div
            v-for="item in productStore.products.slice(0, 4)"
            :key="item.id"
            :class="
              mode.darkMode
                ? 'bg-[#1e293b] border border-[#334155]'
                : 'bg-white border border-gray-200'
            "
            class="rounded-2xl overflow-hidden shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
          >
            <!-- Image -->
            <div class="overflow-hidden lg:p-5 p-5 h-44 lg:h-72">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-contain hover:scale-105 transition-all dur p-5ation-300"
              />
            </div>

            <!-- Body -->
            <div class="p-3 lg:p-5 flex flex-col justify-between">
              <div>
                <h1
                  class="lg:text-lg text-sm font-semibold mb-2 line-clamp-1"
                >
                  {{ item.title }}
                </h1>

                <p
                  class="text-gray-500 lg:text-sm text-[11px] mb-3 line-clamp-2"
                >
                  {{ item.description }}
                </p>

                <p class="text-red-600 font-bold lg:text-2xl text-base mb-4">
                  ${{ item.price }}
                </p>
              </div>

              <router-link
                :to="`/productdetails/${item.id}`"
                :class="mode.darkMode ? 'bg-blue-500' : 'bg-black'"
                class="w-full text-center text-white lg:py-3 py-2 rounded-lg lg:text-base text-[11px] hover:bg-blue-600 transition-all duration-300"
              >
                View Details <i class="bi bi-eye"></i>
              </router-link>
            </div>
          </div>
        </template>
      </div>
    </section>

    <!-- Flash Sale -->
    <section
      :class="mode.darkMode ? 'bg-blue-950/40' : 'bg-black'"
      class="mt-16 rounded-3xl overflow-hidden shadow-2xl"
    >
      <div
        class="flex flex-col lg:flex-row items-center justify-between gap-10 px-6 lg:px-16 py-10"
      >
        <!-- Left -->
        <div class="text-center lg:text-left">
          <h1 class="text-white lg:text-5xl text-3xl font-bold mb-4">
            Flash Sale Event
          </h1>

          <p class="text-gray-300 leading-7 mb-8">
            Exclusive 20% discount on premium tech accessories.
          </p>

          <!-- Timer -->
          <div class="flex justify-center lg:justify-start gap-4">
            <!-- Hours -->
            <div
              class="w-20 h-20 rounded-2xl bg-white flex flex-col items-center justify-center"
            >
              <h1 class="text-black font-bold text-2xl">
                {{ hours }}
              </h1>

              <p class="text-gray-500 text-xs">
                HOURS
              </p>
            </div>

            <!-- Minutes -->
            <div
              class="w-20 h-20 rounded-2xl bg-white flex flex-col items-center justify-center"
            >
              <h1 class="text-black font-bold text-2xl">
                {{ minutes }}
              </h1>

              <p class="text-gray-500 text-xs">
                MINS
              </p>
            </div>

            <!-- Seconds -->
            <div
              class="w-20 h-20 rounded-2xl bg-white flex flex-col items-center justify-center"
            >
              <h1 class="text-black font-bold text-2xl">
                {{ seconds }}
              </h1>

              <p class="text-gray-500 text-xs">
                SECS
              </p>
            </div>
          </div>
        </div>

        <!-- Right -->
        <div
          class="w-full lg:w-137.5 h-60 lg:h-80 rounded-2xl overflow-hidden"
        >
          <img
            src="/src/assets/images/headphone2.jpg"
            alt="Flash Sale"
            class="w-full h-full object-cover hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>
    </section>

    <!-- Join Form -->
    <section
      :class="mode.darkMode ? 'bg-blue-950/40' : 'bg-[#F3F0EF]'"
      class="mt-20 mb-20 rounded-3xl px-4 lg:px-10 py-8 lg:py-12"
    >
      <div
        :class="
          mode.darkMode
            ? 'bg-blue-800/10 border border-blue-800/20'
            : 'bg-white'
        "
        class="rounded-3xl py-14 lg:py-20 px-6 lg:px-20 shadow-xl"
      >
        <!-- Title -->
        <h1
          class="text-center lg:text-5xl text-3xl font-bold mb-4"
        >
          Join the Elysia Circle
        </h1>

        <!-- Description -->
        <p
          class="text-center text-gray-500 leading-7 lg:text-lg text-sm"
        >
          Subscribe to receive early access to new collections and
          exclusive tech drops.
        </p>

        <!-- Form -->
        <form
          @submit.prevent="handleSubscribe"
          class="flex flex-col sm:flex-row justify-center gap-4 mt-10"
        >
          <input
            v-model="email"
            type="email"
            required
            placeholder="Email Address"
            :class="
              mode.darkMode
                ? 'bg-[#1e293b] border-[#334155] text-white placeholder:text-blue-200 focus:ring-2 focus:ring-blue-500'
                : 'bg-[#F3F0EF] border-gray-200 text-black placeholder:text-gray-500 focus:ring-2 focus:ring-gray-300'
            "
            class="w-full lg:w-100 py-4 px-6 rounded-xl  outline-none border  transition-all duration-300"
          />

          <button
            type="submit"
            :class="
              mode.darkMode
                ? 'bg-blue-500 hover:bg-blue-600'
                : 'bg-black hover:bg-gray-800'
            "
            class="text-white px-8 py-4 cursor-pointer rounded-xl font-semibold transition-all duration-300"
          >
            Subscribe
          </button>
        </form>

        <!-- Footer -->
        <p class="text-center text-gray-500 text-sm mt-5">
          By subscribing, you agree to our Privacy Policy and Terms of Service.
        </p>
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