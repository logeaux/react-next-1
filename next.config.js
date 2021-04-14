const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  basePath: !debug ? '/react-next-1' : '',
  assetPrefix: !debug ? '/react-next-1/' : '',
}