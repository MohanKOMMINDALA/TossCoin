// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {headCount: 0, tailCount: 0, isHeads: true}

  setHeadsOrTails = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prev => ({
        headCount: prev.headCount + 1,
        isHeads: true,
      }))
    } else {
      this.setState(prev => ({
        tailCount: prev.tailCount + 1,
        isHeads: false,
      }))
    }
  }

  render() {
    const {isHeads, headCount, tailCount} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1 id="heading">Coin Toss Game</h1>
          <p id="paragraph">Heads (or) Tails</p>

          {isHeads ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="0"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="1"
            />
          )}

          <button
            className="button"
            type="button"
            onClick={this.setHeadsOrTails}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p>Total: {headCount + tailCount}</p>
            <p>Heads: {headCount} </p>
            <p>Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
