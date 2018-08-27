/**
 * Created by Alexandru Huszar on 8/22/2018.
 */
import React, {Component} from 'lib'
import { Container } from 'semantic-ui-react'

import Issues from 'containers/Issues'

/**
 * App
 */
export default class App extends Component {

  /**
   * Render the component
   *
   * @return {XML}
   */
  render() {
    // wrapper
    // TODO add REACT-REDUX
    return (
      <Container>
        <Issues />
      </Container>

    )
  }

}
