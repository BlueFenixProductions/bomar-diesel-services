<template>
  <v-container>
    <v-row class="g-6">
      <v-col cols="12" class="text-center mb-4">
        <h2 class="text-h4 text-md-h3">Marine Diesel Services</h2>
        <p class="text-body-1 text-medium-emphasis">Keeping your vessel on schedule with reliable, professional service.</p>
      </v-col>

      <v-col v-for="s in site.services" :key="s.title" cols="12" sm="6" md="4">
        <v-card elevation="2">
          <v-card-item>
            <div class="d-flex align-center">
              <v-icon :icon="s.icon" color="primary" size="28" class="mr-3" />
              <div class="text-h6">{{ s.title }}</div>
            </div>
          </v-card-item>
          <v-card-text class="pt-0">
            {{ s.text }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { site } from '../content/site'
</script>

<style scoped>
.v-card {
  margin: 16px;
}
</style>