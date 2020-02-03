import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  root: {
  },
  card: {
    margin: '5px',
    backgroundColor: '#303030',
    marginBottom: '15px'
  },
  actionArea: {
    height: '115px' // Height of each box
  },

  link: {
    textDecoration: 'none'
  },

  cardContent: {
  },
  date: {
    fontFamily: 'JetBrains',
    fontSize: '12px',
    color: '#f2f2f2',
  },
  title: {
    fontFamily: 'JetBrains',
    color: '#f2f2f2',
  },

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },

  cardActions: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  // A chip is a tag. Chip css is duplicated in Scribble
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

  button: {
    fontFamily: 'JetBrains',
    color: '#f2f2f2',
    minWidth: '97px',
  },
})
