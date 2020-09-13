import React, {Componet} from 'react';

export default class HelloWorld extends React.Component {
    state = {
        who: 'World',
    };
    
    render() {
        return (
            <div className='HelloWorld'>
                <p>Hello {this.state.who}!</p>
                <button onClick={() => this.setState ({ who: 'World'})}>World</button>
                <button onClick={() => this.setState ({ who: 'React'})}>React</button>
                <button onClick={() => this.setState ({ who: 'Friend'})}>Friend</button>
            </div>
            
        )
    }
}
