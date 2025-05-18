<script setup lang="ts">
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar')
  const header = document.getElementById('header')

  if (!navbar || !header) return

  const headerHeight = header.offsetHeight

  if (window.scrollY > headerHeight) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})

const scrollToSection = () => {
  const el = document.getElementById('about-section')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
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

  <div class="header" id="header">
    <!-- Header Background Image -->
    <img
      class="header-img"
      src="/src/assets/header-background.jpg"
      alt="A background with blurry shapes in warm colors"
      loading="lazy"
    />

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
      src="/src/assets/logo.PNG"
      alt="Jennifer Nilsson's Jenny logo"
      loading="lazy"
    />

    <div class="right-text">
      <div>
        <p>Jennifer</p>
        <p>NILSSON</p>
      </div>
      <div>
        <p>Nilsson</p>
        <p>NILSSON</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  .left-text {
    justify-self: start;
    display: flex;
    flex-direction: column;
    padding: 100px;
    margin-top: 400px;
    gap: 10px;
  }

  .right-text {
    display: flex;
    flex-direction: column;
    justify-self: end;
    margin-bottom: 400px;
    padding: 100px;
  }

  .header-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 50%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .logo {
    width: 1000px;
    margin-bottom: 100px;
  }
}

nav {
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
  transition: background-color 0.3s ease;

  &.scrolled {
    background-color: rgba(0, 0, 0, 0.8);
  }

  img {
    width: 50px;
    margin: 15px 30px;
  }

  span {
    .nav-link {
      color: var(--primary-color);
      margin-right: 80px;
    }
  }
}

.text {
  position: relative;
}
</style>
