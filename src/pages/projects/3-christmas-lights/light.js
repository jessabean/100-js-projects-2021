import * as React from "react"
import * as pageStyles from "./christmas-lights.module.css"
import { HexColorPicker } from "react-colorful";

export default class Light extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#fffff',
      showPicker: false
    }

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  setColor = (color) => {
    this.setState({color: color});
  }

  hidePicker = () => {
    this.setState({showPicker: false})
  }

  togglePicker = (event) => {
    this.state.showPicker
      ? this.setState({showPicker: false})
      : this.setState({showPicker: true});
  }


  handleKeyPress = (e) => {
    this.setState({currentKey: e.keyCode});
    if(e.keyCode === 27) {
      // need to hide the current picker
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  render () {
    return (
    <>
      <div className={pageStyles.['light__wrapper']}>
        {this.state.showPicker &&
          <div className={pageStyles.['light__picker']}>
            <HexColorPicker color={this.state.color} onChange={this.setColor} />
          </div>
        }
        <button className={pageStyles.['light']} style={{ background: this.state.color }} onClick={this.togglePicker}></button>
      </div>
    </>
    )
  }
}
