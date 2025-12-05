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

        <!-- Class Card 3 -->
        <div class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
           <div class="aspect-w-3 aspect-h-2 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-48">
              <div class="bg-purple-300 w-full h-full flex items-center justify-center text-purple-800 font-bold text-lg">Intermediate</div>
           </div>
           <div class="flex-1 p-4 space-y-2 flex flex-col">
             <h3 class="text-lg font-medium text-gray-900">Intermediate Skills</h3>
             <p class="text-sm text-gray-500 flex-grow">Take your game to the next level with advanced tactics, spin techniques, and match play scenarios.</p>
             <div class="pt-4">
                <span class="inline-block bg-purple-100 rounded-full px-3 py-1 text-sm font-semibold text-purple-800 mr-2">Tue/Thu</span>
                <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">7:00 PM</span>
             </div>
           </div>
        </div>

        <!-- Class Card 4 -->
        <div class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
           <div class="aspect-w-3 aspect-h-2 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-48">
              <div class="bg-red-300 w-full h-full flex items-center justify-center text-red-800 font-bold text-lg">Advanced</div>
           </div>
           <div class="flex-1 p-4 space-y-2 flex flex-col">
             <h3 class="text-lg font-medium text-gray-900">Competition Prep</h3>
             <p class="text-sm text-gray-500 flex-grow">Tournament-level training with match strategies, mental game, and high-intensity drills.</p>
             <div class="pt-4">
                <span class="inline-block bg-red-100 rounded-full px-3 py-1 text-sm font-semibold text-red-800 mr-2">Mon/Wed/Fri</span>
                <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">5:00 PM</span>
             </div>
           </div>
        </div>

        <!-- Class Card 5 -->
        <div class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
           <div class="aspect-w-3 aspect-h-2 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-48">
              <div class="bg-yellow-300 w-full h-full flex items-center justify-center text-yellow-800 font-bold text-lg">Doubles Tactics</div>
           </div>
           <div class="flex-1 p-4 space-y-2 flex flex-col">
             <h3 class="text-lg font-medium text-gray-900">Doubles Mastery</h3>
             <p class="text-sm text-gray-500 flex-grow">Perfect your doubles game with positioning, communication, and team strategies.</p>
             <div class="pt-4">
                <span class="inline-block bg-yellow-100 rounded-full px-3 py-1 text-sm font-semibold text-yellow-800 mr-2">Sat</span>
                <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">11:00 AM</span>
             </div>
           </div>
        </div>

        <!-- Class Card 6 -->
        <div class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
           <div class="aspect-w-3 aspect-h-2 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-48">
              <div class="bg-pink-300 w-full h-full flex items-center justify-center text-pink-800 font-bold text-lg">Ladies Only</div>
           </div>
           <div class="flex-1 p-4 space-y-2 flex flex-col">
             <h3 class="text-lg font-medium text-gray-900">Women's Tennis Circle</h3>
             <p class="text-sm text-gray-500 flex-grow">Supportive environment for women to improve skills, build confidence, and make friends.</p>
             <div class="pt-4">
                <span class="inline-block bg-pink-100 rounded-full px-3 py-1 text-sm font-semibold text-pink-800 mr-2">Wed</span>
                <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">10:00 AM</span>
             </div>
           </div>
        </div>

        <!-- Class Card 7 -->
        <div class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
           <div class="aspect-w-3 aspect-h-2 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-48">
              <div class="bg-indigo-300 w-full h-full flex items-center justify-center text-indigo-800 font-bold text-lg">Paddle Intensive</div>
           </div>
           <div class="flex-1 p-4 space-y-2 flex flex-col">
             <h3 class="text-lg font-medium text-gray-900">Paddle Power</h3>
             <p class="text-sm text-gray-500 flex-grow">Paddle-specific course covering walls, lobs, and the unique dynamics of this exciting sport.</p>
             <div class="pt-4">
                <span class="inline-block bg-indigo-100 rounded-full px-3 py-1 text-sm font-semibold text-indigo-800 mr-2">Thu</span>
                <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">6:30 PM</span>
             </div>
           </div>
        </div>

        <!-- Class Card 8 -->
        <div class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
           <div class="aspect-w-3 aspect-h-2 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-48">
              <div class="bg-teal-300 w-full h-full flex items-center justify-center text-teal-800 font-bold text-lg">Seniors 55+</div>
           </div>
           <div class="flex-1 p-4 space-y-2 flex flex-col">
             <h3 class="text-lg font-medium text-gray-900">Active Seniors</h3>
             <p class="text-sm text-gray-500 flex-grow">Stay active and social! Low-impact exercises with focus on fun and fitness.</p>
             <div class="pt-4">
                <span class="inline-block bg-teal-100 rounded-full px-3 py-1 text-sm font-semibold text-teal-800 mr-2">Tue/Thu</span>
                <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">10:00 AM</span>
             </div>
           </div>
        </div>

        <!-- Class Card 9 -->
        <div class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
           <div class="aspect-w-3 aspect-h-2 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-48">
              <div class="bg-cyan-300 w-full h-full flex items-center justify-center text-cyan-800 font-bold text-lg">Kids 5-7</div>
           </div>
           <div class="flex-1 p-4 space-y-2 flex flex-col">
             <h3 class="text-lg font-medium text-gray-900">Mini Tennis Stars</h3>
             <p class="text-sm text-gray-500 flex-grow">Introduction to tennis through fun games, modified equipment, and basic motor skills.</p>
             <div class="pt-4">
                <span class="inline-block bg-cyan-100 rounded-full px-3 py-1 text-sm font-semibold text-cyan-800 mr-2">Sat</span>
                <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">10:00 AM</span>
             </div>
           </div>
        </div>

        <!-- Class Card 10 -->
        <div class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
           <div class="aspect-w-3 aspect-h-2 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-48">
              <div class="bg-lime-300 w-full h-full flex items-center justify-center text-lime-800 font-bold text-lg">Serve Clinic</div>
           </div>
           <div class="flex-1 p-4 space-y-2 flex flex-col">
             <h3 class="text-lg font-medium text-gray-900">Serve Workshop</h3>
             <p class="text-sm text-gray-500 flex-grow">Dedicated sessions to perfect your serve technique, power, and accuracy.</p>
             <div class="pt-4">
                <span class="inline-block bg-lime-100 rounded-full px-3 py-1 text-sm font-semibold text-lime-800 mr-2">Sun</span>
                <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">2:00 PM</span>
             </div>
           </div>
        </div>

        <!-- Class Card 11 -->
        <div class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
           <div class="aspect-w-3 aspect-h-2 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-48">
              <div class="bg-amber-300 w-full h-full flex items-center justify-center text-amber-800 font-bold text-lg">Volley Master</div>
           </div>
           <div class="flex-1 p-4 space-y-2 flex flex-col">
             <h3 class="text-lg font-medium text-gray-900">Net Play Excellence</h3>
             <p class="text-sm text-gray-500 flex-grow">Master volleys, overheads, and net positioning for dominant court presence.</p>
             <div class="pt-4">
                <span class="inline-block bg-amber-100 rounded-full px-3 py-1 text-sm font-semibold text-amber-800 mr-2">Fri</span>
                <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">6:00 PM</span>
             </div>
           </div>
        </div>

        <!-- Class Card 12 -->
        <div class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
           <div class="aspect-w-3 aspect-h-2 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-48">
              <div class="bg-emerald-300 w-full h-full flex items-center justify-center text-emerald-800 font-bold text-lg">Match Play</div>
           </div>
           <div class="flex-1 p-4 space-y-2 flex flex-col">
             <h3 class="text-lg font-medium text-gray-900">Competitive Match Sessions</h3>
             <p class="text-sm text-gray-500 flex-grow">Practice in real match scenarios with scoring, umpiring, and competitive atmosphere.</p>
             <div class="pt-4">
                <span class="inline-block bg-emerald-100 rounded-full px-3 py-1 text-sm font-semibold text-emerald-800 mr-2">Sun</span>
                <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">4:00 PM</span>
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
