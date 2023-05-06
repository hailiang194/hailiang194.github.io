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
              <p class="title">{{ $t("resume.name") }}</p>
              <p class="is-size-5">{{ $t("resume.title") }}</p>
              <p class="is-size-6 my-1">
                <font-awesome-icon icon="fa-solid fa-cake-candles" /> 2000 (
                <b-tooltip label="庚辰 (Canh Thìn)">
                  <font-awesome-icon icon="fa-solid fa-dragon" />
                </b-tooltip>
                )
              </p>
              <p class="is-size-6 my-1">
                <font-awesome-icon icon="fa-solid fa-location-dot" /> {{ $t("resume.address") }}
              </p>
              <div>
                <b-tooltip class="mx-2" v-for="(contact, index) in contacts" :key="index" :label="contact.tooltip">
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
      <h1 class="title has-text-light">{{ $t("resume.used_tech") }}</h1>
      <div class="tile">
        <div class="mx-auto">
          <b-tooltip v-for="tech, index in technologies" :key="'tect' + index" :label="tech.name">
            <Icon class="mx-1" :icon="tech.icon" height="64" />
          </b-tooltip>
        </div>
      </div>
    </section>

    <section class="section has-background-grey-dark">
      <p class="title has-text-light">{{ $t("resume.work_exp") }}</p>
      <div>
        <div class="timeline is-centered">
          <template v-for="(year, yearIndex) in Object.keys(work).sort().reverse()">
            <header class="timeline-header" :key="'year' + yearIndex">
              <span class="tag is-primary">{{ year }}</span>
            </header>
            <div class="timeline-item" v-for="(job, jobIndex) in work[year]" :key="'job_' + jobIndex + '_' + yearIndex">
              <div class="timeline-marker is-icon">
                <font-awesome-icon :icon="job.icon" />
              </div>
              <div class="timeline-content">
                <p class="heading has-text-light">{{ $d(job.time.start, 'exp') }} - {{ (new Date()).getTime() -
                  job.time.end.getTime() < 86400000 ? $t("resume.present") : $d(job.time.start, 'exp') }}</p>
                    <b-collapse :open="false" aria-id="contentIdForA11y1">
                      <template #trigger="props">
                        <b-button :label="job.company" type="is-dark" aria-controls="contentIdForA11y1"
                          :aria-expanded="props.open" />
                      </template>
                      <div class="notification">
                        <div class="content">
                          <h3>
                            {{ $t(`resume.${job.title}`) }}
                          </h3>
                          <p v-for="(res, resIndex) in job.works" :key="'res' + resIndex">
                            {{ $t(`resume.${res}`) }}
                          </p>
                        </div>
                      </div>
                    </b-collapse>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>

    <section class="section has-background-grey-dark">
      <h1 class="title has-text-light">{{ $t('resume.edu') }}</h1>
      <div class="has-text-centered">
        <p class="is-size-4 has-text-light">{{ $t('resume.university') }}</p>
        <p class="is-size-5 has-text-light">2018 - 2023</p>
        <p class="is-size-5 has-text-light">GPA: 7.06</p>
        <p class="is-size-5 has-text-light">{{ $t('resume.major') }}</p>

      </div>
    </section>

    <section class="section has-background-grey-dark">
      <h1 class="title has-text-light">{{ $t('resume.spoken_lang') }}</h1>
      <div class="columns is-multiline">
        <div class="column is-half" v-for="language, index in languages" :key="'lang' + index">
          <b-tooltip :label="language.level + '/' + language.max + ' - ' + $t(`resume.${language.description}`)">
            <p class="is-size-4 has-text-light">{{ language.lang }}</p>
            <div>
              <font-awesome-icon icon="fas fa-star" style="color: #fff" v-for="l in language.level" :key="'lv' + l" />
              <font-awesome-icon icon="fa-regular fa-star" style="color: #fff"
                v-for="nl in (language.max - language.level)" :key="nl" />
            </div>
          </b-tooltip>
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
import work from '@/data/work';


export default {
  data() {
    return {
      contacts: contacts,
      technologies: technologies,
      languages: languages,
      work: work
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
