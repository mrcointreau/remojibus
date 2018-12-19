// script that copy only the svg of the emoticons actually used in the rebus

const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')
const twemoji = require('twemoji')

const remojibus = require('./src/assets/remojibus.json')

const SVG_SRC_PATH = path.join('node_modules', 'twemoji', '2', 'svg')
const SVG_DST_PATH = path.join('src', 'assets', 'svg')

const main = () => {
  rimraf.sync(SVG_DST_PATH)

  fs.mkdirSync(SVG_DST_PATH)

  for (let item of remojibus) {
    const emojis = item.rebus
      .split(' ')
      .map(emoji =>
        twemoji.parse(emoji, { callback: (icon, options) => `${icon}${options.ext}`, folder: 'svg', ext: '.svg' })
      )

    for (let emoji of emojis) {
      const src = emoji.match(/src="(.*)"/).pop()
      const emojiPath = path.join(SVG_SRC_PATH, src)
      if (fs.existsSync(emojiPath)) {
        fs.copyFileSync(emojiPath, path.join(SVG_DST_PATH, src))
      } else {
        throw new Error(`an error occurred: ${src}`)
      }
    }
  }
}

main()
