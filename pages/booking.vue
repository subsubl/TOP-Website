<template>
  <div class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
    <div class="relative max-w-xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl">{{ $t('booking.title') }}</h1>
        <p class="mt-4 text-xl text-gray-500">{{ $t('booking.subtitle') }}</p>
      </div>
      <div class="mt-12 bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-inner">
         <!-- Placeholder Form -->
         <form action="#" method="POST" class="grid grid-cols-1 gap-y-6">
          <div>
            <label for="full-name" class="block text-sm font-medium text-gray-700">{{ $t('booking.name') }}</label>
            <div class="mt-1">
              <input type="text" name="full-name" id="full-name" autocomplete="name" class="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md" placeholder="John Doe">
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">{{ $t('booking.email') }}</label>
            <div class="mt-1">
              <input type="email" name="email" id="email" autocomplete="email" class="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md" placeholder="john@example.com">
            </div>
          </div>
           <div>
            <label for="activity" class="block text-sm font-medium text-gray-700">{{ $t('booking.type') }}</label>
            <div class="mt-1">
              <select id="activity" name="activity" class="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md">
                <option>{{ $t('booking.court') }} - Paddle</option>
                <option>{{ $t('booking.court') }} - Tennis</option>
                <option>Private Lesson</option>
                <option>{{ $t('booking.class') }}</option>
              </select>
            </div>
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">{{ $t('booking.message') }}</label>
            <div class="mt-1">
              <textarea id="message" name="message" rows="4" class="py-3 px-4 block w-full shadow-sm focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md" placeholder="I would like to book a court for this Saturday morning..."></textarea>
            </div>
          </div>
          <div>
            <button type="button" class="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors">
              {{ $t('booking.submit') }}
            </button>
          </div>
        </form>
         <div class="mt-6 text-center text-sm text-gray-500">
           <p>Note: This is a demo booking request.</p>
         </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath()
</script>
