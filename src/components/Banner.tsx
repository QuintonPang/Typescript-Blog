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
        margin :"75px",
    },
    text:{
        color:'#ffffff',
        margin :"20px",
        maxWidth:"80%",
    }
})

const Banner = ():JSX.Element=>{

    const classes = useStyles();

    return(

        <Paper className={classes.banner}>

            <Typography className={classes.title}variant='h2'>
                WANNA LEARN MORE?
            </Typography>

            <Typography  className={classes.text} variant='body1'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
        </Paper>
    )

}

export default Banner;