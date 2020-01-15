
import React, { Component } from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import TableRow from '@material-ui/core/TableRow'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import BookIcon from '@material-ui/icons/Book'
import PersonIcon from '@material-ui/icons/Person'
import DateRangeIcon from '@material-ui/icons/DateRange'
import CommentIcon from '@material-ui/icons/Comment'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import { CardActionArea, Box } from '@material-ui/core'
import axios from 'axios'
// import ReactDOM from 'react-dom'

export default class Pagec extends Component {
  constructor (props) {
    super(props)
    console.log('mangaArray')
    this.state = {
      mangas: [],
      message: null
    }
  }

  createData (id, img, title, auteur, numofcom, date) {
    return { id, img, title, auteur, numofcom, date }
  }

  componentDidMount () {
    console.log('mangaArray')
    var mangaArray = []
    axios.get('/api/Manga')
      .then((result) => {
        result.map(manga => {
          var mangaNode = this.createData(manga._id, manga.img, manga.title, manga.author, manga.foloNumber, manga.creatDate)
          mangaArray.push(mangaNode)
        })
        this.setState({ mangas: mangaArray })
        console.log(mangaArray)
      })
      .catch((error) => {
        var mangaNode = this.createData(0, 'https://source.unsplash.com/random', 'QQQ', 'Elvis Presley', 60, '16 Mar, 2019')
        mangaArray.push(mangaNode)
        mangaArray.push(mangaNode)
        this.setState({ mangas: mangaArray })
        console.log(mangaArray)
        console.log(mangaNode)
        if (error.response.status === 401) {
          console.log('null manga')
        }
      })
  }

  render () {
    console.log('mangaArray1')
    return (
      <div>
        <Rgsb mangas={this.state.mangas} />
      </div>
    )
  }
}
const Rgsb = (props) => {
  console.log(props)
  return (
    <>
      <Grid container spacing={1}>
        {props.mangas.map(row => (
          <TableRow key={row.id}>
            <Grid container direction='row' justify='center' alignItems='center'>
              <Box border={1} margin={1}>
                <img src={row.img} alt='' width='800' />
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
                    <Typography component='h5' variant='h5'>111</Typography>
                    <Typography component='h5' variant='h5'>222</Typography>
                    <Typography component='h5' variant='h5'>333</Typography>
                    <Typography component='h5' variant='h5'>444</Typography>
                    <Typography component='h5' variant='h5'>444</Typography>
                    <Typography component='h5' variant='h5'>77</Typography>
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
        ))}
      </Grid>
    </>
  )
}
