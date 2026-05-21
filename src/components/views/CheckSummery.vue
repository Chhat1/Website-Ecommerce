<script setup>
import { onMounted, computed } from "vue";
import { useCartStore } from "../../stores/cartStore";
import { useProductStore } from "../../stores/productStore";
import { useDarkModeStore } from "../../stores/darkMode";
import { useRouter } from "vue-router";

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
    :class="mode.darkMode ? 'bg-[#0f172a]' : 'bg-[#f8fafc]'"
    class="shopping-cart min-h-screen py-6 lg:py-10 transition-all duration-300"
  >
    <div class="container mx-auto lg:px-0 px-4">
      <!-- TITLE -->
      <div class="text-center mb-10 lg:mb-14">
        <h1
          :class="mode.darkMode ? 'text-white' : 'text-gray-900'"
          class="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3"
        >
          Your Shopping Cart
        </h1>

        <p
          :class="mode.darkMode ? 'text-slate-300' : 'text-gray-500'"
          class="text-sm sm:text-base max-w-2xl mx-auto leading-7"
        >
          Review your selected products before proceeding to secure checkout.
        </p>
      </div>

      <!-- Main Item cart -->
      <div
        class="flex flex-col lg:flex-row justify-between items-start gap-8"
      >

        
        <!-- EMPTY CART -->
        <div
          v-if="cartStore.cart.length === 0"
          :class="
            mode.darkMode
              ? 'bg-[#1e293b] border border-[#334155]'
              : 'bg-white border border-gray-200'
          "
          class="w-full lg:w-[65%] min-h-125 rounded-3xl shadow-xl flex flex-col justify-center items-center text-center px-6"
        >
          <!-- Icon -->
          <div
            :class="
              mode.darkMode
                ? 'bg-blue-500/20 text-blue-400'
                : 'bg-gray-100 text-gray-400'
            "
            class="w-28 h-28 rounded-full flex items-center justify-center mb-8"
          >
            <i class="bi bi-bag-x text-5xl"></i>
          </div>

          <!-- Title -->
          <h1
            :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
            class="text-2xl lg:text-4xl font-bold mb-3"
          >
            Your cart is empty
          </h1>

          <!-- Description -->
          <p
            :class="mode.darkMode ? 'text-slate-400' : 'text-gray-500'"
            class="max-w-md leading-7 mb-8"
          >
            Looks like you haven’t added any products to your cart yet.
            Start exploring our latest tech collection.
          </p>

          <!-- Button -->
          <router-link
            to="/shop"
            :class="
              mode.darkMode
                ? 'bg-blue-500 hover:bg-blue-600'
                : 'bg-black hover:bg-gray-800'
            "
            class="px-10 py-4 rounded-2xl text-white font-semibold transition-all duration-300 hover:scale-105"
          >
            Continue Shopping
          </router-link>
        </div>

        
        <!-- CART ITEMS -->
        <div
          v-else
          class="w-full lg:w-[65%] flex flex-col gap-5"
        >
          <!-- Card -->
          <div
            v-for="item in cartStore.cart"
            :key="item.id"
            :class="
              mode.darkMode
                ? 'bg-[#1e293b] border border-[#334155]'
                : 'bg-white border border-gray-200'
            "
            class="rounded-3xl p-4 lg:p-5 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div
              class="flex flex-row justify-between items-start gap-4"
            >

              <!-- LEFT -->
              <div class="flex gap-4 flex-1 min-w-0">

                <!-- IMAGE -->
                <div
                  class="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl overflow-hidden bg-gray-100 shrink-0"
                >
                  <img
                    :src="item.images"
                    :alt="item.title"
                    class="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                  />
                </div>

                <!-- CONTENT -->
                <div
                  class="flex flex-col justify-between flex-1 min-w-0"
                >
                  <div>
                    <!-- Title -->
                    <h1
                      :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
                      class="text-sm lg:text-xl font-bold line-clamp-1 mb-1"
                    >
                      {{ item.title }}
                    </h1>

                    <!-- Description -->
                    <p
                      :class="
                        mode.darkMode
                          ? 'text-slate-400'
                          : 'text-gray-500'
                      "
                      class="text-[11px] lg:text-sm line-clamp-1"
                    >
                      {{ item.description }}
                    </p>
                  </div>

                  <!-- QUANTITY -->
                  <div
                    :class="
                      mode.darkMode
                        ? 'bg-[#0f172a] border border-[#334155]'
                        : 'bg-gray-50 border border-gray-200'
                    "
                    class="flex items-center justify-between rounded-full p-1 w-30 lg:w-36 mt-3"
                  >
                    <!-- Minus -->
                    <button
                      @click="cartStore.updateQty(item.id, -1)"
                      :class="
                        mode.darkMode
                          ? 'bg-blue-500 hover:bg-blue-600 text-white'
                          : 'bg-white hover:bg-black hover:text-white border border-gray-200'
                      "
                      class="w-8 h-8 lg:w-10 lg:h-10 rounded-full transition-all duration-300 flex items-center justify-center font-bold cursor-pointer"
                    >
                      -
                    </button>

                    <!-- Qty -->
                    <span
                      :class="
                        mode.darkMode ? 'text-white' : 'text-gray-800'
                      "
                      class="font-bold text-sm lg:text-base"
                    >
                      {{ item.qty }}
                    </span>

                    <!-- Plus -->
                    <button
                      @click="cartStore.addToCart(item)"
                      :class="
                        mode.darkMode
                          ? 'bg-blue-500 hover:bg-blue-600 text-white'
                          : 'bg-white hover:bg-black hover:text-white border border-gray-200'
                      "
                      class="w-8 h-8 lg:w-10 lg:h-10 rounded-full transition-all duration-300 flex items-center justify-center font-bold cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <!-- RIGHT -->
              <div
                class="flex flex-col items-end justify-between h-24 lg:h-32"
              >
                <!-- Remove -->
                <button
                  @click="cartStore.removeFromCart(item.id)"
                  class="text-gray-400 hover:text-red-500 transition-all duration-300 cursor-pointer"
                >
                  <i class="bi bi-x-lg text-lg"></i>
                </button>

                <!-- Price -->
                <div class="text-right">
                  <h1
                    :class="mode.darkMode ? 'text-white' : 'text-gray-900'"
                    class="text-[13px] lg:text-2xl font-bold"
                  >
                    $
                    {{
                      (item.price * item.qty).toFixed(2)
                    }}
                  </h1>
                </div>
              </div>

            </div>
          </div>
        </div>

       
        <!-- ORDER SUMMARY -->
        <div class="w-full lg:w-[30%]">
          <div
            :class="
              mode.darkMode
                ? 'bg-[#1e293b] border border-[#334155]'
                : 'bg-white border border-gray-200'
            "
            class="rounded-3xl shadow-xl p-5 sm:p-7 lg:sticky lg:top-5"
          >
            <!-- Title -->
            <h1
              :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
              class="text-2xl sm:text-3xl font-bold mb-8"
            >
              Order Summary
            </h1>

            <!-- Summary -->
            <div class="space-y-5">

              <!-- Items -->
              <div class="flex justify-between items-center">
                <span
                  :class="
                    mode.darkMode ? 'text-slate-300' : 'text-gray-500'
                  "
                >
                  Items
                </span>

                <span
                  :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
                  class="font-semibold"
                >
                  {{ subtotal }}
                </span>
              </div>

              <!-- Subtotal -->
              <div class="flex justify-between items-center">
                <span
                  :class="
                    mode.darkMode ? 'text-slate-300' : 'text-gray-500'
                  "
                >
                  Subtotal
                </span>

                <span
                  :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
                  class="font-semibold"
                >
                  ${{ subtotal.toFixed(2) }}
                </span>
              </div>

              <!-- Shipping -->
              <div class="flex justify-between items-center">
                <span
                  :class="
                    mode.darkMode ? 'text-slate-300' : 'text-gray-500'
                  "
                >
                  Shipping
                </span>

                <span class="font-semibold text-green-500">
                  Free
                </span>
              </div>

              <!-- Tax -->
              <div class="flex justify-between items-center">
                <span
                  :class="
                    mode.darkMode ? 'text-slate-300' : 'text-gray-500'
                  "
                >
                  Tax (10%)
                </span>

                <span
                  :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
                  class="font-semibold"
                >
                  ${{ tax.toFixed(2) }}
                </span>
              </div>

              <!-- Divider -->
              <div
                class="border-t border-dashed border-gray-300 pt-5"
              ></div>

              <!-- Total -->
              <div class="flex justify-between items-center">
                <span
                  :class="mode.darkMode ? 'text-white' : 'text-gray-900'"
                  class="text-xl font-bold"
                >
                  Total
                </span>

                <span
                  :class="mode.darkMode ? 'text-white' : 'text-black'"
                  class="text-3xl font-extrabold"
                >
                  ${{ finalTotal.toFixed(2) }}
                </span>
              </div>
            </div>

            <!-- Checkout -->
            <button
            @click="goCheckout"
              :class="
                mode.darkMode
                  ? 'bg-blue-500 hover:bg-blue-600'
                  : 'bg-black hover:bg-gray-800'
              "
              class="w-full py-4 rounded-2xl mt-8 text-white text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              Proceed to Checkout
            </button>

            <!-- Continue Shopping -->
            <router-link
              to="/shop"
              :class="
                mode.darkMode
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
              "
              class="block text-center w-full py-4 rounded-2xl mt-4 font-medium transition-all duration-300"
            >
              Continue Shopping
            </router-link>

            <!-- Payment -->
            <div
              :class="
                mode.darkMode ? 'text-slate-300' : 'text-gray-400'
              "
              class="mt-8"
            >
              <p class="text-center text-sm mb-4">
                Secure Payment Methods
              </p>

              <div
                class="flex justify-center gap-5 text-3xl"
              >
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