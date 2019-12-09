import ReactGA from 'react-ga'

export const initAnalytics = () => {
  ReactGA.initialize('UA-31138805-3')
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}