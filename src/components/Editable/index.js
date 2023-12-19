import {Component} from 'react'
import './index.css'

class Editable extends Component {
  state = {input1: '', input2: true}

  changeState = event => {
    this.setState({
      input1: event.target.value,
    })
  }

  change2 = () => {
    this.setState(prevState => ({
      input2: !prevState.input2,
    }))
  }

  render() {
    const {input1, input2} = this.state
    return (
      <div className="bg1">
        <div className="bg2">
          <h1>Editable Text Input</h1>
          <div className="one12">
            {input2 === true ? (
              <>
                <input type="text" onChange={this.changeState} value={input1} />
                <button className="btn1" type="button" onClick={this.change2}>
                  Save
                </button>
              </>
            ) : (
              <>
                <div className="one11">
                  <p className="para1">{input1}</p>
                </div>
                <button className="btn1" type="button" onClick={this.change2}>
                  Edit
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default Editable
