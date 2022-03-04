
export default {
  methods: {
    /**
     * Return the string with the first letter capitalize
     * @param {String} text
     */
    capitalize: function(text) {
      console.log(text)
      if (text && (typeof text === 'string' || text instanceof String))
        return text.charAt(0).toUpperCase() + text.slice(1)
      return text
    }
  }
}
