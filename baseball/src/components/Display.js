import React from 'react';


export default class Display extends React.Component {
    state = {
        count: '',
    }

    render() {
        return (
            <>
            <h3>Count: {this.props.balls}-{this.props.strikes}</h3>
            </>
        )
    }
}