import React, {Component} from "react";

import SmilesContainer from "./SmilesContainer";

class SmilesVote extends Component{
    constructor(props) {
        super(props);

        this.state={
            smiles: [
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
        }
    }

    //componentDidMount() {
    //    //localStorage.getItem(JSON.parse("smiles"));
    //}
//
    //componentDidUpdate(prevProps, prevState) {
    //    //localStorage.setItem(JSON.stringify(this.state.smiles));
    //}
    handleUpdateCount = (id) => {
        this.setState({
            smiles: this.state.smiles.map(smile => {
                return smile.id === id ? {...smile, count: smile.count + 1} : smile;
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Vote for the smile</h1>
                <SmilesContainer smiles={this.state.smiles} />
                <button onClick={() => {}}></button>
            </div>

        )
    }
}

export default SmilesVote;