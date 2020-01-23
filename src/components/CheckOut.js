import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import 'typeface-roboto';

const useStyles = makeStyles(theme => ({
  root: {
    
    
      margin: theme.spacing(1),
      width: 600,
      backgroundColor: "lightblue",
      padding: "10px"
      
      
      
      
    
  },

  text: {
    marginTop: 10
  }
}));



export default function CheckOut() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
          <TextField id="filled-basic" label="First Name" variant="filled" className = {classes.text} />
      </div>

      <div> 
          <TextField id="filled-basic" label="Last Name" variant="filled" className = {classes.text} />
      </div>

      <div> 

          <TextField id="filled-basic" label="Address" variant="filled" className = {classes.text} />
      </div>
    </form>
  );
}
