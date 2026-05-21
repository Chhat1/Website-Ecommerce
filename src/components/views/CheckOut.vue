<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "@/stores/cartStore";
import { useDarkModeStore } from "@/stores/darkMode";
import { useRouter } from "vue-router";

const cartStore = useCartStore();
const mode = useDarkModeStore();
const router = useRouter();

/* ---------------- FORM ---------------- */
const form = ref({
  fullname: "",
  email: "",
  phone: "",
  city: "",
  address: "",
  payment: "ABA",
});

/* ---------------- ERRORS ---------------- */
const errors = ref({});

/* ---------------- VALIDATION ---------------- */
const validateForm = () => {
  errors.value = {};

  if (!form.value.fullname) errors.value.fullname = "Full name is required";
  if (!form.value.email) errors.value.email = "Email is required";
  if (!form.value.phone) errors.value.phone = "Phone is required";
  if (!form.value.city) errors.value.city = "City is required";
  if (!form.value.address) errors.value.address = "Address is required";

  return Object.keys(errors.value).length === 0;
};

/* ---------------- CART TOTAL ---------------- */
const subtotal = computed(() => cartStore.totalPrice || 0);
const tax = computed(() => subtotal.value * 0.1);
const total = computed(() => subtotal.value + tax.value);

/* ---------------- STATE ---------------- */
const loading = ref(false);
const showSuccess = ref(false);

/* ---------------- VALID CHECK ---------------- */
const isValid = computed(() => {
  return (
    form.value.fullname &&
    form.value.email &&
    form.value.phone &&
    form.value.city &&
    form.value.address
  );
});

/* ---------------- PLACE ORDER ---------------- */
const placeOrder = () => {
  if (!validateForm()) return;

  loading.value = true;

  setTimeout(() => {
    loading.value = false;
    showSuccess.value = true;

    // clear cart after success
    cartStore.cart = [];
  }, 2000);
};
</script>

