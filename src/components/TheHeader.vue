<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

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
    <img
      class="header-img"
      src="/src/assets/backgrounds/header-background.jpg"
      alt="A background with blurry shapes in warm colors"
      loading="lazy"
    />

    <!-- Left text decoration -->
    <div class="left-text">
      <span>front</span>
      <span>end</span>
      <span>student</span>
      <span>today,</span>
      <span>developer</span>
      <span>tomorrow</span>
    </div>

    <!-- Transparent Logo -->
    <img
      class="logo"
      src="/src/components/icons/logo.PNG"
      alt="Jennifer Nilsson's jenny-logo signature"
      loading="lazy"
    />

    <!-- Right text decoration -->
    <div class="right-text">
      <div>
        <p>Jennifer</p>
        <p>JENNIFER</p>
      </div>
      <div>
        <p>Nilsson</p>
        <p>NILSSON</p>
      </div>
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
