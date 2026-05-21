<script setup>
import { onMounted, computed, ref } from "vue";
import { useProductStore } from "../../stores/productStore";
import { useDarkModeStore } from "../../stores/darkMode";

const productStore = useProductStore();
const mode = useDarkModeStore();

const search = ref("");

onMounted(async () => {
  if (!productStore.products.length) {
    await productStore.getAllProducts();
  }
});


const searchProducts = computed(() => {
  const keyword = search.value.trim().toLowerCase();

  if (!keyword) {
    return productStore.products;
  }

  return productStore.products.filter((item) => {
    return (
      item.title.toLowerCase().includes(keyword) ||
      item.description.toLowerCase().includes(keyword)
    );
  });
});
</script>

<template>
  <div
    :class="mode.darkMode ? 'bg-[#0f172a]' : 'bg-[#f8fafc]'"
    class="exploreTech min-h-screen transition-all duration-300"
  >
    <div class="container mx-auto lg:px-0 px-4 py-10">

      <!-- HERO SECTION -->
      <section
        :class="
          mode.darkMode
            ? 'bg-linear-to-r from-blue-900 to-blue-700'
            : 'bg-linear-to-r from-black to-gray-800'
        "
        class="relative overflow-hidden rounded-3xl px-6 lg:px-14 py-5 lg:py-16 lg:mb-14 mb-10 shadow-2xl"
      >
        <!-- Circle -->
        <div
          class="absolute -right-20 -bottom-20 lg:w-72 lg:h-72 w-62 h-62 bg-white/10 rounded-full"
        ></div>

        <div class="relative z-10 max-w-2xl">
          <!-- Badge -->
          <p
            class="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1 rounded-full text-[10px] lg:text-sm font-medium mb-5"
          >
            NEW COLLECTION
          </p>

          <!-- Title -->
          <h1
            class="lg:text-6xl md:text-5xl text-xl font-extrabold text-white leading-tight mb-5"
          >
            Explore Tech Universe
          </h1>

          <!-- Description -->
          <p
            class="text-slate-200 lg:text-lg text-[10px] leading-7 lg:mb-8 mb-5 lg:w-[85%]"
          >
            Discover the latest laptops, smartphones, accessories and smart
            devices built for performance and modern minimalist style.
          </p>

          <!-- Button -->
          <router-link
            to="/shop"
            class="inline-flex lg:text-base text-[10px] items-center gap-2 bg-white text-black px-5 lg:px-8 py-2 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Shop Now
            <i class="bi bi-arrow-right"></i>
          </router-link>
        </div>
      </section>

      <!-- SEARCH -->
      <section class="flex justify-center lg:mb-16 mb-10">
        <div
          class="relative lg:w-[50%] md:w-[70%] w-full group"
        >
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
            type="text"
            placeholder="Search technology..."
            :class="
              mode.darkMode
                ? 'bg-[#1e293b] border-[#334155] text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20'
                : 'bg-white border-gray-200 text-black placeholder:text-gray-400 focus:border-gray-300 focus:ring-black/0'
            "
            class="w-full py-4 pl-14 pr-5 rounded-2xl border outline-none shadow-lg text-sm lg:text-lg transition-all duration-300 focus:ring-4"
          />
        </div>
      </section>

      <!-- LOADING -->
      <div
        v-if="productStore.isLoading"
        class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 animate-pulse"
      >
        <!-- Skeleton Card -->
        <div
          v-for="n in 8"
          :key="n"
          :class="
            mode.darkMode
              ? 'bg-[#1e293b] border border-[#334155]'
              : 'bg-white border border-gray-200'
          "
          class="rounded-2xl overflow-hidden shadow-xl"
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

      <!-- PRODUCTS -->
      <div
        v-else-if="searchProducts.length > 0"
        class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        <!-- Card -->
        <div
          v-for="item in searchProducts.slice(0, 40)"
          :key="item.id"
          :class="
            mode.darkMode
              ? 'bg-[#1e293b] border border-[#334155]'
              : 'bg-white border border-gray-200'
          "
          class="rounded-2xl overflow-hidden shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
        >
          <!-- Image -->
          <div class="overflow-hidden h-44 lg:h-72">
            <img
              :src="item.images"
              :alt="item.title"
              class="w-full h-full object-cover hover:scale-105 transition-all duration-500"
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

      <!-- NO PRODUCT -->
      <div
        v-else
        class="flex flex-col justify-center items-center py-24"
      >
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