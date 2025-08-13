<template>
  <HeroSection />

  <v-container class="py-12">
    <ServicesGrid />
  </v-container>

  <ContactBar />
</template>

<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import ServicesGrid from '../components/ServicesGrid.vue'
import ContactBar from '../components/ContactBar.vue'
</script>

<style scoped>
/* Add any specific styles for the landing page here */
</style>