<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
</script>

<template>
  <div id="app">
    <TheNavbar />
    <RouterView />
  </div>
</template>
