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
      alt="Jennifer Nilsson's -Jenny- logo"
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
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  overflow: hidden;
  z-index: 1;

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
    position: relative;
    top: 10rem;
    display: flex;
    flex-direction: column;
    justify-self: center;
    gap: 10px;
  }

  .logo {
    width: 70rem;
    justify-self: center;
    margin: 0 auto;
  }

  .right-text {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-self: center;
    text-align: center;
    bottom: 10rem;
    font-size: 1.5rem;
  }
}
</style>
