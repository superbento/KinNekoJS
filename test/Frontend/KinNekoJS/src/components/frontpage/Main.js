import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
// import TableRow from '@material-ui/core/TableRow'
// import GitHubIcon from '@material-ui/icons/GitHub'
// import FacebookIcon from '@material-ui/icons/Facebook'
// import TwitterIcon from '@material-ui/icons/Twitter'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import Pagec from './Page'

const sections = [
  { title: 'Comedie', url: '#' },
  { title: 'Action', url: '#' },
  { title: 'Long', url: '#' },
  { title: 'Humour', url: '#' },
  { title: 'Enfant', url: '#' }
]

export default function Main () {
  // const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Header title='KinNeKoJS' sections={sections} />
        <Menu sections={sections} />
        <div><Pagec /></div>

      </Container>
      <Footer title='Footer' description='Thx !!!' />
    </>
  )
}
