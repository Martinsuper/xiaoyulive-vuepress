const requireComponent = require.context(
  '.', true, /\.md$/
)

export function resolve () {
  requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)

    const componentName = fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
    const content = componentConfig.default || componentConfig
    console.log(fileName)
  })
}
