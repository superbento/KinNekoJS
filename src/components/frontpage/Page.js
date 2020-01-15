
import React, { Component } from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import TableRow from '@material-ui/core/TableRow'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import BookIcon from '@material-ui/icons/Book'
import PersonIcon from '@material-ui/icons/Person'
import DateRangeIcon from '@material-ui/icons/DateRange'
import CommentIcon from '@material-ui/icons/Comment'
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
    axios.get('http://localhost:3001/mangas/')
      .then((result) => {
        console.log(result)
        result.data.mangas.map(manga => {
          console.log('sss' + manga.folio[0].MangaUrl)
          var mangaNode = this.createData(manga._id, manga.folio[0].MangaUrl, manga.title, manga.author, manga.foloNumber, manga.creatDate)
          mangaArray.push(mangaNode)
        })
        this.setState({ mangas: mangaArray })
      })
      .catch((error) => {
        var mangaNode = this.createData(0, 'https://source.unsplash.com/random', 'QQQ', 'Elvis Presley', 60, '16 Mar, 2019')
        mangaArray.push(mangaNode)
        mangaArray.push(mangaNode)
        this.setState({ mangas: mangaArray })
        console.log('error' + error)
        console.log(mangaNode)
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
      <Grid container spacing={0} direction='column' justify='space-evenly' alignItems='stretch'>
        {props.mangas.map(row => (
          <TableRow key={row.id}>
            <Grid container direction='row' justify='center' alignItems='center'>
              <CardActionArea component='a' href='/comic'>
                <Card container direction='row' justify='center' alignItems='center'>
                  <Grid container direction='row' justify='space-around' alignItems='stretch'>
                    <img src={row.img} width='200' />
                    <CardContent>
                      <Grid container spacing={0} xs='12' direction='column' justify='space-evenly' alignItems='stretch'>
                        <Grid container direction='row' justify='center' alignItems='center'>
                          <BookIcon fontSize='small' />
                          <Typography component='h5' variant='h5'>{row.title}</Typography>
                        </Grid>
                        <Grid container direction='row' justify='center' alignItems='center'>
                          <PersonIcon fontSize='medieum' />
                          <Typography variant='subtitle1' color='textSecondary'>{row.auteur}</Typography>
                        </Grid>
                        <Grid container direction='row' justify='center' alignItems='center'>
                          <DateRangeIcon fontSize='medieum' />
                          <Typography variant='subtitle1' color='textSecondary'>{row.date}</Typography>
                        </Grid>
                        <Grid container direction='row' justify='center' alignItems='center'>
                          <CommentIcon fontSize='medieum' />
                          <Typography variant='subtitle1' color='textSecondary'>{row.numofcom}</Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Grid>
                </Card>
              </CardActionArea>
            </Grid>
          </TableRow>
        ))}
      </Grid>
    </>
  )
}
