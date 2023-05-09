// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {a: null, b: null, a1: '', b1: ''}

  first = () => {
    const {a} = this.state

    if (a === null) {
      this.setState({a: 'n1', a1: 'Joe'})
    } else {
      this.setState({a: null, a1: ''})
    }
  }

  last = () => {
    const {b} = this.state

    if (b === null) {
      this.setState({b: 'n1', b1: 'Jonas'})
    } else {
      this.setState({b: null, b1: ''})
    }
  }

  render() {
    const {a, b, a1, b1} = this.state

    return (
      <div className="container">
        <div>
          <h1 className="h1">Show/Hide</h1>
        </div>
        <div className="card">
          <div>
            <button className="btn" type="button" onClick={this.first}>
              Show/Hide FirstName
            </button>
            <p className={a}>{a1}</p>
          </div>
          <div>
            <button className="btn" type="button" onClick={this.last}>
              Show/Hide LastName
            </button>
            <p className={b}>{b1}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
