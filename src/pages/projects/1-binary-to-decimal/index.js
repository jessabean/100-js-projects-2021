import * as React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import "./style.css"

class BinaryToDecimal extends React.Component {

  componentDidMount () {
    const form = document.querySelector('.form');
    const outputContainer = document.querySelector('#decimal-output');

    const convertToDecimal = () => {
      const inputField = document.querySelector('#binary-input');
      const userInput = inputField.value;
      let decimals = [];

      for (let i=0; i<userInput.length; i++) {
        // exponents in binary start with right most number
        // but our index count in the string starts at left
        let maxPower = userInput.length - 1;
        let currentPower = maxPower - i;

        let binary = userInput[i];
        let pow = calculatePowerOfTwo(currentPower);
        let decimal = binary * pow;

        decimals.push(decimal);
      }

      return sumOfArray(decimals);
    };

    const calculatePowerOfTwo = (power) => {
      return Math.pow(2, power);
    }

    const sumOfArray = (array) => {
      return array.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue
      }, 0)
    }

    const submitForm = function(event) {
      event.preventDefault();
      outputContainer.value = convertToDecimal();
    }

    form.onsubmit = submitForm;

  }

  render () {
    return (
      <Layout>
        <Seo title="Binary to decimal converter" />
        <h1>Binary to Decimal</h1>

        <form className="form">
          <div className="form__fieldblock">
            <label className="form__label" htmlFor="binary-input">Binary</label>
            <span className="form__field-message">Enter up to 8 binary digits (digits must be 0 or 1)</span>
            <div className="form__inline-flex">
              <input type="text" id="binary-input" className="form__input" minLength="1" maxLength="8" pattern="[0-1]{1,8}" />
              <input type="submit" className="form__submit" value="Convert to decimal" />
            </div>
          </div>

          <div className="form__fieldblock">
            <label className="form__label" htmlFor="decimal-output">Decimal</label>
            <input type="text" id="decimal-output" className="form__input" disabled />
          </div>
        </form>

        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default BinaryToDecimal
