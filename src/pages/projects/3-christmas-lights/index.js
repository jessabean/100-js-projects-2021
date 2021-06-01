import React, { useState, useRef, useCallback } from "react"
import Light from './light'

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import styles from "./christmas-lights.css"
import classNames from 'classnames/bind';


function ChristmasLights() {
  const [currentKey, setState] = useState(null);
  const [isAnimated, setAnimated] = useState(false);
  const stringOfLights = 7;
  const lightRefs = useRef([...new Array(stringOfLights)].map(() => React.createRef()));

  const startLights = () => {
    if(isAnimated === true) {
      setAnimated(false);
    } else {
      setAnimated(true);
    }
  };

  const cx = classNames.bind(styles);

  let wrapperClasses = cx(
    'preview__wrapper',
    {
      'animated' : isAnimated
    }
  );

  return (
    <Layout>
      <Seo title="Christmas Lights Simulator" />
      <section className="project">
        <header className="project-header">
          <h1 className="project-headline">Christmas lights</h1>
          <p className="project-description">Click a light to change its color. Click the "Start" button to see the lights in action!</p>
        </header>
        <div className={'preview__config'}>
          <button className={'preview__start-btn'} onClick={startLights}>Start</button>
        </div>
        <div className={wrapperClasses}>
          {lightRefs.current.map((el, i) =>
            <Light key={i} />
          )}
        </div>
      </section>
    </Layout>
  )
}

export default ChristmasLights;
