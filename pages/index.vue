<template>
  <section class="hero is-dark is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="main-container">
        <div v-for="n, i in langNames" :key="i">
          <template v-if="lang === i">
            <p class="title is-1 has-text-centered is-spaced">{{ n.name }}</p>
            <p class="subtitle has-text-centered">
              {{ n.title }}
            </p>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import names from '~/data/names'

const langNames = ref(names)
const lang = ref(0)

const slideInterval = () => {
  setInterval(() => {
    lang.value++
    if (lang.value === langNames.value.length) {
      lang.value = 0
    }
  }, 2000)
}

onMounted(() => {
  slideInterval()
})

definePageMeta({
  title: 'Home'
})
</script>

<style>
.main-container {
  width: 100%;
}

/* Ensure hero takes full viewport height */
.hero.is-dark.is-fullheight-with-navbar {
  min-height: 100vh !important;
  height: 100vh !important;
  background-color: #363636 !important; /* Bulma dark color */
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important; /* Prevent scrolling only on this hero */
}

.hero-body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important; /* Prevent scrolling only on this hero */
}

/* Center content vertically and horizontally */
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important; /* Prevent scrolling only on this hero */
}

/* Remove any default margins/padding that might cause white space */
.hero {
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important; /* Prevent scrolling only on this hero */
}
</style>

