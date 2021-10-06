import * as React from 'react';
import MotivationalCard from "../components/MotivationalCard";
import SmallCard from "../components/SmallCard";
import { Grid,
      
} from "@mui/material"; 
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from "@material-ui/core/styles";
import Banner from "../components/Banner";
import ScrollSpy from "../components/ScrollSpy";
import "../components/css/Animations.css";

type Data={
  id:number
  title:string
  genre:string
  date:string
  text:string
  author:string
}

const data:Data[] = require("./../data/Data.json");

const useStyles = makeStyles({

    carousel:{
          marginBottom:"20px",
    }

})

const HomePage = ():JSX.Element=>{

    const classes = useStyles();

    return(
        <div style={{marginTop:"75px"}}>

            <ScrollSpy
                    tabsInScroll={[
                        {
                        text: "Carousel",
                        component: 
                        <Carousel className={classes.carousel}>
                            {
                                data.slice(50,55).map( (d, i) =>  <MotivationalCard key={d.id} {...d}/> )
                            }
                        </Carousel>
                        },
                        {
                        text: "Choices",
                        component: <Grid container spacing={3}>

                        <Grid item sm={1}/>

                        <Grid item sm ={3}>

                            <SmallCard title="Choice 1" text="neque. Nullam ut nisi a odio semper cursus. Integer mollis."/>


                        </Grid>

                        <Grid item sm ={3}>

                            <SmallCard title="Choice 2" text="et libero. Proin mi. Aliquam gravida mauris ut mi. Duis"/>


                        </Grid>

                        <Grid item sm ={3}>

                            <SmallCard title="Choice 3" text="Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor"/>


                        </Grid>



                        <Grid item sm={1}/>


                </Grid>
                        },
                        {
                        text: "Banner",
                        component:<Banner/>
                        },
                    ]}/>
                    

                            

                
        </div>
    );
       
}

export default HomePage;