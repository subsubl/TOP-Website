<template>
  <div class="relative bg-blue-900 overflow-hidden">
    <!-- Abstract Background -->
    <div class="absolute inset-0">
       <div class="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-90"></div>
       <!-- Decorative circles/shapes -->
       <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
       <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-orange-500 opacity-10 blur-3xl"></div>
    </div>

    <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 text-left mb-12 md:mb-0">
        <h1 class="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Unleash Your Potential <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
             On The Court
          </span>
        </h1>
        <p class="text-lg md:text-xl text-blue-100 mb-10 max-w-lg leading-relaxed">
           Join TOP – The premier destination for Paddle and Tennis excellence. Elevate your game, meet new friends, and enjoy the thrill of the sport.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLink :to="localePath('/booking')" class="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-orange-500 hover:bg-orange-600 md:text-lg transition-transform hover:scale-105 shadow-lg">
             {{ $t('nav.booking') }}
          </NuxtLink>
           <NuxtLink :to="localePath('/classes')" class="inline-flex justify-center items-center px-8 py-4 border-2 border-white text-base font-bold rounded-full text-white hover:bg-white hover:text-blue-900 md:text-lg transition-all">
             View Classes
          </NuxtLink>
        </div>
      </div>
      <div class="md:w-1/2 relative z-10">
         <!-- Placeholder for Hero Image - In real app, use nuxt-img -->
         <div class="rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img src="https://images.unsplash.com/photo-1622163642998-1ea36b1ad365?q=80&w=2938&auto=format&fit=crop" alt="Paddle Court" class="w-full h-auto object-cover md:h-[500px]" />
         </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath()
</script>
