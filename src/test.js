import React from 'react'
import { connect } from 'react-redux'

class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentWin: 0
        }
    }
    handleChange(e) {
        this.setState({
            currentWin: e.target.value
        })
    }
    render() {
        return <div>
            <input
                type="text"
                value={this.state.currentWin}
                onChange={(e) => this.handleChange(e)}
            ></input>
            <button onClick={() => {
                this.props.add(this.state.currentWin)
                this.setState({
                    currentWin: 0
                })
            }}> add </button>
            <ul>
                {
                    this.props.wins
                }
            </ul>
        </div>
    }
}

function mapDispatchToProps(dispatch) {
    return {
        add: (value) => {
            dispatch({ type: "ADD", payload: value })
        }
    }
}

function mapStateToProps(state, ownProps) {
    console.log(state.wins)
    return {
        wins: state.wins
    }
}

const preparedApp = connect(mapStateToProps, mapDispatchToProps)(Test)

export default preparedApp