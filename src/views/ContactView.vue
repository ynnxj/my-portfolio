<template>
  <section class="contact">
    <div class="info-section">
      <h1>Contact me</h1>
      <p>jennifer.maritza.nilsson@gmail.com</p>
      <a href="https://www.linkedin.com/in/jennifer-m-nilsson/">LinkedIn</a>
      <a href="https://github.com/ynnxj">GitHub</a>
    </div>
    <div class="portrait-section">
      <img src="../assets/portraits/portrait-2.png" />
    </div>
    <img class="frog-boy" src="../assets/creative-work/frog-boy-black.gif" />
  </section>
</template>

<style lang="scss" scoped>
.contact {
  height: 80vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  background-image: url('/src/assets/backgrounds/contact-background.jpg');
  background-size: cover;
  background-position: center;
  position: relative;

  .info-section,
  .portrait-section {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .info-section {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 22rem;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 25%;
      right: 0;
      height: 50%;
      width: 1px;
      background-color: white;
    }

    a {
      color: white;
      margin-top: 0.5rem;

      &:hover {
        color: rgb(0, 0, 0);
      }
    }
  }

  .portrait-section {
    align-items: flex-end;
    img {
      width: 45%;
      object-fit: contain;
    }
  }

  .frog-boy {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0 6rem;
    margin-bottom: -1.5rem;
    z-index: 1;
  }
}
</style>
