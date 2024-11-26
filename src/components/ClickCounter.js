import React, {Component} from 'react';
import './ClickCounter.css';

class ClickCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            addend: null
        }
    }

    handleCountUp = () => {
        this.setState({
            counter: this.state.counter + this.state.addend
        });
    }

    handleCountDown = () => {
        this.setState({
            counter: this.state.counter - this.state.addend
        });
    }

    handleChangeAddend = (newValue) => {
        this.setState({
            addend: newValue
        })
    }

    resetCounter = () => {
        this.setState({
            counter: 0,
        })
    }

    render() {
        return (
            <div className="counter-container">
                <div className="counter">
                    <button className="btn-counter" onClick={this.handleCountDown}>-</button>
                    <div className="box-count">
                        <span className="count">{this.state.counter}</span>
                    </div>
                    <button className="btn-counter" onClick={this.handleCountUp}>+</button>
                </div>
                <span className="select">Select Addend</span>
                <div className="addend">
                    <button className="btn-addend" onClick={() => {this.handleChangeAddend(1)}}>1</button>
                    <button className="btn-addend" onClick={() => {this.handleChangeAddend(5)}}>5</button>
                    <button className="btn-addend" onClick={() => {this.handleChangeAddend(10)}}>10</button>
                </div>
                <button className="btn-reset" onClick={this.resetCounter}>Reset Counter</button>
            </div>
        )
    }
}

export default ClickCounter;