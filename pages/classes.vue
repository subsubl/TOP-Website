<template>
  <div class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
    <div class="max-w-7xl mx-auto">
       <div class="text-center mb-16">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {{ $t('classes.title') }}
        </h2>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          {{ $t('classes.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
        
        <!-- Dynamic Class Cards -->
        <NuxtLink 
          v-for="course in courses" 
          :key="course.slug"
          :to="localePath(`/courses/${course.slug}`)" 
          class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
        >
           <div class="aspect-w-3 aspect-h-2 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-48 overflow-hidden">
              <img 
                :src="`/TOP-Website/public/${course.image}`" 
                :alt="getTranslation(course.slug, 'title')" 
                class="w-full h-full object-cover"
              />
           </div>
           <div class="flex-1 p-4 space-y-2 flex flex-col">
             <h3 class="text-lg font-medium text-gray-900">{{ getTranslation(course.slug, 'title') }}</h3>
             <p class="text-sm text-gray-500 flex-grow">{{ getTranslation(course.slug, 'tagline') }}</p>
             <div class="pt-4">
                <span :class="`inline-block bg-${course.color}-100 rounded-full px-3 py-1 text-sm font-semibold text-${course.color}-800 mr-2`">{{ course.schedule }}</span>
                <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{{ course.duration }}</span>
             </div>
           </div>
        </NuxtLink>

      </div>
      
       <div class="mt-16 text-center">
         <p class="text-gray-600 mb-6">{{ $t('classes.privateLesson') }}</p>
         <NuxtLink :to="localePath('/booking')" class="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
            {{ $t('classes.bookPrivate') }}
         </NuxtLink>
       </div>

    </div>
  </div>
</template>

<script setup>
import { courses } from '~/data/courses'
import { courseTranslationsSl } from '~/data/course-translations-sl'

const localePath = useLocalePath()
const { locale } = useI18n()

// Function to get translation for a course
const getTranslation = (slug, field) => {
  // If Slovenian locale, use Slovenian translations
  if (locale.value === 'sl' && courseTranslationsSl[slug]) {
    return courseTranslationsSl[slug][field]
  }
  // Otherwise use English from courses data
  const course = courses.find(c => c.slug === slug)
  return course ? course[field] : ''
}
</script>
