<script setup>
import { useRoute, useRouter } from "vue-router";
import { useProductStore } from "../../stores/productStore";
import { useCartStore } from "../../stores/cartStore";
import { onMounted, ref, watch } from "vue";
import { useDarkModeStore } from "../../stores/darkMode";

const route = useRoute();
const router = useRouter();
const productStoreId = useProductStore();
const cartStore = useCartStore();
const mode = useDarkModeStore();
const qty = ref(1);


const increaseQty = () => {
  qty.value++;
};
const decreaseQty = () => {
  if (qty.value > 1) {
    qty.value--;
  }
};


const handleAddToCart = () => {
  cartStore.addToCart(productStoreId.productId, qty.value);
};


const handleBuyNow = () => {
  cartStore.addToCart(productStoreId.productId, qty.value);
  router.push("/checksummery");
};


const fetchProduct = async () => {
  await productStoreId.getIdProduct(route.params.id);
};

onMounted(() => {
  fetchProduct();
});


watch(
  () => route.params.id,
  () => {
    qty.value = 1;
    fetchProduct();
  }
);


</script>

<template>

  <div  class="py-2 lg:hidden bg-gray-100 text-black px-4">
        <router-link to="/shop">
          <i class="bi text-black  text-xl bi-box-arrow-left"></i>
        </router-link>
  </div>
   
  <div
    :class="mode.darkMode ? 'bg-[#0f172a]' : 'bg-[#f8fafc]'"
    class="product-details min-h-screen py-10 lg:py-16 transition-all duration-300"
  >

  

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      
      
      <!-- Loading -->
      <div
        v-if="productStoreId.isLoading"
        class="flex flex-col lg:flex-row gap-12 animate-pulse"
      >
        <!-- Image -->
        <div class="lg:w-1/2 w-full">
          <div
            :class="mode.darkMode ? 'bg-slate-800' : 'bg-gray-200'"
            class="w-full aspect-square rounded-3xl"
          ></div>
        </div>

        <!-- Content -->
        <div class="lg:w-1/2 w-full space-y-6">
          <div
            :class="mode.darkMode ? 'bg-slate-800' : 'bg-gray-200'"
            class="w-32 h-8 rounded-full"
          ></div>

          <div
            :class="mode.darkMode ? 'bg-slate-800' : 'bg-gray-200'"
            class="w-full h-12 rounded-xl"
          ></div>

          <div
            :class="mode.darkMode ? 'bg-slate-800' : 'bg-gray-200'"
            class="w-2/3 h-6 rounded-lg"
          ></div>

          <div
            :class="mode.darkMode ? 'bg-slate-800' : 'bg-gray-200'"
            class="w-40 h-10 rounded-xl"
          ></div>

          <div
            :class="mode.darkMode ? 'bg-slate-800' : 'bg-gray-200'"
            class="w-full h-28 rounded-2xl"
          ></div>

          <div class="flex gap-4">
            <div
              :class="mode.darkMode ? 'bg-slate-800' : 'bg-gray-200'"
              class="flex-1 h-14 rounded-xl"
            ></div>

            <div
              :class="mode.darkMode ? 'bg-slate-800' : 'bg-gray-200'"
              class="flex-1 h-14 rounded-xl"
            ></div>
          </div>
        </div>
      </div>

      

      <!-- Product -->
      <div
        v-else-if="productStoreId.productId"
        class="flex flex-col lg:flex-row gap-12 lg:items-start"
      >
        
        <!-- Product Image -->
        <div class="lg:w-1/2  lg:sticky lg:top-10">
          <div
            :class="
              mode.darkMode
                ? 'bg-[#1e293b] border border-blue-900/40 shadow-2xl shadow-blue-950/20'
                : 'bg-white border border-gray-200 shadow-lg'
            "
            class="lg:rounded-3xl rounded-xl overflow-hidden"
          >
            <img
              class="w-full aspect-square object-contain hover:scale-105 transition-all duration-700"
              :src="productStoreId.productId.image"
              :alt="productStoreId.productId.title"
            />
          </div>
        </div>

        
        <!-- Product Content -->
        <div class="lg:w-1/2 w-full">
          <!-- Category -->
          <p
            :class="
              mode.darkMode
                ? 'bg-blue-500/10 text-blue-300 border border-blue-500/20'
                : 'bg-gray-100 text-gray-700 border border-gray-200'
            "
            class="inline-flex items-center lg:px-4 lg:py-2 px-5 py-1 rounded-xl lg:rounded-full text-sm font-medium mb-5"
          >
            {{ productStoreId.productId.category }}
          </p>

          <!-- Title -->
          <h1
            :class="mode.darkMode ? 'text-white' : 'text-gray-900'"
            class="text-xl lg:text-5xl font-extrabold leading-tight mb-6"
          >
            {{ productStoreId.productId.title }}
          </h1>

          <!-- Price -->
          <div class="mb-8">
            <h2
              class="text-4xl lg:text-5xl font-black text-red-500"
            >
              ${{ parseFloat(productStoreId.productId.price).toFixed(2) }}
            </h2>
          </div>

          <!-- Description -->
          <div class="mb-5">
            <h3
              :class="mode.darkMode ? 'text-white' : 'text-gray-900'"
              class="text-sm uppercase font-bold tracking-wider mb-3"
            >
              Product Description
            </h3>

            <p
              :class="mode.darkMode ? 'text-slate-300' : 'text-gray-600'"
              class="leading-8 lg:text-base text-[10px]"
            >
              {{ productStoreId.productId.description }}
            </p>
          </div>

          <!-- Quantity -->
          <div class="mb-10">
            <h3
              :class="mode.darkMode ? 'text-white' : 'text-gray-900'"
              class="text-sm uppercase font-bold tracking-wider mb-4"
            >
              Quantity
            </h3>

            <div
              :class="
                mode.darkMode
                  ? 'border border-blue-900/50 bg-[#1e293b]'
                  : 'border border-gray-300 bg-white'
              "
              class="inline-flex items-center rounded-2xl overflow-hidden shadow-sm"
            >
              <!-- Minus -->
              <button
                @click="decreaseQty"
                :class="
                  mode.darkMode
                    ? 'bg-blue-900 hover:bg-blue-800 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-black'
                "
                class="w-14 h-14 text-2xl font-bold transition-all duration-300 cursor-pointer"
              >
                -
              </button>

              <!-- Qty -->
              <div
                :class="mode.darkMode ? 'text-white' : 'text-black'"
                class="w-16 h-14 flex items-center justify-center font-bold text-lg"
              >
                {{ qty }}
              </div>

              <!-- Plus -->
              <button
                @click="increaseQty"
                :class="
                  mode.darkMode
                    ? 'bg-blue-900 hover:bg-blue-800 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-black'
                "
                class="w-14 h-14 text-2xl font-bold transition-all duration-300 cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <!-- Add To Cart -->
            <button
              @click="handleAddToCart"
              :class="
                mode.darkMode
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-white border border-gray-300 text-black hover:bg-gray-100'
              "
              class="flex-1 py-4 rounded-2xl font-bold transition-all duration-300 cursor-pointer shadow-sm"
            >
              Add To Cart
            </button>

            <!-- Buy Now -->
            <button
              @click="handleBuyNow"
              :class="
                mode.darkMode
                  ? 'bg-blue-500 hover:bg-blue-600'
                  : 'bg-black hover:bg-gray-800'
              "
              class="flex-1 py-4 rounded-2xl font-bold text-white transition-all duration-300 cursor-pointer shadow-lg"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      
      <!-- Product Not Found -->
      <div
        v-else
        class="flex flex-col justify-center items-center min-h-[60vh]"
      >
        <h1
          :class="mode.darkMode ? 'text-white' : 'text-gray-900'"
          class="text-3xl font-bold mb-4"
        >
          Product Not Found
        </h1>

        <router-link
          to="/shop"
          :class="
            mode.darkMode
              ? 'bg-blue-500 hover:bg-blue-600'
              : 'bg-black hover:bg-gray-800'
          "
          class="px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300"
        >
          Back To Shop
        </router-link>
      </div>
    </div>
  </div>
</template>