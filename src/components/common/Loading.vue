<script setup>
import { useProductStore } from '../../stores/productStore';

const productStore = useProductStore();
</script>

<template>
  <div
    v-if="productStore.isLoading"
    class="loading w-full flex justify-center items-center py-6"
  >
    <img
      class="w-16 h-16 object-contain"
      src="@/assets/images/loading.gif"
      alt="Loading..."
    />
  </div>
</template>