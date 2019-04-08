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

  componentDidMount() {
    // checks to see if there is a id in the URL
    if (this.props.match.params.id) {
      const id = parseInt(this.props.match.params.id, 10);
      // If there is, a call is made to get a list of smurfs
      axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
          // Finds the smurf that matches the id in the URL
          const smurf = res.data.find(smurf => smurf.id === id);
          // Update form with the current smurf that's being edited
          this.setState({
            name: smurf.name,
            age: smurf.age,
            height: smurf.height
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        this.props.updateSmurfs(res.data);
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  updateSmurf = event => {
    event.preventDefault();
    // build new smurf object
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    // Calls api to update current smurf
    axios
      .put(`http://localhost:3333/smurfs/${this.props.match.params.id}`, smurf)
      .then(res => {
        this.props.updateSmurfs(res.data);
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };
  // Puts text in input fields into state
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // Determins which submit handler should be used, either to add or edit smurf
    const handler = this.props.match.params.id
      ? this.updateSmurf
      : this.addSmurf;

    return (
      <div className="SmurfForm">
        <form onSubmit={handler}>
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
            {/* Determins which button text to render on form load */}
            {this.props.match.params.id
              ? "Update Smurf"
              : "  Add to the village"}
          </Button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
