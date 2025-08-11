<template>
    <div class="contact">
        <section class="hero is-dark is-fullheight-with-navbar">
            <div class="hero-body">
                <div class="main-container">
                    <p class="title is-1 has-text-centered is-spaced">{{ $t("contact.title") }}</p>
                    <p class="subtitle has-text-centered">
                        {{ $t('contact.message') }}
                    </p>
                    <div class="is-flex is-justify-content-center">
                        <ContactLists />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import ContactLists from '~/components/ContactLists.vue'

definePageMeta({
    title: 'Contact'
})
</script>

<style>
/* Prevent scrolling only on this contact page hero */
.hero.is-dark.is-fullheight-with-navbar {
  overflow: hidden !important;
}

.hero-body {
  overflow: hidden !important;
}

.main-container {
  overflow: hidden !important;
}
</style>