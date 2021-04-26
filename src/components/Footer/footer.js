import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Grid, Paper, Typography} from "@material-ui/core";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
    root: {
        position: "absolute",
        top : "900px",
        width: "1350px",
        height: "500px",
        paddingTop : "50px",
        paddingLeft : "10px",
 
    
        background: '#F2F2F2',
       
        //paddingRight: '700px',
       
        fontFamily: "Poppins",
     
       


  },
    title: {
        color: '#505050',
        fontSize: '18px',
        marginBottom: '30px'
    },
    items: {
        margin: '5px 0px',
        color: '#707070',
        
    },
    socialMedia: {
        margin: '20px 0px',
    },
    copyRight: {
        textAlign: 'center',
        marginTop: '50px'
    }
}));


const Footer = () => {
    const item = { 
       
        paddintBottom : " 25px",
        fontSize: "14px",
        lineHeight: "150%",
        color: "#00234B",
        
    }
    const firstPhrase = {
        /* une  question ? Besoin d'aide? Consulter notre aide en ligne ou contactez vous  */


width: "662px",
height: "64px",
fontFamily: "Montserrat",
fontStyle: "normal",
fontWeight: "normal",
fontSize: "24px",
lineHeight: "29px",
paddingBottom: "100px" ,
paddingLeft : " 0px"





    }
const copyright = { 
        /* Rectangle 5 */
positin : " aboslute ", 
marginTop : " 100px ",
paddingLeft : "0px",
width : " 1078px",
background: "#D9D9D9",
fontFamily: "Montserrat",
fontSize: "14px",
lineHeight: "29px",
color: '#000000'

/* une  question ? Besoin d'aide? Consulter notre aide en ligne ou contactez vous  */









    }
const title = { 

width: "736px",
height: "217px",
left: "22px",
top: "920px",
fontFamily: "Montserrat",
fontStyle: "normal",
fontWeight: "normal",
fontSize: "18px",
color: '#000000'
}
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <p style={firstPhrase}> une  qusetion ? Besoins  d’aide  ? Consulter notre aide  
                     en ligne ou <a href="/">contactez-nous </a></p>
            <Grid container spacing={3} justify='center'>
                <Grid item xs={12} sm={4}>
                    <Box className={classes.paper}>
                        <p className={classes.title}><strong style={title}>Services</strong></p>
                        <Box className={classes.items}>
                            <small style= { item}>Urgence </small>
                        </Box>
                        <Box className={classes.items}>
                            <small style= { item}>Check Up</small>
                        </Box>
                        <Box className={classes.items}>
                            <small style= { item}>Treatment of Personal Diseases</small>
                        </Box>
                       
                        <Box className={classes.items}>
                            <small style= { item}>Check Up</small>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box className={classes.paper}>
                        <p className={classes.title}><strong style={title}>Oral HealthServices</strong></p>
                        <Box className={classes.items}>
                            <small  style= { item} >Emergency </small>
                        </Box>
                        <Box className={classes.items}>
                            <small  style= { item} >Check Up</small>
                        </Box>
                        <Box className={classes.items}>
                            <small  style= { item}>Treatment of Personal Diseases</small>
                        </Box>
                    
                        <Box className={classes.items}>
                            <small  style= { item}>Check Up</small>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box className={classes.paper}>
                        <p className={classes.title}><strong style={title}>Notre adresse</strong></p>
                        <Box className={classes.items}>
                            <small  style= { item}>Tunisie, sfax</small>
                        </Box>
                        <Box className={classes.socialMedia}>
                            <Box>
                                <img height='40' src="https://img.icons8.com/fluent/50/000000/facebook-new.png"/>
                                <img height='40' src="https://img.icons8.com/fluent/48/000000/linkedin-circled.png"/>
                                <img height='40' src="https://img.icons8.com/color/48/000000/twitter-circled--v4.png"/>
                            </Box>
                        </Box>
                        <Box className={classes.items}>
                            <img height='20' src="https://img.icons8.com/fluent/48/000000/email-open.png"/>
                            <small  style= { item}>&nbsp; <a href = "/">hanenkallel15@gmail.com</a></small>
                        </Box>
                        <Box className={classes.items}>
                            <img height='20' src="https://img.icons8.com/color/48/000000/cell-phone.png"/>
                            <small  style= { item}>&nbsp; +216 29185212</small>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid  item xs={12}>
                    <Typography variant='body2' style={copyright}>Copyright {new Date().getFullYear()} MEDArt All Right Reserved</Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;
