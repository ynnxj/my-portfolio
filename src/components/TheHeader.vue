<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import TheBackground from './TheBackground.vue'
import TheLogo from './TheLogo.vue'

const router = useRouter()
const route = useRoute()

/**
 * Handle click function to routerlinks in nav.
 * Smooth scroll behaviour.
 */
const handleAboutClick = async () => {
  if (route.path !== '/') {
    await router.push('/')
  }

  requestAnimationFrame(() => {
    const el = document.getElementById('about-section')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  })
}
</script>

<template>
  <div class="header" id="header">
    <!-- Header Background Image -->
    <div class="header-img" loading="lazy">
      <TheBackground />
    </div>

    <!-- Transparent Logo -->
    <div class="logo">
      <TheLogo />
    </div>

    <span
      class="material-symbols-outlined arrow-down"
      href="#about-section"
      @click.prevent="handleAboutClick"
    >
      keyboard_arrow_down
    </span>
  </div>
</template>

<style lang="scss" scoped src="../assets/styles/header.scss"></style>
