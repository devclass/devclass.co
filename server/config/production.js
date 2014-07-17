module.exports = {
  mongoUri: process.env.MONGOLAB_URI,
  secret: process.env.SECRET_KEY,
  github: {
    clientId: process.env.GITHUB_KEY,
    clientSecret: process.env.GITHUB_SECRET,
    redirectUri: process.env.GITHUB_REDIRECT_URI
  },
}
