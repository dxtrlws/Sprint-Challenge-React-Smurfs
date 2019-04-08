import React from "react";
import {
  CardContent,
  Card,
  CardActions,
  Typography,
  IconButton,
  Grid
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import axios from 'axios'


const Smurf = props => {
  const deleteHandler = () => {
    axios.delete(`http://localhost:3333/smurfs/${props.id}`)
    .then(res => {
      props.updateSmurfs(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
  return (
    <Grid item xs={12} md={6}>
      <Card>
        <CardContent>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <hr></hr>
      </CardContent>
      <CardActions>
      <IconButton aria-label="Delete">
            <CreateIcon color="primary" />
          </IconButton>
          <IconButton onClick={deleteHandler} aria-label="Delete">
            <DeleteIcon  color="secondary" />
          </IconButton>
      </CardActions>
      </Card>
    </Grid>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
