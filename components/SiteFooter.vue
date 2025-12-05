<template>
  <footer class="bg-gray-900 text-white pt-12 pb-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="col-span-1 md:col-span-1">
          <span class="font-bold text-2xl tracking-tight text-white mb-4 block">
            TOP<span class="text-orange-500">.</span>
          </span>
          <p class="text-gray-400 text-sm">
            {{ $t('footer.aboutText') }}
          </p>
        </div>

        <!-- Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-orange-400">{{ $t('footer.about') }}</h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><NuxtLink :to="localePath('/')" class="hover:text-white transition-colors">{{ $t('nav.home') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/about')" class="hover:text-white transition-colors">{{ $t('nav.about') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/coaches')" class="hover:text-white transition-colors">{{ $t('nav.coaches') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/careers')" class="hover:text-white transition-colors">{{ $t('nav.careers') }}</NuxtLink></li>
          </ul>
        </div>

        <!-- Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-orange-400">{{ $t('footer.programs') }}</h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><NuxtLink :to="localePath('/classes')" class="hover:text-white transition-colors">Adult Classes</NuxtLink></li>
            <li><NuxtLink :to="localePath('/classes')" class="hover:text-white transition-colors">Junior Academy</NuxtLink></li>
            <li><NuxtLink :to="localePath('/booking')" class="hover:text-white transition-colors">Private Lessons</NuxtLink></li>
            <li><NuxtLink :to="localePath('/booking')" class="hover:text-white transition-colors">Court Rental</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-orange-400">{{ $t('footer.contact') }}</h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li class="flex items-start">
               <span class="mr-2">📍</span> 123 Sports Avenue, Active City
            </li>
            <li class="flex items-center">
               <span class="mr-2">📞</span> +1 (555) 012-3456
            </li>
            <li class="flex items-center">
               <span class="mr-2">✉️</span> hello@top-school.com
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
        &copy; {{ new Date().getFullYear() }} TOP Paddle & Tennis School. {{ $t('footer.rights') }}
      </div>
    </div>
  </footer>
</template>

<script setup>
const localePath = useLocalePath()
</script>
