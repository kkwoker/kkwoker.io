import React from 'react'
import Header from '../../components/Header'
import WebGL from '../../components/WebGL'
import { makeStyles } from '@material-ui/core/styles'
import {
  HomeStyle
} from './Styles'

const useStyles = makeStyles({
  footer: {
    marginTop: '10px',
    fontSize: '12px'
  }
})

export default function Home () {
  const classes = useStyles()
  return (
    <HomeStyle>
      <Header />

      <WebGL />

      <div className={classes.footer}>
        <div>
            Email me at&nbsp;
          <a href='mailto:kkwoker@gmail.com'>
              kkwoker@gmail.com
          </a>
        </div>
        <div> Last Updated: Oct 12th, 2019 </div>
      </div>
    </HomeStyle>
  )
}
