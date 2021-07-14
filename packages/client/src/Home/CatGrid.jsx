import React, { useEffect, useState } from 'react';
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(1),
      color: theme.palette.text.secondary,
      height: 200
    },
    image: {
        width: 128,
        height: 128,
        'object-fit': 'cover',
        'border-radius': '50%'
    }
}));

const Container = styled('div')({
    marginTop: 16,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
});

const RowContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    height: '100%'
});

const ColumnContainer = styled('div')({
    paddingLeft: 16,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
});

const CatData = styled('div')({

    display: 'flex',
    flexDirection: 'column',
});

export const CatGrid = ({cartCallback}) => {

    const [cats, setCats] = useState([])

    useEffect(async () => {
        const result = await axios('/cats')
        setCats(result.data)
    },[])

    const classes = useStyles();

    const handleClick = (cat) => {
        return (e) => {
            cartCallback(cat)
        }
    }


    return (
        <Container>
            <Grid container spacing={1}>
                {cats.map((cat) => <Grid key={cat.id} item xs={4}>
                    <Paper className={classes.paper}>
                        <RowContainer>
                            <img className={classes.image} src={cat.image} />
                            <ColumnContainer>
                                <CatData>
                                    <Typography variant="h6">{cat.name}</Typography>
                                    <Typography variant="subtitle2">{cat.price}</Typography>
                                </CatData>
                                <Button onClick={handleClick(cat)} color="primary">Add To Cart</Button>

                            </ColumnContainer>
                        </RowContainer>
                    </Paper>
            </Grid>)}
            </Grid>
        </Container>
    )
}