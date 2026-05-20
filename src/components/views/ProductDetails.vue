<script setup>
import { useRoute } from 'vue-router';
import { useProductStore } from '../../stores/productStore';
import { useCartStore } from '../../stores/cartStore';
import { onMounted, ref } from 'vue';
import { useDarkModeStore } from '../../stores/darkMode';

const route = useRoute();
const productStoreId = useProductStore();
const cartStore = useCartStore();

const mode = useDarkModeStore()
const qty = ref(1)

// increase(+)
const increaseQty = () => {
  qty.value++;
};

// decrease(-)
const decreaseQty = () => {
  if (qty.value > 1) {
    qty.value--;
  }
};

// add to cart with qty
const handleAddToCart = () => {
  cartStore.addToCart(
    productStoreId.productId,
    qty.value
  );
};

onMounted(() => {
  productStoreId.getIdProduct(route.params.id);
});
</script>

<template>
  <div
    :class="mode.darkMode ? 'bg-[#0f172a]' : 'bg-[#f9fafb]'"
   class="product-details  min-h-screen py-8 lg:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- LOADING -->
      <div
        v-if="productStoreId.isLoading"
        class="flex flex-col lg:flex-row gap-12 animate-pulse"
      >
        <div class="lg:w-1/2 w-full">
          <div class="w-full h-87.5 lg:h-137.5 bg-gray-200 rounded-3xl"></div>
        </div>

        <div class="lg:w-1/2 w-full space-y-6">
          <div class="w-28 h-8 bg-gray-200 rounded-full"></div>
          <div class="w-11/12 h-12 bg-gray-200 rounded-xl"></div>
          <div class="w-1/2 h-6 bg-gray-200 rounded-lg"></div>
          <div class="w-36 h-10 bg-gray-200 rounded-xl"></div>
        </div>
      </div>

      <!-- PRODUCT -->
      <div
        v-else-if="productStoreId.productId"
        class="flex flex-col lg:flex-row gap-12 lg:items-start"
      >

        <!-- IMAGE -->
        <div class="lg:w-1/2 w-full lg:sticky lg:top-8">
          <div 
          :class="mode.darkMode ? 'border border-blue-100 shadow-2xl shadow-blue-950' : 'border-gray-100 border shadow-sm'"
          class="bg-white rounded-3xl overflow-hidden  border  aspect-square">
            <img
              class="w-full h-full object-cover hover:scale-105 duration-700 transition-transform cursor-zoom-in"
              :src="productStoreId.productId.images"
              :alt="productStoreId.productId.title"
            />
          </div>
        </div>

        <!-- CONTENT -->
        <div class="lg:w-1/2 w-full flex flex-col justify-between space-y-8">

          <!-- TITLE -->
          <div class="space-y-4">
            <h1 
            :class="mode.darkMode ? 'text-white' : 'text-gray-900'"
            class="text-3xl lg:text-4xl font-extrabold ">
              {{ productStoreId.productId.title }}
            </h1>

            <div class="pt-2">
              <h2 
              :class="mode.darkMode ? 'text-white' : 'text-gray-900'"
              class="text-3xl font-black text-gray-950">
                ${{ parseFloat(productStoreId.productId.price).toFixed(2) }}
              </h2>
            </div>
          </div>

          <!-- DESCRIPTION -->
          <div class="space-y-3">
            <h3
            :class="mode.darkMode ? 'text-white' : 'text-gray-900'"
             class="text-sm font-bold uppercase text-gray-900">
              Product Description
            </h3>
            <p 
            :class="mode.darkMode ? 'text-white' : 'text-gray-900'"
            class="text-gray-600">
              {{ productStoreId.productId.description }}
            </p>
          </div>

          <!-- QUANTITY (FIXED) -->
          <div class="flex items-center gap-4">

            <div
            :class="mode.darkMode ? 'border border-blue-100/50 shadow shadow-white': 'border border-gray-300'"
             class="flex items-center  rounded-xl overflow-hidden">

              <!-- minus -->
              <button
                @click="decreaseQty"
                :class="mode.darkMode ? 'bg-blue-500': 'bg-gray-100 hover:bg-gray-200 text-xl '"
                class="w-12 h-12 font-bold cursor-pointer"
              >
                -
              </button>

              <!-- qty -->
              <div 
              :class="mode.darkMode ? 'bg-blue-500' : 'bg-white'"
              class="w-14 h-12 flex items-center justify-center font-bold text-lg ">
                {{ qty }}
              </div>

              <!-- plus -->
              <button
                @click="increaseQty"
                :class="mode.darkMode ? 'bg-blue-500': 'bg-gray-100 hover:bg-gray-200 text-xl '"
                class="w-12 h-12 bg-black   text-xl font-bold cursor-pointer"
              >
                +
              </button>

            </div>
          </div>

          <!-- BUTTONS -->
          <div class="flex gap-4">

            <button
              @click="handleAddToCart"
              class="flex-1 bg-white border cursor-pointer border-gray-300 text-black hover:bg-gray-100 py-4 rounded-2xl font-bold"
            >
              Add To Cart
            </button>

            <router-link
            :class="mode.darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-black hover:bg-gray-800'"
              class="flex-1 text-center  text-white  py-4 rounded-2xl font-bold"
            >
              Buy Now
            </router-link>

          </div>

        </div>
      </div>

    </div>
  </div>
</template>