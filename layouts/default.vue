<template>
  <div class="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans">
    <SiteHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'
</script>
