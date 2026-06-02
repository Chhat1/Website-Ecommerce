<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "../../stores/cartStore";
import { useDarkModeStore } from "../../stores/darkMode";
import { useRouter } from "vue-router";

// IMPORT QR IMAGES
import qrABA from "../../../src/assets/images/QrABA.jpg";
import qrACLEDA from "../../../src/assets/images/acledaqe.jpg";

// STATE
const cartStore = useCartStore();
const mode = useDarkModeStore();
const router = useRouter();

const loading = ref(false);
const showSuccess = ref(false);

const paymentMethod = ref("");
const showQR = ref(false);
const qrImage = ref("");

const errors = ref({});

// FORM
const form = ref({
  fullname: "",
  email: "",
  phone: "",
  city: "",
  address: "",
});

// KHQR MAP
const khqrMap = {
  ABA: qrABA,
  ACLEDA: qrACLEDA,
};

// VALIDATE FORM
const validateForm = () => {
  errors.value = {};

  if (!form.value.fullname) errors.value.fullname = "Full name is required";

  if (!form.value.email) errors.value.email = "Email is required";

  if (!form.value.phone) errors.value.phone = "Phone is required";

  if (!form.value.city) errors.value.city = "City is required";

  if (!form.value.address) errors.value.address = "Address is required";

  return Object.keys(errors.value).length === 0;
};

// CART TOTAL
const subtotal = computed(() => cartStore.totalPrice || 0);
const tax = computed(() => subtotal.value * 0.1);
const total = computed(() => subtotal.value + tax.value);

// VALID CHECK
const isValid = computed(() => {
  return (
    form.value.fullname &&
    form.value.email &&
    form.value.phone &&
    form.value.city &&
    form.value.address
  );
});

// PLACE ORDER
const placeOrder = () => {
  // VALIDATE
  if (!validateForm()) return;

  // CHECK PAYMENT
  if (!paymentMethod.value) {
    alert("Please select payment method");
    return;
  }

  // CASH ON DELIVERY
  if (paymentMethod.value === "COD") {
    loading.value = true;

    setTimeout(() => {
      loading.value = false;
      showSuccess.value = true;

      cartStore.cart = [];
    }, 2000);

    return;
  }

  // SHOW KHQR
  qrImage.value = khqrMap[paymentMethod.value];
  showQR.value = true;
};

// CONFIRM PAYMENT
const confirmPayment = () => {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;

    showQR.value = false;
    showSuccess.value = true;

    cartStore.cart = [];
  }, 2000);
};

const imgPayments = [
  {
    id: "ABA",
    name: "ABA Pay",
    desc: "Instant spatial gateway transfer",
    img: "images/khoraba.webp",
  },
  {
    id: "ACLEDA",
    name: "ACLEDA ToanChet",
    desc: "Secure local payment gateway",
    img: "images/acleda.png",
  },
  {
    id: "COD",
    name: "Cash On Delivery",
    desc: "Pay with physical cash upon arrival",
    img: "images/money.png",
  },
];

</script>

