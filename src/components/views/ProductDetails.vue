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

const showDescription = ref(false);
</script>

<template>
  <!-- 1. Header (Mobile Back Button) -->
  <div
    :class="mode.darkMode ? 'bg-[#030712]' : 'bg-[#fafafa]'"
    class="py-4 px-6 lg:hidden"
  >
    <router-link
      to="/shop"
      class="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase"
      :class="mode.darkMode ? 'text-slate-500' : 'text-slate-400'"
    >
      <i class="bi bi-arrow-left"></i> Back
    </router-link>
  </div>


  <div
    :class="mode.darkMode ? 'bg-[#030712]' : 'bg-[#fafafa]'"
    class="min-h-screen relative py-10 lg:py-16 transition-colors duration-500"
  >
    <div class="buttonBackPage lg:flex gap-2 hidden absolute top-2 left-35 text-gray-500">
        <router-link class="hover:text-black transition-all duration-300 ease-in-out hover:mr-5o" to="/">Home <i class="bi bi-chevron-right"></i></router-link>
        Details
        <h1 v-if="productStoreId.productId">
          {{ productStoreId.productId.title }}
        </h1>
    </div>

    <div class="max-w-7xl mx-auto px-4 lg:px-6">
      <!-- Loading State -->
      <div
        v-if="productStoreId.isLoading"
        class="flex flex-col lg:flex-row gap-12 lg:justify-center animate-pulse"
      >
        <div
          class="lg:w-1/2 w-full aspect-square rounded-3xl"
          :class="mode.darkMode ? 'bg-slate-900' : 'bg-slate-200'"
        ></div>
        <div class="lg:w-1/2 w-full space-y-6">
          <div
            class="h-8 w-32 rounded-full"
            :class="mode.darkMode ? 'bg-slate-900' : 'bg-slate-200'"
          ></div>
          <div
            class="h-12 w-full rounded-xl"
            :class="mode.darkMode ? 'bg-slate-900' : 'bg-slate-200'"
          ></div>
        </div>
      </div>

      <!-- Product Section -->
      <div
        v-else-if="productStoreId.productId"
        class="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start"
      >
        <!-- Image Section -->
        <div class="lg:w-1/2 w-full">
          <div
            :class="
              mode.darkMode
                ? 'bg-[#090d16] border-slate-900 shadow-black/40'
                : 'bg-white border-slate-100 shadow-slate-200/50'
            "
            class="rounded-3xl p-6 lg:p-10 border shadow-2xl transition-all duration-500"
          >
            <img
              class="w-full aspect-square object-contain hover:scale-105 transition-all duration-1000"
              :src="productStoreId.productId.image"
              :alt="productStoreId.productId.title"
            />
          </div>
        </div>

        <!-- Content Section -->
        <div class="lg:w-1/2 w-full space-y-8">
          <!-- Category -->
          <span
            :class="
              mode.darkMode
                ? 'bg-indigo-900/20 text-indigo-400 border-indigo-500/20'
                : 'bg-indigo-50 text-indigo-600 border-indigo-100'
            "
            class="inline-flex items-center px-5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.25em] uppercase border"
          >
            {{ productStoreId.productId.category }}
          </span>

          <!-- Title -->
          <h1
            :class="mode.darkMode ? 'text-white' : 'text-slate-950'"
            class="text-4xl lg:text-5xl font-black tracking-tight leading-tight"
          >
            {{ productStoreId.productId.title }}
          </h1>

          <!-- Price -->
          <h2 class="text-3xl font-black text-indigo-500">
            ${{ parseFloat(productStoreId.productId.price).toFixed(2) }}
          </h2>

          <!-- Description (Desktop) -->
          <div class="hidden lg:block space-y-3">
            <h3
              :class="mode.darkMode ? 'text-slate-500' : 'text-slate-400'"
              class="text-[10px] font-bold uppercase tracking-[0.3em]"
            >
              Product Description
            </h3>
            <p
              :class="mode.darkMode ? 'text-slate-300' : 'text-slate-600'"
              class="leading-relaxed font-light"
            >
              {{ productStoreId.productId.description }}
            </p>
          </div>

          <!-- Description (Mobile Dropdown) -->
          <div class="lg:hidden border-y border-slate-200 dark:border-slate-800 py-4">
            <button
              @click="showDescription = !showDescription"
              class="flex items-center justify-between w-full uppercase text-[10px] font-bold tracking-[0.2em]"
            >
              <span>Description</span>
              <i
                class="bi bi-chevron-down transition-transform duration-300"
                :class="showDescription ? 'rotate-180' : ''"
              ></i>
            </button>
            <transition
              enter-active-class="transition-all duration-300"
              leave-active-class="transition-all duration-200"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-60"
              leave-from-class="opacity-100 max-h-60"
              leave-to-class="opacity-0 max-h-0"
            >
              <p v-show="showDescription" class="mt-4 text-sm text-slate-500">
                {{ productStoreId.productId.description }}
              </p>
            </transition>
          </div>

          <!-- Quantity -->
          <div class="space-y-4">
            <h3
              :class="mode.darkMode ? 'text-slate-500' : 'text-slate-400'"
              class="text-[10px] font-bold uppercase tracking-[0.3em]"
            >
              Quantity
            </h3>
            <div
              :class="
                mode.darkMode
                  ? 'bg-[#090d16] border-slate-800'
                  : 'bg-white border-slate-200'
              "
              class="inline-flex items-center rounded-2xl border p-1.5 w-fit"
            >
              <button
                @click="decreaseQty"
                class="w-12 h-12 cursor-pointer rounded-xl hover:bg-indigo-500 hover:text-white transition-all font-bold"
              >
                -
              </button>
              <span class="w-16 text-center font-black">{{ qty }}</span>
              <button
                @click="increaseQty"
                class="w-12 h-12 cursor-pointer rounded-xl hover:bg-indigo-500 hover:text-white transition-all font-bold"
              >
                +
              </button>
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              @click="handleAddToCart"
              :class="
                mode.darkMode
                  ? 'border-slate-800 hover:bg-slate-800 text-white'
                  : 'border-slate-200 hover:bg-slate-100 text-slate-900'
              "
              class="flex-1 py-4 rounded-xl font-bold text-[11px] uppercase cursor-pointer tracking-widest border transition-all"
            >
              Add To Cart
            </button>
            <button
              @click="handleBuyNow"
              :class="
                mode.darkMode
                  ? 'bg-indigo-600 hover:bg-indigo-500'
                  : 'bg-slate-950 hover:bg-black'
              "
              class="flex-1 py-4 rounded-xl font-bold text-[11px] uppercase tracking-widest text-white transition-all shadow-lg cursor-pointer"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <!-- Product Not Found -->
      <div
        v-else
        class="flex flex-col items-center justify-center min-h-[50vh] text-center"
      >
        <h1 class="text-2xl font-black uppercase tracking-widest mb-6">
          Product Not Found
        </h1>
        <router-link
          to="/shop"
          class="px-8 py-3 cursor-pointer rounded-xl bg-indigo-500 text-white font-bold text-xs uppercase tracking-widest"
          >Back To Shop</router-link
        >
      </div>
    </div>
  </div>
</template>
