import Item from "./Item";

export default function SmilesContainer({smiles, handleUpdateCount}) {
    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            {smiles.map(smile => (<Item smile={smile} key={smile.id} handleUpdateCount={handleUpdateCount} />))}
        </div>
    )
}