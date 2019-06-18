import React from 'react';

export default class Inning extends React.Component {
    state = {

    }
    render() {
        return (
            <>
            <h3> Inning: {this.props.inning} </h3>
            <p>Outs: {this.props.outs}</p>
            <p>S: {this.props.strikes}</p>
            <p>B: {this.props.balls}</p>
            <p>H: {this.props.hits}</p>
            <p>F: {this.props.fouls}</p>
            </>
        )
    }
}