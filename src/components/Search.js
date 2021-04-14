import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function Search (props) {
    const classes = useStyles();
  
    return (        
        <form className={classes.root} >
            <TextField 
                id="standard-basic" 
                label="Enter a domain" 
                onChange={props.handleSearch}
            />        
        </form>        
    )
}