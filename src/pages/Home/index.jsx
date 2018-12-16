import * as React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout'

import ExampleBoundary from '../../components/ExampleBoundary'

class Home extends React.Component {
  showMessage = () => {
    throw new Error('There was a problem!')
  }

  render() {
    return (
      <ExampleBoundary>
        <Layout>
          <h1>
            A bare bones React boilerplate, featuring Webpack 4, React, Redux, Jest, and
            Babel 7
          </h1>
          <button type="button" className="button" onClick={this.showMessage}>
            Show me a message
          </button>
          <Link to="/about">About</Link>
          <br />
          <Link to="/nope">404 Page</Link>
        </Layout>
      </ExampleBoundary>
    )
  }
}

export default Home
