import {useState} from "react";
import {useEffect} from "react";

import SmilesContainer from "./SmilesContainer";
import VotingResult from "./VotingResult";

export default function SmilesVote() {
    const [smiles, setSmiles] = useState( () => {
        const storedSmiles = localStorage.getItem("smiles");
        return storedSmiles
        ? JSON.parse(storedSmiles)
            : [
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
            ];
    })

    const [winner, setWinner] = useState(null)

    useEffect(() => {
        localStorage.setItem("smiles", JSON.stringify(smiles));
    }, [smiles]);

    const handleUpdateCount = (id) => {
        setSmiles(smiles.map(smile => (smile.id === id ? {...smile, count: smile.count + 1} : smile)))
    }

    const winnerSmile = () => {
        const winner = smiles.reduce(
            (max, current) =>
                current.count > max.count && current.count ? current : max
        )

        setWinner(winner)
    };

    const clearResult = () => {
        setWinner(null);
        setSmiles(smiles.map(smile => ({...smile, count: 0})))
    }

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
            {winner ? <VotingResult winner={winner} winnerSmile={winnerSmile}/> : "No votes yet"}
            {winner ?
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