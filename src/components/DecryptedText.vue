<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    text: string
    speed?: number
    maxIterations?: number
    parentClassName?: string
    characters?: string
  }>(),
  {
    speed: 50,
    parentClassName: '',
    characters: 'abcdefghijklmnopqrstuvwxyz0123456789',
  },
)

const containerRef = ref<HTMLSpanElement | null>(null)

const chars = computed(() => props.characters.split(''))

function scramble(revealed = 0) {
  return props.text
    .split('')
    .map((c, i) => {
      if (c === ' ' || i < revealed) return c
      return chars.value[Math.floor(Math.random() * chars.value.length)]
    })
    .join('')
}

const displayText = ref(scramble())

let intervalId: ReturnType<typeof setInterval> | null = null
let observer: IntersectionObserver | null = null

function stop() {
  if (intervalId !== null) clearInterval(intervalId)
  intervalId = null
}

function decrypt() {
  stop()
  let tick = 0
  const ticksPerLetter = 4
  displayText.value = scramble(0)
  intervalId = setInterval(() => {
    tick++
    const revealed = Math.floor(tick / ticksPerLetter)
    if (revealed >= props.text.length) {
      stop()
      displayText.value = props.text
    } else {
      displayText.value = scramble(revealed)
    }
  }, props.speed)
}

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        decrypt()
        observer?.disconnect() // run once
      }
    },
    { threshold: 0.1 },
  )
  if (containerRef.value) observer.observe(containerRef.value)
})

onUnmounted(() => {
  stop()
  observer?.disconnect()
})

watch(
  () => props.text,
  () => decrypt(),
)
</script>

<template>
  <span ref="containerRef" :class="parentClassName">
    <span class="sr-only">{{ text }}</span>
    <span aria-hidden="true">{{ displayText }}</span>
  </span>
</template>

<style>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
