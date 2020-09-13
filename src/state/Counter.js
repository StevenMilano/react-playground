import React from 'react';

// only using states
// class Counter extends React.Component {
//     state = {
//         count: 0
//     };
    
//     //why = () =>
//     handleButtonClick = () => {
//         const newCount = this.state.count + 1
//         this.setState({
//             count: newCount
//         })
//     }

//using props and states together
class Counter extends React.Component {
    constructor(props) {
      console.log('props in constructor', props)
      super(props)
      this.state = { count: 0 }
    }
    handleButtonClick = () => {
      console.log('props in handleButtonClick', this.props)
      console.log('state in handleButtonClick', this.state)
      this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div>
                <p>The current count: {this.state.count}</p>
                <button
                onClick={this.handleButtonClick}>Add 1</button>
            </div>
        )
    }
}

export default Counter;
