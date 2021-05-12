import * as React from "react"
import { Link } from "gatsby"
import Select from "react-select"

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
      }
    };

    this.corners = ['topLeft', 'topRight', 'bottomRight', 'bottomLeft'];

    this.options = [
      { value: 'px', label: 'px' },
      { value: '%', label: '%' },
      { value: 'em', label: 'em' },
      { value: 'rem', label: 'rem' }
    ];
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
          <div className={pageStyles.['preview__wrapper']}>
            <form ref={this.formRef} className={pageStyles.form}>
              { this.corners.map((corner) => {
                let radiusValue = `${corner}RadiusValue`;
                let radiusInput = `${corner}RadiusInput`;
                let unitId = `${corner}RadiusUnit`;
                let valueId = `${corner}Radius`;
                let radiusUnitValue = `${corner}RadiusUnitValue`;
                let radiusUnitInput = `${corner}RadiusUnitInput`;

                return (
                  <fieldset className={pageStyles.['form__fieldset']}>
                    <legend>{ corner }</legend>
                    <div className={pageStyles.['form__fieldblock']}>
                      <label className={pageStyles.['form__label']} htmlFor={ valueId }>value</label>
                      <input ref={this.radiusInput}
                        value={this.state.radiusValue}
                        onChange={this.onInputChange}
                        id={ valueId }
                        className={pageStyles.['form__input']}
                        type="text" />
                    </div>
                    <div className={pageStyles.['form__fieldblock']}>
                      <label className={pageStyles.['form__label']} htmlFor={unitId}>unit</label>
                      <select
                        value={this.state.radiusUnitValue}
                        onChange={this.onInputChange}
                        ref={this.radiusUnitInput}
                        id={unitId}
                        className={pageStyles.['form__select']}
                      >
                        <option value="px">px</option>
                        <option value="%">%</option>
                        <option value="em">em</option>
                      </select>
                    </div>
                  </fieldset>
                );
              })}
            </form>
            <div className={pageStyles.['preview']}>
              <div className={pageStyles.['preview__object']} style={this.state.styles}></div>
            </div>
          </div>

        </section>
        <section className="project-footer">
          <Link to="/"><span role="img" aria-label="back arrow">⬅</span> Back to homepage</Link>
        </section>

      </Layout>
    )
  }
}
