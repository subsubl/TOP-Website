<template>
  <div class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
    <div class="max-w-7xl mx-auto">
       <div class="text-center mb-16">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Our Programs
        </h2>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Whether you are a complete beginner or an aspiring pro, we have a class for you.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
        
        <!-- Class Card 1 -->
        <div class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
           <div class="aspect-w-3 aspect-h-2 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-48">
              <div class="bg-blue-300 w-full h-full flex items-center justify-center text-blue-800 font-bold text-lg">Adult Beginner</div>
           </div>
           <div class="flex-1 p-4 space-y-2 flex flex-col">
             <h3 class="text-lg font-medium text-gray-900">Adult Fundamentals</h3>
             <p class="text-sm text-gray-500 flex-grow">Master the basics of grip, swing mechanics, and court movement. Perfect for those new to the sport.</p>
             <div class="pt-4">
                <span class="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-800 mr-2">Mon/Wed</span>
                <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">6:00 PM</span>
             </div>
           </div>
        </div>

        <!-- Class Card 2 -->
        <div class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
           <div class="aspect-w-3 aspect-h-2 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-48">
              <div class="bg-orange-300 w-full h-full flex items-center justify-center text-orange-800 font-bold text-lg">Cardio Tennis</div>
           </div>
           <div class="flex-1 p-4 space-y-2 flex flex-col">
             <h3 class="text-lg font-medium text-gray-900">Cardio Blast</h3>
             <p class="text-sm text-gray-500 flex-grow">High-energy workout set to music. Burn calories while hitting hundreds of balls. No tennis experience required!</p>
             <div class="pt-4">
                <span class="inline-block bg-orange-100 rounded-full px-3 py-1 text-sm font-semibold text-orange-800 mr-2">Tue/Thu</span>
                <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">7:00 PM</span>
             </div>
           </div>
        </div>

        <!-- Class Card 3 -->
        <div class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
           <div class="aspect-w-3 aspect-h-2 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-48">
              <div class="bg-green-300 w-full h-full flex items-center justify-center text-green-800 font-bold text-lg">Junior Academy</div>
           </div>
           <div class="flex-1 p-4 space-y-2 flex flex-col">
             <h3 class="text-lg font-medium text-gray-900">Future Stars (Ages 8-14)</h3>
             <p class="text-sm text-gray-500 flex-grow">Developmental program focusing on technique, strategy, and sportsmanship.</p>
             <div class="pt-4">
                <span class="inline-block bg-green-100 rounded-full px-3 py-1 text-sm font-semibold text-green-800 mr-2">Sat</span>
                <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">9:00 AM</span>
             </div>
           </div>
        </div>

      </div>
      
       <div class="mt-16 text-center">
         <p class="text-gray-600 mb-6">Don't see what you're looking for? We offer private lessons tailored to your needs.</p>
         <NuxtLink :to="localePath('/booking')" class="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
            Book a Private Lesson &rarr;
         </NuxtLink>
       </div>

    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath()
</script>
