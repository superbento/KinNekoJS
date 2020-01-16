import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
// import SearchIcon from '@material-ui/icons/Search'
import Typography from '@material-ui/core/Typography'
// import Link from '@material-ui/core/Link'
import Avatar from '@material-ui/core/Avatar'
import Logo from './logo.png'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  }
}))

export default function Header (props) {
  const classes = useStyles()
  const { title } = props

  function handle () {
    window.location.href = '../login'
  }
  return (
    <>
      <Toolbar className={classes.toolbar}>
        <img src={Logo} alt='' width='200' herf='#' />
        <Typography
          component='h2'
          variant='h5'
          color='inherit'
          align='center'
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton>
          <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
        </IconButton>
        <Button variant='outlined' size='small' onClick={handle}>
          sign up
        </Button>
      </Toolbar>
    </>
  )
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string
}
