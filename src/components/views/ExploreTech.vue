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

      <section
        :class="
          mode.darkMode
            ? 'bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 border border-slate-900 shadow-black/30'
            : 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 shadow-slate-950/20'
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
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-indigo-300">Tech Universe</span>
          </h1>

          <p class="text-slate-300 lg:text-base text-xs font-light leading-relaxed lg:w-[85%]">
            Discover the next generation of performance hardware and minimalist smart devices curated for the modern professional.
          </p>

          <div class="pt-4">
            <router-link
              to="/shop"
              class="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-indigo-50 active:scale-95 px-8 py-4 rounded-xl text-xs lg:text-sm font-black tracking-widest uppercase transition-all duration-300 shadow-2xl"
            >
              <span>Explore Collection</span>
              <i class="bi bi-arrow-right text-lg"></i>
            </router-link>
          </div>
        </div>
      </section>

      <section class="flex justify-center lg:mb-20 mb-10">
        <div class="relative lg:w-[55%] md:w-[80%] w-full group">
          <i :class="mode.darkMode ? 'text-slate-500 group-focus-within:text-indigo-500' : 'text-slate-400 group-focus-within:text-indigo-600'"
             class="bi bi-search absolute left-6 top-1/2 -translate-y-1/2 text-xl transition-colors duration-300"></i>
          
          <input
            v-model="search"
            type="search"
            placeholder="Search technology..."
            :class="
              mode.darkMode
                ? 'bg-[#090d16] border-slate-900 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:ring-indigo-500/10'
                : 'bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:ring-indigo-600/5'
            "
            class="w-full py-5 pl-16 pr-8 rounded-2xl border outline-none shadow-2xl text-[16px] lg:text-base transition-all duration-300 focus:ring-8 font-medium"
          />
        </div>
      </section>

      <div class="mb-14">
        <div class="flex gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide px-1 pb-4">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
            class="shrink-0 cursor-pointer px-7 py-3 rounded-full transition-all duration-300 text-xs font-bold tracking-widest uppercase border active:scale-90"
            :class="
              selectedCategory === cat
                ? (mode.darkMode ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'bg-slate-900 border-slate-900 text-white shadow-xl')
                : (mode.darkMode ? 'bg-[#090d16] border-slate-900 text-slate-500 hover:text-white' : 'bg-white border-slate-100 text-slate-500 hover:text-slate-900')
            "
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <div
        v-if="productStore.isLoading"
        class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 animate-pulse"
      >
        <div v-for="n in 8" :key="n" :class="mode.darkMode ? 'bg-[#090d16] border-slate-900' : 'bg-white border-slate-100'" class="rounded-[2rem] h-[450px] border"></div>
      </div>

      <div
        v-else-if="filteredProducts.length > 0"
        class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        <div
          v-for="item in filteredProducts"
          :key="item.id"
          :class="
            mode.darkMode
              ? 'bg-[#090d16] border-slate-900 shadow-black/40'
              : 'bg-white border-slate-100 shadow-slate-200/50'
          "
          class="rounded-[2rem] border p-3 lg:p-5 flex flex-col justify-between group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
        >
          <div class="relative overflow-hidden rounded-[1.5rem] mb-5 h-48 lg:h-72 flex items-center justify-center bg-slate-50 dark:bg-white transition-colors">
            <img
              :src="item.image"
              :alt="item.title"
              class="max-h-[80%] object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
            />
            <div class="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-black text-slate-900 tracking-tighter shadow-sm uppercase">
              Elite
            </div>
          </div>

          <div class="px-1 space-y-2">
            <h2 :class="mode.darkMode ? 'text-white' : 'text-slate-900'" class="text-sm lg:text-base font-bold tracking-tight line-clamp-1 group-hover:text-indigo-500 transition-colors">
              {{ item.title }}
            </h2>
            <p :class="mode.darkMode ? 'text-slate-500' : 'text-slate-400'" class="text-[11px] lg:text-xs font-light line-clamp-2 leading-relaxed">
              {{ item.description }}
            </p>
            
            <div class="pt-4 pb-4 flex items-center justify-between">
              <span :class="mode.darkMode ? 'text-white' : 'text-slate-950'" class="text-xl lg:text-2xl font-black tracking-tighter">
                ${{ item.price }}
              </span>
              <div class="flex gap-1">
                 <i class="bi bi-star-fill text-amber-400 text-[10px]"></i>
                 <span class="text-[10px] font-bold dark:text-slate-400">4.9</span>
              </div>
            </div>

            <router-link
              :to="`/productdetails/${item.id}`"
              :class="
                mode.darkMode
                  ? 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/20'
                  : 'bg-slate-950 hover:bg-black shadow-slate-950/10'
              "
              class="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 active:scale-95"
            >
              <span>View Details</span>
              <i class="bi bi-eye text-sm"></i>
            </router-link>
          </div>
        </div>
      </div>

      <div v-else class="flex flex-col justify-center items-center py-32 text-center space-y-4 animate-fade-in">
        <div :class="mode.darkMode ? 'bg-slate-900 text-slate-700' : 'bg-slate-50 text-slate-300'" class="w-24 h-24 rounded-[2rem] border border-dashed flex items-center justify-center mb-4">
          <i class="bi bi-search text-4xl"></i>
        </div>
        <h2 :class="mode.darkMode ? 'text-white' : 'text-slate-900'" class="text-xl font-bold uppercase tracking-[0.2em]">No results found</h2>
        <p :class="mode.darkMode ? 'text-slate-500' : 'text-slate-400'" class="max-w-xs text-xs font-light">
          We couldn't find anything matching "<span class="font-bold italic">{{ search }}</span>".
        </p>
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