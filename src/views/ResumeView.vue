<template>
  <div class="resume">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-one-fifth">
            <figure class="image is-128x128 mx-auto">
              <img :src="require(`../assets/profile.jpg`)">
            </figure>
          </div>
          <div class="column">
            <div>
              <p class="title">Lương Thế Hải</p>
              <p class="is-size-5">Full-stack, Game Developer</p>
              <p class="is-size-6 my-1">
                <font-awesome-icon icon="fa-solid fa-cake-candles" /> 2000 (
                <b-tooltip label="庚辰 (Canh Thìn)">
                  <font-awesome-icon icon="fa-solid fa-dragon" />
                </b-tooltip>
                )
              </p>
              <p class="is-size-6 my-1">
                <font-awesome-icon icon="fa-solid fa-location-dot" /> Vietnam, Hanoi
              </p>
              <div>
                <b-tooltip class="mx-2" v-for="contact, index in contacts" :key="index" :label="contact.tooltip">
                  <a :href="contact.link">
                    <font-awesome-icon :icon="contact.icon" />
                  </a>
                </b-tooltip>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section has-background-grey-dark">
      <h1 class="title has-text-light">Technologies used</h1>
      <div class="tile">
        <div class="mx-auto">
          <b-tooltip v-for="tech, index in technologies" :key="index" :label="tech.name">
            <Icon class="mx-1" :icon="tech.icon" height="64" />
          </b-tooltip>
        </div>
      </div>
    </section>

    <section class="section has-background-grey-dark">
      <p class="title has-text-light">Working experiences</p>
      <div>
        <div class="timeline is-centered">
          <header class="timeline-header">
            <span class="tag is-primary">2020</span>
          </header>

          <div class="timeline-item">
            <div class="timeline-marker is-icon">
              <font-awesome-icon icon="fas fa-brain" />
            </div>
            <div class="timeline-content">
              <p class="heading has-text-light">December 2020 - August 2021</p>
              <!-- <p>A.N LAB</p> -->
              <b-collapse :open="false" aria-id="contentIdForA11y1">
                <template #trigger="props">
                  <b-button label="A.N LAB" type="is-dark" aria-controls="contentIdForA11y1"
                    :aria-expanded="props.open" />
                </template>
                <div class="notification">
                  <div class="content">
                    <h3>
                      Intern
                    </h3>
                    <p>
                      Trained about OpenCV, Tensorflow, PyTorch to solve some problems like Resize and rotate images,
                      Frame marker detector, Credit card OCR, etc
                    </p>
                  </div>
                </div>
              </b-collapse>
            </div>
          </div>
          <header class="timeline-header">
            <span class="tag is-primary">2022</span>
          </header>
          <div class="timeline-item">
            <div class="timeline-marker is-icon">
              <font-awesome-icon icon="fas fa-gamepad" />
            </div>
            <div class="timeline-content">
              <p class="heading has-text-light">February 2022 - Now</p>
              <b-collapse :open="false" aria-id="contentIdForA11y1">
                <template #trigger="props">
                  <b-button label="Glis Games" type="is-dark" aria-controls="contentIdForA11y1"
                    :aria-expanded="props.open" />
                </template>
                <div class="notification">
                  <div class="content has-text-left">
                    <h3>
                      Developer
                    </h3>
                    <ul>
                      <li>Trained to use OpenGL, Emscripten</li>
                      <li>Maintaining vbEngine - Glis Games' in-house game engine</li>
                      <li>Creating and maintaining the company's games</li>
                      <li>Being a front-end developer for webgames</li>
                      <li>Writing some modules to communicate between embeded device to game</li>
                    </ul>
                  </div>
                </div>
              </b-collapse>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section has-background-grey-dark">
      <h1 class="title has-text-light">Education</h1>
      <div class="has-text-centered">
        <p class="is-size-4 has-text-light">FPT University</p>
        <p class="is-size-5 has-text-light">2018 - 2022</p>
        <p class="is-size-5 has-text-light">Major: Software Engineering</p>
        
      </div>
    </section>

    <section class="section has-background-grey-dark">
      <h1 class="title has-text-light">Spoken languages</h1>
      <div class="columns is-multiline">
        <div class="column is-half" v-for="language, index in languages" :key="index">
          <p class="is-size-4 has-text-light">{{language.lang}}</p>
          <b-slider size="is-large" v-model="language.level" :disabled="true" :min="0" :max="10" :step="0.1"></b-slider>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import contacts from '@/data/contacts'
import { Icon } from '@iconify/vue2';
import technologies from '@/data/technologies'
import languages from '@/data/languages'


export default {
  data() {
    return {
      contacts: contacts,
      technologies: technologies,
      languages: languages
    }
  },
  components: {
    Icon
  }
}
</script>
<style>
.profile-image {
  max-width: 170px;
  max-height: 170px;
}
</style>
