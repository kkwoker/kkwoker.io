import React, {useEffect} from 'react'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import { makeStyles } from '@material-ui/core/styles'
import posts from '../../assets/posts.json'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { toWrittenDate } from '../RamblingsPage'

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
  },
  button: {
    color: '#f2f2f2'
  },
  link: {
    textDecoration: 'none'
  },
  action: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0
  }
})

export default function Scribble (props) {
  const classes = useStyles()
  const postId = props.match.params.id.split('-').slice(3).join('-')
  const post = posts.find(post => post.slug === postId)

  useEffect(() => window.scrollTo(0, 0))

  return (
    <div>
      <Header />
      <Card className={classes.card}>
        <CardContent>
          <Typography variant='h2' gutterBottom>
            {post.title}
          </Typography>
          <Typography className={classes.heading} gutterBottom>
            {toWrittenDate(new Date(post.date))}
          </Typography>
          <div className={classes.root}>
            {
              post.tags.map(tag => (
                <Chip
                  className={classes.chip}
                  size='small'
                  label={tag}
                  variant='outlined'
                  key={tag} />
              ))
            }
          </div>
          <br />
          <Typography variant='body1' component='span'>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Typography>
          <CardActions className={classes.action}>
            <Link to='/scribbles' className={classes.link}>
              <Button className={classes.button}>
                <ArrowBackIosIcon fontSize='small' />
                back
              </Button>
            </Link>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  )
}
