<template>
  <v-app>
    <v-app-bar color="primary" density="comfortable" flat>
      <v-container class="d-flex align-center">
        <img :src="site.logo" alt="Bomar Diesel Services" class="mr-3" style="height:40px" />
        <v-app-bar-title class="text-white">Bomar Diesel Services</v-app-bar-title>
        <v-spacer />
        <v-btn variant="flat" color="accent" class="text-white" @click="$router.push({ name: 'home' })">
          Request Service
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <FooterBar />
  </v-app>
</template>

<script setup lang="ts">
import FooterBar from './components/FooterBar.vue'
import { site } from './content/site'
</script>

<style>
/* Global styles can be added here */
</style>