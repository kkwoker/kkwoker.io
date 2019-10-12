import React from 'react'
import Header from '../../components/Header'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import { makeStyles } from '@material-ui/core/styles'

const post = {
  date: '12-10-2019',
  title: 'Capitalism',
  body: "Capitalism. It’s all around us. It’s most prominent in big cities. It controls our well being. It capitalizes on every aspect of one's life. Someone out there is profiting from every action you take. You make a meal, the food industry takes a cut. You type on a computer, the technology companies take a cut. You use the bathroom, the water and toiletry companies take a cut. You get paid by your job, the government takes a cut. You lift your arm, the health practitioners take a cut. Everything is connected. It’s a web of trade. It runs our lives. We are continuously enslaved by it. Who deserves these cuts? Which companies deserve our consumerism? We decide. ",
  tags: ['Poetry', 'Machine', 'Web']
}

const useStyles = makeStyles({
  card: {
    backgroundColor: '#303030',
    color: '#f2f2f2'
  },
  heading: {
    fontSize: '12px',
    color: '#f2f2f2'
  },
  chip: {
    color: '#f2f2f2',
    marginRight: '4px',
    '&:hover': {
      backgroundColor: 'black'
    },
    borderRadius: 0,
    backgroundColor: '#3f3f3f',
    border: 0
  },
  root: {
    color: '#f2f2f2'
  }
})

export default function Scribble () {
  const classes = useStyles()
  return (
    <div>
      <Header />
      <Card className={classes.card}>
        <CardContent>
          <Typography variant='h2' gutterBottom>
            {post.title}
          </Typography>
          <Typography className={classes.heading} gutterBottom>
            Friday, Oct 11, 2019
          </Typography>
          <div className={classes.root}>
            <Chip className={classes.chip} size='small' label='Poetry' variant='outlined' />
            <Chip className={classes.chip} size='small' label='Machine Learning' variant='outlined' />
            <Chip className={classes.chip} size='small' label='Web' variant='outlined' />
          </div>
          <br />
          <Typography variant='body1'>
            {post.body}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
