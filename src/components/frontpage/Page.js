import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TableRow from '@material-ui/core/TableRow'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

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
  createData(0, 'https://source.unsplash.com/random', 'QQQ', 'Elvis Presley', 60, '16 Mar, 2019')
]

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex'
    // margin: 30
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 300
  },
  playIcon: {
    height: 38,
    width: 38
  },
  items: {
    marginTop: 30
  }
}))

export default function Orders () {
  const classes = useStyles()
  return (
    <>
      <Grid container spacing={1} className={classes.items}>
        {rows.map(row => (
          <TableRow key={row.id}>
            <Grid item md={12} container spacing={2}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cover}
                  image={row.img}
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component='h5' variant='h5'>{row.title}</Typography>
                    <Typography variant='subtitle1' color='textSecondary'>{row.auteur}</Typography>
                    <Typography variant='subtitle1' color='textSecondary'>{row.date}</Typography>
                    <div>
                      <Typography variant='subtitle1' color='textSecondary'>{row.auteur}</Typography>
                      <Typography variant='subtitle1' color='textSecondary'>{row.numofcom}</Typography>
                    </div>

                  </CardContent>
                </div>
              </Card>
            </Grid>
          </TableRow>
        ))}

      </Grid>
    </>
  )
}
