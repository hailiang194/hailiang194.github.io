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
                        <b-tooltip class="mx-2" v-for="contact, index in contacts" :key="index"
                            :label="contact.tooltip">
                            <a :href="contact.link">
                                <font-awesome-icon :icon="contact.icon" />
                            </a>
                        </b-tooltip>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import contacts from '@/data/contacts'
export default {
    data() {
        return {
            contacts: contacts
        }
    }
}
</script>
<style>
</style>