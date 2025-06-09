<script setup lang="ts">
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
import { projects } from '@/data/projects'
import { artworks } from '@/data/artworks'
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Portrait animation
  gsap.to('.portrait', {
    rotation: 3,
    duration: 0.8,
    yoyo: true,
    repeat: -1,
    ease: 'steps(1)',
    transformOrigin: '50% 100%',
  })
  gsap.set('.portrait', { rotation: -3 })

  gsap.utils.toArray<HTMLElement>('.project').forEach((project, i) => {
    gsap.from(project, {
      scrollTrigger: {
        trigger: project,
        start: 'top 90%',
        toggleActions: 'play none none reset',
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
      delay: i * 0.1,
    })
  })
})

const openLink = (url: string) => {
  if (url) window.open(url, '_blank')
}
</script>

<template>
  <main>
    <!-- Header -->
    <TheHeader />

    <!-- About Section -->
    <section class="about-section" id="about-section">
      <img
        class="portrait hidden"
        src="/src/assets/portraits/portrait-1.PNG"
        alt="A portrait of a woman with black hair hand bangs. Only the head is cut out"
      />
      <img
        class="star-graphic"
        src="../components/icons/bigger-star.png"
        alt="A hand drawn star shape"
      />
      <img
        class="tiny-star-graphic"
        src="../components/icons/tiny-star.png"
        alt="A tiny hand drawn star shape"
      />

      <!-- About Me -->
      <div class="wrapper">
        <img
          class="portrait responsive"
          src="/src/assets/portraits/portrait-1.PNG"
          alt="A portrait of a woman with black hair hand bangs. Only the head is cut out"
        />
        <article class="about-text">
          <h2>About me</h2>
          <p class="bold">Hello there!</p>
          <p>
            I'm Jennifer Nilsson, a front-end student based in Stockholm, Sweden, currently studying
            at Medieinstitutet. I love illustrating and all forms of art. I believe creativity —
            whether visual or otherwise — has really helped me think differently when solving
            problems, while keeping a clean and easy approach to structure.
          </p>
          <p>
            When I’m not coding, you’ll probably find me sketching, gaming, or researching my next
            computer parts. And when I <span class="italic">am</span> coding, it’s usually with a
            cold glass of iced matcha latte and cozy Animal Crossing music playing in the
            background.🌸
          </p>
        </article>

        <!-- Tech Stack -->
        <article class="technical-text">
          <span>
            <h3>Languages</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Sass</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>
          </span>

          <span>
            <h3>Frameworks</h3>
            <ul>
              <li>Vue</li>
              <li>Express</li>
              <li>React (currently studying)</li>
            </ul>
          </span>

          <span>
            <h3>Tools</h3>
            <ul>
              <li>GitHub</li>
              <li>Figma</li>
              <li>VS Code</li>
            </ul>
          </span>
        </article>

        <article class="backend-text">
          <h3>Backend</h3>
          <p>
            Familiar with basic backend tools like MySQL, MongoDB, Compass, and Insomnia for API
            testing.
          </p>
        </article>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="project-section">
      <h2>Projects</h2>

      <!-- List Projects here -->
      <article v-for="project in projects" :key="project.id" class="project">
        <img :src="project.image" :alt="project.title" />
        <div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <button @click="openLink(project.demoLink)">demo</button>
          <button @click="openLink(project.githubLink)">github</button>
        </div>
      </article>

      <img
        class="tiny-star-graphic"
        src="../components/icons/tiny-star.png"
        alt="A tiny hand drawn star shape"
      />
    </section>

    <!-- Creative work Section -->
    <section class="creative-work-section">
      <article class="text-section">
        <h2>Creative work</h2>
        <p>
          When I’m not building sick web applications (hehe), I love illustrating! I'd like to
          believe that having an eye for details helps me in both design and development, and I find
          it really fulfilling to bring ideas to life — whether through code, art, or anything in
          between!
        </p>
        <img src="/src/components/icons/sparkle-decal.svg" />
        <img src="/src/components/icons/sparkle-decal.svg" />
        <img src="/src/components/icons/sparkle-decal.svg" />
      </article>

      <!-- Artwork -->
      <div class="artwork-scroll-container artwork-section">
        <span class="material-symbols-outlined right-arrow"> keyboard_arrow_left </span>
        <article v-for="artwork in artworks" :key="artwork.id">
          <img class="artwork" :src="artwork.image" :alt="artwork.alt" />
        </article>
        <span class="material-symbols-outlined left-arrow"> keyboard_arrow_right </span>
      </div>
    </section>
  </main>
  <TheFooter />
</template>

<style lang="scss" scoped src="@/assets/styles/home.scss"></style>
