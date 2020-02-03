import React from 'react'
import NavBar from '../../components/NavBar'
import WebGL from '../../components/WebGL'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  footer: {
    marginTop: '10px',
    fontSize: '12px'
  }
})

export default function Home () {
  const classes = useStyles()
  return (
    <div>
      <NavBar />

      <WebGL />

      <div className={classes.footer}>
        <div>
            Email me at&nbsp;
          <a href='mailto:kkwoker@gmail.com'>
              kkwoker@gmail.com
          </a>
        </div>
        <div> Last Updated: Feb 2nd, 2020 </div>
      </div>
    </div>
  )
}
