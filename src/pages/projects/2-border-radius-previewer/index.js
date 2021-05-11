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
    this.topLeftRadiusUnitInput = React.createRef();
    this.topRightRadiusUnitInput = React.createRef();
    this.bottomLeftRadiusUnitInput = React.createRef();
    this.bottomRightRadiusUnitInput = React.createRef();

    this.state = {
      radius: {
        topLeftRadiusValue: '',
        topRightRadiusValue: '',
        bottomLeftRadiusValue: '',
        bottomRightRadiusValue: '',
        topLeftRadiusUnitValue: 'px',
        topRightRadiusUnitValue: 'px',
        bottomLeftRadiusUnitValue: 'px',
        bottomRightRadiusUnitValue: 'px',
      },
      styles: {
        borderTopLeftRadius: '0',
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0',
        borderBottomLeftRadius: '0',
        background: '#fff'
      }
    };
  }

  onInputChange = e => {
    const key = `${e.target.id}Value`;
    const newValue = e.target.value;
    const newRadius = { [key]: newValue };

    this.setState({ radius: {
      ...this.state.radius,
      [key]: newValue
    }}, () => this.updatePreview());
  };

  updatePreview = () => {
    const newStyles = {
      borderTopLeftRadius: `${this.state.radius.topLeftRadiusValue}${this.state.radius.topLeftRadiusUnitValue}`,
      borderTopRightRadius: `${this.state.radius.topRightRadiusValue}${this.state.radius.topRightRadiusUnitValue}`,
      borderBottomRightRadius: `${this.state.radius.bottomRightRadiusValue}${this.state.radius.bottomRightRadiusUnitValue}`,
      borderBottomLeftRadius: `${this.state.radius.bottomLeftRadiusValue}${this.state.radius.bottomLeftRadiusUnitValue}`,
      background: '#f0f'
    };
    this.setState({ styles: newStyles });
  }

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
            <fieldset className={pageStyles.['form__fieldset']}>
              <legend>top-left</legend>
              <div className={pageStyles.['form__fieldblock']}>
                <label className={pageStyles.['form__label']} htmlFor="topLeftRadius">value</label>
                <input ref={this.topLeftRadiusInput} value={this.state.topLeftRadiusValue} onChange={this.onInputChange} type="text" id="topLeftRadius" className={pageStyles.['form__input']} />
              </div>
              <div className={pageStyles.['form__fieldblock']}>
                <label className={pageStyles.['form__label']} htmlFor="topLeftRadiusUnit">unit</label>
                <input ref={this.topLeftRadiusUnitInput} value={this.state.topLeftRadiusUnitValue} onChange={this.onInputChange} type="text" id="topLeftRadiusUnit" className={pageStyles.['form__input']} />
              </div>
            </fieldset>
            <fieldset className={pageStyles.['form__fieldset']}>
              <legend>top-right</legend>
              <div className={pageStyles.['form__fieldblock']}>
                <label className={pageStyles.['form__label']} htmlFor="topRightRadius">value</label>
                <input ref={this.topRightRadiusInput} value={this.state.topRightRadiusValue} onChange={this.onInputChange} type="text" id="topRightRadius" className={pageStyles.['form__input']} />
              </div>
              <div className={pageStyles.['form__fieldblock']}>
                <label className={pageStyles.['form__label']} htmlFor="topRightRadiusUnit">unit</label>
                <input ref={this.topRightRadiusUnitInput} value={this.state.topRightRadiusUnitValue} onChange={this.onInputChange} type="text" id="topRightRadiusUnit" className={pageStyles.['form__input']} />
              </div>
            </fieldset>
            <fieldset className={pageStyles.['form__fieldset']}>
              <legend>bottom-right</legend>
              <div className={pageStyles.['form__fieldblock']}>
                <label className={pageStyles.['form__label']} htmlFor="bottomRightRadius">value</label>
                <input ref={this.bottomRightRadiusInput} value={this.state.bottomRightRadiusValue} onChange={this.onInputChange} type="text" id="bottomRightRadius" className={pageStyles.['form__input']} />
              </div>
              <div className={pageStyles.['form__fieldblock']}>
                <label className={pageStyles.['form__label']} htmlFor="bottomRightRadiusUnit">unit</label>
                <input ref={this.bottomRightRadiusUnitInput} value={this.state.bottomRightRadiusUnitValue} onChange={this.onInputChange} type="text" id="bottomRightRadiusUnit" className={pageStyles.['form__input']} />
              </div>
            </fieldset>
            <fieldset className={pageStyles.['form__fieldset']}>
              <legend>bottom-left</legend>
              <div className={pageStyles.['form__fieldblock']}>
                <label className={pageStyles.['form__label']} htmlFor="bottomLeftRadius">value</label>
                <input ref={this.bottomLeftRadiusInput} value={this.state.bottomLeftRadiusValue} onChange={this.onInputChange} type="text" id="bottomLeftRadius" className={pageStyles.['form__input']} />
              </div>
              <div className={pageStyles.['form__fieldblock']}>
                <label className={pageStyles.['form__label']} htmlFor="bottomLeftRadiusUnit">unit</label>
                <input ref={this.bottomLeftRadiusUnitInput} value={this.state.bottomLeftRadiusUnitValue} onChange={this.onInputChange} type="text" id="bottomLeftRadiusUnit" className={pageStyles.['form__input']} />
              </div>
            </fieldset>
          </form>


          <div className={pageStyles.['preview']}
            style={this.state.styles}></div>



        </section>
        <section className="project-footer">
          <Link to="/"><span role="img" aria-label="back arrow">⬅</span> Back to homepage</Link>
        </section>

      </Layout>
    )
  }
}
