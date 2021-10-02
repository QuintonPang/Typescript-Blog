import React from 'react';
import { Paper } from '@material-ui/core';
import { Typography 


} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    banner:{
        height:"300px",
        clipPath: 'polygon(100% 0, 100% 56%, 68% 100%, 0 100%, 0 0)', // each parameter represents a vertex
        backgroundImage : 'linear-gradient(to right, #FFB6C1 20%, 	#FF1493 70%)',
    },
    title:{
        color:'#ffffff',
        margin:"75px",
    }
})

const Banner = ():JSX.Element=>{

    const classes = useStyles();

    return(

        <Paper className={classes.banner}>

            <Typography className={classes.title}variant='h2'>
                WANNA LEARN MORE?
            </Typography>
        </Paper>
    )

}

export default Banner;