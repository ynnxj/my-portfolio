<script setup lang="ts">
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <main>
    <TheHeader />

    <section class="about-section">
      <h2>About me</h2>
      <p>Some text about me here.</p>
    </section>

    <section class="project-section">
      <h2>Projects</h2>
      <p>Some text about my projects.</p>
    </section>

    <section class="creative-work-section">
      <h2>Creative work</h2>
      <p>Some text about creative work.</p>
    </section>

    <TheFooter />
  </main>
</template>
