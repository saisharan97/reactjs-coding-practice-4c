// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, BananaCount: 0}

  onEatMango = () => {
    // const {mangoCount} = this.state
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onEatBanana = () => {
    // const {BananaCount} = this.state
    this.setState(prevState => ({BananaCount: prevState.BananaCount + 1}))
  }

  render() {
    const {mangoCount, BananaCount} = this.state
    return (
      <div className="background-container">
        <div
          style={{
            'background-color': ' #ffffff',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <h1>
            Bob ate{' '}
            <span
              style={{
                color: ' #ffd569',
              }}
            >
              {mangoCount}
            </span>{' '}
            mangoes{' '}
            <span
              style={{
                color: ' #ffd569',
              }}
            >
              {BananaCount}
            </span>{' '}
            bananas
          </h1>
          <div
            style={{
              display: 'flex',
            }}
          >
            <div>
              <img
                alt="mango"
                className="img-prop"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <div>
                <button
                  style={{'background-color': ' #007bff', color: ' #ffffff'}}
                  className="button"
                  type="button"
                  onClick={this.onEatMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div>
              <img
                alt="banana"
                className="img-prop"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <div>
                <button
                  style={{'background-color': ' #007bff', color: ' #ffffff'}}
                  className="button"
                  type="button"
                  onClick={this.onEatBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
