import React from 'react';
import Display from './Display';

export default class Dashboard extends React.Component {
    state = {
        strikes: 0,
        balls: 0,
    }

    StrikeHandler = e => {
        e.preventDefault();
        let strikecount = this.state.strikes;
        if (strikecount === 2) {
            console.log("Three strikes, you're out!")
            this.ResetHandler();
            return;
        } else {
            strikecount++;
            console.log("Strikes:", strikecount);
            this.setState({strikes: strikecount})
        }
    }

    BallHandler = e => {
        e.preventDefault();
        let ballcount = this.state.balls;
        if (ballcount === 3) {
            console.log("Batter walks to First");
            this.ResetHandler();
            return;
        } else {
            ballcount++;
            console.log("Balls:", ballcount);
            this.setState({balls: ballcount});
        }
    }
    FoulHandler = e => {
        e.preventDefault();
        let strikecount = this.state.strikes;
        if (strikecount === 2) {
            console.log('Foul Ball! Still 2 Strikes.')
            return;
        } else {
            strikecount++;
            console.log('Foul Ball, Strikes:', strikecount);
            this.setState({strikes: strikecount});
        }
    }

    HitHandler = e => {
        e.preventDefault();
        console.log("Batter hits!")
        this.ResetHandler();
    }

    ResetHandler = e => {
        this.setState({strikes: 0, balls: 0})
    }

    render() {
        return(
            <div className="dashboard-wrapper">
                <h3>Controller: </h3>
                <div className="button-wrapper">
                    <button onClick={this.StrikeHandler}>Strike</button>
                    <button onClick={this.BallHandler}>Ball</button>
                    <button onClick={this.FoulHandler}>Foul</button>
                    <button onClick={this.HitHandler}>Hit</button>
                </div>
                <Display strikes={this.state.strikes} balls={this.state.balls}/>
            </div>
        )
    }


}