import React, {Component} from 'react';

class SmilesContainer extends Component {
    render() {
        return (
            <div style={{ display: 'flex', gap: '10px' }}>
                {this.props.smiles.map(smile => <img key={smile.id} src={smile.smile} style={{ width: '50px', height: '50px'}}></img>)}
            </div>
        )
    }
}

export default SmilesContainer;