import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardActionArea from '@material-ui/core/CardActionArea'
import Chip from '@material-ui/core/Chip'
import allPosts from '../../assets/posts'

const posts = allPosts
  .filter(post => post.draft === false)
  .sort(post => post.date)
  .reverse()

const useStyles = makeStyles({
  card: {
    margin: '5px',
    backgroundColor: '#303030',
    color: '#f2f2f2',
    marginBottom: '15px'
  },
  heading: {
    fontSize: '12px',
    color: '#f2f2f2'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  action: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  button: {
    color: '#f2f2f2',
    minWidth: '97px'
  },
  actionArea: {
    height: '115px'
  },
  chip: {
    color: '#f2f2f2',
    marginRight: '4px',
    marginBottom: '4px',
    '&:hover': {
      backgroundColor: 'black'
    },
    borderRadius: 0,
    backgroundColor: '#3f3f3f',
    border: 0
  },
  root: {
    color: '#f2f2f2'
  },
  link: {
    textDecoration: 'none'
  }
})

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function CardContainer (props) {
  const classes = useStyles()

  const d = new Date(props.post.date)
  const date = d.getDate() + 1
  const month = d.getMonth() + 1
  const year = d.getFullYear()
  const fullDate = `${year}-${month}-${date}`
  const writtenDate = `${days[d.getDay()]}, ${months[d.getMonth()]} ${date}, ${year}`

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.actionArea}>
        <CardContent>
          <Typography className={classes.heading} gutterBottom>
            {writtenDate}
          </Typography>
          <Typography variant='h5' component='h2'>
            {props.post.title}
          </Typography>
          <br />
          <br />
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.action}>
        <div className={classes.root}>
          {
            props.post.tags.map(tag => (
              <Chip className={classes.chip} size='small' label={tag} variant='outlined' />
            ))
          }
        </div>

        <Link to={`/scribbles/${fullDate}-${props.post.slug.toLowerCase()}`} className={classes.link}>
          <Button className={classes.button}>
          Read more
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default function RamblingsPage () {
  return (
    <div>
      <Header />
      <h2> Scribbles </h2>
      <div>
        {posts.map(post => (
          <CardContainer post={post} />
        ))}
      </div>
    </div>
  )
}
