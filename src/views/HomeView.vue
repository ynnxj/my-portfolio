<script setup lang="ts">
import TheHeader from '../components/TheHeader.vue'
import { projects } from '@/data/projects'
import { artworks } from '@/data/artworks'
import { onMounted } from 'vue'
import gsap from 'gsap'

/**
 * Animation using GSAP for portrait.
 * Yoyo animation.
 */
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
    <!-- Header -->
    <TheHeader />

    <!-- About Section -->
    <section class="about-section" id="about-section">
      <img
        class="portrait"
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
      <img
        class="lines-graphic"
        src="../components/icons/lines.svg"
        alt="Squiggly lines in a purple hue."
      />
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
          When I’m not building sick web applications (hehe), I love illustrating! My passion for
          art has influenced not only my visual creativity but also my approach to problem-solving
          with a creative mindset. I'd like to believe that having an eye for details helps me in
          both design and development, and I find it really fulfilling to bring ideas to life —
          whether through code, art, or anything in between!
        </p>
        <img
          class="star-graphic"
          src="../components/icons/bigger-star.png"
          alt="A hand drawn star shape"
        />
      </article>

      <!-- Artwork -->
      <article v-for="artwork in artworks" :key="artwork.id" class="artwork-section">
        <img class="artwork" :src="artwork.image" :alt="artwork.alt" />
      </article>
    </section>
  </main>
</template>

<style lang="scss" scoped>
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

  .portrait {
    position: relative;
    margin: 5rem 1rem;
  }

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

    .bold {
      font-weight: 600;
    }

    .italic {
      font-style: italic;
    }

    .technical-text {
      display: flex;
      flex-direction: row;
      gap: 17rem;
    }
  }

  .lines-graphic {
    position: absolute;
    width: 1000px;
    bottom: -170px;
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
