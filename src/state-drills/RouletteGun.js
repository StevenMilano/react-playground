import React from 'react';

class RouletteGun extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false,
        }
    }

    spinTheChamber(){
        let {chamber} = this.state.chamber;
        chamber = Math.ceil(Math.random() * 8);
    }
    
    renderDisplay() {
        if (chamber)
    }

    render() {
        return (
            <div className='RouletteGun'>
                <p>spinning the chamber and pulling the trigger.</p>
                <p>You're safe</p>
                <p>Bang!</p>
                <button onClick={() => {this.spinTheChamber()}}>Pull the trigger</button>
            </div>
            
        )
    }
}