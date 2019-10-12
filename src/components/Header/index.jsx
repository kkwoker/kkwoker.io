import React from 'react'
import {
  HeaderCardStyle,
  NavButton
} from './Styles'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  header: {
    fontFamily: 'AvenirNextCondensed-DemiBold'
  },
  navBar: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: '15px',
    paddingBottom: '15px'
  },
  link: {
    paddingTop: '8%',
    display: 'block',
    paddingBottom: '10%',
    textDecoration: 'none'
  }
})

export default function NavBar () {
  const classes = useStyles()
  return (
    <div className={classes.header}>
      <HeaderCardStyle>
        <div>
          <h1> KINNAN KWOK </h1>
        </div>
      </HeaderCardStyle>

      <div className={classes.navBar}>
        <NavButton>
          <Link to='/' className={classes.link}>
          Home
          </Link>
        </NavButton>

        <NavButton>
          <Link to='/scribbles' className={classes.link}>
          Scribbles
          </Link>
        </NavButton>

        <NavButton>
          <Link to='/resume' className={classes.link}>
          Resume
          </Link>
        </NavButton>

      </div>
    </div>
  )
}
