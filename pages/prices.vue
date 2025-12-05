<template>
  <div class="bg-gray-50 py-16 px-4 mb-20 sm:px-6 lg:px-8 lg:py-24">
    <div class="max-w-7xl mx-auto">
      <div class="text-center sm:flex sm:flex-col sm:align-center">
        <h1 class="text-5xl font-extrabold text-gray-900 sm:text-center">{{ $t('prices.title') }}</h1>
        <p class="mt-5 text-xl text-gray-500 sm:text-center">
          {{ $t('prices.subtitle') }}
        </p>
      </div>
      
      <!-- Pricing Table -->
      <div class="mt-12 bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6 bg-blue-600">
           <h3 class="text-lg leading-6 font-medium text-white">Service Rates</h3>
           <p class="mt-1 max-w-2xl text-sm text-blue-100">Standard rates for courts and coaching.</p>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Court Rental (Peak)</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between">
                 <span>$40 / hour</span>
                 <span class="text-gray-500 italic">Weekdays 5pm-10pm, Weekends</span>
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Court Rental (Off-Peak)</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between">
                 <span>$25 / hour</span>
                 <span class="text-gray-500 italic">Weekdays 8am-5pm</span>
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Private Lesson</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between">
                 <span>$70 / hour</span>
                 <span class="text-gray-500 italic">1-on-1 with Senior Coach</span>
              </dd>
            </div>
             <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Group Class (Drop-in)</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between">
                 <span>$25 / session</span>
                 <span class="text-gray-500 italic">Max 6 players</span>
              </dd>
            </div>
             <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">10-Class Pass</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between">
                 <span>$220</span>
                 <span class="text-gray-500 italic">Valid for 3 months</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      
      <div class="mt-10 text-center">
         <NuxtLink :to="localePath('/booking')" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700">
           {{ $t('nav.booking') }}
         </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath()
</script>
