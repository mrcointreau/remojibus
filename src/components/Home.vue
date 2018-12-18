<template>
  <div>
    <p class="font-scaled">{{ current.rebus }}</p>
    <transition name="scale" @after-leave="onAfterLeave">
      <input
        v-show="input.toLowerCase() !== current.solution"
        v-model="input"
        autofocus
        class="centered font-scaled"
        type="text"
        :disabled="input === current.solution"
      >
    </transition>
    <transition name="scale" @after-enter="onAfterEnter">
      <input
        v-show="inputHasLeft"
        class="centered font-scaled"
        style="border-color: white; border-style: solid;"
        type="text"
        value="Esatto ✌️"
      >
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'

const RELOADING_TIME = 3000

export default {
  data() {
    return {
      current: null,
      input: '',
      inputHasLeft: false
    }
  },

  computed: {
    ...mapState(['difficulty', 'remojibus'])
  },

  methods: {
    onAfterEnter() {
      setTimeout(() => {
        window.location.reload()
      }, RELOADING_TIME)
    },
    onAfterLeave() {
      this.inputHasLeft = true
    }
  },

  created() {
    this.current = this.remojibus[Math.floor(Math.random() * this.remojibus.length)]
  }
}
</script>

<style scoped>
.centered {
  text-align: center;
}

.font-scaled {
  font-family: Helvetica, Arial, sans-serif;
  font-size: calc(20px + (100 - 20) * ((100vw - 300px) / (1600 - 300)));
  line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300)));
}

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

