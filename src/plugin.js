export default ({ Vue, debounce }) => {

  if (!Vue) {
    throw new Error('Missing Vue as parameter')
  }

  const install = (Vue) => {
    Vue.mixin({
      mounted: () => {
        const calculateViewport = () => {
          const vh = window.innerHeight * 0.01
          document.documentElement.style.setProperty('--vh', `${vh}px`)
        }
        if (typeof debounce === 'function') {
          window.addEventListener('resize', debounce(calculateViewport, 200))
        } else {
          window.addEventListener('resize', calculateViewport)
        }
        calculateViewport()
      }
    })
  }

  return {
    install,
  }
}
