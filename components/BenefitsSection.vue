<template>
  <div class="py-24 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-base text-orange-600 font-semibold tracking-wide uppercase">{{ $t('benefits.title') }}</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          More Than Just A Game
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          We provide a holistic experience that combines professional training with a vibrant community atmosphere.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Feature 1 -->
        <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div class="relative px-7 py-8 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            <div class="space-y-4">
              <div class="p-3 bg-blue-100 rounded-lg w-fit text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900">{{ $t('benefits.coaching.title') }}</h3>
              <p class="text-gray-600 leading-relaxed">
                 {{ $t('benefits.coaching.description') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Feature 2 -->
        <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div class="relative px-7 py-8 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
             <div class="space-y-4">
               <div class="p-3 bg-orange-100 rounded-lg w-fit text-orange-600">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                 </svg>
               </div>
              <h3 class="text-xl font-bold text-gray-900">{{ $t('benefits.courts.title') }}</h3>
              <p class="text-gray-600 leading-relaxed">
                 {{ $t('benefits.courts.description') }}
              </p>
             </div>
          </div>
        </div>

         <!-- Feature 3 -->
        <div class="relative group">
           <div class="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
           <div class="relative px-7 py-8 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
             <div class="space-y-4">
               <div class="p-3 bg-green-100 rounded-lg w-fit text-green-600">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                 </svg>
               </div>
              <h3 class="text-xl font-bold text-gray-900">{{ $t('benefits.community.title') }}</h3>
              <p class="text-gray-600 leading-relaxed">
                 {{ $t('benefits.community.description') }}
              </p>
             </div>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>
