<template>
  <section class="hero is-dark is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="main-container">
        <!-- <p class="title is-1 has-text-centered is-spaced" v-if="lang == 0">Lương Thế Hải</p>
        <p class="title is-1 has-text-centered is-spaced" v-if="lang == 'en'">Hai(Kai) Luong</p>
        <p class="title is-1 has-text-centered is-spaced" v-if="lang == 'cn'">梁世海</p>
        <p class="title is-1 has-text-centered is-spaced" v-if="lang == 'jp'">リョン・テー・ハイ「うみくん」</p> -->
        <div v-for="n, i in langNames" :key="i">
          <p class="title is-1 has-text-centered is-spaced" v-if="lang === i">{{ n }}</p>
        </div>
        <p class="subtitle has-text-centered">
          Full-stack, Game Developer
        </p>
        
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'HomeView',
  data() {
    return {
      langNames: [
        "Lương Thế Hải",
        "Hai(Kai) Luong",
        "梁世海",
        "リョン・テー・ハイ「うみくん」"
      ],
      lang: 0
    }
  },
  methods: {
    slideInterval() {
      var self = this;
      setInterval(() => {
        ++self.lang;
        if(self.lang == self.langNames.length)
        {
          self.lang = 0
        }
      }, 1000);
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
