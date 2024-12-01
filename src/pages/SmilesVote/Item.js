export default function Item({smile, handleUpdateCount}) {
    return (
        <div>
            <img
                key={smile.id} src={smile.smile}
                style={{width: '50px', height: '50px', cursor: 'pointer'}}
                alt={"smile"}
                onClick={() => handleUpdateCount(smile.id)}
            />
            <span>{smile.count}</span>
        </div>
    )
}