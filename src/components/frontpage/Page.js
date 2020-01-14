import React from 'react'
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
import { CardActionArea } from '@material-ui/core'

// Generate Order Data
function createData (id, img, title, auteur, numofcom, date) {
  return { id, img, title, auteur, numofcom, date }
}
const rows = [
  createData(0, 'https://source.unsplash.com/random', 'QQQ', 'Elvis Presley', 60, '16 Mar, 2019'),
  createData(0, 'https://source.unsplash.com/random', 'QQQ', 'Elvis Presley', 60, '16 Mar, 2019'),
  createData(0, 'https://source.unsplash.com/random', 'QQQ', 'Elvis Presley', 60, '16 Mar, 2019'),
  createData(0, 'https://source.unsplash.com/random', 'QQQ', 'Elvis Presley', 60, '16 Mar, 2019'),
  createData(0, 'https://source.unsplash.com/random', 'QQQ', 'Elvis Presley', 60, '16 Mar, 2019'),
  createData(0, 'https://source.unsplash.com/random', 'QQQ', 'Elvis Presley', 60, '16 Mar, 2019'),
  createData(0, 'https://source.unsplash.com/random', 'QQQ', 'Elvis Presley', 60, '16 Mar, 2019'),
  createData(0, 'https://source.unsplash.com/random', 'QQQ', 'Elvis Presley', 60, '16 Mar, 2019'),
  createData(0, 'https://source.unsplash.com/random', 'QQQ', 'Elvis Presley', 60, '16 Mar, 2019'),
  createData(0, 'https://source.unsplash.com/random', 'QQQ', 'Elvis Presley', 60, '16 Mar, 2019'),
  createData(0, 'https://source.unsplash.com/random', 'QQQ', 'Elvis Presley', 60, '16 Mar, 2019'),
  createData(0, 'https://source.unsplash.com/random', 'QQQ', 'Elvis Presley', 60, '16 Mar, 2019'),
  createData(0, 'https://source.unsplash.com/random', 'QQQ', 'Elvis Presley', 60, '16 Mar, 2019'),
  createData(0, 'https://source.unsplash.com/random', 'QQQ', 'Elvis Presley', 60, '16 Mar, 2019'),
  createData(0, 'https://source.unsplash.com/random', 'QQQ', 'Elvis Presley', 60, '16 Mar, 2019'),
  createData(0, 'https://source.unsplash.com/random', 'QQQ', 'Elvis Presley', 60, '16 Mar, 2019'),
  createData(0, 'https://source.unsplash.com/random', 'QQQ', 'Elvis Presley', 60, '16 Mar, 2019'),
  createData(0, 'https://source.unsplash.com/random', 'QQQ', 'Elvis Presley', 60, '16 Mar, 2019'),
  createData(0, 'https://source.unsplash.com/random', 'QQQ', 'Elvis Presley', 60, '16 Mar, 2019'),
  createData(0, 'https://source.unsplash.com/random', 'QQQ', 'Elvis Presley', 60, '16 Mar, 2019'),
  createData(0, 'https://source.unsplash.com/random', 'QQQ', 'Elvis Presley', 60, '16 Mar, 2019'),
  createData(0, 'https://source.unsplash.com/random', 'QQQ', 'Elvis Presley', 60, '16 Mar, 2019'),
  createData(0, 'https://source.unsplash.com/random', 'QQQ', 'Elvis Presley', 60, '16 Mar, 2019')
]

// const useStyles = makeStyles(theme => ({

// }))

export default function Page () {
  // const classes = useStyles()
  return (
    <>
      <Grid container spacing={1}>
        {rows.map(row => (
          <TableRow key={row.id}>
            <Grid container direction='row' justify='center' alignItems='center'>
              <CardActionArea component='a' href='#'>
                <Card container direction='row' justify='center' alignItems='center'>
                  <img src={row.img} width='200' />
                  <CardContent>
                    <Grid container spacing={2}>
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
                </Card>
              </CardActionArea>
            </Grid>
          </TableRow>
        ))}
      </Grid>
    </>
  )
}
