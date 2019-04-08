import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      this.props.updateSmurfs(res.data)
      this.props.history.push('/')
    })
    .catch(err => {
      console.log(err)
    })

    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <TextField
            label="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            margin="normal"
          />
          <TextField
            label="Age"
            name="age"
            value={this.state.age}
            onChange={this.handleInputChange}
            margin="normal"
          />
          <TextField
            label="Height"
            name="height"
            value={this.state.height}
            onChange={this.handleInputChange}
            margin="normal"
          />
          <Button variant="contained" color="primary" type="submit">
            Add to the village
          </Button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
