import * as React from 'react';
import MotivationalCard from "./MotivationalCard";
import SmallCard from "./SmallCard";
import { Grid,
      
} from "@material-ui/core"; 
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from "@material-ui/core/styles";


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
        <div style={{margin:100}}>

                <Carousel className={classes.carousel}>
                    {
                        data.slice(50,55).map( (d, i) =>  <MotivationalCard key={d.id} {...d}/> )
                    }
                </Carousel>
                <Grid container spacing={3}>

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
        </div>
    );
       
}

export default HomePage;