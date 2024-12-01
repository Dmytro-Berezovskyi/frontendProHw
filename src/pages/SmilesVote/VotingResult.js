export default function VotingResult({winner}) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: "5px"}}>
            <h1>Winner of the vote</h1>
            <img src={winner.smile} style={{width: '50px', height: '50px'}} alt={"winner smile"}/>
            <span>Number of votes: {winner.count}</span>
        </div>
    )
}