import React from 'react';

import Display from './Display';
import Inning from './Inning';
import Totals from './Totals';

export default class Dashboard extends React.Component {
    state = {
        strikes: 0,
        balls: 0,
        outs: 0,
        inning: 1,
        totalstrikes: 0,
        totalballs: 0,
        totalfouls: 0,
        totalhits: 0,
        inninghits: 0,
        inningouts: 0,
        inningfouls: 0,
        inningstrikes: 0,
        inningballs: 0,
    }

    //increments Strikes. Resets when 3 are reached.
    StrikeHandler = e => {
        e.preventDefault();
        let strikecount = this.state.strikes;
        if (strikecount === 2) {
            console.log("Three strikes, you're out!")
            this.setState({inningstrikes: this.state.inningstrikes+1})
            this.OutHandler();
            this.ResetHandler();
            return;
        } else {
            strikecount++;
            console.log("Strikes:", strikecount);
            this.setState({strikes: strikecount, inningstrikes: this.state.inningstrikes+1})
        }
    }

    //increments balls. Resets when 4 are reached.
    BallHandler = e => {
        e.preventDefault();
        let ballcount = this.state.balls;
        if (ballcount === 3) {
            console.log("Batter walks to First");
            this.setState({inningballs: this.state.inningballs+1})
            this.ResetHandler();
            return;
        } else {
            ballcount++;
            console.log("Balls:", ballcount);
            this.setState({balls: ballcount, inningballs: this.state.inningballs+1});
        }
    }

    //increments fouls
    FoulHandler = e => {
        e.preventDefault();
        let strikecount = this.state.strikes;
        if (strikecount === 2) {
            console.log('Foul Ball! Still 2 Strikes.')
            this.setState({inningfouls: this.state.inningfouls+1})
            return;
        } else {
            strikecount++;
            console.log('Foul Ball, Strikes:', strikecount);
            this.setState({strikes: strikecount, inningfouls: this.state.inningfouls+1});
        }
    }

    //increments hits
    HitHandler = e => {
        e.preventDefault();
        console.log("Batter hits!")
        this.setState({inninghits: this.state.inninghits + 1})
        this.ResetHandler();
    }

    //increments outs. Calls an inning change when 3 outs are reached and resets.
    OutHandler = e => {
        let outs = this.state.outs;
        if (outs === 2) {
            this.inningHandler();
            return;
        } else {
            outs++;
            this.setState({outs: outs});
            this.ResetHandler();
            return;
        }
    }

    //Tracks innings, and increments totals on a change.
    inningHandler = e => {
        let inningchange = this.state.inning;
        if (inningchange === 9) {
            console.log('Regulation over');
            inningchange++
            this.setState({inning: inningchange});
        } else {
            inningchange++;
            this.setState({inning: inningchange,
            totalballs: this.state.totalballs + this.state.inningballs,
            totalstrikes: this.state.totalstrikes + this.state.inningstrikes,
            totalhits: this.state.totalhits + this.state.inninghits,
            totalfouls: this.state.totalfouls + this.state.inningfouls,
            inningballs: 0,
            inningstrikes: 0,
            inninghits: 0,
            inningfouls: 0,
            outs: 0,
            })
            this.ResetHandler();
            return;
        }
    }

    //Resets Count
    ResetHandler = e => {
        this.setState({strikes: 0, balls: 0})
    }

    resetGameHandler = e => {
        e.preventDefault();
        this.setState({strikes: 0,
            balls: 0,
            outs: 0,
            inning: 1,
            totalstrikes: 0,
            totalballs: 0,
            totalfouls: 0,
            totalhits: 0,
            inninghits: 0,
            inningfouls: 0,
            inningstrikes: 0,
            inningballs: 0,});
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
                <div className="stats-wrapper">
                    <div className="inning-wrapper">
                        <Inning inning={this.state.inning} 
                        outs={this.state.outs}
                        strikes={this.state.inningstrikes}
                        balls={this.state.inningballs}
                        hits={this.state.inninghits}
                        fouls={this.state.inningfouls}/>
                    </div>
                    <div className="totals-wrapper">
                        <Totals 
                        strikes={this.state.totalstrikes}
                        balls={this.state.totalballs}
                        hits={this.state.totalhits}
                        fouls={this.state.totalfouls}/>
                    </div>
                </div>
                <button onClick={this.resetGameHandler}> Reset Game </button>
            </div>
        )
    }
}