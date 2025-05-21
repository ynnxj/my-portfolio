<template>
  <!-- Footer -->
  <footer class="footer">
    <!-- Left Section  -->
    <div class="left">
      <span class="thank-you"> Thank You </span>
      <span class="copyright">Copyright 2025, Jennifer Nilsson</span>
    </div>

    <!-- Right Section -->
    <div class="right">
      <!-- Links -->
      <span class="links">
        <a href="https://www.linkedin.com/in/jennifer-m-nilsson/"
          >LinkedIn<span class="material-symbols-outlined"> trending_flat </span></a
        >
        <a href="https://github.com/ynnxj"
          >GitHub<span class="material-symbols-outlined"> trending_flat </span></a
        >
      </span>

      <!-- Email -->
      <span class="email">
        <p>jennifer.maritza.nilsson@gmail.com</p>
      </span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '@/assets/variables';

.footer {
  background-image: url('/src/assets/backgrounds/footer-background.png');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;

  .left {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  .right {
    padding: 4rem;
  }

  .thank-you {
    font-family: 'Graffity-fill';
    font-size: 10em;
    margin-bottom: 50px;
    margin-top: -60px;
    z-index: 1;
  }

  .links {
    display: flex;
    flex-direction: column;

    a {
      color: $primary-color;

      &:hover {
        color: $secondary-color;
      }

      .material-symbols-outlined {
        vertical-align: middle;
      }
    }
  }
}
</style>
