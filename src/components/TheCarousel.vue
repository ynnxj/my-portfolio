<script setup lang="ts">
import FlexCarousel from './FlexCarousel.vue'
import { artworks } from '@/data/artworks'

const items = artworks.map((artwork) => ({
  src: artwork.image,
  alt: artwork.title,
}))
</script>

<template>
  <div>
    <FlexCarousel
      :items="items"
      preset="liquid"
      intro="rise"
      :cardHeight="0.35"
      :gap="12"
      :squeeze="0.2"
      :focusOnClick="true"
      :captions="true"
      fit="natural"
      :radius="0"
      :lensWidth="0.74"
      :lensHeight="1.18"
      :tilt="62"
      :roundness="1"
      :bend="0.35"
      :reach="0.38"
      curl="twist"
      :dispersion="0.45"
      :liquid="0"
      :followCursor="false"
      :autoplay="false"
      :interval="4"
      :captureWheel="true"
    />
  </div>
</template>
