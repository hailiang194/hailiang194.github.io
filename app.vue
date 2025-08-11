<template>
  <div>
    <nav class="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="container">
        <!-- Mobile hamburger menu button -->
        <div class="navbar-brand">
          <a class="navbar-burger" :class="{ 'is-active': isMenuActive }" @click="toggleMenu" role="button" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <!-- Navigation menu -->
        <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
          <div class="navbar-end">
            <a class="navbar-item" href="/" @click="closeMenu">
              {{ $t("nav.home") }}
            </a>
            <a class="navbar-item" href="/resume" @click="closeMenu">
              {{ $t("nav.resume") }}
            </a>
            <a class="navbar-item" href="/portfolio" @click="closeMenu">
              {{ $t("nav.portfolio") }}
            </a>
            <a class="navbar-item" href="/contact" @click="closeMenu">
              {{ $t("nav.contact") }}
            </a>
            <div class="navbar-item has-dropdown" :class="{ 'is-active': isDropdownActive }">
              <a class="navbar-link" @click="toggleDropdown">
                {{ $t('name') }}
              </a>
              <div class="navbar-dropdown">
                <a v-for="(lang, index) in availableLocales" :key="index" class="navbar-item" @click="changeLang(lang)">
                  {{ getLangName(lang) }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="main-content">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const availableLocales = ['en', 'vi', 'zh', 'ja']
const isMenuActive = ref(false)
const isDropdownActive = ref(false)

const getLangName = (lang) => {
  const names = {
    en: 'English',
    vi: 'Tiếng Việt',
    zh: '中文',
    ja: '日本語'
  }
  return names[lang] || lang
}

const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value
  if (isMenuActive.value) {
    isDropdownActive.value = false
  }
}

const closeMenu = () => {
  isMenuActive.value = false
  isDropdownActive.value = false
}

const toggleDropdown = () => {
  isDropdownActive.value = !isDropdownActive.value
}

const changeLang = (lang) => {
  // Get the i18n instance from the plugin
  const { $i18n } = useNuxtApp()
  if ($i18n) {
    $i18n.setLocale(lang)
  }
  // Close the menu after language change
  closeMenu()
}
</script>

<style>
/* Add top margin to account for fixed navbar */
.main-content {
  margin-top: 3.25rem; /* Standard Bulma navbar height */
}

/* Ensure navbar is properly positioned */
.navbar.is-fixed-top {
  z-index: 1000;
}

/* Mobile menu styles */
.navbar-burger {
  color: white;
}

.navbar-burger:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Ensure dropdown works properly on mobile */
.navbar-dropdown {
  display: none;
}

.navbar-item.has-dropdown.is-active .navbar-dropdown {
  display: block;
}

/* Mobile responsive adjustments */
@media screen and (max-width: 1023px) {
  .navbar-menu {
    background-color: rgba(54, 54, 54, 0.95) !important; /* Transparent dark background */
    position: fixed !important;
    top: 3.25rem !important; /* Height of the navbar */
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    z-index: 999 !important;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px); /* Add subtle blur effect for better readability */
  }
  
  /* Improve text contrast on mobile */
  .navbar-menu .navbar-item {
    color: #ffffff !important;
    font-weight: 500;
    padding: 1rem 1.5rem !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    background-color: rgba(0, 0, 0, 0.3) !important; /* Semi-transparent background for each item */
  }
  
  .navbar-menu .navbar-item:hover {
    background-color: rgba(255, 255, 255, 0.2) !important;
    color: #ffffff !important;
  }
  
  .navbar-menu .navbar-link {
    color: #ffffff !important;
    font-weight: 500;
    padding: 1rem 1.5rem !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    background-color: rgba(0, 0, 0, 0.3) !important; /* Semi-transparent background for each item */
  }
  
  .navbar-menu .navbar-dropdown .navbar-item {
    color: #ffffff !important;
    background-color: rgba(0, 0, 0, 0.2) !important; /* Lighter transparent background for dropdown items */
    padding-left: 2.5rem !important;
  }
  
  .navbar-menu .navbar-dropdown .navbar-item:hover {
    background-color: rgba(255, 255, 255, 0.2) !important;
    color: #ffffff !important;
  }
  
  .navbar-item.has-dropdown .navbar-dropdown {
    display: none;
    position: static;
    float: none;
    width: 100%;
    background-color: transparent;
    border: 0;
    box-shadow: none;
  }
  
  .navbar-item.has-dropdown.is-active .navbar-dropdown {
    display: block;
  }
  
  /* Ensure the overlay covers the entire viewport */
  .navbar-menu.is-active {
    display: block !important;
    transform: translateX(0) !important;
  }
}
</style>
