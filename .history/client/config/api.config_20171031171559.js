const isPro = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
    baseUrl: isPro ? 'http://shopping.yingyun.ink/api/' : 'api/'
}