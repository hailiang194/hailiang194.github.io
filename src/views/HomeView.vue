<template>
  <section class="hero is-dark is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="main-container">
        <!-- <p class="title is-1 has-text-centered is-spaced" v-if="lang == 0">Lương Thế Hải</p>
        <p class="title is-1 has-text-centered is-spaced" v-if="lang == 'en'">Hai(Kai) Luong</p>
        <p class="title is-1 has-text-centered is-spaced" v-if="lang == 'cn'">梁世海</p>
        <p class="title is-1 has-text-centered is-spaced" v-if="lang == 'jp'">リョン・テー・ハイ「うみくん」</p> -->
        <div v-for="n, i in langNames" :key="i">
          <template v-if="lang === i">
            <p class="title is-1 has-text-centered is-spaced">{{ n.name }}</p>
            <p class="subtitle has-text-centered">
              {{ n.title }}
            </p>
          </template>
        </div>


      </div>
    </div>
  </section>
</template>

<script>
import names
 from '@/data/names';
export default {
  name: 'HomeView',
  data() {
    return {
      langNames: names,
      lang: 0
    }
  },
  methods: {
    slideInterval() {
      var self = this;
      setInterval(() => {
        ++self.lang;
        if (self.lang == self.langNames.length) {
          self.lang = 0
        }
      }, 2000);
    }
  },
  mounted() {
    this.slideInterval()
  }
}
</script>
<style>
.main-container {
  width: 100%;
}
</style>
