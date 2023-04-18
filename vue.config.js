const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    extract: true,
    loaderOptions: {
      less: {
        sourceMap: true
      }
    }
  },
})
