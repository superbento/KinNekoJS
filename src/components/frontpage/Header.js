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

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <img src={Logo} width='200' />
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
        <Button variant='outlined' size='small'>
          Sign up
        </Button>
      </Toolbar>
    </>
  )
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string
}