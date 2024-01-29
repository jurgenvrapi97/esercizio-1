import { Component } from 'react'

class Img extends Component {
  render() {
    return (
      <div>
        <img src={this.props.Src} alt={this.props.Alt} />
      </div>
    )
  }
}

export default Img
