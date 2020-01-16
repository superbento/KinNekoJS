
import React, { Component } from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import CommentIcon from '@material-ui/icons/Comment'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import { Box } from '@material-ui/core'
import axios from 'axios'
// import ReactDOM from 'react-dom'

export default class Comic extends Component {
  constructor (props) {
    super(props)
    this.state = {
      folio: []
    }
  }

  createData (id, MangaUrl) {
    return { id, MangaUrl }
  }

  componentDidMount () {
    var mangaArray = []
    axios.get('http://localhost:3001/mangas/')
      .then((result) => {
        result.data.mangas.map(manga => {
          if (window.localStorage.getItem('MangaId') == manga._id) {
            var mangaNode = this.createData(manga._id, manga.folio)
            mangaArray.push(mangaNode)
          }
        })
        this.setState({ folio: mangaArray })
        console.log(mangaArray)
      })
      .catch((error) => {
        var mangaNode = this.createData(0, 'https://source.unsplash.com/random')
        mangaArray.push(mangaNode)
        mangaArray.push(mangaNode)
        this.setState({ folio: mangaArray })
        console.log('error' + error)
      })
  }

  render () {
    console.log('folo' + this.props.folio)
    return (
      <div>
        <Rgsb folio={this.state.folio} />
      </div>
    )
  }
}
const Rgsb = (props) => {
  return (
    <>
      <Grid container spacing={1}>
        {props.folio.map(folio2 => (
          folio2.MangaUrl.map(row => (
            <TableRow key={row.id}>
              <Grid container direction='row' justify='center' alignItems='center'>
                <Box border={1} margin={1}>
                  <img src={row.MangaUrl} alt='' width='800' />
                </Box>
                <Grid>
                  <Box>
                    <Typography component='h5' variant='h5'>{row.message}</Typography>
                  </Box>
                  <Box border={1} maxHeight={500} minHeight={100}>
                    <Grid border={1}>
                      {/* {props.message.map(row=>(
                      <TableRow key={row.message}>
                        <Typography component='h5' variant='h5'>{row.message}</Typography>
                      </TableRow>
                    ))} */}
                      <Typography component='h5' variant='h5'>{row.message}</Typography>
                      <Typography component='h5' variant='h5'>Very GOOD</Typography>
                      <Typography component='h5' variant='h5'>NICE</Typography>
                      <Typography component='h5' variant='h5'>wtmsb</Typography>
                      <Typography component='h5' variant='h5'>Thanks for sharing that manga</Typography>
                    </Grid>
                    <Grid container spacing={0} padding={1}>
                      <CommentIcon fontSize='large' />
                      <form noValidate autoComplete='off'>
                        <TextField id='filled-basic' label='Filled' variant='filled' />
                      </form>
                      <Button
                        variant='contained'
                        color='primary'
                        endIcon={<Icon />}
                      >send
                      </Button>
                    </Grid>
                  </Box>
                </Grid>

              </Grid>
            </TableRow>
          ))))}
      </Grid>
    </>
  )
}
