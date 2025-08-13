<template>
  <v-sheet color="secondary" class="py-6">
    <v-container class="d-flex flex-column flex-md-row align-center justify-space-between text-white">
      <div class="mb-3 mb-md-0">
        <strong class="mr-4"><v-icon icon="mdi-phone" class="mr-1" /> {{ site.phone }}</strong>
        <strong class="mr-4"><v-icon icon="mdi-email" class="mr-1" /> {{ site.email }}</strong>
        <span><v-icon icon="mdi-map-marker" class="mr-1" /> {{ site.address }}</span>
      </div>
      <v-btn color="accent" class="text-white"><v-icon icon="mdi-wrench" class="mr-2" /> 24/7 Dispatch: {{ site.dispatch }}</v-btn>
    </v-container>
  </v-sheet>
</template>

<script setup lang="ts">
import { site } from '../content/site'
</script>

<style scoped>
.contact-bar {
  background-color: #f5f5f5; /* Replace with the appropriate color from the logo */
  padding: 20px 0;
}
</style>