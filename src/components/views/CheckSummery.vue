<script setup>
import { onMounted } from "vue";
import { useCartStore } from "../../stores/cartStore";
import { useProductStore } from "../../stores/productStore";
import { useDarkModeStore } from "../../stores/darkMode";

const productStore = useProductStore();
const cartStore = useCartStore();

onMounted(() => {
  if (productStore.products.length === 0) {
    productStore.getAllProducts();
  }
});

const mode = useDarkModeStore()
</script>

<template>

  <div 
  :class="mode.darkMode ? 'bg-[#0f172a]': 'bg-[#F5F5F7]'"
  class="shopping-cart min-h-screen  py-6 lg:py-10">
    <div class="container mx-auto lg:px-0 px-4">

      <div class="text-center mb-8 lg:mb-12">
        <h1 
        :class="mode.darkMode ? 'text-white': 'text-gray-900'"
        class="text-3xl sm:text-4xl lg:text-5xl font-bold  mb-3">
          Your Cart
        </h1>

        <p 
        :class="mode.darkMode ? 'text-white': 'text-gray-500'"
        class="text-sm sm:text-base  max-w-xl mx-auto">
          Review your selection before proceeding to checkout.
        </p>
      </div>



      <div class="flex flex-col lg:flex-row justify-between items-start gap-8 w-full">
        <!-- Check item in  cart -->
        <div v-if="cartStore.cart.length === 0"
        :class="mode.darkMode ? 'bg-blue-950 border-blue-950/50' : 'bg-white border-gray-100'"
          class=" w-full lg:w-[65%] min-h-100 flex flex-col items-center justify-center rounded-3xl p-8 lg:p-16 text-center shadow-sm border  shrink-0"
        >
          <div 
          :class="mode.darkMode ? 'bg-blue-800 border-blue-800/50' : 'bg-gray-50 border-gray-100 text-gray-400'"
          class="w-24 h-24 rounded-full  flex items-center justify-center mb-6 border  shadow-sm">
            <i class="bi bi-bag-x text-4xl "></i>
          </div>

          <h1 
          :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
          class="text-xl lg:text-2xl font-bold  mb-2">
            Your cart is empty
          </h1>

          <p class="text-gray-400 text-sm lg:text-base mb-8 max-w-sm mx-auto leading-relaxed">
            Looks like you haven’t added anything to your cart yet.
          </p>

          <router-link
          :class="mode.darkMode ? 'bg-blue-500' : 'text-white'"
            to="/shop"
            class="bg-black px-12 py-4 rounded-2xl inline-block font-medium hover:bg-gray-800 active:scale-[0.98] transition-all duration-300 w-full sm:w-auto text-center shadow-md hover:shadow-lg"
          >
            Continue Shopping
          </router-link>
        </div>

        <!-- Card Items -->
        <div v-else class="w-full lg:w-[65%] flex flex-col gap-4 shrink-0">
          <div
            v-for="item in cartStore.cart"
            :key="item.id"
            :class="mode.darkMode ? 'bg-blue-950 border-blue-800/50': 'bg-white border-gray-100'"
            class=" w-full rounded-3xl shadow-sm border  p-4 lg:p-5 hover:shadow-lg transition-all duration-300"
          >
            <div class="flex flex-row items-start lg:items-center justify-between gap-4 w-full">

              <div class="flex flex-row gap-4 flex-1 min-w-0">
                <div class="w-24 h-24 lg:w-32 lg:h-32 bg-gray-100 rounded-2xl overflow-hidden shrink-0">
                  <img
                    :src="item.images"
                    :alt="item.title"
                    class="w-full h-full object-cover hover:scale-105 duration-500 cursor-pointer"
                  />
                </div>

                <div class="flex flex-col justify-between flex-1 min-w-0 h-24 lg:h-32">
                  <div>
                    <h1 
                    :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
                    class="text-base lg:text-xl font-bold text-gray-800 line-clamp-1 mb-0.5">
                      {{ item.title }}
                    </h1>
                    <p 
                    :class="mode.darkMode ? 'text-white' : 'text-gray-400'"
                    class=" text-xs lg:text-sm line-clamp-1">
                      {{ item.description }}
                    </p>
                  </div>

                  <!-- Qty cart -->
                  <div 
                  :class="mode.darkMode ? 'bg-blue-100 border-blue-100/50' : 'bg-gray-50 border border-gray-200'"
                  class="flex items-center justify-between gap-2  rounded-full p-1 w-28 lg:w-32">
                      <button
                        @click="cartStore.updateQty(item.id, -1)"
                        :class="mode.darkMode ? 'bg-blue-500' : 'bg-white border border-gray-200 hover:bg-black hover:text-white'"
                        class="w-7 h-7 lg:w-9 lg:h-9 rounded-full  transition-all duration-300 text-base flex items-center justify-center cursor-pointer"
                      >
                        -
                      </button>
                      <span 
                      :class="mode.darkMode ? 'text-blue-500' : 'text-black'"
                      class="text-sm lg:text-base font-bold w-6 text-center">
                        {{ item.qty }}
                      </span>
                      <button
                      
                        @click="cartStore.addToCart(item)"
                        :class="mode.darkMode ? 'bg-blue-500' : 'bg-white border border-gray-200 hover:bg-black hover:text-white'"
                        class="w-7 h-7 lg:w-9 lg:h-9 rounded-full  transition-all duration-300 text-base flex items-center justify-center cursor-pointer"
                      >
                        +
                      </button>
                  </div>

                </div>
              </div>

              <div class="flex flex-col items-end justify-between h-24 lg:h-32 shrink-0">
                <!-- Remove -->
                <button
                  @click="cartStore.removeFromCart(item.id)"
                  :class="mode.darkMode ? 'hover:text-white' : 'hover:text-red-500'"
                  class="text-gray-400  transition-colors duration-200 p-1 cursor-pointer"
                >
                  <i class="bi bi-x-lg text-lg"></i>
                </button>
                <!-- Price Item -->
                <div class="text-right">
                  <h1 
                  :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
                  class="text-lg lg:text-2xl font-bold text-gray-800">
                    ${{ item?.price?.toFixed(2) || '0.00' }}
                  </h1>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="lg:w-[30%] w-full shrink-0">
          <div
          :class="mode.darkMode ? 'bg-blue-950 border-blue-800/50' : 'bg-white border-gray-100'"
           class=" rounded-3xl shadow-sm border  p-5 sm:p-7 lg:sticky lg:top-5">

            <h1 
            :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
            class="text-2xl sm:text-3xl font-bold  mb-8">
              Order Summary
            </h1>

            <div class="flex flex-col gap-5">
              <div class="flex justify-between items-center">
                <span 
                :class="mode.darkMode ? 'text-white' : 'text-gray-500'"
                class=" text-sm sm:text-base">Subtotal</span>
                <span 
                :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
                
                class="font-semibold text-gray-800 text-sm sm:text-base">
                  ${{ cartStore.totalPrice?.toFixed(2) || '0.00' }}
                </span>
              </div>

              <div class="flex justify-between items-center">
                <span 
                :class="mode.darkMode ? 'text-white' : 'text-gray-500'"
                class=" text-sm sm:text-base">Shipping</span>
                <span 
                :class="mode.darkMode ? 'text-white' : 'text-green-600'"
                class="font-semibold  text-sm sm:text-base">Free</span>
              </div>

              <div class="flex justify-between items-center">
                <span 
                :class="mode.darkMode ? 'text-white' : 'text-gray-500'"
                class="text-gray-500 text-sm sm:text-base">Tax</span>
                <span 
                :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
                class="font-semibold  text-sm sm:text-base">$0.00</span>
              </div>

              <div class="border-t border-dashed border-gray-300 py-2"></div>

              <div class="flex justify-between items-center">
                <span 
                :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
                class="text-lg sm:text-xl font-bold ">Total</span>
                <span 
                :class="mode.darkMode ? 'text-white' : 'text-black'"
                class="text-2xl sm:text-3xl font-bold text-black">
                  ${{ cartStore.totalPrice?.toFixed(2) || '0.00' }}
                </span>
              </div>
            </div>

            <button
              :class="mode.darkMode ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-black hover:bg-gray-800 text-white'"
              class="w-full  py-4 rounded-2xl mt-8 text-base sm:text-lg font-semibold transition-all duration-300 shadow-md active:scale-[0.98] cursor-pointer"
            >
              Proceed to Checkout
            </button>

            <router-link
              to="/shop"
              :class="mode.darkMode ? 'bg-white text-black hover:bg-gray-200': 'text-gray-700 border-gray-300 hover:bg-gray-50'"
              class="w-full border  py-4 rounded-2xl mt-4 font-medium  transition-all duration-300 text-center block text-sm sm:text-base "
            >
              Continue Shopping
            </router-link>

            <div 
            :class="mode.darkMode ? 'text-white' : 'text-gray-400'"
            class="mt-8">
              <p class=" text-sm mb-4 text-center">Secure Payment Methods</p>
              <div class="flex justify-center gap-4 text-2xl sm:text-3xl ">
                <i class="bi bi-credit-card"></i>
                <i class="bi bi-paypal"></i>
                <i class="bi bi-wallet2"></i>
              </div>
            </div>

          </div>
        </div>

      </div> 
    </div>
  </div>
</template>