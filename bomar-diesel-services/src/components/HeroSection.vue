<template>
  <v-sheet class="hero overflow-hidden" color="primary">
    <v-container>
      <v-row class="align-center">
        <v-col cols="12" md="7" class="text-center text-md-left">
          <h1 class="text-h3 text-md-h2 font-weight-bold text-white">{{ site.hero.title }}</h1>
          <p class="text-subtitle-1 text-md-h6 mt-3 text-white opacity-90">
            {{ site.hero.subtitle }}
          </p>
          <div class="mt-6">
            <v-btn color="accent" size="large" class="text-white mx-2">{{ site.hero.cta }}</v-btn>
            <v-btn variant="outlined" color="secondary" size="large" class="mx-2">Learn More</v-btn>
          </div>
        </v-col>

        <v-col cols="12" md="5" class="d-flex justify-center justify-md-end mt-6 mt-md-0">
          <v-img
            :src="site.logoHero"
            alt="Bomar Diesel Services engine"
            class="hero-logo"
            contain
          />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup lang="ts">
import { site } from '../content/site'
</script>

<style scoped>
.hero {
  /* Let content define height; keep a minimum */
  min-height: 60vh;
  padding: 48px 0;
  background: linear-gradient(var(--hero-overlay), var(--hero-overlay)),
    url('/hero-water.jpg') center/cover no-repeat;
}

/* Responsive image sizing; avoid overflow */
.hero-logo {
  width: clamp(200px, 60vw, 380px);
  height: auto;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.35));
  border-radius: 4px;
}

/* Tighter spacing on small screens */
@media (max-width: 600px) {
  .hero { padding: 32px 0; }
}
</style>