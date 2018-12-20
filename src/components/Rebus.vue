<template>
  <p v-html="data.img"></p>
</template>

<script>
import { default as parseEmojis } from '@/mixins/parseEmojis.js'

export default {
  mixins: [parseEmojis],

  props: ['data'],

  created() {
    this.data.img = this.parseEmojis(this.data.emojis)
  }
}
</script>
