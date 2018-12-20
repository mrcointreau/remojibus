import { default as twemoji } from 'twemoji'

export default {
  methods: {
    parseEmojis(emojis) {
      return twemoji.parse(emojis, {
        callback: (icon, options) => {
          return require(`@/assets/${options.size}/${icon}${options.ext}`)
        },
        folder: 'svg',
        ext: '.svg'
      })
    }
  }
}
