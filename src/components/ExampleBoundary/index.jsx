/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, jsx-a11y/anchor-is-valid */
import * as React from 'react'

class ExampleBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error })
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key])
      })
      Sentry.captureException(error)
    })
  }

  render() {
    const { error } = this.state
    const { children } = this.props

    if (error) {
      // render fallback UI
      return <a onClick={() => Sentry.showReportDialog()}>Report feedback</a>
    }

    // when there's not an error, render children untouched
    return children
  }
}

export default ExampleBoundary
