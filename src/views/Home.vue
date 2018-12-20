<template>
  <ul class="flex flex-row flex-wrap no-list-style no-margin no-padding">
    <li
      v-for="(rebus, index) of remojibusSortedByState"
      :key="index"
      class="flex flex-align-items-center flex-justify-content-center full-width"
    >
      <div
        class="flex flex-column align-items-center flex-justify-content-center remojibus responsive-width"
      >
        <difficulty :data="rebus.difficulty" class="difficulty no-margin-bottom text-right"/>
        <rebus :data="rebus" @click.native="play(rebus)" class="flex flex-justify-content-center"/>
        <p class="solution no-margin-top text-centered">
          <span v-if="completed.includes(hash(rebus.emojis))">{{ rebus.solution }}</span>
          <span v-else>??????</span>
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

import { default as hash } from '@/mixins/hash.js'

import Difficulty from '@/components/Difficulty.vue'
import Rebus from '@/components/Rebus.vue'

export default {
  mixins: [hash],

  components: {
    Difficulty,
    Rebus
  },

  data() {
    return {
      completed: this.loadCompleted()
    }
  },

  computed: {
    ...mapState(['difficulty', 'rebus', 'remojibus']),

    remojibusSortedByState() {
      const completed = this.remojibus.filter(rebus => this.completed.includes(this.hash(rebus.emojis)))
      const todo = this.remojibus.filter(rebus => !this.completed.includes(this.hash(rebus.emojis)))

      return completed.concat(todo)
    }
  },

  methods: {
    loadCompleted() {
      let completed = JSON.parse(localStorage.getItem('remojibus'))
      if (completed === null) {
        completed = []
      }

      return completed
    },

    play(rebus) {
      this.$store.commit('updateRebus', rebus)

      this.$router.push({ name: 'play', params: { hash: this.hash(this.rebus.emojis) } })
    }
  }
}
</script>

<style scoped>
li {
  border: 1px solid lightgray;
}

.difficulty,
.solution {
  font-size: 0.5em;
}

.remojibus {
  width: 50%;
}
</style>

