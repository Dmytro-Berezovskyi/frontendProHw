import React, {Component} from 'react';

import Item from "./Item";

class SmilesContainer extends Component {
    render() {
        const {smiles, handleUpdateCount} = this.props;

        return (
            <div style={{ display: 'flex', gap: '10px' }}>
                {smiles.map(smile => (<Item smile={smile} key={smile.id} handleUpdateCount={handleUpdateCount} />))}
            </div>
        )
    }
}

export default SmilesContainer;