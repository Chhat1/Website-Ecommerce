<template>
  <div class="exploreTech container mx-auto min-h-screen lg:px-0 px-4 py-10">

    <!-- HERO SECTION -->
    <div 
    :class="mode.darkMode ? 'bg-blue-800' : 'bg-black'"
    class=" lg:w-full  lg:h-70 h-50 text-white rounded-2xl p-10 mb-10 relative overflow-hidden">

      <div class="max-w-xl">
        <p class="text-sm text-gray-300 lg:mb-2 mb-0">NEW COLLECTION</p>

        <h1 class="lg:text-5xl text-2xl font-bold lg:mb-4 mb-2">
          Explore Tech Universe
        </h1>

        <p class="text-gray-400 lg:mb-6 mb-5 lg:text-base text-[10px]">
          Discover the latest laptops, smartphones, accessories and smart devices
          built for performance and style.
        </p>

        <router-link
          to="/shop"
          class="inline-block bg-white text-black lg:px-6 lg:py-3 px-5 py-1 lg:rounded-xl rounded-[5px] font-semibold hover:bg-gray-200 transition"
        >
          Shop Now
        </router-link>
      </div>

      <!-- decoration circle -->
      <div class="absolute -right-10 -bottom-10 w-60 h-60 bg-gray-700 rounded-full opacity-30"></div>
    </div>



    <!-- search -->
    <div class="search-products lg:mb-15 mb-10 flex justify-center">
      <div
        class="relative lg:w-[50%] md:w-[70%] w-full group transition-all duration-300"
      >
        <i
          :class="mode.darkMode ? 'text-white group-focus-within:text-blue-200' : 'text-gray-400 group-focus-within:text-black'"
          class="bi bi-search absolute left-4 top-1/2 -translate-y-1/2  text-lg group-focus-within:text-black transition"
        ></i>

        <!-- Input -->
        <input
          v-model="search"
          type="text"
          placeholder="Search products..."
         :class="mode.darkMode ? 'border-blue-950 shadow-sm placeholder:text-blue-200 shadow-blue-950' : 'bg-white border-gray-200 placeholder:text-gray-400'"
          class="w-full lg:text-lg text-sm outline-0 py-4 pl-12 pr-5 rounded-2xl  border  shadow-md transition-all duration-300 "
        />
      </div>
    </div>



    <!-- FEATURE Products -->

    <!-- Skeleton Loading -->
    <div v-if="productStore.isLoading"
      class="main-products w-full flex flex-wrap justify-center lg:gap-5 gap-2 animate-pulse"
    >
      <div
        v-for="n in 8"
        :key="n"
        class="lg:w-[23%] md:w-[48%] w-[48%] lg:h-125 h-72 shadow-xl border border-gray-100 rounded-xl mb-5 overflow-hidden bg-white"
      >
        <!-- image skeleton -->
        <div class="h-[55%] bg-gray-200"></div>

        <!-- body skeleton -->
        <div class="h-[45%] lg:p-5 p-2 flex flex-col justify-between">
          <div>
            <!-- title -->
            <div class="w-3/4 h-4 bg-gray-200 rounded mb-3"></div>

            <!-- description -->
            <div class="w-full h-3 bg-gray-200 rounded mb-2"></div>
            <div class="w-2/3 h-3 bg-gray-200 rounded mb-4"></div>

            <!-- price -->
            <div class="w-1/3 h-6 bg-gray-200 rounded"></div>
          </div>

          <!-- button -->
          <div class="w-full h-10 bg-gray-200 rounded mt-4"></div>
        </div>
      </div>
    </div>

    <!-- Products -->
    <div v-else-if="searchProducts.length>0"
      class="main-products w-full flex flex-wrap justify-center lg:gap-5 gap-2"
    >

          <!-- card -->
          <div v-for="item in searchProducts.slice(0, 40)"
            :key="item.id"
            :class="mode.darkMode ? 'bg-[#1e293b] border border-[#334155]' : 'bg-white border border-gray-200'"
            class="lg:w-[23%] md:w-[48%] w-[48%] lg:h-125 h-72 shadow-xl  rounded-xl mb-5 overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer "
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
            <div
              class="card-body h-[45%] lg:p-5 p-2 flex flex-col justify-between"
            >
              <div>
                <h1
                  class="lg:text-lg md:text-base text-[11px] mb-1 line-clamp-1 font-medium"
                >
                  {{ item.title }}
                </h1>

                <p
                  class="line-clamp-1 lg:text-sm text-[10px] text-gray-500 mb-2"
                >
                  {{ item.description }}
                </p>

                <p class="text-red-600 font-bold lg:text-2xl text-sm">
                  ${{ item.price }}
                </p>
              </div>

              <router-link
                :to="`/productdetails/${item.id}`"
                :class="mode.darkMode ? 'bg-[#3b82f6]' : 'bg-black'"
                class="block text-center lg:py-3 py-2 w-full  hover:bg-blue-600 transition-all ease-in-out rounded-[5px] text-white lg:text-base text-[11px]"
              >
                View Details <i class="bi bi-eye"></i>
              </router-link>
            </div>
          </div>

    </div>



    <!-- No Product -->
    <div v-else 
    :class="mode.darkMode ? 'text-white' : 'text-gray-400'"
    class="text-center py-20">
      <h1 
      :class="mode.darkMode ? 'text-white' : 'text-gray-400'"
      class="lg:text-3xl text-xl font-bold text-gray-500">
        No products found
      </h1>

      <p class=" mt-2 text-sm">"{{ search }}" was not found.</p>
    </div>

  </div>
</template>


<script setup>
import {  onMounted,computed, ref } from 'vue';
import { useProductStore } from '../../stores/productStore';
import { useDarkModeStore } from '../../stores/darkMode';




const productStore = useProductStore()
    

    onMounted(()=>{
        if(productStore.products.length===0){
            productStore.getAllProducts();
        }
    })

const mode = useDarkModeStore()

const search = ref("")

const searchProducts = computed(() => {
  const keyword = search.value.trim().toLowerCase();

  if (!keyword) {
    return productStore.products;
  }

  return productStore.products.filter((item) =>
    item.title.toLowerCase().includes(keyword)
  );
});
</script>