<template>
  <div class="home-page container mb-10 mx-auto min-h-screen lg:px-0 px-3">
    <!-- header-title -->
    <div class="header-title py-10 lg:py-15">
      <h1 class="text-center lg:text-3xl md:text-2xl text-xl font-medium mb-2">
        Shop All Technology
      </h1>

      <p
        :class="mode.darkMode ? 'text-white' : 'text-gray-400'"
        class="text-center lg:text-base md:text-sm text-[11px] text-gray-500 lg:w-[60%] w-full mx-auto"
      >
        Refined sound and precision engineering. Discover the latest in
        minimalist tech essentials designed for the modern professional.
      </p>
    </div>

    <!-- search products -->
    <div class="search-products lg:mb-15 mb-10 flex justify-center">
      <div
        class="relative lg:w-[50%] md:w-[70%] w-full group transition-all duration-300"
      >
        <i
          :class="
            mode.darkMode
              ? 'text-white group-focus-within:text-blue-200'
              : 'text-gray-400 group-focus-within:text-black'
          "
          class="bi bi-search absolute left-4 top-1/2 -translate-y-1/2 text-lg group-focus-within:text-black transition"
        ></i>

        <!-- Input -->
        <input
          v-model="search"
          type="text"
          placeholder="Search products..."
          :class="
            mode.darkMode
              ? 'border-blue-950 shadow-sm placeholder:text-blue-200 shadow-blue-950'
              : 'bg-white border-gray-200 placeholder:text-gray-400'
          "
          class="w-full lg:text-lg text-sm outline-0 py-4 pl-12 pr-5 rounded-2xl border shadow-md transition-all duration-300"
        />
      </div>
    </div>

    <!-- Skeleton Loading -->
    <div
      v-if="productStore.isLoading"
      class="main-products w-full flex flex-wrap justify-center lg:gap-5 gap-2"
    >
      <!-- Skeleton Card -->
      <div
        v-for="n in 40"
        :key="n"
        :class="
          mode.darkMode
            ? 'bg-[#1e293b] border border-[#334155]'
            : 'bg-white border border-gray-200'
        "
        class="lg:w-[23%] md:w-[48%] w-[48%] lg:h-125 h-72 shadow-xl rounded-xl mb-5 overflow-hidden"
      >
        <!-- image -->
        <div
          :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-200'"
          class="h-[55%] w-full animate-pulse"
        ></div>

        <!-- body -->
        <div class="h-[45%] lg:p-5 p-2 flex flex-col justify-between">
          <div>
            <!-- title -->
            <div
              :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-200'"
              class="w-[80%] lg:h-5 md:h-4 h-3 rounded mb-3 animate-pulse"
            ></div>

            <!-- description -->
            <div
              :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-200'"
              class="w-full lg:h-3 h-2 rounded mb-2 animate-pulse"
            ></div>

            <div
              :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-200'"
              class="w-[70%] lg:h-3 h-2 rounded mb-4 animate-pulse"
            ></div>

            <!-- price -->
            <div
              :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-200'"
              class="w-[35%] lg:h-7 h-4 rounded animate-pulse"
            ></div>
          </div>

          <!-- button -->
          <div
            :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-200'"
            class="w-full lg:h-12 h-9 rounded-[5px] animate-pulse"
          ></div>
        </div>
      </div>
    </div>
    <!-- Products -->
    <div
      v-else-if="searchProducts.length > 0"
      class="main-products w-full flex flex-wrap justify-center lg:gap-5 gap-2"
    >
      <!-- card -->
      <div
        v-for="item in searchProducts.slice(0, 40)"
        :key="item.id"
        :class="
          mode.darkMode
            ? 'bg-[#1e293b] border border-[#334155]'
            : 'bg-white border border-gray-200'
        "
        class="lg:w-[23%] md:w-[48%] w-[48%] lg:h-125 h-72 shadow-xl rounded-xl mb-5 overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer"
      >
        <!-- image -->
        <div class="card-header h-[55%] overflow-hidden">
          <img
            class="object-cover h-full w-full hover:scale-105 transition-all duration-300"
            :src="item.images"
            alt=""
          />
        </div>

        <!-- body -->
        <div class="card-body h-[45%] lg:p-5 p-2 flex flex-col justify-between">
          <div>
            <h1
              class="lg:text-lg md:text-base text-[11px] mb-1 line-clamp-1 font-medium"
            >
              {{ item.title }}
            </h1>

            <p class="line-clamp-1 lg:text-sm text-[10px] text-gray-500 mb-2">
              {{ item.description }}
            </p>

            <p class="text-red-600 font-bold lg:text-2xl text-sm">
              ${{ item.price }}
            </p>
          </div>

          <router-link
            :to="`/productdetails/${item.id}`"
            :class="mode.darkMode ? 'bg-[#3b82f6]' : 'bg-black'"
            class="block text-center lg:py-3 py-2 w-full hover:bg-blue-600 transition-all ease-in-out rounded-[5px] text-white lg:text-base text-[11px]"
          >
            View Details <i class="bi bi-eye"></i>
          </router-link>
        </div>
      </div>
    </div>

    <!-- No Product -->
    <div
      v-else
      :class="mode.darkMode ? 'text-white' : 'text-gray-400'"
      class="text-center py-20"
    >
      <h1
        :class="mode.darkMode ? 'text-white' : 'text-gray-400'"
        class="lg:text-3xl text-xl font-bold text-gray-500"
      >
        No products found
      </h1>

      <p class="mt-2 text-sm">"{{ search }}" was not found.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useProductStore } from "../../stores/productStore";
import { useDarkModeStore } from "../../stores/darkMode";

const productStore = useProductStore();

const search = ref("");

onMounted(() => {
  if (productStore.products.length === 0) {
    productStore.getAllProducts();
  }
});

const searchProducts = computed(() => {
  const keyword = search.value.trim().toLowerCase();

  if (!keyword) {
    return productStore.products;
  }

  return productStore.products.filter((item) =>
    item.title.toLowerCase().includes(keyword)
  );
});

const mode = useDarkModeStore();
</script>

