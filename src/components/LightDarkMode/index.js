import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'light-mode', text: 'Light Mode'}

  changeMode = () => {
    const {mode, text} = this.state
    if (mode === 'light-mode') {
      this.setState(() => ({mode: 'dark-mode'}))
      this.setState(() => ({text: 'Dark Mode'}))
    } else {
      this.setState(() => ({mode: 'light-mode'}))
      this.setState(() => ({text: 'Light Mode'}))
    }
  }

  render() {
    const {mode, text} = this.state
    return (
      <div className="container">
        <div className={`mode ${mode}`}>
          <h1 className="header">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.changeMode}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
