<script setup lang="ts"></script>

<template>
  <div class="header" id="header">
    <!-- Header Background Image -->
    <img
      class="header-img"
      src="/src/assets/backgrounds/header-background.jpg"
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
        <p>JENNIFER</p>
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
  width: 100vw;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  position: relative;

  .header-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    object-position: 0 50%;
    z-index: -1;
  }

  .left-text {
    justify-self: center;
    display: flex;
    position: relative;
    top: 10rem;
    flex-direction: column;
    gap: 10px;
  }

  .right-text {
    justify-self: center;
    text-align: center;
    position: relative;
    bottom: 10rem;
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
  }

  .logo {
    width: 70rem;
    justify-self: center;
    margin: 0 auto;
  }
}
</style>
