<template>
  <div id="app">
    <b-navbar type="is-dark" :fixed-top="true" :transparent="true" wrapper-class="container is-dark">

      <template #end>
        <b-navbar-item href="/">
          Home
        </b-navbar-item>
        <b-navbar-item href="/resume">
          Resume
        </b-navbar-item>
        <b-navbar-item href="/portfolio">
          Portfolio
        </b-navbar-item>
        <b-navbar-item href="https://hailiangblog.com">
          Blog
        </b-navbar-item>
        <b-navbar-item href="/contact">
          Contact
        </b-navbar-item>
      </template>
    </b-navbar>

    
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
</style>
