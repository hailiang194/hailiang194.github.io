<template>
    <div class="portfolio">
        <section class="hero is-dark">
            <div class="hero-body">
                <p class="title has-text-centered">
                    Portfolio
                </p>
                <p class="subtitle has-text-centered">
                    {{ $t("portfolio.have_done") }}
                </p>
            </div>
        </section>

        <section class="section has-background-grey-dark">
            <!-- <div class="tile is-ancestor">
                <div class="tile is-parent is-3" v-for="repo, rIndex in repos" :key="rIndex">
                    <div class="tile is-child" >
                        <p class="has-text-light">{{ repo.name }}</p>
                    </div>
                </div>

            </div> -->
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
                                    <b-taglist>
                                        <b-tag type="is-light" v-for="topic, tIndex in repo.topics" :key="tIndex">
                                            {{ topic }}</b-tag>
                                    </b-taglist>
                                </div>
                                <p class="has-text-primary-dark is-6">{{ repo.language }}</p>
                                <!-- <div>
                                    <b-button tag="a" :href="repo.html_url" target="_blank" type="is-success">
                                        View source code
                                    </b-button>
                                </div> -->
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
            <b-button class="my-3" tag="a" href="https://github.com/hailiang194" target="_blank" type="is-info">
                {{ $t("portfolio.view_github") }}
            </b-button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            repos: []
        }
    },
    mounted() {
        this.repos = []
        axios.get(`https://api.github.com/users/hailiang194/repos?per_page=10&type=all`).then(response => {
            this.repos = response.data
        }).catch((error) => {
            console.log(error)
        })
    }
}
</script>
<style>
</style>