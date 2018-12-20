import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    difficulty: 'easy',
    difficulties: ['easy', 'normal', 'hard'],
    rebus: null,
    remojibus: require('@/assets/remojibus.json')
  },
  mutations: {
    updateDifficulty: (state, difficulty) => (state.difficulty = difficulty),
    updateRebus: (state, rebus) => (state.rebus = rebus)
  }
})
