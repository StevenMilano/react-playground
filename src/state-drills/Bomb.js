import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  
  componentDidMount() {
       setInterval(() => {
          this.setState({count: this.state.count + 1})
      }, 1000);
  }
  
  componentWillUnmount() {
      clearInterval(this.interval);
  }
  
  renderDisplay() {
      const {count} = this.state
      if (count >= 8){
          clearInterval(this.interval)
          return 'Boom!'
      } else if (count % 2 === 0) {
          return 'tick'
      } else {
          return 'tock'
      }
  }
      render() {
        return (
            <div className='CountdownBomb'>
                {this.state.count}
                <p>{this.renderDisplay()}</p>
            </div>
        )
        
      }
    }

export default Bomb;