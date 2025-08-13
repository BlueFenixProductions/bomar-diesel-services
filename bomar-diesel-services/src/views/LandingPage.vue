<template>
  <v-container class="py-12">
    <section class="text-center mb-10">
      <h1 class="text-h3 text-sm-h2 font-weight-bold mb-4" style="color: var(--v-theme-primary);">
        Full-Service Marine Diesel Repair
      </h1>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Dockside and shipyard service for towing vessels, workboats, and commercial fleets.
        Certified technicians for diagnostics, overhauls, and emergency response—24/7.
      </p>
      <v-btn color="secondary" size="large" class="mr-4">Request Service</v-btn>
      <v-btn color="primary" variant="outlined" size="large">Get a Quote</v-btn>
    </section>

    <section>
      <v-row>
        <v-col cols="12" md="4" v-for="card in cards" :key="card.title">
          <v-card variant="tonal">
            <v-card-title class="font-weight-bold">{{ card.title }}</v-card-title>
            <v-card-text class="text-medium-emphasis">
              {{ card.body }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <section class="mt-12">
      <v-sheet color="surface" class="pa-6 rounded-lg">
        <div class="d-flex flex-column flex-sm-row align-center justify-space-between ga-4">
          <div>
            <div class="text-h6 font-weight-bold">On-Call 24/7</div>
            <div class="text-medium-emphasis">
              Emergency repairs, troubleshooting, and parts support—where your vessel is.
            </div>
          </div>
          <div class="d-flex ga-4">
            <v-btn color="secondary">Request Service</v-btn>
            <v-btn color="primary" variant="outlined">Call Now</v-btn>
          </div>
        </div>
      </v-sheet>
    </section>
  </v-container>
</template>

<script setup lang="ts">
const cards = [
  {
    title: 'Engine Diagnostics',
    body:
      'Electronic troubleshooting, fuel system analysis, sea trials, and performance tuning for major marine diesel makes.',
  },
  {
    title: 'Overhauls & Rebuilds',
    body:
      'Top-end and in-frame overhauls, cylinder head and injector service, cooling and lubrication systems.',
  },
  {
    title: 'Preventive Maintenance',
    body:
      'Scheduled service, oil sampling, filter programs, alignments, vibration checks, and winterization.',
  },
  {
    title: 'Repowers & Upgrades',
    body:
      'Engine repowers, control systems, gear service, shafting and coupling checks, and emission compliance.',
  },
  {
    title: 'Dockside & Shipyard',
    body:
      'Mobile service crews for towboats and workboats. Coordination with yards to minimize downtime.',
  },
  {
    title: 'Parts & Exchange',
    body:
      'OEM and quality aftermarket parts, exchange components, and fast logistics for critical repairs.',
  },
]
</script>

<style scoped>
/* Add any specific styles for the landing page here */
</style>