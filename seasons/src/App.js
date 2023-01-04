import React from "react";
import SeasonDisplay from "./SeasonDisplay";
class App extends React.Component{
    state = {lat: null, error: ''};
    componentDidMount(){
        navigator.geolocation.getCurrentPosition((position) => this.setState({lat: position.coords.latitude}),
        error => this.setState({error: error.message})
    );
}
    render(){
        if(!this.state.error && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />;
        }
        if(this.state.error && !this.state.lat){
            return (<div>
                    <h1 style={{color:'red'}}>Error: {this.state.error}</h1>
                </div>)
        }
        return (
                    <div>
                        <h1>Loading!</h1>
                    </div>
                )
    }
}

export default App;