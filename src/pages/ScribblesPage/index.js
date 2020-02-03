import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardActionArea from '@material-ui/core/CardActionArea'
import Chip from '@material-ui/core/Chip'
import allPosts from '../../assets/posts'
import { toWrittenDate } from '../../functions/lib'
import { useStyles } from './styles'

const posts = allPosts
  .filter(post => post.draft === false)
  .sort(post => post.date)
  .reverse()


function CardContainer (props) {
  const classes = useStyles()

  const d = new Date(props.post.date)
  const date = d.getDate() + 1
  const month = d.getMonth() + 1
  const year = d.getFullYear()
  const fullDate = `${year}-${month}-${date}`
  const writtenDate = toWrittenDate(d)

  return (
    <Card className={[classes.root, classes.card]}>
      <CardActionArea className={classes.actionArea}>
        <Link to={`/scribbles/${fullDate}-${props.post.slug.toLowerCase()}`} className={classes.link}>
          <CardContent classNAme={classes.cardContent}>
            <Typography className={classes.date} gutterBottom>
              {writtenDate}
            </Typography>
            <Typography variant='h5' component='h2' className={classes.title}>
              {props.post.title}
            </Typography>
            <br />
            <br />
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
          {
            props.post.tags.map(tag => (
              <Chip key={tag} className={classes.chip} size='small' label={tag} variant='outlined' />
            ))
          }

        <Link to={`/scribbles/${fullDate}-${props.post.slug.toLowerCase()}`} className={classes.link}>
          <Button className={classes.button}>
          READ MORE
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default function RamblingsPage () {
  return (
    <div>
      <NavBar />
      <h2> Scribbles </h2>
      <div>
        {posts.map(post => (
          <CardContainer key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
