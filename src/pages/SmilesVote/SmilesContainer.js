import React from 'react';

class SmilesContainer extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', gap: '10px' }}>
                {this.props.smiles.forEach(smile => {
                    <div>
                        <span onClick={this.props.handleUpdateCount(smile.id)}>{smile.smile}</span>
                        <span>{smile.count}</span>
                    </div>
                })}
            </div>
        )
    }
}