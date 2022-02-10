;(function () {
  try {
    const dataSet = document.documentElement.dataset
    const currentTheme = window.localStorage.getItem('theme')

    if (currentTheme) {
      return (dataSet.theme = currentTheme)
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return (dataSet.theme = 'dark')
    }
    dataSet.theme = 'light'
  } catch (e) {}
})()
