<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink :to="localePath('/')" class="font-bold text-2xl text-blue-600 tracking-tight">
            TOP
            <span class="text-orange-500">.</span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <NuxtLink :to="localePath('/')" class="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
            {{ $t('nav.home') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/classes')" class="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
            {{ $t('nav.classes') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/booking')" class="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
            {{ $t('nav.booking') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/prices')" class="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
            {{ $t('nav.prices') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/references')" class="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
            {{ $t('nav.references') }}
          </NuxtLink>
        </nav>

        <!-- CTA & Lang -->
        <div class="hidden md:flex items-center space-x-4">
           <div class="flex space-x-2 text-sm font-medium text-gray-500">
             <NuxtLink :to="switchLocalePath('en')" :class="{ 'text-blue-600': $i18n.locale === 'en' }">EN</NuxtLink>
             <span>|</span>
             <NuxtLink :to="switchLocalePath('es')" :class="{ 'text-blue-600': $i18n.locale === 'es' }">ES</NuxtLink>
           </div>
           <NuxtLink :to="localePath('/booking')" class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg">
             {{ $t('nav.booking') }}
           </NuxtLink>
        </div>

        <!-- Mobile menu button placeholder -->
        <div class="md:hidden flex items-center">
          <button class="text-gray-500 hover:text-gray-700 focus:outline-none">
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
</script>