<template>
  <div
    class="min-h-screen py-6 lg:py-10 transition-all duration-300"
    :class="mode.darkMode ? 'bg-[#0f172a]' : 'bg-[#f8fafc]'"
  >
    <div class="container mx-auto px-4">

      <!-- TITLE -->
      <div class="text-center mb-10">
        <h1
          class="text-3xl lg:text-5xl font-extrabold mb-3"
          :class="mode.darkMode ? 'text-white' : 'text-gray-900'"
        >
          Checkout
        </h1>

        <p
          class="max-w-2xl mx-auto"
          :class="mode.darkMode ? 'text-slate-300' : 'text-gray-500'"
        >
          Complete your order information
        </p>
      </div>

      <!-- GRID -->
      <div class="flex flex-col lg:flex-row gap-8">

        <!-- LEFT -->
        <div class="w-full lg:w-[65%] space-y-6">

          <!-- CUSTOMER INFO -->
          <div
            class="rounded-3xl p-6 shadow-xl"
            :class="mode.darkMode
              ? 'bg-[#1e293b] border border-[#334155]'
              : 'bg-white border border-gray-200'"
          >
            <h2 class="text-2xl font-bold mb-6"
              :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
            >
              Customer Information
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

              <!-- FULLNAME -->
              <div>
                <input
                  v-model="form.fullname"
                  placeholder="Full Name"
                  class="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
                  :class="mode.darkMode
                    ? 'bg-[#0f172a] border-[#334155] text-white'
                    : 'border-gray-300'"
                />
                <p v-if="errors.fullname" class="text-red-500 text-sm mt-1">
                  {{ errors.fullname }}
                </p>
              </div>

              <!-- EMAIL -->
              <div>
                <input
                  v-model="form.email"
                  placeholder="Email"
                  class="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
                  :class="mode.darkMode
                    ? 'bg-[#0f172a] border-[#334155] text-white'
                    : 'border-gray-300'"
                />
                <p v-if="errors.email" class="text-red-500 text-sm mt-1">
                  {{ errors.email }}
                </p>
              </div>

              <!-- PHONE -->
              <div>
                <input
                  v-model="form.phone"
                  placeholder="Phone"
                  class="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
                  :class="mode.darkMode
                    ? 'bg-[#0f172a] border-[#334155] text-white'
                    : 'border-gray-300'"
                />
                <p v-if="errors.phone" class="text-red-500 text-sm mt-1">
                  {{ errors.phone }}
                </p>
              </div>

              <!-- CITY -->
              <div>
                <input
                  v-model="form.city"
                  placeholder="City"
                  class="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
                  :class="mode.darkMode
                    ? 'bg-[#0f172a] border-[#334155] text-white'
                    : 'border-gray-300'"
                />
                <p v-if="errors.city" class="text-red-500 text-sm mt-1">
                  {{ errors.city }}
                </p>
              </div>

            </div>

            <!-- ADDRESS -->
            <textarea
              v-model="form.address"
              placeholder="Address"
              rows="4"
              class="w-full mt-4 px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
              :class="mode.darkMode
                ? 'bg-[#0f172a] border-[#334155] text-white'
                : 'border-gray-300'"
            ></textarea>

            <p v-if="errors.address" class="text-red-500 text-sm mt-1">
              {{ errors.address }}
            </p>
          </div>

          <!-- PAYMENT -->
          <div
            class="rounded-3xl p-6 shadow-xl"
            :class="mode.darkMode
              ? 'bg-[#1e293b] border border-[#334155]'
              : 'bg-white border border-gray-200'"
          >
            <h2 class="text-2xl font-bold mb-6"
              :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
            >
              Payment Method
            </h2>

            <div class="space-y-3">

              <label class="flex items-center justify-between p-4 rounded-2xl border cursor-pointer"
                :class="mode.darkMode
                  ? 'border-[#334155] hover:border-blue-500'
                  : 'border-gray-200 hover:border-black'"
              >
                <div class="flex items-center gap-3">
                  <input type="radio" value="ABA" v-model="form.payment" />
                  <span :class="mode.darkMode ? 'text-white' : ''">ABA Pay</span>
                </div>
              </label>

              <label class="flex items-center justify-between p-4 rounded-2xl border cursor-pointer"
                :class="mode.darkMode
                  ? 'border-[#334155] hover:border-blue-500'
                  : 'border-gray-200 hover:border-black'"
              >
                <div class="flex items-center gap-3">
                  <input type="radio" value="ACLEDA" v-model="form.payment" />
                  <span :class="mode.darkMode ? 'text-white' : ''">ACLEDA</span>
                </div>
              </label>

              <label class="flex items-center justify-between p-4 rounded-2xl border cursor-pointer"
                :class="mode.darkMode
                  ? 'border-[#334155] hover:border-blue-500'
                  : 'border-gray-200 hover:border-black'"
              >
                <div class="flex items-center gap-3">
                  <input type="radio" value="COD" v-model="form.payment" />
                  <span :class="mode.darkMode ? 'text-white' : ''">Cash On Delivery</span>
                </div>
              </label>

            </div>
          </div>

        </div>

        <!-- RIGHT -->
        <div class="w-full lg:w-[30%]">

          <div
            class="rounded-3xl p-6 shadow-xl lg:sticky lg:top-5"
            :class="mode.darkMode
              ? 'bg-[#1e293b] border border-[#334155]'
              : 'bg-white border border-gray-200'"
          >

            <h2 class="text-2xl font-bold mb-6"
              :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
            >
              Order Summary
            </h2>

            <div class="space-y-4">
              <div
                v-for="item in cartStore.cart"
                :key="item.id"
                class="flex justify-between"
              >
                <div>
                  <p class="font-medium"
                    :class="mode.darkMode ? 'text-white' : 'text-gray-800'"
                  >
                    {{ item.title }}
                  </p>
                  <p class="text-sm text-gray-400">Qty: {{ item.qty }}</p>
                </div>

                <p class="font-bold">
                  ${{ (item.price * item.qty).toFixed(2) }}
                </p>
              </div>
            </div>

            <div class="border-t border-dashed my-6"></div>

            <div class="space-y-3">

              <div class="flex justify-between">
                <span class="text-gray-400">Subtotal</span>
                <span class="font-semibold">${{ subtotal.toFixed(2) }}</span>
              </div>

              <div class="flex justify-between">
                <span class="text-gray-400">Tax (10%)</span>
                <span class="font-semibold">${{ tax.toFixed(2) }}</span>
              </div>

              <div class="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${{ total.toFixed(2) }}</span>
              </div>

            </div>

            <!-- BUTTON -->
            <button
              @click="placeOrder"
              :disabled="!isValid || loading"
              class="w-full mt-6 py-4 rounded-2xl text-white font-semibold transition-all"
              :class="(!isValid || loading)
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-black hover:bg-gray-800'"
            >
              {{ loading ? "Processing..." : "Place Order" }}
            </button>

          </div>

        </div>

      </div>
    </div>
  </div>

  <!-- SUCCESS MODAL -->
  <div
    v-if="showSuccess"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
  >
    <div
      class="w-[90%] max-w-md rounded-3xl p-8 text-center shadow-2xl"
      :class="mode.darkMode
        ? 'bg-[#1e293b] border border-[#334155]'
        : 'bg-white border border-gray-200'"
    >

      <div class="mx-auto w-20 h-20 flex items-center justify-center rounded-full mb-5 bg-green-100">
        <i class="bi bi-check2-circle text-5xl text-green-500"></i>
      </div>

      <h2 class="text-2xl font-extrabold mb-3"
        :class="mode.darkMode ? 'text-white' : 'text-gray-900'"
      >
        Order Successful
      </h2>

      <p class="mb-6 text-sm text-gray-500">
        Your order has been placed successfully.
      </p>

      <button
        @click="() => { showSuccess = false; router.push('/shop'); }"
        class="w-full py-3 rounded-2xl font-semibold text-white bg-black hover:bg-gray-800"
      >
        Continue Shopping
      </button>

    </div>
  </div>
</template>