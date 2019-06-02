module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
        ? '/self/' : '/',
  outputDir: 'docs'

}
