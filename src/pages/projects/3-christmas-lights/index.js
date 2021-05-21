import React, { useState, useRef } from "react"
import Light from './light'

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import * as pageStyles from "./christmas-lights.module.css"

function ChristmasLights() {
  const [currentKey, setState] = useState(null);
  const stringOfLights = 7;
  const lightRefs = useRef([...new Array(stringOfLights)].map(() => React.createRef()));

  const foo = () => {
    console.log('foo');
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
          {lightRefs.current.map((el, i) =>
            <Light key={i} />
          )}
        </div>
      </section>
    </Layout>
  )
}

export default ChristmasLights;
