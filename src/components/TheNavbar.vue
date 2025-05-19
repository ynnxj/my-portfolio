<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

const scrollToSection = () => {
  const el = document.getElementById('about-section')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

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
  <nav id="navbar">
    <img src="./icons/star-decal.svg" />
    <span>
      <RouterLink class="nav-link" to="/">home</RouterLink>
      <RouterLink class="nav-link" to="/" @click.prevent="scrollToSection">about</RouterLink>
      <RouterLink class="nav-link" to="/contact">contact</RouterLink>
    </span>
  </nav>
</template>

<style lang="scss">
nav {
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  height: 70px;
  display: flex;
  align-items: center;
  gap: 50px;
  background-color: transparent;
  transition: background-color 0.3s ease;
  z-index: 1000;

  &.scrolled {
    background-color: rgba(0, 0, 0, 0.8);
  }

  img {
    width: 50px;
    margin: 2rem;
  }

  span {
    .nav-link {
      color: var(--primary-color);
      margin-right: 80px;
    }
  }
}
</style>