<template>
  <!-- Mobile Back Navigation -->
  <div
    :class="
      mode.darkMode
        ? 'bg-[#030712] border-slate-900'
        : 'bg-[#fafafa] border-slate-100'
    "
    class="py-4 lg:hidden px-4 border-b transition-colors duration-500"
  >
    <router-link
      to="/checksummery"
      class="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase"
    >
      <i
        :class="mode.darkMode ? 'text-white' : 'text-slate-900'"
        class="bi text-xl bi-arrow-left"
      ></i>
      <span :class="mode.darkMode ? 'text-slate-400' : 'text-slate-600'"
        >Back to Summary</span
      >
    </router-link>
  </div>

  <div
    class="min-h-screen pb-20 transition-colors duration-500"
    :class="mode.darkMode ? 'bg-[#030712]' : 'bg-[#fafafa]'"
  >
    <div class="max-w-7xl mx-auto px-4 lg:px-6">
      <!-- Editorial Header Section -->
      <div class="text-center pt-16 mb-12 space-y-4">
        <span
          class="text-xs font-bold tracking-[0.3em] text-indigo-500 uppercase"
          >Secure Order</span
        >
        <h1
          class="text-4xl lg:text-5xl font-black tracking-tight"
          :class="mode.darkMode ? 'text-white' : 'text-slate-900'"
        >
          Checkout
        </h1>
        <p
          class="max-w-xl mx-auto text-sm font-light leading-relaxed"
          :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'"
        >
          Complete your luxury order information below. Your personal details
          are completely protected.
        </p>
      </div>

      <!-- Main Columns Grid Layout -->
      <div
        class="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-start"
      >
        <!-- LEFT COL: Customer Info & Payment Vectors -->
        <div class="space-y-8">
          <!-- CUSTOMER INFO CARD -->
          <div
            class="rounded-3xl p-6 sm:p-8 border shadow-2xl transition-all duration-500"
            :class="
              mode.darkMode
                ? 'bg-[#090d16] border-slate-900 shadow-black/40'
                : 'bg-white border-slate-100 shadow-slate-200/50'
            "
          >
            <div class="mb-6 flex items-center justify-between">
              <h2
                class="text-sm font-bold tracking-tight uppercase  "
                :class="mode.darkMode ? 'text-white' : 'text-slate-900'"
              >
                Shipping Details
              </h2>
              <span
                class="text-[11px] font-bold uppercase tracking-wider text-indigo-500"
                >Step 1 of 2</span
              >
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- FULLNAME -->
              <div class="space-y-2">
                <label
                  :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'"
                  class="text-xs font-bold tracking-[0.15em] uppercase"
                  >Full Name</label
                >
                <input
                  v-model="form.fullname"
                  type="text"
                  placeholder="E.g. Sophia Loren"
                  class="w-full px-5 py-4 rounded-xl border outline-none text-[16px] transition-all duration-300 focus:ring-4 font-medium"
                  :class="
                    mode.darkMode
                      ? 'bg-[#030712] border-slate-800 text-white placeholder:text-slate-700 focus:border-indigo-500 focus:ring-indigo-500/10'
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:ring-slate-950/5'
                  "
                />
                <p
                  v-if="errors.fullname"
                  class="text-red-500 text-xs font-medium mt-1"
                >
                  <i class="bi bi-exclamation-circle mr-1"></i
                  >{{ errors.fullname }}
                </p>
              </div>

              <!-- EMAIL -->
              <div class="space-y-2">
                <label
                  :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'"
                  class="text-xs font-bold tracking-[0.15em] uppercase"
                  >Email Address</label
                >
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="sophia@example.com"
                  class="w-full px-5 py-4 rounded-xl border outline-none text-[16px] transition-all duration-300 focus:ring-4 font-medium"
                  :class="
                    mode.darkMode
                      ? 'bg-[#030712] border-slate-800 text-white placeholder:text-slate-700 focus:border-indigo-500 focus:ring-indigo-500/10'
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:ring-slate-950/5'
                  "
                />
                <p
                  v-if="errors.email"
                  class="text-red-500 text-xs font-medium mt-1"
                >
                  <i class="bi bi-exclamation-circle mr-1"></i
                  >{{ errors.email }}
                </p>
              </div>

              <!-- PHONE -->
              <div class="space-y-2">
                <label
                  :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'"
                  class="text-xs font-bold tracking-[0.15em] uppercase"
                  >Phone Number</label
                >
                <input
                  v-model="form.phone"
                  type="text"
                  placeholder="+855 12 345 678"
                  class="w-full px-5 py-4 rounded-xl border outline-none text-[16px] transition-all duration-300 focus:ring-4 font-medium"
                  :class="
                    mode.darkMode
                      ? 'bg-[#030712] border-slate-800 text-white placeholder:text-slate-700 focus:border-indigo-500 focus:ring-indigo-500/10'
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:ring-slate-950/5'
                  "
                />
                <p
                  v-if="errors.phone"
                  class="text-red-500 text-xs font-medium mt-1"
                >
                  <i class="bi bi-exclamation-circle mr-1"></i
                  >{{ errors.phone }}
                </p>
              </div>

              <!-- CITY -->
              <div class="space-y-2">
                <label
                  :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'"
                  class="text-xs font-bold tracking-[0.15em] uppercase"
                  >City / Province</label
                >
                <input
                  v-model="form.city"
                  type="text"
                  placeholder="Phnom Penh"
                  class="w-full px-5 py-4 rounded-xl border outline-none text-[16px] transition-all duration-300 focus:ring-4 font-medium"
                  :class="
                    mode.darkMode
                      ? 'bg-[#030712] border-slate-800 text-white placeholder:text-slate-700 focus:border-indigo-500 focus:ring-indigo-500/10'
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:ring-slate-950/5'
                  "
                />
                <p
                  v-if="errors.city"
                  class="text-red-500 text-xs font-medium mt-1"
                >
                  <i class="bi bi-exclamation-circle mr-1"></i>{{ errors.city }}
                </p>
              </div>
            </div>

            <!-- ADDRESS -->
            <div class="mt-6 space-y-2">
              <label
                :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'"
                class="text-xs font-bold tracking-[0.15em] uppercase"
                >Street Address</label
              >
              <textarea
                v-model="form.address"
                rows="4"
                placeholder="House number, Street name, District..."
                class="w-full px-5 py-4 rounded-xl border outline-none text-[16px] transition-all duration-300 focus:ring-4 font-medium resize-none"
                :class="
                  mode.darkMode
                    ? 'bg-[#030712] border-slate-800 text-white placeholder:text-slate-700 focus:border-indigo-500 focus:ring-indigo-500/10'
                    : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:ring-slate-950/5'
                "
              ></textarea>
              <p
                v-if="errors.address"
                class="text-red-500 text-xs font-medium mt-1"
              >
                <i class="bi bi-exclamation-circle mr-1"></i
                >{{ errors.address }}
              </p>
            </div>
          </div>

          <!-- PAYMENT METHODS CARD -->
          <div
            class="rounded-3xl p-6 sm:p-8 border shadow-2xl transition-all duration-500"
            :class="
              mode.darkMode
                ? 'bg-[#090d16] border-slate-900 shadow-black/40'
                : 'bg-white border-slate-100 shadow-slate-200/50'
            "
          >
            <div class="mb-6 flex items-center justify-between">
              <h2
                class="text-sm font-bold tracking-tight uppercase"
                :class="mode.darkMode ? 'text-white' : 'text-slate-900'"
              >
                Payment Method
              </h2>
              <span
                class="text-[11px] font-bold uppercase tracking-wider text-indigo-500"
                >Step 2 of 2</span
              >
            </div>

            <div class="grid grid-cols-1 gap-4">
              <!-- Method Loop -->
              <label
                v-for="method in imgPayments"
                :key="method.id"
                class="flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all duration-300"
                :class="[
                  paymentMethod === method.id
                    ? mode.darkMode
                      ? 'border-indigo-500 bg-indigo-500/5'
                      : 'border-slate-900 bg-slate-950/[0.02]'
                    : mode.darkMode
                    ? 'border-slate-800/80 hover:border-slate-700'
                    : 'border-slate-100 hover:border-slate-200',
                ]"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden border p-1 border-slate-100"
                  >
                    <img
                      :src="method.img"
                      class="w-full h-full object-contain"
                      :alt="method.name"
                    />
                  </div>
                  <div>
                    <span
                      class="block text-sm font-bold tracking-tight"
                      :class="mode.darkMode ? 'text-white' : 'text-slate-900'"
                    >
                      {{ method.name }}
                    </span>
                    <span
                      class="block text-xs font-light"
                      :class="
                        mode.darkMode ? 'text-slate-400' : 'text-slate-400'
                      "
                    >
                      {{ method.desc }}
                    </span>
                  </div>
                </div>

                <div class="flex items-center pr-2">
                  <input
                    type="radio"
                    :value="method.id"
                    v-model="paymentMethod"
                    class="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-slate-300"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>

        <!-- RIGHT COL: Fixed Sticky Order Summary -->
        <div class="w-full lg:sticky lg:top-8">
          <div
            class="rounded-3xl p-6 sm:p-8 border shadow-2xl transition-all duration-500"
            :class="
              mode.darkMode
                ? 'bg-[#090d16] border-slate-900 shadow-black/40'
                : 'bg-white border-slate-100 shadow-slate-200/50'
            "
          >
            <h2
              class="text-xs font-bold tracking-[0.15em] uppercase mb-6"
              :class="mode.darkMode ? 'text-white' : 'text-slate-900'"
            >
              Order Summary
            </h2>

            <!-- ITEMS NESTED SCROLL -->
            <div
              class="space-y-4 max-h-[240px] overflow-y-auto pr-2 divide-y divide-slate-100 dark:divide-slate-900/40"
            >
              <div
                v-for="(item, index) in cartStore.cart"
                :key="item.id"
                class="flex justify-between items-center"
                :class="{ 'pt-4': index > 0 }"
              >
                <div class="space-y-0.5">
                  <p
                    class="text-sm font-bold tracking-tight"
                    :class="mode.darkMode ? 'text-white' : 'text-slate-800'"
                  >
                    {{ item.title }}
                  </p>
                  <p class="text-xs font-medium text-slate-400">
                    Quantity:
                    <span class="text-indigo-500 font-bold">{{
                      item.qty
                    }}</span>
                  </p>
                </div>
                <p
                  class="text-sm font-bold tracking-tight"
                  :class="mode.darkMode ? 'text-white' : 'text-slate-900'"
                >
                  ${{ (item.price * item.qty).toFixed(2) }}
                </p>
              </div>
            </div>

            <!-- DASHED BORDER DIVIDER -->
            <div
              class="border-t border-dashed border-slate-200 dark:border-slate-800 my-6"
            ></div>

            <!-- PRICING STACK -->
            <div class="space-y-4">
              <div class="flex justify-between text-xs font-medium">
                <span class="text-slate-400">Subtotal</span>
                <span
                  :class="mode.darkMode ? 'text-slate-300' : 'text-slate-700'"
                  >${{ subtotal.toFixed(2) }}</span
                >
              </div>

              <div class="flex justify-between text-xs font-medium">
                <span class="text-slate-400">VAT Tax (10%)</span>
                <span
                  :class="mode.darkMode ? 'text-slate-300' : 'text-slate-700'"
                  >${{ tax.toFixed(2) }}</span
                >
              </div>

              <div class="flex justify-between items-baseline pt-2">
                <span
                  class="text-xs font-bold tracking-wider uppercase"
                  :class="mode.darkMode ? 'text-white' : 'text-slate-900'"
                  >Total Amount</span
                >
                <span
                  class="text-2xl font-black tracking-tight text-indigo-500"
                >
                  ${{ total.toFixed(2) }}
                </span>
              </div>
            </div>

            <!-- CTA ACTION SUBMIT BUTTON -->
            <button
              @click="placeOrder"
              :disabled="loading"
              class="w-full mt-8 py-4 rounded-xl cursor-pointer text-white font-bold text-xs tracking-wider uppercase shadow-lg transition-all duration-300 active:scale-97 flex justify-center items-center gap-3"
              :class="[
                loading
                  ? 'bg-slate-700 cursor-not-allowed shadow-none'
                  : mode.darkMode
                  ? 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/20'
                  : 'bg-slate-900 hover:bg-black shadow-slate-950/15',
              ]"
            >
              <span>{{ loading ? "Processing..." : "Place Order" }}</span>
              <img
                v-if="loading"
                class="w-4 h-4 opacity-80"
                src="/src/assets/images/loading.gif"
                alt="Loading"
              />
              <i v-else class="bi bi-arrow-right-short text-base"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- SUCCESS MODAL -->
  <div
    v-if="showSuccess"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
  >
    <div
      class="w-full max-w-md rounded-3xl p-8 text-center shadow-2xl border transition-all duration-500 animate-scale"
      :class="
        mode.darkMode
          ? 'bg-[#090d16] border-slate-900'
          : 'bg-white border-slate-100'
      "
    >
      <div
        class="mx-auto w-16 h-16 flex items-center justify-center rounded-2xl mb-6 bg-emerald-500/10 text-emerald-500 text-3xl"
      >
        <i class="bi bi-patch-check"></i>
      </div>

      <h2
        class="text-xl font-bold tracking-tight mb-2"
        :class="mode.darkMode ? 'text-white' : 'text-slate-900'"
      >
        Order Successful
      </h2>

      <p
        class="mb-8 text-xs font-light leading-relaxed"
        :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'"
      >
        Thank you for purchasing with Elysia. Your high-end luxury order has
        been logged into our deployment ledger successfully.
      </p>

      <button
        @click="
          () => {
            showSuccess = false;
            router.push('/shop');
          }
        "
        class="w-full cursor-pointer py-4 rounded-xl font-bold text-xs tracking-wider uppercase text-white transition-colors duration-300"
        :class="
          mode.darkMode
            ? 'bg-indigo-600 hover:bg-indigo-500'
            : 'bg-slate-900 hover:bg-black'
        "
      >
        Continue Shopping
      </button>
    </div>
  </div>

  <!-- QR MODAL (KHQR) -->
  <transition name="fade">
    <div
      v-if="showQR"
      @click.self="showQR = false"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4"
    >
      <div
        class="w-full max-w-sm rounded-3xl p-6 relative border shadow-2xl animate-scale"
        :class="
          mode.darkMode
            ? 'bg-[#090d16] border-slate-900'
            : 'bg-white border-slate-100'
        "
      >
        <!-- CLOSE CROSS BUTTON -->
        <button
          @click="showQR = false"
          class="absolute top-4 right-4 text-xl font-light text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors cursor-pointer"
        >
          <i class="bi bi-x-lg text-sm"></i>
        </button>

        <!-- MODAL TITLES -->
        <div class="text-center mb-6 space-y-1">
          <h2
            class="text-lg font-bold tracking-tight"
            :class="mode.darkMode ? 'text-white' : 'text-slate-900'"
          >
            Scan KHQR Pay
          </h2>
          <p
            class="text-xs font-light"
            :class="mode.darkMode ? 'text-slate-400' : 'text-slate-500'"
          >
            Please scan the official QR code to clear payment
          </p>
        </div>

        <!-- SCAN QR FRAME -->
        <div
          class="bg-white p-4 rounded-2xl border border-slate-100 dark:border-slate-900 shadow-inner max-w-[260px] mx-auto"
        >
          <img
            :src="qrImage"
            alt="KHQR Merchant Vector"
            class="w-full h-auto object-contain mix-blend-multiply"
          />
        </div>

        <!-- ACTION STACK FOOTER -->
        <div class="mt-6 flex gap-4">
          <button
            @click="showQR = false"
            class="flex-1 border cursor-pointer border-slate-200 dark:border-slate-800 text-xs font-bold tracking-wider uppercase py-3.5 rounded-xl transition-colors"
            :class="
              mode.darkMode
                ? 'text-slate-400 hover:text-white hover:bg-slate-900/40'
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
            "
          >
            Cancel
          </button>

          <button
            @click="confirmPayment"
            class="flex-1 text-xs font-bold tracking-wider uppercase text-white py-3.5 rounded-xl shadow-md transition-colors"
            :class="
              mode.darkMode
                ? 'bg-indigo-600 hover:bg-indigo-500'
                : 'bg-slate-900 hover:bg-black'
            "
          >
            {{ loading ? "Verifying..." : "I Have Paid" }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.animate-scale {
  animation: luxuryScaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes luxuryScaleUp {
  from {
    transform: scale(0.96);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* Custom modern minimal scrollbar for order items summary */
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