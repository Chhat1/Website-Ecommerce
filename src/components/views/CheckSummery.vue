<script setup>
import { onMounted, computed } from "vue";
import { useCartStore } from "../../stores/cartStore";
import { useProductStore } from "../../stores/productStore";
import { useDarkModeStore } from "../../stores/darkMode";
import { useRoute, useRouter } from "vue-router";

const productStore = useProductStore();
const cartStore = useCartStore();
const mode = useDarkModeStore();
const router = useRouter()


const goCheckout = () => {
  if (cartStore.cart.length === 0) return;
  router.push("/checkout");
};

onMounted(async () => {
  if (!productStore.products.length) {
    await productStore.getAllProducts();
  }
});


const subtotal = computed(() => cartStore.totalPrice || 0);

const tax = computed(() => subtotal.value * 0.1);

const finalTotal = computed(() => subtotal.value + tax.value);

</script>

<template>
  <div
    :class="mode.darkMode ? 'bg-[#030712]' : 'bg-[#fafafa]'"
    class="shopping-cart min-h-screen pb-24 transition-colors duration-500"
  >
    <div class="max-w-7xl mx-auto px-4 lg:px-6">
      
      <!-- 1. Editorial Header Section -->
      <div class="text-center pt-16 mb-12 space-y-4 animate-fade-in">
        <span class="text-xs font-bold tracking-[0.3em] text-indigo-500 uppercase">Your Selection</span>
        <h1
          :class="mode.darkMode ? 'text-white' : 'text-slate-900'"
          class="text-4xl lg:text-5xl font-black tracking-tight"
        >
          Shopping Cart
        </h1>
        <p
          :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'"
          class="text-sm font-light max-w-xl mx-auto leading-relaxed"
        >
          Review your selected products with detailed precision before proceeding to secure checkout.
        </p>
      </div>

      <!-- 2. Main Content Split Layout Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-start">
        
        <!-- STATE A: EMPTY CART VIEW -->
        <div
          v-if="cartStore.cart.length === 0"
          :class="
            mode.darkMode
              ? 'bg-[#090d16] border-slate-900 shadow-black/40'
              : 'bg-white border-slate-100 shadow-slate-200/50'
          "
          class="w-full lg:col-span-2 min-h-[450px] rounded-3xl border shadow-2xl flex flex-col justify-center items-center text-center p-8 transition-all duration-500"
        >
          <!-- Elegant Dotted Circle Icon Frame -->
          <div
            :class="mode.darkMode ? 'bg-slate-900/50 text-slate-700 border-slate-800' : 'bg-slate-50 text-slate-300 border-slate-200'"
            class="w-24 h-24 rounded-2xl border border-dashed flex items-center justify-center mb-6"
          >
            <i class="bi bi-bag-x text-4xl"></i>
          </div>

          <h2
            :class="mode.darkMode ? 'text-white' : 'text-slate-900'"
            class="text-lg font-bold tracking-widest uppercase text-xs tracking-[0.2em] mb-2"
          >
            Your cart is currently empty
          </h2>

          <p
            :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'"
            class="max-w-xs text-xs font-light leading-relaxed mb-8"
          >
            Looks like you haven't selected any collections yet. Start exploring our latest modern tech drops.
          </p>

          <router-link
            to="/shop"
            :class="
              mode.darkMode
                ? 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/20'
                : 'bg-slate-900 hover:bg-black shadow-slate-950/15'
            "
            class="px-8 py-4 rounded-xl text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-lg active:scale-95"
          >
            Continue Browsing
          </router-link>
        </div>

        <!-- STATE B: ACTIVE CART ITEMS LIST -->
        <div
          v-else
          class="w-full flex flex-col gap-6"
        >
          <!-- Premium Luxury Item Card Component -->
          <div
            v-for="item in cartStore.cart"
            :key="item.id"
            :class="
              mode.darkMode
                ? 'bg-[#090d16] border-slate-900/60 shadow-black/40'
                : 'bg-white border-slate-100 shadow-slate-200/50'
            "
            class="rounded-3xl p-4 sm:p-5 border shadow-xl hover:shadow-2xl transition-all duration-500 group"
          >
            <div class="flex flex-row justify-between items-start gap-4 sm:gap-6">

              <!-- Image & Content Block (Left Section) -->
              <div class="flex gap-4 sm:gap-6 flex-1 min-w-0">

                <!-- Photo Wrapper Frame -->
                <div
                  class="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 bg-slate-50 border border-slate-100 p-2 dark:bg-white flex items-center justify-center transition-colors"
                >
                  <img
                    :src="item.image"
                    :alt="item.title"
                    class="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <!-- Text & Metrical Quantity controls -->
                <div class="flex flex-col justify-between flex-1 min-w-0 py-1">
                  <div class="space-y-1">
                    <h2
                      :class="mode.darkMode ? 'text-white' : 'text-slate-900'"
                      class="text-base font-bold tracking-tight line-clamp-1"
                    >
                      {{ item.title }}
                    </h2>

                    <p
                      :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'"
                      class="text-xs font-light line-clamp-2 leading-relaxed"
                    >
                      {{ item.description }}
                    </p>
                  </div>

                  <!-- Stepper Component (Matches Contact/About design guidelines) -->
                  <div
                    :class="
                      mode.darkMode
                        ? 'bg-[#030712] border-slate-800/80'
                        : 'bg-slate-50 border-slate-200'
                    "
                    class="flex items-center justify-between rounded-xl p-1 w-28 sm:w-32 mt-3 border shadow-inner"
                  >
                    <!-- Decrement Button -->
                    <button
                      @click="cartStore.updateQty(item.id, -1)"
                      :class="
                        mode.darkMode
                          ? 'bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-white'
                          : 'bg-white hover:bg-slate-900 hover:text-white shadow-sm text-slate-600'
                      "
                      class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg transition-all duration-300 flex items-center justify-center font-bold text-xs cursor-pointer active:scale-90"
                    >
                      <i class="bi bi-dash"></i>
                    </button>

                    <!-- Present Qty Value -->
                    <span
                      :class="mode.darkMode ? 'text-white' : 'text-slate-900'"
                      class="font-bold text-xs sm:text-sm"
                    >
                      {{ item.qty }}
                    </span>

                    <!-- Increment Button -->
                    <button
                      @click="cartStore.addToCart(item)"
                      :class="
                        mode.darkMode
                          ? 'bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-white'
                          : 'bg-white hover:bg-slate-900 hover:text-white shadow-sm text-slate-600'
                      "
                      class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg transition-all duration-300 flex items-center justify-center font-bold text-xs cursor-pointer active:scale-90"
                    >
                      <i class="bi bi-plus"></i>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Delete & Pricing Matrix (Right Section) -->
              <div class="flex flex-col items-end justify-between h-24 sm:h-28 py-1 shrink-0">
                <!-- Delete Card Button -->
                <button
                  @click="cartStore.removeFromCart(item.id)"
                  class="text-slate-400 hover:text-red-500 dark:text-slate-600 dark:hover:text-red-400 transition-colors duration-300 cursor-pointer p-1"
                >
                  <i class="bi bi-x-lg text-sm"></i>
                </button>

                <!-- Combined calculated Total label -->
                <div class="text-right">
                  <h3
                    :class="mode.darkMode ? 'text-white' : 'text-slate-900'"
                    class="text-base sm:text-xl font-black tracking-tight"
                  >
                    ${{ (item.price * item.qty).toFixed(2) }}
                  </h3>
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- RIGHT SIDEBAR COLUMN: GEOMETRIC ORDER SUMMARY STICKY -->
        <div v-if="cartStore.cart.length > 0" class="w-full lg:sticky lg:top-8">
          <div
            :class="
              mode.darkMode
                ? 'bg-[#090d16] border-slate-900 shadow-black/40'
                : 'bg-white border-slate-100 shadow-slate-200/50'
            "
            class="rounded-3xl border shadow-2xl p-6 sm:p-8"
          >
            <!-- Title Header Label -->
            <h2
              :class="mode.darkMode ? 'text-white' : 'text-slate-900'"
              class="text-xs font-bold tracking-[0.15em] uppercase mb-8"
            >
              Order Summary
            </h2>

            <!-- Financial Accumulator Presentation Rows -->
            <div class="space-y-4">
              
              <!-- Total Items Count Info -->
              <div class="flex justify-between items-center text-xs font-medium">
                <span :class="mode.darkMode ? 'text-slate-400' : 'text-slate-400'">Gross Items Base</span>
                <span :class="mode.darkMode ? 'text-slate-200' : 'text-slate-800'" class="font-bold">
                  ${{ subtotal.toFixed(2) }}
                </span>
              </div>

              <!-- Net Subtotal Pricing Entry -->
              <div class="flex justify-between items-center text-xs font-medium">
                <span :class="mode.darkMode ? 'text-slate-400' : 'text-slate-400'">Subtotal Amount</span>
                <span :class="mode.darkMode ? 'text-slate-200' : 'text-slate-800'" class="font-bold">
                  ${{ subtotal.toFixed(2) }}
                </span>
              </div>

              <!-- Shipping Tariffs Status -->
              <div class="flex justify-between items-center text-xs font-medium">
                <span :class="mode.darkMode ? 'text-slate-400' : 'text-slate-400'">Complimentary Shipping</span>
                <span class="font-bold text-emerald-500 uppercase text-[10px] tracking-wider">Free</span>
              </div>

              <!-- Internal VAT Assessment Rate -->
              <div class="flex justify-between items-center text-xs font-medium">
                <span :class="mode.darkMode ? 'text-slate-400' : 'text-slate-400'">Value Added Tax (10%)</span>
                <span :class="mode.darkMode ? 'text-slate-200' : 'text-slate-800'" class="font-bold">
                  ${{ tax.toFixed(2) }}
                </span>
              </div>

              <!-- Linear Segment Breakdown Line Divider -->
              <div class="border-t border-dashed border-slate-200 dark:border-slate-800 my-6 pt-2"></div>

              <!-- Complete Grand Net Aggregate Evaluation -->
              <div class="flex justify-between items-baseline">
                <span :class="mode.darkMode ? 'text-white' : 'text-slate-900'" class="text-xs font-bold tracking-wider uppercase">
                  Grand Total
                </span>
                <span :class="mode.darkMode ? 'text-white' : 'text-slate-900'" class="text-2xl font-black tracking-tight text-indigo-500">
                  ${{ finalTotal.toFixed(2) }}
                </span>
              </div>
            </div>

            <!-- PRIMITIVE CTA DISPATCH TRIGGERS -->
            <div class="space-y-3 mt-8">
              <!-- SECURE DEPLOYMENT CHECKOUT PROCEED ACTION -->
              <button
                @click="goCheckout"
                :class="
                  mode.darkMode
                    ? 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/10'
                    : 'bg-slate-900 hover:bg-black shadow-slate-950/15'
                "
                class="w-full py-4 rounded-xl text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 active:scale-97 cursor-pointer shadow-lg flex justify-center items-center gap-2"
              >
                <span>Proceed to Secure Checkout</span>
                <i class="bi bi-shield-lock text-sm"></i>
              </button>

              <!-- SHOP ROLLING NAVIGATION BUTTON LINK -->
              <router-link
                to="/shop"
                :class="
                  mode.darkMode
                    ? 'border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900/50'
                    : 'border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                "
                class="block text-center w-full py-4 rounded-xl font-bold text-xs tracking-wider uppercase border transition-colors duration-300"
              >
                Continue Browsing
              </router-link>
            </div>

            <!-- GATEWAY CREDENTIAL EMBLEMS FOLLOWER SHIELD -->
            <div class="mt-8 border-t border-slate-100 dark:border-slate-900/60 pt-6 text-center">
              <p :class="mode.darkMode ? 'text-slate-500' : 'text-slate-400'" class="text-[10px] uppercase tracking-widest font-bold mb-3">
                Secure SSL Encrypted Gateway
              </p>

              <div :class="mode.darkMode ? 'text-slate-600' : 'text-slate-300'" class="flex justify-center gap-6 text-xl items-center">
                <i class="bi bi-credit-card hover:text-indigo-500 transition-colors" title="Credit Cards"></i>
                <i class="bi bi-paypal hover:text-indigo-500 transition-colors" title="PayPal Gateways"></i>
                <i class="bi bi-shield-check hover:text-indigo-500 transition-colors" title="PCI Compliant SSL"></i>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom modern minimal scrollbar mechanics */
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #6366f1;
  border-radius: 10px;
}
</style>