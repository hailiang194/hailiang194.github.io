<template>
  <div>
    <section class="section has-background-grey-dark">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-3">
            <figure class="image is-128x128">
              <img class="is-rounded profile-image" src="~/assets/profile.jpg" alt="Profile" />
            </figure>
          </div>
          <div class="column is-9">
            <h1 class="title has-text-light">{{ $t('resume.name') }}</h1>
            <p class="subtitle has-text-light">{{ $t('resume.title') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section has-background-grey-dark">
      <p class="title has-text-light">{{ $t("resume.work_exp") }}</p>
      <div>
        <div class="timeline is-centered">
          <template v-for="(year, yearIndex) in Object.keys(work).sort().reverse()" :key="'year' + yearIndex">
            <header class="timeline-header">
              <span class="tag is-primary">{{ year }}</span>
            </header>
            <div class="timeline-item" v-for="(job, jobIndex) in work[year]" :key="'job_' + jobIndex + '_' + yearIndex">
              <div class="timeline-marker is-icon">
                <font-awesome-icon :icon="job.icon" />
              </div>
              <div class="timeline-content">
                <p class="heading has-text-light">{{ formatDate(job.time.start) }} - {{ (new Date()).getTime() -
                  job.time.end.getTime() < 86400000 ? $t("resume.present") : formatDate(job.time.end) }}</p>
                    <div class="notification">
                      <div class="content">
                        <h3 class="has-text-dark">
                          {{ job.company }} - {{ $t(`resume.${job.title}`) }}
                        </h3>
                        <p v-for="(res, resIndex) in job.works" :key="'res' + resIndex">
                          {{ $t(`resume.${res}`) }}
                        </p>
                      </div>
                    </div>
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
        <p class="is-size-5 has-text-light">{{ $t('resume.major') }}</p>

      </div>
    </section>

    <section class="section has-background-grey-dark">
      <h1 class="title has-text-light">{{ $t('resume.spoken_lang') }}</h1>
      <div class="columns is-multiline">
        <div class="column is-half" v-for="language, index in languages" :key="'lang' + index">
          <div class="tooltip" :data-tooltip="language.level + '/' + language.max + ' - ' + $t(`resume.${language.description}`)">
            <p class="is-size-4 has-text-light">{{ language.lang }}</p>
            <div>
              <font-awesome-icon icon="fas fa-star" style="color: #fff" v-for="l in language.level" :key="'lv' + l" />
              <font-awesome-icon icon="fa-regular fa-star" style="color: #fff"
                v-for="nl in (language.max - language.level)" :key="nl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import technologies from '~/data/technologies'
import languages from '~/data/languages'
import work from '~/data/work';

// Date formatting function to replace $d
const formatDate = (date) => {
  if (!date) return ''
  if (typeof date === 'string') return date
  if (date instanceof Date) {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    })
  }
  return date.toString()
}

// Make data available to template
definePageMeta({
  title: 'Resume'
})
</script>

<style>
.profile-image {
  max-width: 170px;
  max-height: 170px;
}
</style>
