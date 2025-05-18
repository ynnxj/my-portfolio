<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="left">
      <span class="thank-you"> Thank You </span>
      <span class="copyright">Copyright 2025 Jennifer Nilsson</span>
    </div>

    <div class="right">
      <span class="links">
        <a href="url">LinkedIn<span class="material-symbols-outlined"> trending_flat </span></a>
        <a href="url" material-symbols-outlined
          >GitHub<span class="material-symbols-outlined"> trending_flat </span></a
        >
      </span>
      <span class="email">
        <p>jennifer.maritza.nilsson@gmail.com</p>
      </span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-image: url('/src/assets/footer-background.png');
  background-size: cover;
  background-position: center;
  padding: 2rem 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 50px;
}

.thank-you {
  font-family: 'Graffity-fill';
  font-size: 10em;
  margin-bottom: 25px;
}

.links {
  display: flex;
  flex-direction: column;
  a {
    color: white;
    .material-symbols-outlined {
      vertical-align: middle;
    }
  }
}

.left {
  display: flex;
  flex-direction: column;
}

.right {
  margin-top: 75px;
}
</style>
