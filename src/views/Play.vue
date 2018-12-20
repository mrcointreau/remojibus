<template>
  <div class="flex flex-column flex-align-items-center flex-justify-content-center full-height">
    <button type="button" @click="$router.go(-1)">Indietro</button>
    <rebus :data="rebus" class="responsive-width"/>
    <transition name="scale" @after-leave="onAfterLeave">
      <input
        v-show="input.toLowerCase().trim() !== rebus.solution"
        v-model="input"
        autofocus
        class="responsive-width text-centered"
        type="text"
        :disabled="input.toLowerCase().trim() === rebus.solution"
      >
    </transition>
    <transition name="scale" @after-enter="onAfterEnter">
      <input
        v-show="inputHasLeft"
        class="responsive-width text-centered"
        type="text"
        value="Esatto"
      >
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import { default as hash } from '@/mixins/hash.js'

import Rebus from '@/components/Rebus.vue'

const RELOADING_TIME = 3000

export default {
  mixins: [hash],

  components: {
    Rebus
  },

  data() {
    return {
      input: '',
      inputHasLeft: false
    }
  },

  computed: {
    ...mapState(['rebus', 'remojibus'])
  },

  methods: {
    onAfterEnter() {
      setTimeout(() => {
        this.$confetti.stop()

        this.$router.go(-1)
      }, RELOADING_TIME)
    },

    onAfterLeave() {
      this.inputHasLeft = true

      this.updateProgress(this.hash(this.rebus.emojis))

      this.$confetti.start({
        shape: 'rect'
      })
    },

    updateProgress(hash) {
      let progress = JSON.parse(localStorage.getItem('remojibus'))
      if (progress === null) {
        progress = []
      }

      progress.push(hash)

      localStorage.setItem('remojibus', JSON.stringify(progress))
    }
  },

  created() {
    if (this.rebus === null) {
      this.$store.commit(
        'updateRebus',
        this.remojibus.find(rebus => this.hash(rebus.emojis) === this.$route.params.hash)
      )
    }
  }
}
</script>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: transform 0.5s ease-in-out;
}

.scale-enter {
  transform: scaleX(0);
}

.scale-enter-to {
  transform: scaleX(1);
}

.scale-leave {
  transform: scaleX(1);
}

.scale-leave-to {
  transform: scaleX(0);
}
</style>

