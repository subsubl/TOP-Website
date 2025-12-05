<template>
  <div v-if="displayCourse" class="bg-white">
    <!-- Hero Section -->
    <div class="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <div :class="`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 bg-${course.color}-500`">
            {{ displayCourse.level }}
          </div>
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4">{{ displayCourse.title }}</h1>
          <p class="text-xl md:text-2xl text-blue-100">{{ displayCourse.tagline }}</p>
          <div class="mt-8 flex flex-wrap gap-4">
            <div class="flex items-center text-blue-100">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {{ course.schedule }}
            </div>
            <div class="flex items-center text-blue-100">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ course.duration }}
            </div>
            <div class="flex items-center text-blue-100">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ course.pricing }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-3 gap-12">
          <!-- Main Content -->
          <div class="md:col-span-2 space-y-12">
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('course.about') }}</h2>
              <p class="text-lg text-gray-700 leading-relaxed">{{ displayCourse.description }}</p>
            </div>

            <!-- Course Image -->
            <div class="rounded-lg overflow-hidden shadow-lg">
              <img 
                :src="`/TOP-Website/${course.image}`" 
                :alt="displayCourse.title" 
                class="w-full h-auto object-cover"
              />
            </div>

            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('course.whatYouLearn') }}</h2>
              <ul class="space-y-4">
                <li v-for="(item, index) in displayCourse.whatYouLearn" :key="index" class="flex items-start">
                  <svg class="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-700">{{ item }}</span>
                </li>
              </ul>
            </div>

            <div class="bg-gray-50 rounded-lg p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ $t('course.ready') }}</h3>
              <p class="text-gray-600 mb-6">{{ $t('course.readyText') }}</p>
              <NuxtLink :to="localePath('/booking')" class="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl">
                {{ $t('course.bookClass') }}
              </NuxtLink>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="md:col-span-1">
            <div class="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
              <h3 class="text-xl font-bold text-gray-900 mb-4">{{ $t('course.details') }}</h3>
              <dl class="space-y-4">
                <div>
                  <dt class="text-sm font-medium text-gray-500">{{ $t('course.level') }}</dt>
                  <dd class="mt-1 text-base text-gray-900">{{ displayCourse.level }}</dd>
                </div>
                <div>
                  <dt class="text-sm font-medium text-gray-500">{{ $t('course.schedule') }}</dt>
                  <dd class="mt-1 text-base text-gray-900">{{ course.schedule }}</dd>
                </div>
                <div>
                  <dt class="text-sm font-medium text-gray-500">{{ $t('course.time') }}</dt>
                  <dd class="mt-1 text-base text-gray-900">{{ course.duration }}</dd>
                </div>
                <div>
                  <dt class="text-sm font-medium text-gray-500">{{ $t('course.pricing') }}</dt>
                  <dd class="mt-1 text-base text-gray-900">{{ course.pricing }}</dd>
                </div>
              </dl>
              <div class="mt-6 pt-6 border-t border-gray-200">
                <NuxtLink :to="localePath('/classes')" class="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  {{ $t('course.backToClasses') }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="container mx-auto px-4 py-24 text-center">
    <h1 class="text-3xl font-bold text-gray-900">{{ $t('course.notFound') }}</h1>
    <NuxtLink :to="localePath('/classes')" class="mt-4 inline-block text-blue-600 hover:text-blue-800">
      {{ $t('course.backToClasses') }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { getCourseBySlug } from '~/data/courses'
import { courseTranslationsSl } from '~/data/course-translations-sl'

const route = useRoute()
const localePath = useLocalePath()
const { locale } = useI18n()
const slug = route.params.slug as string

const course = getCourseBySlug(slug)

if (!course) {
  throw createError({ statusCode: 404, statusMessage: 'Course Not Found' })
}

// Get translated course content based on current locale
const displayCourse = computed(() => {
  if (locale.value === 'sl' && courseTranslationsSl[slug]) {
    return { ...course, ...courseTranslationsSl[slug] }
  }
  // Default to English course data
  return course
})

useHead({
  title: `${displayCourse.value.title} - TOP Tennis & Paddle School`,
  meta: [
    { name: 'description', content: displayCourse.value.tagline }
  ]
})
</script>
