<script setup>
import { onMounted, computed, ref } from "vue";
import { useProductStore } from "../../stores/productStore";
import { useDarkModeStore } from "../../stores/darkMode";

const productStore = useProductStore();
const mode = useDarkModeStore();

const search = ref("");
const selectedCategory = ref("all");

onMounted(async () => {
  if (!productStore.products.length) {
    await productStore.getAllProducts();
  }
});

const categories = computed(() => {
  const cats = productStore.products.map((p) => p.category);
  return ["all", ...new Set(cats)];
});

const filteredProducts = computed(() => {
  let result = productStore.products;

  // category filter
  if (selectedCategory.value !== "all") {
    result = result.filter((p) => p.category === selectedCategory.value);
  }

  // search filter
  const keyword = search.value.trim().toLowerCase();
  if (keyword) {
    result = result.filter((item) => {
      return (
        item.title.toLowerCase().includes(keyword) ||
        item.description.toLowerCase().includes(keyword)
      );
    });
  }

  return result;
});
</script>

<template>
  <div
    :class="mode.darkMode ? 'bg-[#0f172a]' : 'bg-[#f8fafc]'"
    class="home-page min-h-screen"
  >
    <div class="container mx-auto lg:px-0 px-3 pb-16">
      <!-- Header -->
      <div class="py-12 lg:py-16">
        <h1
          :class="mode.darkMode ? 'text-white' : 'text-gray-900'"
          class="text-center lg:text-5xl md:text-4xl text-3xl font-extrabold mb-4"
        >
          Shop All Technology
        </h1>

        <p
          :class="mode.darkMode ? 'text-slate-300' : 'text-gray-500'"
          class="text-center lg:text-lg md:text-base text-sm leading-7 lg:w-[60%] w-full mx-auto"
        >
          Refined sound and precision engineering. Discover the latest
          minimalist tech essentials designed for the modern professional.
        </p>
      </div>

      <!-- Search -->
      <div class="flex justify-center lg:mb-16 mb-10">
        <div class="relative lg:w-[50%] md:w-[70%] w-full group">
          <!-- Icon -->
          <i
            :class="
              mode.darkMode
                ? 'text-slate-300 group-focus-within:text-blue-300'
                : 'text-gray-400 group-focus-within:text-black'
            "
            class="bi bi-search absolute left-5 top-1/2 -translate-y-1/2 text-lg transition-all duration-300"
          ></i>

          <!-- Input -->
          <input
            v-model="search"
            type="search"
            placeholder="Search products..."
            :class="
              mode.darkMode
                ? 'bg-[#1e293b] border-[#334155] text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20'
                : 'bg-white border-gray-200 text-black placeholder:text-gray-400 focus:border-gray-300 focus:ring-black/0'
            "
            class="w-full py-4 pl-14 pr-5 rounded-2xl border outline-none shadow-lg text-[16px] lg:text-lg transition-all duration-300 focus:ring-4"
          />
        </div>
      </div>

      <!-- CATEGORY -->
      <div class="mb-10">
        <div
          class="flex gap-3 overflow-x-auto whitespace-nowrap scroll-smooth px-1 pb-2"
        >
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
            class="shrink-0 cursor-pointer px-4 py-2 rounded-full transition-all duration-300 text-sm sm:text-base"
            :class="
              selectedCategory === cat
                ? mode.darkMode
                  ? 'bg-white text-[#0f172a] shadow-lg'
                  : 'bg-black text-white shadow-lg'
                : mode.darkMode
                ? 'bg-[#1e293b] text-white hover:bg-[#334155]'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            "
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Loading -->
      <div
        v-if="productStore.isLoading"
        class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        <!-- Skeleton Card -->
        <div
          v-for="n in 12"
          :key="n"
          :class="
            mode.darkMode
              ? 'bg-[#1e293b] border border-[#334155]'
              : 'bg-white border border-gray-200'
          "
          class="rounded-2xl overflow-hidden shadow-xl animate-pulse"
        >
          <!-- Image -->
          <div
            :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-200'"
            class="h-44 lg:h-72"
          ></div>

          <!-- Body -->
          <div class="p-3 lg:p-5">
            <!-- Title -->
            <div
              :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-200'"
              class="w-[80%] h-4 lg:h-5 rounded mb-3"
            ></div>

            <!-- Description -->
            <div
              :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-200'"
              class="w-full h-3 rounded mb-2"
            ></div>

            <div
              :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-200'"
              class="w-[70%] h-3 rounded mb-4"
            ></div>

            <!-- Price -->
            <div
              :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-200'"
              class="w-[35%] h-5 lg:h-7 rounded mb-5"
            ></div>

            <!-- Button -->
            <div
              :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-200'"
              class="w-full h-10 lg:h-12 rounded-xl"
            ></div>
          </div>
        </div>
      </div>

      <!-- Products -->
      <div
        v-else-if="filteredProducts.length > 0"
        class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        <!-- Card -->
        <div
          v-for="item in filteredProducts"
          :key="item.id"
          :class="
            mode.darkMode
              ? 'bg-[#1e293b] border border-[#334155]'
              : 'bg-white border border-gray-200'
          "
          class="rounded-2xl overflow-hidden shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
        >
          <!-- Image -->
          <div class="overflow-hidden lg:p-5 p-3 h-44 lg:h-72">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-contain hover:scale-105 transition-all duration-500"
            />
          </div>

          <!-- Body -->
          <div class="p-3 lg:p-5 flex flex-col justify-between">
            <div>
              <!-- Title -->
              <h1
                :class="mode.darkMode ? 'text-white' : 'text-gray-900'"
                class="lg:text-lg text-sm font-semibold mb-2 line-clamp-1"
              >
                {{ item.title }}
              </h1>

              <!-- Description -->
              <p
                :class="mode.darkMode ? 'text-slate-400' : 'text-gray-500'"
                class="lg:text-sm text-[11px] mb-3 line-clamp-2"
              >
                {{ item.description }}
              </p>

              <!-- Price -->
              <p class="text-red-500 font-bold lg:text-2xl text-base mb-4">
                ${{ item.price }}
              </p>
            </div>

            <!-- Button -->
            <router-link
              :to="`/productdetails/${item.id}`"
              :class="
                mode.darkMode
                  ? 'bg-blue-500 hover:bg-blue-600'
                  : 'bg-black hover:bg-gray-800'
              "
              class="block w-full text-center text-white lg:py-3 py-2 rounded-xl lg:text-base text-[11px] font-medium transition-all duration-300"
            >
              View Details <i class="bi bi-eye"></i>
            </router-link>
          </div>
        </div>
      </div>

      <!-- No Products -->
      <div v-else class="flex flex-col justify-center items-center py-24">
        <!-- Icon -->
        <div
          :class="
            mode.darkMode
              ? 'bg-[#1e293b] text-slate-300'
              : 'bg-gray-100 text-gray-500'
          "
          class="w-24 h-24 rounded-full flex items-center justify-center mb-6"
        >
          <i class="bi bi-search text-4xl"></i>
        </div>

        <!-- Title -->
        <h1
          :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
          class="text-2xl lg:text-4xl font-bold mb-3"
        >
          No Products Found
        </h1>

        <!-- Description -->
        <p
          :class="mode.darkMode ? 'text-slate-400' : 'text-gray-500'"
          class="text-center text-sm lg:text-base"
        >
          No results found for
          <span class="font-semibold">"{{ search }}"</span>
        </p>
      </div>
    </div>
  </div>
</template>