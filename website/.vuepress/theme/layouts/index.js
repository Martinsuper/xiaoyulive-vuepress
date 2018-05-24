const requireComponent = require.context(
  '.', true, /\.vue$/
)

export default {
  install: function (_Vue) {
    requireComponent.keys().forEach(fileName => {
      const componentConfig = requireComponent(fileName)

      const componentName = fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
      const content = componentConfig.default || componentConfig
      _Vue.component(componentName, content)
    })
  }
}
