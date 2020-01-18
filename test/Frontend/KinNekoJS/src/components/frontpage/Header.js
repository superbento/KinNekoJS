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
import axios from 'axios'

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
const signUp = (window.localStorage.getItem('UserID') != '')
const logout = (window.localStorage.getItem('UserID') == '')

export default function Header (props) {
  const classes = useStyles()
  const { title } = props
  console.log('id: ' + window.localStorage.getItem('UserID'))
  function handle () {
    window.location.href = '../login'
  }

  function Logout () {
    axios.get('http://localhost:3001/user/logout')
      .then((result) => {
        console.log(result)
        window.localStorage.setItem('jwtToken', '')
        window.localStorage.setItem('UserID', '')
        window.location.href = ''
      })
      .catch((error) => {
        console.log('logout error' + error)
      })
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
        <Button hidden={signUp} variant='outlined' size='small' onClick={handle}>
          sign up
        </Button>
        <Button hidden={logout} variant='outlined' size='small' onClick={Logout}>
          Logout
        </Button>
      </Toolbar>
    </>
  )
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string
}
