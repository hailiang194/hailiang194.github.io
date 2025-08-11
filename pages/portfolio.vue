<template>
    <div class="portfolio">
        <section class="hero is-dark hero-portfolio">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title has-text-centered has-text-light">
                        Portfolio
                    </h1>
                    <p class="subtitle has-text-centered has-text-light">
                        {{ $t("portfolio.have_done") }}
                    </p>
                </div>
            </div>
        </section>

        <section class="section has-background-grey-dark">
            <div class="columns is-multiline">
                <div class="column is-half" v-for="repo, rIndex in repos" :key="rIndex">
                    <div class="card">
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img :src="repo.owner.avatar_url" alt="Owner's avatar">
                                    </figure>
                                </div>
                                <div>
                                    <p class="title is-4">{{ repo.name }}</p>
                                    <p class="subtitle is-6">{{ repo.owner.login }}</p>
                                </div>
                            </div>
                            <div class="content">
                                <p>{{ repo.description }}</p>
                                <div>
                                    <div class="tags">
                                        <span class="tag is-light" v-for="topic, tIndex in repo.topics" :key="tIndex">
                                            {{ topic }}</span>
                                    </div>
                                </div>
                                <p class="has-text-primary-dark is-6">{{ repo.language }}</p>
                            </div>
                        </div>
                        <footer class="card-footer">
                            <a :href="repo.html_url" target="_blank" class="card-footer-item">{{ $t("portfolio.view_source") }}</a>
                        </footer>
                    </div>
                </div>
            </div>
        </section>
        <div class="is-flex is-justify-content-center has-background-grey-dark">
            <a href="https://github.com/hailiang194" target="_blank" class="button is-info my-3">
                {{ $t("portfolio.view_github") }}
            </a>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const repos = ref([])

onMounted(async () => {
    try {
        const response = await axios.get(`https://api.github.com/users/hailiang194/repos?per_page=10&type=all&sort=pushed&direction=desc`)
        repos.value = response.data
    } catch (error) {
        console.log(error)
    }
})

definePageMeta({
    title: 'Portfolio'
})
</script>

<style>
/* Custom hero height for portfolio page - 1/4 of viewport height */
.hero-portfolio {
    min-height: 25vh !important;
    height: 25vh !important;
}

.hero-portfolio .hero-body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 25vh !important;
}
</style>