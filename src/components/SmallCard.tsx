import React from 'react';
import { Card, 
    CardContent, 
    Typography,
    CardActions, 
    Button,

} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface Props{
    title:string
    text:string
}
const useStyles=makeStyles({

    smallCard:{
        height:"400px",
        borderColor:"lightblue",
        border:"10px solid"
    },
    footer:{
       position:"absolute" ,
       bottom:"-100px",
  
    }

})

const SmallCard = ({title,text}:Props):JSX.Element =>{

    const classes = useStyles();
    
        return  (

            <Card raised className={classes.smallCard}>
                <CardContent>
                    <Typography variant="h2">
                        {title}
                    </Typography>
                    <Typography variant="body1">
                        {text}
                    </Typography>
                    <CardActions className={classes.footer}>
                        <Button>
                            Learn More
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>

        );


}


export default SmallCard;