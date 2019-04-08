import React, { Component } from "react";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Navbar from "./components/Navbar";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateSmurfs = smurfs => {
    this.setState({ smurfs: smurfs });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Grid justify="center" container style={{ marginTop: 80 }}>
          <Route
            exact
            path="/"
            render={props => (
              <Smurfs
                {...props}
                smurfs={this.state.smurfs}
                updateSmurfs={this.updateSmurfs}
              />
            )}
          />
          <Route path="/smurf-form" exact render={props => <SmurfForm {...props} updateSmurfs={this.updateSmurfs} />} />
          <Route path="/smurf-form/:id" exact render={props => <SmurfForm {...props} updateSmurfs={this.updateSmurfs} />} />
        </Grid>
      </div>
    );
  }
}

export default App;
