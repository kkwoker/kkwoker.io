import React, {useEffect} from 'react'
import NavBar from '../../components/NavBar'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import posts from '../../assets/posts.json'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { toWrittenDate } from '../../functions/lib'
import { useStyles } from './styles'


export default function Scribble (props) {
  const classes = useStyles()
  const postId = props.match.params.id.split('-').slice(3).join('-')
  const post = posts.find(post => post.slug === postId)

  useEffect(() => window.scrollTo(0, 0))

  return (
    <div className={classes.root}>
      <NavBar />
      <Card className={classes.card}>
        <CardContent>

          <Typography variant='h2' gutterBottom className={classes.title}>
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
          <Typography variant='body1' component='span' className={classes.body}>
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
