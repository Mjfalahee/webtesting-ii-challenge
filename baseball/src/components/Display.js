import React from 'react';


export default class Display extends React.Component {
    state = {
        count: '',
    }

    render() {
        return (
            <>
            <h3>Strikes: {this.props.strikes}</h3>
            <h3>Balls: {this.props.balls}</h3>
            </>
        )
    }
}