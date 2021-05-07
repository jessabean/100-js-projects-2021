import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import * as pageStyles from "./border-radius.module.css"


export default class BinaryToDecimal extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.topLeftRadiusInput = React.createRef();
    this.topRightRadiusInput = React.createRef();
    this.bottomLeftRadiusInput = React.createRef();
    this.bottomRightRadiusInput = React.createRef();

    this.state = {
      topLeftRadiusValue: '',
      topRightRadiusValue: '',
      bottomLeftRadiusValue: '',
      bottomRightRadiusValue: '',
    };
  }

  onInputChange = e => {
    const key = `${e.target.id}Value`
    this.setState({ [key]: e.target.value });
  };


  render () {
    return (
      <Layout>
        <Seo title="Binary to decimal converter" />
        <section className="project">
          <header className="project-header">
            <h1 className="project-headline">Border radius previewer</h1>
            <p className="project-description">Change the border radius properties and preview how they will look on your shape.</p>
          </header>

          <form ref={this.formRef} className={pageStyles.form}>
            <fieldset className={pageStyles.['form__fieldblock']}>
              <label className={pageStyles.['form__label']} htmlFor="topLeftRadius">top-left</label>
              <input ref={this.topLeftRadiusInput} value={this.state.topLeftRadiusValue} type="text" id="topLeftRadius" className={pageStyles.['form__input']} />
            </fieldset>
            <fieldset className={pageStyles.['form__fieldblock']}>
              <label className={pageStyles.['form__label']} htmlFor="topRightRadius">top-right</label>
              <input ref={this.topRightRadiusInput} value={this.state.topRightRadiusValue} type="text" id="topRightRadius" className={pageStyles.['form__input']} />
            </fieldset>
            <fieldset className={pageStyles.['form__fieldblock']}>
              <label className={pageStyles.['form__label']} htmlFor="bottomRightRadius">bottom-left</label>
              <input ref={this.bottomLeftRadiusInput} value={this.state.bottomLeftRadiusValue} type="text" id="bottomRightRadius" className={pageStyles.['form__input']} />
            </fieldset>
            <fieldset className={pageStyles.['form__fieldblock']}>
              <label className={pageStyles.['form__label']} htmlFor="bottomLeftRadius">bottom-right</label>
              <input ref={this.bottomRightRadiusInput} value={this.state.bottomRightRadiusValue} type="text" id="bottomLeftRadius" className={pageStyles.['form__input']} />
            </fieldset>

          </form>


          <div className={pageStyles.['preview']}
            style={{
              borderTopLeftRadius: this.topLeftRadiusValue,
              borderTopRightRadius: this.topRightRadiusValue,
              borderBottomLeftRadius: this.bottomLeftRadiusValue,
              borderBottomRightRadius: this.bottomRightRadiusValue,
            }}></div>


        </section>
        <section className="project-footer">
          <Link to="/"><span role="img" aria-label="back arrow">⬅</span> Back to homepage</Link>
        </section>

      </Layout>
    )
  }
}
