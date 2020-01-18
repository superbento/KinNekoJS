import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import Link from '@material-ui/core/Link'
import { IconButton } from '@material-ui/core'
import Input from '@material-ui/core/Input'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  menu: {
    borderTop: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  menuTitle: {
    flex: 1
  },
  menuSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto'
  },
  menuLink: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    borderTop: theme.spacing(3),
    flexShrink: 0
  }
}))

export default function Menu (props) {
  const classes = useStyles()
  const { sections } = props

  return (
    <>
      {/* <Toolbar component='nav' variant='dense' className={classes.toolbarSecondary}> */}
      <Grid container spacing={1} className={classes.menuSecondary}>
        <Grid item xs={9}>
          {sections.map(section => (
            <Link
              color='inherit'
              variant='h5'
              noWrap
              key={section.title}
              href={section.url}
              className={classes.menuLink}
            >
              {section.title}
            </Link>
          ))}
        </Grid>
        <Grid item xs={3}>
          <Input defaultValue='' inputProps={{ 'aria-label': 'description' }} />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Grid>
      </Grid>
      {/* </Toolbar> */}
    </>
  )
}

Menu.propTypes = {
  sections: PropTypes.array
}
