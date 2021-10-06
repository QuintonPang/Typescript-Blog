import * as React from 'react';
import {
    AppBar,
    Toolbar,
    Slide,
    Typography,
    useScrollTrigger,
    Switch,
    Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FaceIcon from '@mui/icons-material/Face';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface Scroll{
    children: React.ReactElement
    window?: () => Window
}

interface Props{
  callback:any
  darkMode:boolean
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
        navbarDark:{
          backgroundImage:"linear-gradient(160deg, #000000 50%, #080000 30%, #100000 20%)",
        },
        logo:{
          margin:"5px"
        }
  });


const Navbar: React.FC<Props> = ({callback,darkMode}:Props):JSX.Element=>{

    const classes = useStyles();

    return(
        <>
          <HideOnScroll>
          
          <AppBar className={darkMode?classes.navbarDark:classes.navbar}>
            
            <Toolbar>
              <Grid container direction="row">
                <Grid id="logo" container direction="row" item sm={11}>
                  <Grid item>
                    <FaceIcon className={classes.logo}/>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" component="div">
                      Quinton's Blog
                    </Typography>
                  </Grid>

                </Grid>
                
                <Grid container direction="row" item sm={1}>
                  <Grid item>
                    <DarkModeIcon sx={{position:"relative",top:"5px",color:darkMode?"white":"black"}}/>
                  </Grid>
                  <Grid item>
                    <Switch
                      onChange={callback}
                      name="Dark Mode"
                      color="primary"
                    />
                  </Grid>
                </Grid>
              </Grid>

            </Toolbar>
          </AppBar>
     
      </HideOnScroll>
  
        </>

    );

}

export default Navbar;