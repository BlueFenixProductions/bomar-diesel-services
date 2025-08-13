<template>
  <v-footer color="primary" class="py-8">
    <v-container class="text-white d-flex flex-column flex-md-row justify-space-between">
      <div>
        <div class="text-h6">Bomar Diesel Services</div>
        <div class="text-body-2 opacity-90">Reliable marine diesel repair, maintenance, and emergency support.</div>
      </div>
      <div class="text-body-2 mt-4 mt-md-0">
        <div>Hours: {{ site.hours }}</div>
        <div>Email: {{ site.email }}</div>
        <div>Phone: {{ site.phone }}</div>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import { site } from '../content/site'
</script>

<style scoped>
.footer-bar {
  background-color: #2c3e50; /* Example color, replace with your color scheme */
  color: white;
  padding: 20px;
  text-align: center;
}

.social-media-links a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
}

.social-media-links a:hover {
  text-decoration: underline;
}
</style>