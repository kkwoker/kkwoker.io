import React from 'react'
import NavBar from '../../components/NavBar'
//import TextField from '@material-ui/core/TextField';
//import { makeStyles } from '@material-ui/core/styles'

//const useStyles = makeStyles(theme => ({
//  textField: {
//    marginLeft: theme.spacing(1),
//    marginRight: theme.spacing(1),
//  },
//  '& .MuiInputBase-input': {
//    color: 'white'
//  }
//}))

function ResumePage () {
  // const classes = useStyles()
  return (
    <div>
      <NavBar />
      <sub>
        <p>
          Hi, my name is Kinnan.
        </p>

        <p>
          I'm a software developer based out of Toronto, Ontario.
          I sometimes play the guitar, climb walls, snowboard and read.
        </p>

        <p>
          Thanks for stopping by!
        </p>

        {/*
        <p>
          I'd appreciate if you left a nice comment below!
        </p>
        */}
      </sub>

        {/*
      <TextField
        id="outlined-bare"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        inputProps={{ 'aria-label': 'bare' }}
      />
        */}
    </div>
  )
}

export default ResumePage
