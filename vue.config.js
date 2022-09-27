const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //Turn off eslint validation
  lintOnSave: false
})
