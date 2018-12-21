export default {
  methods: {
    hash(string) {
      let hash = 0

      if (string.length !== 0) {
        for (let i = 0; i < string.length; i++) {
          const c = string.charCodeAt(i)
          hash = (hash << 5) - hash + c
          // convert to 32bit integer
          hash |= 0
        }
      }

      // for preventing negative numbers
      return String(hash >>> 0)
    }
  }
}
