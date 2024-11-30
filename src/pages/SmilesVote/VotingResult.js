import React, {Component} from "react";

class VotingResult extends Component {
    render() {
        const {winner} = this.props;

        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: "5px"}}>
                <h1>Winner of the vote</h1>
                <img src={winner.smile} style={{width: '50px', height: '50px'}} alt={"winner smile"}/>
                <span>Number of votes: {winner.count}</span>
            </div>
        )
    }
}

export default VotingResult;