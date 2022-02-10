/** @typedef {{load: (Promise<unknown>); flags: (unknown)}} ElmPagesInit */

/** @type ElmPagesInit */
export default {
  load: async function (elmLoaded) {
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
    const app = await elmLoaded
    console.log('App loaded', app)
  },
  flags: function () {
    return "You can decode this in Shared.elm using Json.Decode.string!";
  },
};
