<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
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

/** Handle scroll function.
 * Adds and removes scrolled-class to element.
 */
const handleScroll = () => {
  const navbar = document.getElementById('navbar')
  if (!navbar) return

  const header = document.getElementById('header')
  const threshold = header?.offsetHeight || 50

  if (window.scrollY > threshold) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <!-- Navbar w/ routerlinks -->
  <nav id="navbar">
    <RouterLink class="nav-icon-link" to="/">
      <img class="nav-icon" src="./icons/star-decal.svg" alt="A white star icon." />
    </RouterLink>
    <span>
      <RouterLink class="nav-link" to="/">home</RouterLink>
      <a class="nav-link" href="#about-section" @click.prevent="handleAboutClick">about</a>
      <RouterLink class="nav-link" to="/contact">contact</RouterLink>
    </span>
  </nav>
</template>

<style lang="scss">
@import '@/assets/variables';

nav {
  position: fixed;
  width: 100vw;
  height: 70px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  gap: 50px;
  background-color: transparent;
  transition: background-color 0.3s ease;
  z-index: 1000;

  &.scrolled {
    background-color: rgba(0, 0, 0, 0.8);
  }

  .nav-icon-link {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin: 2rem;
  }

  .nav-icon {
    display: block;
    width: 100%;
    height: auto;
  }

  .nav-link {
    margin-right: 80px;
    color: $primary-color;
    letter-spacing: 3px;

    &:hover {
      color: $accent-color;
    }
  }
}
</style>
