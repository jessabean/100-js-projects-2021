import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import * as pageStyles from "./border-radius.module.css"


export default class BinaryToDecimal extends React.Component {
  constructor(props) {
    super(props);
    this.corners = ['topLeft', 'topRight', 'bottomRight', 'bottomLeft'];
    this.values = [];
    this.units = [];
    this.formRef = React.createRef();

    this.state = {
      radius: {
        topLeftRadiusValue: '',
        topRightRadiusValue: '',
        bottomLeftRadiusValue: '',
        bottomRightRadiusValue: '',
        topLeftRadiusUnit: 'px',
        topRightRadiusUnit: 'px',
        bottomLeftRadiusUnit: 'px',
        bottomRightRadiusUnit: 'px',
      },
      styles: {
        borderTopLeftRadius: '0',
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0',
        borderBottomLeftRadius: '0',
      }
    };
  }

  onInputChange = e => {
    const key = `${e.target.id}`;
    const newValue = e.target.value;
    const newRadius = { [key]: newValue };

    this.setState({ radius: {
      ...this.state.radius,
      [key]: newValue
    }}, () => this.updatePreview());
  };

  updatePreview = () => {
    let newStyles = {};
    let cornersArray = this.corners.slice();

    for (let i=0; i<cornersArray.length; i++) {
      let cornerString = cornersArray[i].charAt(0).toUpperCase() + cornersArray[i].slice(1);
      let cssProp = `border${cornerString}Radius`;
      let stateValueString = cornersArray[i] + 'RadiusValue';
      let stateUnitString = cornersArray[i] + 'RadiusUnit';
      let newValue = this.state.radius[`${stateValueString}`];
      let newUnit = this.state.radius[`${stateUnitString}`];

      newStyles[cssProp] = `${newValue}${newUnit}`;
    }

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
              { this.corners.map((corner, i) => {
                let unitId = `${corner}RadiusUnit`;
                let valueId = `${corner}RadiusValue`;

                return (
                  <fieldset key={corner} className={pageStyles.['form__fieldset']}>
                    <legend>{ corner }</legend>
                    <div className={pageStyles.['form__fieldblock']}>
                      <label className={pageStyles.['form__label']} htmlFor={ valueId }>value</label>
                      <input ref={a => this.values[i] = a}
                        value={this.state.radius.valueId}
                        onBlur={this.onInputChange}
                        id={ valueId }
                        className={pageStyles.['form__input']}
                        type="text"
                        data-property="value" />
                    </div>
                    <div className={pageStyles.['form__fieldblock']}>
                      <label className={pageStyles.['form__label']} htmlFor={unitId}>unit</label>
                      <select
                        value={this.state.radius.unitId}
                        onChange={this.onInputChange}
                        ref={a => this.units[i] = a}
                        id={unitId}
                        className={pageStyles.['form__select']}
                        data-property="unit"
                      >
                        <option value="px">px</option>
                        <option value="%">%</option>
                        <option value="em">em</option>
                        <option value="rem">rem</option>
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
