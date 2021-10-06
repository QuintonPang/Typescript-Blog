import React from 'react';
import { Card, 
    CardContent, 
    Typography,
    CardActions, 
    Button,

} from "@mui/material";
import { makeStyles } from "@mui/styles";

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

const SmallCard: React.FC<Props> = ({title,text}:Props):JSX.Element =>{

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