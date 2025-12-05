<template>
  <div class="bg-gray-50 py-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {{ $t('testimonials.title') }}
        </h2>
        <p class="mt-4 text-xl text-gray-500">
          See what our members have to say about their experience at TOP.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <p class="text-gray-600 mb-6 italic">"TOP transformed my backhand and my weekends! Best club in town with the friendliest staff."</p>
          <div class="flex items-center">
            <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">SJ</div>
            <div class="ml-4">
              <div class="text-sm font-semibold text-gray-900">Sarah J.</div>
              <div class="text-xs text-gray-500">Member since 2022</div>
            </div>
          </div>
        </div>
        <div class="bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <p class="text-gray-600 mb-6 italic">"The coaches are amazing with kids. My son loves his Saturday lessons and has improved so much."</p>
          <div class="flex items-center">
            <div class="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">MT</div>
             <div class="ml-4">
              <div class="text-sm font-semibold text-gray-900">Mike T.</div>
              <div class="text-xs text-gray-500">Parent</div>
            </div>
          </div>
        </div>
        <div class="bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <p class="text-gray-600 mb-6 italic">"Great facilities. The lighting for night games is perfect and the booking system is super easy."</p>
          <div class="flex items-center">
            <div class="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">DK</div>
             <div class="ml-4">
              <div class="text-sm font-semibold text-gray-900">David K.</div>
              <div class="text-xs text-gray-500">Frequent Player</div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 text-center">
        <NuxtLink :to="localePath('/references')" class="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
          {{ $t('testimonials.viewAll') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath()
</script>
