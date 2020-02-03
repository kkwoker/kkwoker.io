import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  root: {
    fontFamily: 'JetBrains',
    color: '#f2f2f2'
  },
  card: {
    backgroundColor: '#303030',
    color: '#f2f2f2'
  },

  heading: {
    fontSize: '12px',
    fontFamily: 'JetBrains',
    color: '#f2f2f2'
  },
  title: {
    fontFamily: 'JetBrains'
  },
  body: {
    fontFamily: 'JetBrains'
  },

  // This Chip css is duplicated in RamblingsPage
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
