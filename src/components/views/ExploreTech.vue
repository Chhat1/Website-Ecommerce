<script setup>
import { onMounted, computed, ref } from "vue";
import { useProductStore } from "../../stores/productStore";
import { useDarkModeStore } from "../../stores/darkMode";

const productStore = useProductStore();
const mode = useDarkModeStore();

const search = ref("");
const selectedCategory = ref("all")

onMounted(async () => {
  if (!productStore.products.length) {
    await productStore.getAllProducts();
  }
});


const categories = computed(() => {
  const cats = productStore.products.map(p => p.category);
  return ["all", ...new Set(cats)];
});



const filteredProducts = computed(() => {
  let result = productStore.products;

  // category filter
  if (selectedCategory.value !== "all") {
    result = result.filter(
      p => p.category === selectedCategory.value
    );
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
    class="exploreTech min-h-screen pb-20 transition-colors duration-500"
  >
    <div class="max-w-7xl mx-auto px-4 lg:px-6 py-10">

      <!-- banner -->
      <section
        :class="
          mode.darkMode
            ? 'bg-linear-to-br from-slate-950 via-indigo-950 to-slate-950 border border-slate-900 shadow-black/30'
            : 'bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 shadow-slate-950/20'
        "
        class="relative overflow-hidden rounded-[2.5rem] px-6 lg:px-14 py-10 lg:py-20 lg:mb-16 mb-10 shadow-2xl group transition-all duration-500"
      >
        <div class="absolute -right-20 -bottom-20 lg:w-96 lg:h-96 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-700"></div>

        <div class="relative z-10 max-w-2xl space-y-6">
          <span class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase shadow-xl">
            <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
            Future Systems 2026
          </span>

          <h1 class="lg:text-7xl md:text-5xl text-3xl font-black text-white leading-[1.1] tracking-tight">
            Explore <br />
            <span class="bg-clip-text text-transparent bg-linear-to-r from-white via-slate-200 to-indigo-300">Tech Universe</span>
          </h1>

          <p class="text-slate-300 lg:text-base text-xs font-light leading-relaxed lg:w-[85%]">
            Discover the next generation of performance hardware and minimalist smart devices curated for the modern professional.
          </p>

          <div class="pt-4">
            <router-link
              to="/shop"
              class="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-indigo-50 active:scale-95 lg:px-8 lg:py-4 px-5 py-2 rounded-xl text-xs lg:text-sm font-black tracking-widest uppercase transition-all duration-300 shadow-2xl"
            >
              <span>Explore Collection</span>
              <i class="bi bi-arrow-right text-lg"></i>
            </router-link>
          </div>
        </div>
      </section>

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
            class="w-full py-4 pl-14 pr-6 rounded-2xl border outline-none shadow-xl text-[16px] lg:text-base font-medium transition-all duration-300 focus:ring-4"
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
              class="max-w-full max-h-full object-contain  transform scale-95 group-hover/card:scale-100 transition-transform duration-500"
            />
          </div>

          <!-- Content Info Block -->
          <div class="pt-4 flex flex-col grow justify-between">
            <div class="mb-4">
              <h3 :class="mode.darkMode ? 'text-slate-100' : 'text-slate-900'" class="text-sm lg:text-base font-bold tracking-tight line-clamp-1 group-hover/card:text-indigo-500 transition-colors duration-300">
                {{ item.title }}
              </h3>
              <p :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'" class="text-xs hidden mt-1.5 line-clamp-2 font-light leading-relaxed">
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
/* Smooth Category Scrollbar Hide */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}
</style>