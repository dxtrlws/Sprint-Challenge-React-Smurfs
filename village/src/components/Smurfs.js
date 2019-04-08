import React, { Component } from 'react';

import Smurf from './Smurf';
import {Grid} from '@material-ui/core'

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <Grid container spacing={16} style={{width: 900}}>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                updateSmurfs={this.props.updateSmurfs}
              />
            );
          })}
        </Grid>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
