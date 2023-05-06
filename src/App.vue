<template>
  <div id="app">
    <b-navbar type="is-dark" :fixed-top="true" :transparent="true" wrapper-class="container is-dark">

      <template #end>
        <b-navbar-item href="/">
          {{ $t("nav.home") }}
        </b-navbar-item>
        <b-navbar-item href="/resume">
          {{ $t("nav.resume") }}
        </b-navbar-item>
        <b-navbar-item href="/portfolio">
          {{ $t("nav.portfolio") }}
        </b-navbar-item>
        <b-navbar-item href="/contact">
          {{ $t("nav.contact") }}
        </b-navbar-item>
        <b-navbar-dropdown :label="$t('name')">
          <b-navbar-item v-for="(lang, index) in Object.keys($i18n.messages)" :key="index" v-on:click="changeLang(lang)">
            {{ $i18n.messages[lang].name }}
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>


    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    changeLang(lang) {
      this.$root.$i18n.locale = lang
      localStorage.lang = lang
    }
  }
}
</script>

<style></style>
