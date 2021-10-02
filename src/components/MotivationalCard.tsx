

import React from "react";
import { Card, 
         CardContent, 
         Typography, 
         Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface Props{
    id:number
    title:string
    genre:string
    date:string
    text:string
    author:string
}

const useStyles = makeStyles({

    card:{
        cursor: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAY1BMVEVHcEwAAAAAAAAAAAADAwIAAAAAAAAAAAAAAAAAAAAAAAAWxgzqAF7////YsJR9ZlX28/RP0khiXFjMAlLsI3UTtQsHSQQOgwhNAB+QADnsbZXJqYl8w16bm5um6qK5ubn5t9LWD4AsAAAACnRSTlMAW4xu+tojOe/Bh07+owAAAi1JREFUWMPtl91ygjAQhRETSAAhQgEBrX3/p2x+AElI293oTG/cmXih8s2e7JmTEEXvglYSU8L4MeaUZIzHaSjnSDK76CGMk+2LJwG6iAeUMby+WD5Gqmmqs8vQFEUzXDSJoElUPlWVZTlKiqlGoxhWnVI2SY5CfHyYNeh9QoKYBmnOCjIk5Oy4fKQeC6eUOhow/cYFNerbFD21ywahpZmWeIqVNuxBA9rj1Kds1obyuBp/4Sm0x32g8UucTuJeE4zH2U7aKCmmRI3wuLvZxagRwqwb3OPu+Me5mXndwB5PbUOOJ6dqsMep1ZJwQYJAPX7INru0bUiItSWYx/mG9GU1oz/vYI8nygHZpfEqkzi4x1MT2ypqT55CeDxly5/dbj7PeZ63fQfN8YTPIFvaZ75U20E9fqAadN9yrgpxPpvVgz2e6tB1OSvIkMAeJ8Kja64O5fFHSy4nbzOUx2+ehrQ001IMjpSFdN6DenCkGI/XwqvMaGOwuDQeJ/Vd+EC5+hGY4A+P/wAi4OvS4vHWLw1xjs8e7/egHntH0R7v9iD4+K0ct7Vdp+kacCekbktXeacrKzzp4O5SWQaSuEOaQknG411rSQsizTne9a2J2iqcxOwrfDhp9fjTpMXjLyBFacwZIZTH7FmSvWNv0r+SaPQq0vEVpDrg9dBLmuDn3B8kzPH0G6kK3+0HqZ7KiqBPlR+SSoJIEr2CFDz9NfPmoCJPctS7ucwpGifRu6D1De2LU1O6k6Y1AAAAAElFTkSuQmCC'), auto",
        flexDirection:"row",
        display:"flex",
        height:"350px",

    },

    image:{
        flex:1,
       // backgroundImage: `linear-gradient(to right, black 15%, transparent 85%), url("https://picsum.photos/id/${i}/5000/5000")`, 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto, cover',
        
    },

    title:{
        color:"#ffffff",
    },
    text:{
        color:"#ffffff",
        
    },
    footer:{
        position:"absolute",
        bottom:"30px"
    },
    author:{
        color:"#ffffff"
    },

    wrapper:{
        display:"flex",
        flexDirection:"column",
    }

   

})

const MotivationalCard = ({id,title,genre,date,text,author}:Props):JSX.Element =>{

    const classes = useStyles();

    return(
        <>
         <Card className={classes.card} raised>
           
                <Box style={{ backgroundImage: `linear-gradient(to right, black 15%, transparent 85%), url("https://picsum.photos/id/${id}/5000/5000")`}}className={classes.image}>

                    <CardContent className={classes.wrapper}>
                
                        <Box className={classes.text}>
                        
                                <Typography className={classes.title} gutterBottom variant="h2" >
                                    {title}
                                </Typography>
                                <Typography className={classes.text} variant="body1">
                                    {text}
                                </Typography>
                        

                        </Box>

                        <Box className={classes.footer}>
                    
                                <Typography className={classes.author}  variant="body2" >
                                    {author}
                                </Typography>
                        

                        </Box>
                    </CardContent>
                 </Box>
         </Card>

        </>
    );
}

export default MotivationalCard;
