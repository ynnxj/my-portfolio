<script setup lang="ts">
import Grainient from './GrainientBackground.vue'

withDefaults(
  defineProps<{
    color1?: string
    color2?: string
    color3?: string
  }>(),
  {
    color1: '#f281a1',
    color2: '#934153',
    color3: '#cd809e',
  },
)
</script>

<template>
  <div style="width: 100%; height: 100%; position: relative">
    <Grainient
      :color1="color1"
      :color2="color2"
      :color3="color3"
      :time-speed="0.7"
      :color-balance="0.0"
      :warp-strength="1.0"
      :warp-frequency="5.0"
      :warp-speed="2.0"
      :warp-amplitude="50.0"
      :blend-angle="0.0"
      :blend-softness="0.05"
      :rotation-amount="500.0"
      :noise-scale="2.0"
      :grain-amount="0.1"
      :grain-scale="2.0"
      :grain-animated="false"
      :contrast="1.5"
      :gamma="1"
      :saturation="1.0"
      :center-x="0.0"
      :center-y="0.0"
      :zoom="0.9"
    />
  </div>
</template>
