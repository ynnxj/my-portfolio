<script setup lang="ts">
import TheHeader from '../components/TheHeader.vue'
import { projects } from '@/data/projects'
import { artworks } from '@/data/artworks'
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  gsap.to('.portrait', {
    rotation: 3,
    duration: 0.8,
    yoyo: true,
    repeat: -1,
    ease: 'steps(1)',
    transformOrigin: '50% 100%',
  })
  gsap.set('.portrait', { rotation: -3 })
})

function openLink(url: string) {
  if (url) window.open(url, '_blank')
}
</script>

<template>
  <main>
    <TheHeader />
    <section class="about-section" id="about-section">
      <img class="portrait" src="/src/assets/portraits/portrait-1.PNG" />
      <img class="star-graphic" src="../components/icons/bigger-star.png" />
      <img class="tiny-star-graphic" src="../components/icons/tiny-star.png" />

      <div class="wrapper">
        <article class="about-text">
          <h2>About me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. I’m passionate about crafting clean, user-friendly
            interfaces, and I’ve taken a UX design course to better understand how users think and
            interact with digital products.
          </p>
        </article>
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
      <img class="lines-graphic" src="../components/icons/lines.svg" />
    </section>

    <section class="project-section">
      <h2>Projects</h2>

      <article v-for="project in projects" :key="project.id" class="project">
        <img :src="project.image" :alt="project.title" />
        <div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <button @click="openLink(project.demoLink)">demo</button>
          <button @click="openLink(project.githubLink)">github</button>
        </div>
      </article>

      <img class="tiny-star-graphic" src="../components/icons/tiny-star.png" />
    </section>

    <section class="creative-work-section">
      <article class="text-section">
        <h2>Creative work</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <img class="star-graphic" src="../components/icons/bigger-star.png" />
      </article>

      <article v-for="artwork in artworks" :key="artwork.id" class="artwork-section">
        <img class="artwork" :src="artwork.image" :alt="artwork.alt" />
      </article>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  h2 {
    font-size: 2em;
    margin-top: 5rem;
  }
  h3 {
    font-size: 1.5em;
  }
  p {
    font-size: 1em;
  }
  img {
    width: 500px;
  }
}

section {
  margin: 0 125px;
}

.about-section {
  display: flex;
  position: relative;
  align-items: flex-start;
  gap: 5rem;
  border-bottom: 1px solid white;
  border-top: 1px solid white;

  .star-graphic {
    position: absolute;
    width: 100px;
    bottom: 300px;
    left: 30px;
  }

  .tiny-star-graphic {
    position: absolute;
    width: 40px;
    bottom: 600px;
    left: 30px;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .portrait {
    position: relative;
    margin: 5rem 1rem;
  }

  .technical-text {
    display: flex;
    flex-direction: row;
    gap: 18rem;
  }
  .lines-graphic {
    position: absolute;
    width: 1000px;
    bottom: -130px;
    left: 920px;
    z-index: 10;
  }
}

.project-section {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  border-bottom: 1px solid white;

  .project {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5rem;

    &:last-of-type {
      margin-bottom: 7rem;
    }

    h3 {
      margin: 0;
    }

    button:first-of-type {
      margin-right: 1rem;
    }
  }

  .tiny-star-graphic {
    width: 40px;
    position: absolute;
    right: 125px;
    bottom: 7rem;
    z-index: 10;
  }
}

.creative-work-section {
  display: flex;
  align-items: flex-start;
  align-items: center;
  gap: 5rem;
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 6rem;
}

.artwork-section {
  display: flex;
  flex-direction: row;
  gap: 3rem;

  .artwork {
    width: 200px;
  }
}

.star-graphic {
  display: block;
  margin-left: -5rem;
  margin-right: auto;
  width: auto;
}
</style>
