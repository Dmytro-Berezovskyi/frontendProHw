import React, {Component} from "react";

import SmilesContainer from "./SmilesContainer";
import VotingResult from "./VotingResult";

class SmilesVote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            smiles: JSON.parse(localStorage.getItem("smiles")) || [
                {
                    smile: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f603.svg",
                    count: 0,
                    id: 1
                },
                {
                    smile: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f643.svg",
                    count: 0,
                    id: 2
                },
                {
                    smile: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1fae0.svg",
                    count: 0,
                    id: 3
                },
                {
                    smile: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f923.svg",
                    count: 0,
                    id: 4
                },
                {
                    smile: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f606.svg",
                    count: 0,
                    id: 5
                },
            ],

            winner: null,
        }
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.smiles !== this.state.smiles) {
            localStorage.setItem("smiles", JSON.stringify(this.state.smiles));
        }
    }

    handleUpdateCount = (id) => {
        this.setState({
            smiles: this.state.smiles.map(smile => (smile.id === id ? {...smile, count: smile.count + 1} : smile))
        })
    }

    winnerSmile = () => {
        const winner = this.state.smiles.reduce(
            (max, current) =>
                current.count > max.count && current.count ? current : max
        )

        this.setState({ winner: winner })
    };

    clearResult = () => {
        this.setState({
            winner: null,
            smiles: this.state.smiles.map(smile => ({...smile, count: 0}))
        })
    }


    render() {
        const { smiles, winner } = this.state;
        const {winnerSmile, clearResult, handleUpdateCount} = this;

        return (
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "15px"}}>
                <h1>Vote for the smile</h1>

                <SmilesContainer smiles={smiles} handleUpdateCount={handleUpdateCount}/>

                <button
                    style={{
                        border: "none", background: "#199FB1", padding: "10px",
                        borderRadius: "5px", color: "white", cursor: "pointer"
                    }}
                    onClick={winnerSmile}
                >
                    Show Results
                </button>

                {this.state.winner ? <VotingResult winner={winner} winnerSmile={winnerSmile}/> : "No votes yet"}

                {this.state.winner ?
                    <button
                        style={{
                            border: "none", background: "#199FB1", padding: "10px",
                            borderRadius: "5px", color: "white", cursor: "pointer"
                        }}
                        onClick={clearResult}
                    >
                        Clear Results
                    </button> : null
                }

            </div>

        )
    }
}

export default SmilesVote;