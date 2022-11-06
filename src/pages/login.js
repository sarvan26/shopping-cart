import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';
import { createBrowserHistory } from 'history' 

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Login() {
  const navigate = useNavigate();
  const history = createBrowserHistory()

  const classes = useStyles();
 const handleSubmit=()=>{navigate('/dashboard');}

  return (
    <div style={{marginTop:'20%'}}><form style={{display:'inline-grid'}} className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Username" />
      <TextField id="standard-basic" label="Password" type="password" />
      <Button onClick={handleSubmit} variant="contained" color="primary">
Login</Button>

    </form></div>
  );
}
