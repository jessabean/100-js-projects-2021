import * as React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import "./style.css"
import * as pageStyles from "./bin2dec.module.css"


export default class BinaryToDecimal extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.inputContainer = React.createRef();
    this.outputContainer = React.createRef();

    this.state = {
      inputValue: '',
      outputValue: ''
    };
  }

  onInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  convertToDecimal = () => {
    const userInput = this.inputContainer.current.value;
    let decimals = [];

    for (let i=0; i<userInput.length; i++) {
      // exponents in binary start with right most number
      // but our index count in the string starts at left
      let maxPower = userInput.length - 1;
      let currentPower = maxPower - i;

      let binary = userInput[i];
      let pow = this.calculatePowerOfTwo(currentPower);
      let decimal = binary * pow;

      decimals.push(decimal);
    }

    return this.sumOfArray(decimals);
  };

  calculatePowerOfTwo = power => {
    return Math.pow(2, power);
  }

  sumOfArray = array => {
    return array.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue
    }, 0)
  }

  submitForm = event => {
    event.preventDefault();
    this.setState({ outputValue: this.convertToDecimal() });
  }

  render () {
    return (
      <Layout>
        <Seo title="Binary to decimal converter" />
        <section className="project">
          <header className="project-header">
            <h1 className="project-headline">Binary to Decimal</h1>
            <p className="project-description">Allows input of up to 8 binary digits (0's and 1's) in any sequence and then displays its decimal equivalent.</p>
          </header>

          <form onSubmit={this.submitForm} ref={this.formRef} className={pageStyles.form}>
            <div className={pageStyles.['form__fieldblock']}>
              <label className={pageStyles.['form__label']} htmlFor="binary-input">Binary</label>
              <span className={pageStyles.['form__fieldMessage']}>Enter up to 8 binary digits (digits must be 0 or 1)</span>
              <div className={pageStyles.['form__inlineFlex']}>
                <input ref={this.inputContainer} onChange={this.onInputChange} value={this.state.inputValue} type="text" id="binary-input" className={pageStyles.['form__input']} minLength="1" maxLength="8" pattern="[0-1]{1,8}" />
                <input type="submit" className={pageStyles.['form__submit']} value="Convert to decimal" />
              </div>
            </div>

            <div className={pageStyles.['form__fieldblock']}>
              <label className={pageStyles.['form__label']} htmlFor="decimal-output">Decimal</label>
              <input ref={this.outputContainer} value={this.state.outputValue} type="text" id="decimal-output" className={pageStyles.['form__input']} disabled />
            </div>
          </form>
        </section>

      </Layout>
    )
  }
}
