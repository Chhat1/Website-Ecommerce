<template>
  <div class="home-page container mx-auto lg:px-0 lg:py-0 px-5 py-5">
    <!-- Banner -->
    <div
      class="banner  w-full lg:h-[90vh] h-50 bg-[url('/src/assets/images/image-banner.png')] bg-cover bg-no-repeat lg:rounded-none rounded-xl shadow relative lg:pl-30 pl-3"
    >
      <!-- Banner Title -->
      <div class="absolute lg:top-[40%] top-[30%]">
        <p
          class="bg-white/10 backdrop-blur-xl border border-white/20 shadow-black shadow-2xl text-white font-medium inline lg:px-5 px-2 lg:text-base text-[6px] py-1 lg:rounded-full rounded-[5px]"
        >
          AW24 COLLECTION
        </p>

        <!-- Title -->
        <h1
          class="lg:text-6xl tracking-tight text-[17px] font-bold lg:mt-5 mt-1 text-black"
        >
          The Future of <br />
          Style & Tech
        </h1>

        <!-- Button -->

        <div class="btn-banner lg:mt-15 mt-3 flex lg:gap-5 gap-2">
          <router-link
            class="lg:py-6 lg:text-base lg:px-20 py-2 px-5 text-[10px] bg-black shadow-lg font-medium text-white rounded-[5px] cursor-pointer transition-all duration-300 hover:scale-105 ease-in-out"
            to="/shop"
            >Shop New Arrivals</router-link
          >

          <router-link
            class="lg:py-6 lg:text-base lg:px-20 py-2 px-5 text-[10px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-black shadow-2xl font-medium rounded-[5px] cursor-pointer text-white transition-all ease-in-out duration-300 hover:scale-105"
            to="/exploretech"
            >Explore Tech</router-link
          >
        </div>
      </div>
    </div>

    <!-- Curated Electronic Categories Products-->
    <div class="lg:mt-30 mt-15">
      <div class="Curated-Categories">
        <!-- Title -->
        <div class="flex justify-between items-center mb-10">
          <h1 class="text-2xl font-bold">Curated Categories</h1>
          <router-link
            class="text-gray-500 font-medium transition-all hover:underline"
            to="/shop"
            >View All <i class="bi bi-arrow-right"></i
          ></router-link>
        </div>

        <!-- Skeleton Loading -->
        <div
          v-if="productStore.loading"
          class="main-products w-full flex flex-wrap justify-between"
        >
          <!-- Skeleton Card -->
          <div
            v-for="n in 4"
            :key="n"
            :class="
              mode.darkMode
                ? 'bg-[#1e293b] border border-[#334155]'
                : 'bg-white border border-gray-200'
            "
            class="lg:w-[23%] md:w-[48%] w-[48%] lg:h-125 h-72 shadow-xl rounded-xl mb-5 overflow-hidden"
          >
            <!-- image skeleton -->
            <div
              :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-300'"
              class="card-header h-[55%] w-full animate-pulse"
            ></div>

            <!-- body -->
            <div
              class="card-body h-[45%] lg:p-5 p-2 flex flex-col justify-between"
            >
              <div>
                <!-- title -->
                <div
                  :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-300'"
                  class="lg:h-5 md:h-4 h-3 w-[80%] rounded mb-2 animate-pulse"
                ></div>

                <!-- description -->
                <div
                  :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-300'"
                  class="lg:h-3 h-2 w-full rounded mb-2 animate-pulse"
                ></div>

                <div
                  :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-300'"
                  class="lg:h-3 h-2 w-[70%] rounded mb-3 animate-pulse"
                ></div>

                <!-- price -->
                <div
                  :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-300'"
                  class="lg:h-7 h-4 w-[35%] rounded animate-pulse"
                ></div>
              </div>

              <!-- button -->
              <div
                :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-300'"
                class="w-full lg:h-12 h-9 rounded-[5px] animate-pulse"
              ></div>
            </div>
          </div>
        </div>

        <!-- Products 1-->
        <div v-else class="main-products w-full flex flex-wrap justify-between">
          <!-- card -->
          <div
            v-for="item in productStore.products.slice(0, 4)"
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
                class="block text-center lg:py-3 py-2 w-full hover:bg-blue-600 transition-all ease-in-out rounded-[5px] text-white lg:text-base text-[11px]"
              >
                View Details <i class="bi bi-eye"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Trending Now Products-->
    <div class="lg:mt-10 mt-5">
      <div class="Trending-Now">
        <div class="mb-10">
          <h1 class="text-2xl font-bold mb-2">Trending Now</h1>
          <p class="text-gray-500">
            The most sought-after pieces of the season.
          </p>
        </div>

        <!-- Skeleton Loading -->
        <div
          v-if="productStore.isLoading"
          class="main-products w-full flex flex-wrap justify-between"
        >
          <!-- skeleton card -->
          <div
            v-for="i in 4"
            :key="i"
            :class="
              mode.darkMode
                ? 'bg-[#1e293b] border border-[#334155]'
                : 'bg-white border border-gray-200'
            "
            class="lg:w-[23%] md:w-[48%] w-[48%] lg:h-125 h-72 shadow-xl rounded-xl mb-5 overflow-hidden animate-pulse"
          >
            <!-- image -->
            <div
              :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-300'"
              class="card-header h-[55%] w-full"
            ></div>

            <!-- body -->
            <div
              class="card-body h-[45%] lg:p-5 p-2 flex flex-col justify-between"
            >
              <div>
                <!-- title -->
                <div
                  :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-300'"
                  class="lg:h-5 md:h-4 h-3 w-[80%] rounded mb-2"
                ></div>

                <!-- description -->
                <div
                  :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-300'"
                  class="lg:h-3 h-2 w-full rounded mb-2"
                ></div>

                <div
                  :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-300'"
                  class="lg:h-3 h-2 w-[70%] rounded mb-3"
                ></div>

                <!-- price -->
                <div
                  :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-300'"
                  class="lg:h-7 h-4 w-[35%] rounded"
                ></div>
              </div>

              <!-- button -->
              <div
                :class="mode.darkMode ? 'bg-slate-700' : 'bg-gray-300'"
                class="w-full lg:h-12 h-9 rounded-[5px]"
              ></div>
            </div>
          </div>
        </div>

        <!-- Products 2-->
        <div v-else class="main-products w-full flex flex-wrap justify-between">
          <!-- card -->
          <div
            v-for="item in productStore.products.slice(1, 5)"
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
                class="block text-center lg:py-3 py-2 w-full hover:bg-blue-600 transition-all ease-in-out rounded-[5px] text-white lg:text-base text-[11px]"
              >
                View Details <i class="bi bi-eye"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Flash Sale Event -->
    <div
      :class="mode.darkMode ? 'bg-blue-950/40' : 'bg-black'"
      class="Flash-Sale-Event w-full min-h-100 lg:min-h-100 mt-10 rounded-xl shadow-xl flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-35 px-5 lg:px-20 py-10"
    >
      <!-- Text -->
      <div class="header-title text-center lg:text-left">
        <h1 class="text-white lg:text-5xl text-3xl font-medium mb-3">
          Flash Sale Event
        </h1>

        <p class="text-gray-300 mb-10 lg:text-base text-sm leading-6">
          Exclusive 20% discount on all premium tech accessories.
          <br class="hidden lg:block" />
          Modern tools for the digital nomad.
        </p>

        <!-- Time -->
        <div
          class="hours flex justify-center lg:justify-start gap-3 lg:gap-5 flex-wrap"
        >
          <div
            :class="
              mode.darkMode ? 'bg-white text-black' : 'bg-gray-500 text-white'
            "
            class="box1 w-18 h-18 lg:w-20 lg:h-20 rounded-xl p-3"
          >
            <h1 class="text-center font-bold text-lg lg:text-xl">
              {{ hours }}
            </h1>
            <p
              :class="mode.darkMode ? ' text-black' : ' text-gray-200'"
              class="text-center text-xs lg:text-sm"
            >
              HOURS
            </p>
          </div>

          <div
            :class="
              mode.darkMode ? 'bg-white text-black' : 'bg-gray-500 text-white'
            "
            class="box1 w-18 h-18 lg:w-20 lg:h-20 rounded-xl p-3"
          >
            <h1 class="text-center font-bold text-lg lg:text-xl">
              {{ minutes }}
            </h1>
            <p
              :class="mode.darkMode ? ' text-black' : ' text-gray-200'"
              class="text-center text-xs lg:text-sm"
            >
              MINS
            </p>
          </div>

          <div
            :class="
              mode.darkMode ? 'bg-white text-black' : 'bg-gray-500 text-white'
            "
            class="box1 w-18 h-18 lg:w-20 lg:h-20 rounded-xl p-3"
          >
            <h1
              :class="
                mode.darkMode ? 'bg-white text-black' : 'bg-gray-500 text-white'
              "
              class="text-center font-bold text-lg lg:text-xl"
            >
              {{ seconds }}
            </h1>
            <p
              :class="mode.darkMode ? ' text-black' : ' text-gray-200'"
              class="text-center text-xs lg:text-sm"
            >
              SECS
            </p>
          </div>
        </div>
      </div>

      <!-- Image -->
      <div
        class="image shadow-sm shadow-gray-600/70 w-full lg:w-150 h-55 lg:h-80 rounded-xl overflow-hidden"
      >
        <img
          class="w-full h-full object-cover rounded-xl shadow-sm shadow-amber-50"
          src="/src/assets/images/headphone2.jpg"
          alt=""
        />
      </div>
    </div>

    <div class="mt-20 flex flex-col lg:flex-row justify-center gap-6 lg:gap-10">
      <!-- Card 1 -->
      <div
        :class="mode.darkMode ? 'shadow-2xl shadow-blue-800/30' : ''"
        class="bg-[url('/src/assets/images/modelwalk.jpg')] rounded-xl bg-no-repeat bg-cover bg-center w-full lg:w-155 h-87.5 lg:h-100 px-6 lg:px-20 relative overflow-hidden"
      >
        <div class="absolute top-[50%] lg:translate-y-[20%] translate-y-[15%]">
          <h1 class="text-3xl lg:text-4xl mb-3 text-white font-medium">
            Seasonal Essentials
          </h1>

          <p class="text-sm lg:text-base mb-5 text-white leading-6">
            Transitional layers for every climate.
          </p>

          <button
            class="bg-white/10 backdrop-blur-xl border border-white/20 shadow-black shadow-2xl text-white font-medium px-6 lg:px-10 py-3 rounded-[5px] cursor-pointer hover:bg-white/20 duration-300"
          >
            Shop The Edit
          </button>
        </div>
      </div>

      <!-- Card 2 -->
      <div
        :class="mode.darkMode ? 'shadow-2xl shadow-blue-800/30' : ''"
        class="bg-[url('/src/assets/images/airport2.gif')] rounded-xl bg-no-repeat bg-cover bg-center w-full lg:w-150 h-87.5 lg:h-100 relative overflow-hidden"
      >
        <div class="absolute inset-0 bg-black/30"></div>

        <div
          class="absolute top-[50%] left-6 lg:left-10 lg:translate-y-[20%] translate-y-[15%] z-10"
        >
          <h1 class="text-3xl lg:text-4xl mb-3 text-white font-medium">
            Limited Edition Tech
          </h1>

          <p class="text-sm lg:text-base mb-5 text-white leading-6">
            Future-forward hardware for the elite.
          </p>

          <button
            class="bg-white/10 backdrop-blur-xl border border-white/20 shadow-black shadow-2xl text-white font-medium px-6 lg:px-10 py-3 rounded-[5px] cursor-pointer hover:bg-white/20 duration-300"
          >
            Discover Now
          </button>
        </div>
      </div>
    </div>

    <!-- Text Profile -->
    <div
      :class="mode.darkMode ? 'bg-blue-950/40' : 'bg-[#F3F0EF]'"
      class="mb-5 w-full min-h-125 lg:min-h-125 mt-20 rounded-xl shadow-xl flex justify-center items-center px-4 lg:px-10 py-6 lg:py-10"
    >
      <div
        :class="
          mode.darkMode
            ? 'bg-blue-800/10 backdrop-blur-xl border border-blue-800/20 text-white shadow-black'
            : 'bg-white text-gray-700'
        "
        class="w-full max-w-6xl rounded-xl px-6 sm:px-10 lg:px-32 xl:px-50 py-10 lg:py-16"
      >
        <!-- Quote -->
        <h1
          class="text-lg sm:text-xl lg:text-2xl text-center font-bold leading-8 lg:leading-12 font-sans"
        >
          "ELYSIA has completely redefined how I shop. The fusion of
          high-fashion aesthetics with technical performance is exactly what my
          lifestyle needed. Every piece feels curated and purposeful."
        </h1>

        <!-- Profile -->
        <div
          class="profile flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 text-center sm:text-left"
        >
          <!-- Profile Image -->
          <div
            class="profile-image w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200"
          >
            <img
              class="w-full h-full object-cover"
              src="/src/assets/images/profile.png"
              alt=""
            />
          </div>

          <!-- Profile Info -->
          <div>
            <p class="font-medium font-sans text-lg">Phuk Richhat</p>

            <p class="text-gray-500 text-sm lg:text-base">Creative FrontEnd</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Form Join -->
    <div
      :class="mode.darkMode ? 'bg-blue-950/40' : 'bg-[#F3F0EF]'"
      class="form-join w-full mb-15 min-h-125 lg:min-h-125 rounded-2xl px-4 lg:px-10 py-6 lg:py-10"
    >
      <div
        :class="
          mode.darkMode
            ? 'bg-blue-800/10 backdrop-blur-xl border border-blue-800/20 text-white shadow-black'
            : 'bg-white text-gray-700'
        "
        class="w-full h-full rounded-xl py-14 lg:py-20 px-6 sm:px-10 lg:px-20"
      >
        <!-- Title -->
        <h1 class="text-2xl lg:text-4xl font-medium text-center mb-3">
          Join the Elysia Circle
        </h1>

        <!-- Description -->
        <p class="text-sm lg:text-[18px] text-gray-500 text-center leading-7">
          Subscribe to receive early access to new collections and

          <br class="hidden lg:block" />

          exclusive tech drops.
        </p>

        <!-- Form -->
        <form
          class="flex flex-col sm:flex-row gap-4 lg:gap-5 justify-center items-center mt-10 lg:mt-15"
        >
          <input
            type="text"
            placeholder="Email Address"
            class="w-full sm:w-[70%] lg:w-[30%] py-4 px-6 lg:px-10 rounded-[5px] outline-none border transition-all duration-300"
            :class="
              mode.darkMode
                ? 'placeholder:text-blue-200 bg-[#1e293b] border-[#334155] text-white shadow-lg shadow-blue-900/20'
                : 'placeholder:text-gray-500 bg-[#F3F0EF] border-gray-200 text-black shadow-sm'
            "
          />

          <button
            class="w-full sm:w-auto py-4 px-8 lg:px-10 rounded-[5px] cursor-pointer transition-all duration-300 font-semibold"
            :class="
              mode.darkMode
                ? 'bg-blue-500 hover:bg-blue-600 text-white'
                : 'bg-black hover:bg-gray-800 text-white'
            "
          >
            Subscribe
          </button>
        </form>

        <!-- Footer -->
        <p
          class="text-[12px] lg:text-[13px] text-gray-500 text-center mt-5 leading-6"
        >
          By subscribing, you agree to our Privacy Policy and Terms of Service.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useProductStore } from "../../stores/productStore";
import { useDarkModeStore } from "../../stores/darkMode";
const productStore = useProductStore();
const mode = useDarkModeStore();
onMounted(() => {
  updateTimer();
  interval = setInterval(updateTimer, 1000);
  if (productStore.products.length === 0) {
    productStore.getAllProducts();
  }
});

onUnmounted(() => {
  clearInterval(interval);
});

const targetTime = new Date();
targetTime.setHours(targetTime.getHours() + 5); // +5 hours (you can change)

const hours = ref("00");
const minutes = ref("00");
const seconds = ref("00");

let interval = null;

const updateTimer = () => {
  const now = new Date().getTime();
  const distance = targetTime.getTime() - now;

  if (distance <= 0) {
    clearInterval(interval);
    hours.value = "00";
    minutes.value = "00";
    seconds.value = "00";
    return;
  }

  hours.value = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );

  minutes.value = String(Math.floor((distance / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );

  seconds.value = String(Math.floor((distance / 1000) % 60)).padStart(2, "0");
};
</script>

<style>
</style>