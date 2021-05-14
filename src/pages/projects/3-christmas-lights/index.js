import * as React from "react"
import Light from './light'

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import * as pageStyles from "./christmas-lights.module.css"

export default class ChristmasLights extends React.Component {
  constructor(props) {
    super(props);
    this.stringOfLights = 7;

    for (let i=1; i <= this.stringOfLights; i++) {
      this['lightRef'+i] = React.createRef();
    }

    this.state = {
      currentKey: null,
    };
  }

  render () {
    const lights = []

    for (let i=1; i <= this.stringOfLights; i++) {
      lights.push(<Light key={i} ref={this['lightRef'+i]} />)
    }

    return (
      <Layout>
        <Seo title="Christmas Lights Simulator" />
        <section className="project">
          <header className="project-header">
            <h1 className="project-headline">Christmas lights</h1>
            <p className="project-description">Click a light to change its color. Click the "Start" button to see the lights in action!</p>
          </header>
          <div className={pageStyles.['preview__wrapper']}>
            { lights }
          </div>
        </section>
      </Layout>
    )
  }
}
