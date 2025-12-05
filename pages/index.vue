<template>
  <div>
    <HeroSection />
    <BenefitsSection />
    <TestimonialsPreview />
  </div>
</template>

<script setup>
import HeroSection from '~/components/HeroSection.vue'
import BenefitsSection from '~/components/BenefitsSection.vue'
import TestimonialsPreview from '~/components/TestimonialsPreview.vue'

definePageMeta({
  title: 'TOP - Paddle & Tennis School',
  description: 'The premier destination for paddle and tennis instruction.'
})
</script>
