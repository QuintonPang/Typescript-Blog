import * as React from 'react';
import {
    AppBar,
    Toolbar,
    Slide,
    Typography,
    useScrollTrigger,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FaceIcon from '@material-ui/icons/Face';


interface Scroll{
    children: React.ReactElement
    window?: () => Window;
}

const HideOnScroll = ({children,window}:Scroll):JSX.Element => {
   
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
      });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  const useStyles = makeStyles({

        navbar:{
            backgroundImage:"linear-gradient(to right, blue 20%, indigo 30%, purple 50%)",
        },
        logo:{
          margin:"5px"
        }
  });


const Navbar = ():JSX.Element=>{

    const classes = useStyles();

    return(
        <>
        <HideOnScroll>
        <AppBar className={classes.navbar}>
          <Toolbar>
            <FaceIcon className={classes.logo}/>
            <Typography variant="h6" component="div">
              Quinton's Blog
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
  
        </>

    );

}

export default Navbar;