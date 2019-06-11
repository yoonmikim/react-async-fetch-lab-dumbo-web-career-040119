// create your App component here
import React from 'react'


class App extends React.Component {
  
  state = {
    space: []
  }
  
  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          space: data
        })
      }
  
  }
  
  render() {
    return (
        <div>
          this.state.space.map(p => <h1 key={p.id} p={p}>{p.name}</h1>)
        </div>
      );
  }
}

export default App