import React from 'react';


export default class Totals extends React.Component {
    state = {

    }
    render() {
        return (
            <>
            <h3> Totals: </h3>
            <p> S: {this.props.strikes}</p>
            <p> B: {this.props.balls} </p>
            <p> H: {this.props.hits} </p>
            <p> F: {this.props.fouls}</p>
            </>
        )
    }
}