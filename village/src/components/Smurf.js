import React from "react";
import {
  CardContent,
  Card,
  CardActions,
  Typography,
  IconButton,
  Grid,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import axios from 'axios'


const Smurf = props => {
  // Function to handle delete when trash icon is pushed
  const deleteHandler = () => {
    axios.delete(`http://localhost:3333/smurfs/${props.id}`)
    .then(res => {
      props.updateSmurfs(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
  const editSmurf = ()=> {
    props.history.push(`/smurf-form/${props.id}`)
  }

  return (
    <Grid item xs={12} md={6}>
      <Card>
        <CardContent>
          <Typography variant="h6" component="h2" gutterBottom>
            {props.name}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {props.height} tall{" "}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {props.age} smurf years old
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={editSmurf} aria-label="Delete">
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
