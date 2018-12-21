<template>
  <p v-html="parseEmojis('😈'.repeat(data))"></p>
</template>

<script>
import { default as parseEmojis } from '@/mixins/parseEmojis.js'

export default {
  mixins: [parseEmojis],

  props: ['data']
}
</script>
