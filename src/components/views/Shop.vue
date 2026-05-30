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
    :class="mode.darkMode ? 'bg-[#030712]' : 'bg-[#fafafa]'"
    class="home-page min-h-screen transition-colors duration-500 pb-24"
  >
    <div class="max-w-7xl mx-auto lg:px-6 px-4">
      
      <!-- 1. Header Section (Editorial Typography) -->
      <div class="py-16 lg:py-24 space-y-4 max-w-3xl mx-auto text-center">
        <span class="text-xs font-bold tracking-[0.3em] text-indigo-500 uppercase">Elysia Catalog</span>
        <h1
          :class="mode.darkMode ? 'text-white' : 'text-slate-900'"
          class="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight"
        >
          Shop All Technology
        </h1>
        <p
          :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'"
          class="text-sm lg:text-base font-light leading-relaxed"
        >
          Refined sound and precision engineering. Discover the latest minimalist tech essentials designed to seamlessly elevate the modern professional's workflow.
        </p>
      </div>

      <!-- 2. Advanced Search Bar Section -->
      <div class="flex justify-center mb-12 lg:mb-16">
        <div class="relative w-full md:w-[80%] lg:w-[60%] group">
          <!-- Search Icon Indicator -->
          <i
            :class="
              mode.darkMode
                ? 'text-slate-500 group-focus-within:text-indigo-400'
                : 'text-slate-400 group-focus-within:text-slate-900'
            "
            class="bi bi-search absolute left-5 top-1/2 -translate-y-1/2 text-base transition-colors duration-300"
          ></i>

          <!-- Premium Input field -->
          <input
            v-model="search"
            type="search"
            placeholder="Search for premium products..."
            :class="
              mode.darkMode
                ? 'bg-[#090d16] border-slate-900 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:ring-indigo-500/10'
                : 'bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:ring-slate-950/5'
            "
            class="w-full py-4 pl-14 pr-6 rounded-2xl border outline-none shadow-xl text-sm lg:text-base font-medium transition-all duration-300 focus:ring-4"
          />
        </div>
      </div>

      <!-- 3. Curated Categories Filter (Smooth Scrollable Row) -->
      <div class="mb-12 border-b pb-4" :class="mode.darkMode ? 'border-slate-900' : 'border-slate-100'">
        <div class="flex items-center gap-2.5 overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar pb-2">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
            :class="
              selectedCategory === cat
                ? mode.darkMode
                  ? 'bg-white text-slate-950 shadow-lg shadow-white/5 font-bold'
                  : 'bg-slate-900 text-white shadow-lg shadow-slate-950/10 font-bold'
                : mode.darkMode
                ? 'bg-slate-950 text-slate-400 border border-slate-900 hover:text-white hover:bg-slate-900'
                : 'bg-white text-slate-500 border border-slate-200 hover:text-slate-900 hover:bg-slate-50'
            "
            class="shrink-0 cursor-pointer px-5 py-2.5 rounded-xl transition-all duration-300 text-xs tracking-wider uppercase active:scale-95"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- 4. Skeleton Loading State -->
      <div
        v-if="productStore.isLoading"
        class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
      >
        <div
          v-for="n in 8"
          :key="n"
          :class="mode.darkMode ? 'bg-[#090d16] border-slate-900/60' : 'bg-white border-slate-100'"
          class="rounded-2xl border p-4 space-y-4 animate-pulse"
        >
          <div :class="mode.darkMode ? 'bg-slate-950' : 'bg-slate-100'" class="h-44 lg:h-64 rounded-xl"></div>
          <div class="space-y-2">
            <div :class="mode.darkMode ? 'bg-slate-950' : 'bg-slate-100'" class="h-4 w-3/4 rounded"></div>
            <div :class="mode.darkMode ? 'bg-slate-950' : 'bg-slate-100'" class="h-3 w-full rounded"></div>
            <div :class="mode.darkMode ? 'bg-slate-950' : 'bg-slate-100'" class="h-5 w-1/4 rounded"></div>
          </div>
          <div :class="mode.darkMode ? 'bg-slate-950' : 'bg-slate-100'" class="h-11 rounded-xl w-full"></div>
        </div>
      </div>

      <!-- 5. Dynamic Products Grid -->
      <div
        v-else-if="filteredProducts.length > 0"
        class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
      >
        <!-- Luxury Product Card Card -->
        <div
          v-for="item in filteredProducts"
          :key="item.id"
          :class="mode.darkMode ? 'bg-[#090d16] border-slate-900/60 shadow-black/40' : 'bg-white border-slate-100 shadow-slate-200/50'"
          class="rounded-2xl border p-3 lg:p-4 flex flex-col justify-between group/card transition-all duration-500 hover:-translate-y-1.5 shadow-lg hover:shadow-2xl"
        >
          <!-- Image Box -->
          <div :class="mode.darkMode ? 'bg-slate-950' : 'bg-[#fafafa]'" class="relative rounded-xl overflow-hidden p-6 h-44 lg:h-64 flex items-center justify-center transition-colors duration-500">
            <img
              :src="item.image"
              :alt="item.title"
              class="max-w-full max-h-full object-contain mix-blend-multiply dark:mix-blend-normal transform scale-95 group-hover/card:scale-100 transition-transform duration-500"
            />
          </div>

          <!-- Content Info Block -->
          <div class="pt-4 flex flex-col flex-grow justify-between">
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

            <!-- Interactive Action Button -->
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
      </div>

      <!-- 6. Premium Empty Search State -->
      <div v-else class="flex flex-col justify-center items-center py-24 text-center space-y-4 animate-fade-in">
        <!-- Minimal Graphic Ring -->
        <div
          :class="mode.darkMode ? 'bg-slate-950 border-slate-900 text-slate-600' : 'bg-slate-100 border-slate-200 text-slate-400'"
          class="w-20 h-20 rounded-full border flex items-center justify-center shadow-inner"
        >
          <i class="bi bi-search text-2xl"></i>
        </div>

        <div class="space-y-1">
          <h2 :class="mode.darkMode ? 'text-white' : 'text-slate-900'" class="text-xl font-black tracking-tight">
            No Products Found
          </h2>
          <p :class="mode.darkMode ? 'text-slate-500' : 'text-slate-400'" class="text-sm font-light max-w-sm">
            We couldn't find any results matching <span class="font-semibold text-indigo-500">"{{ search }}"</span>. Try checking your spelling or adjusting your filters.
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Hiding standard scrollbar for category filter while retaining functional scrolling mechanics */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>