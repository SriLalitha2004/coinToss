// Write your code here
import {Component} from 'react'
import './index.css'

const HeadsUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TailsUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
class CoinToss extends Component {
  state = {toss: 0, Heads: 0, Tails: 0}

  update = () => {
    const randomToss = Math.floor(Math.random() * 2)
    this.setState({toss: randomToss})
    if (randomToss === 0)
      this.setState(prevState => ({Heads: prevState.Heads + 1}))
    else this.setState(prevState => ({Tails: prevState.Tails + 1}))
  }

  render() {
    const {toss, Heads, Tails} = this.state
    const imageUrl = toss === 0 ? HeadsUrl : TailsUrl
    return (
      <div className="container">
        <div className="innerContainer">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="image" />
          <button type="button" className="button" onClick={this.update}>
            Toss Coin
          </button>
          <div className="container2">
            <p>Total: {Heads + Tails} </p>
            <p>Heads: {Heads}</p>
            <p>Tails: {Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
