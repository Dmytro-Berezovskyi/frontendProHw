import React, {Component} from "react";

class SmilesVote extends Component{
    constructor(props) {
        super(props);

        this.state={
            smiles: [
                {
                    smile: "&#x1F603",
                    count: 0,
                    id: 1
                },
                {
                    smile: "&#x1F606",
                    count: 0,
                    id: 2
                },
                {
                    smile: "&#x1F602",
                    count: 0,
                    id: 3
                },
                {
                    smile: "&#x1F923",
                    count: 0,
                    id: 4
                },
                {
                    smile: "&#x1F643",
                    count: 0,
                    id: 5
                },
            ],
        }
    }

    componentDidMount() {
        localStorage.getItem(JSON.parse("smiles"));
    }

    componentDidUpdate(prevProps, prevState) {
        localStorage.setItem(JSON.stringify(this.state.smiles));
    }

    handleUpdateCount(id) {
        this.setState({
            smiles: this.state.smiles.map(smile => {
                return smile.id === id {...smile, count: this.state.count + 1}
            })
        })
    }

    render(){
        return(
            <h1>Vote for the smile</h1>

            <button onClick={() => {}}>Show results</button>
        )
    }
}

export default SmilesVote;