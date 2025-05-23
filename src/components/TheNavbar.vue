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

/**
 * Handle mobile menu nav function.
 * Hide links, open menu when cliking on icon, show links.
 * Toggle hidden and no-scroll on smaller screen.
 */
const openMenu = () => {
  const menu = document.getElementById('mobile-links')
  if (menu) {
    menu.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
  }
}

/**
 * Handle mobile menu nav links function.
 * Close menu when cklicking on icon or links.
 * Add hidden and remove no-scroll.
 */
const closeMenu = () => {
  const menu = document.getElementById('mobile-links')
  if (menu && !menu.classList.contains('hidden')) {
    menu.classList.add('hidden')
    document.body.classList.remove('no-scroll')
  }
}
</script>

<template>
  <!-- Navbar -->
  <nav id="navbar">
    <!-- Desktop/Tablet Menu -->
    <div class="default-menu">
      <RouterLink class="nav-icon-link" to="/">
        <img class="nav-icon" src="./icons/star-decal.svg" alt="A white star icon." />
      </RouterLink>
      <span>
        <RouterLink class="nav-link" to="/">home</RouterLink>
        <a class="nav-link" href="#about-section" @click.prevent="handleAboutClick">about</a>
        <RouterLink class="nav-link" to="/contact">contact</RouterLink>
      </span>
    </div>

    <!-- Mobile Menu-->
    <div class="mobile-menu">
      <img
        class="nav-icon"
        id="menu-icon"
        @click="openMenu()"
        src="./icons/star-decal.svg"
        alt="A white star icon."
      />
      <div id="mobile-links" class="mobile-links hidden">
        <RouterLink class="nav-link" to="/" @click="closeMenu">home</RouterLink>
        <RouterLink class="nav-link" to="/contact" @click="closeMenu">contact</RouterLink>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" src="../assets/styles/navbar.scss"></style>
