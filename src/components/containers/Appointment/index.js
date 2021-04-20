import React, { useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { useState } from 'react';
import  rendezvous from '../../../assets/rendezvous.PNG'

import { useParams, useHistory, Link, Redirect,} from 'react-router-dom';


import {Container,Button,Row,Col,Form} from 'react-bootstrap';

import LeftArrow from '../../../icons/left.png';
import RightArrow from '../../../icons/right.png';
import styled from "styled-components";
import Comments from "../../comments/comments.js"


const TIME_SLOT = [9, 10, 11, 12, 13, 14, 15, 16];

const Appointment = ({
  appointments,
}) => { 
  let { date, month, year } = useParams();
  const history = useHistory();
  const currentDate = `${date}/${month}/${year}`;
  const [top, setTop] = useState("100px");
  const changeTop = ()  => {
  setTop(top+50) ;
}


  const bookingData = useMemo(
    () => ((appointments && appointments[currentDate]) || {}),
    [appointments, currentDate]
  );

  const gotoDate = useCallback(
    (day) => (
      moment(`${date}/${month}/${year}`, "D/M/YYYY").add(day, "days").format('D-M-YYYY').split('-')
    ), [date, month, year]
  );

  const changeDate = useCallback(
    (newDate) => ( 
      history.push(
        `/${parseInt(newDate[0])}/${parseInt(newDate[1])}/${parseInt(newDate[2])}/`
      )
    ), [history]
  )

 

  if (!(date && month && year)) {
    const currentDate = moment();
    date = currentDate.date();
    month = currentDate.month() + 1;
    year = currentDate.year();
    return (
      <Redirect to={`/${date}/${month}/${year}/`} />
    )
  }
  const Rectangle = {
    /* Rectangle 6 */

position: "absolute",
top : "200px" , 
left : "200px" , 
width: "300px",
height: "200px",

background: "#e1eef7",
border: "0.5px solid #dddddd",
boxSizing: "border-box",
boxShadow: "-10px -10px 30px #ffffff, 4px 4px 20px rgb(174 174 192 / 20%)",
borderRadius: "5px",

  }
  const time  = { 
position: "absolute",
top:"15px",
left  : "120px" , 
width: "682px",
height: "104px",
  }
   const leftButton = {
  /* Rectangle 5 */



position: "absolute",
left  : "60px" ,
top : " 10px " , 
width: "35px",
height: "27px",
   }
   const  rightButton =  {
    position: "absolute",
    left  : "220px" ,
    top : " 10px " , 
    width: "35px",
    height: "27px",
   }
   
   
   const button = {
     /* Rectangle 11 */

/* Rectangle 11 */

position: "absolute",
top : "250px",
left : "210px",
width: "60px",
height: "30px",

background: "#134964",

border: "0.5px solid #134964",
boxSizing: "border-box",
boxShadow: " #ffffff",
borderRadius: "5px",


   }
   const o = {
     /* 9-10 */

position: "absolute",
width: "70px",
height:" 18px",
top : "1px " ,
left : "-5px",

fontFamily: "Roboto",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "18px",
lineHeight: "21px",

color: "white",


   }
   const button_9 = {
    /* Rectangle 11 */

/* Rectangle 11 */

position: "absolute",
top : "250px",
left : "280px",
width: "60px",
height: "30px",

background: "#134964",

border: "0.5px solid #134964",
boxSizing: "border-box",
boxShadow: " #ffffff",
borderRadius: "5px",


  }
     
  const button_10 = {
    /* Rectangle 11 */

/* Rectangle 11 */

position: "absolute",
top : "250px",
left : "352px",
width: "60px",
height: "30px",

background: "#134964",

border: "0.5px solid #134964",
boxSizing: "border-box",
boxShadow: " #ffffff",
borderRadius: "5px",


  }
     
  const button_11 = {
    /* Rectangle 11 */

/* Rectangle 11 */

position: "absolute",
top : "250px",
left : "425px",
width: "60px",
height: "30px",

background: "#134964",

border: "0.5px solid #134964",
boxSizing: "border-box",
boxShadow: " #ffffff",
borderRadius: "5px",


  }
  const button_2 = {
    /* Rectangle 11 */

/* Rectangle 11 */

position: "absolute",
top : "330px",
left : "210px",
width: "60px",
height: "30px",

background: "#134964",

border: "0.5px solid #134964",
boxSizing: "border-box",
boxShadow: " #ffffff",
borderRadius: "5px",


  }
  const button_3 = {
    /* Rectangle 11 */

/* Rectangle 11 */

position: "absolute",
top : "330px",
left : "280px",
width: "60px",
height: "30px",

background: "#134964",

border: "0.5px solid #134964",
boxSizing: "border-box",
boxShadow: " #ffffff",
borderRadius: "5px",


  }
  const button_4 = {
    /* Rectangle 11 */

/* Rectangle 11 */

position: "absolute",
top : "330px",
left : "352px",
width: "60px",
height: "30px",

background: "#134964",

border: "0.5px solid #134964",
boxSizing: "border-box",
boxShadow: " #ffffff",
borderRadius: "5px",


  }
  const button_5 = {
    /* Rectangle 11 */

/* Rectangle 11 */

position: "absolute",
top : "330px",
left : "425px",
width: "60px",
height: "30px",

background: "#134964",

border: "0.5px solid #134964",
boxSizing: "border-box",
boxShadow: " #ffffff",
borderRadius: "5px",


  }
  const imagerendezvous = {
    position : "relative" , 
    top : "300px" , 
    left : "950px" , 
    zIndex: "1",
    width : "300px " , 
    

  }

  const title_1 = { 
    /* Prenez rapidement un rendez-vous avec votre médecin ! */

position: "absolute",
width: "1078px",
height:"315px",
top : " 100px",
marginTop: "20px",
    marginBottom: "10px",
fontFamily: "Poppins !important ",
paddingLeft : "20px" ,
fontStyle: "normal",
fontWeight: "bold",
fontSize: "40px",
lineHeight: "122%",

color:" #00234B",


  }
  const title_2 =  {
    /* choisissez la date et heure de votre rdv et recevez votre sms/mail de confirmation. C’est aussi simple que ça ! */

position: "absolute",
width: "1078px",
height: "281px",
top :"240px",
paddingLeft : "20px" ,
fontFamily: "sharp-sans-semibold,Arial,sans-serif",
margin: "0 0 20px",
fontStyle: "normal",
fontWeight: "normal",
fontSize: "25px",
lineHeight: "75px",

color: "#00234b",


  }
  const all = { 
    position: "absolute",
    left : "20px",
    top : "150px",
  }

  const boxPage = { 
      
    paddingTop : "30px",
    paddingLeft : " 10 px",
    background: "#F1F6F8",

    
    width : "1087px" ,
    height : "1000px" ,
    
    border: "0.5px solid #dddddd",
    boxSizing: "border-box",
    boxShadow: "-10px -10px 30px #ffffff, 4px 4px 20px rgb(174 174 192 / 20%)",
    borderRadius: "10px",
    marginTop : "50px",


    
   }
   const form = {
     position : "absolute" ,
     top : " 650px " ,
     paddingLeft: "25px" ,
       }

  return (

 <div style = { boxPage} >
<h1 style = {title_1}>Prenez rapidement un rendez-vous <br/> avec votre médecin !</h1>

<p style = {title_2}>Choisissez la date et heure de votre rdv et recevez votre sms/mail de confirmation. </p>

    <div style = {all } >
      <div style= {Rectangle}>
        <Container >
        <div onClick={() => changeDate(gotoDate(-1))}  ><img style = {leftButton} alt="left button" src={LeftArrow}/>️</div>
      
          <h2 style = { time}>{currentDate}</h2>

          <div onClick={() => changeDate(gotoDate(1))} ><img style= { rightButton} alt="right button" src={RightArrow}/>️</div>
       
        </Container>
      </div>
    <Container>
      <Row>
        <Col >
       
        </Col>
      </Row>
      <Row>
        <Col>
 
  <Link key={1} to={`${1}/details/`}>     
       <Button  style = {button}> <o style = { o}>08:00</o></Button>
  </Link>

  <Link key={2} to={`${2}/details/`}  >
        <Button   style  = {button_9}> <o style = { o}>09:00</o>  </Button>
  </Link>

  <Link key={3} to={`${3}/details/`}>
        <Button style  = {button_10}> <o style = { o}>10:00</o>  </Button>
  </Link>
  <Link key={4} to={`${4}/details/`}>
        <Button style = { button_11} > <o style = { o}>11:00</o>  </Button>
  </Link>
        
  <Link key={5} to={`${5}/details/`}>
  <Button style = { button_2} > <o style = { o}>2:00</o>  </Button>
  </Link>
  <Link key={5} to={`${5}/details/`}>
  <Button style = { button_3} > <o style = { o}>3:00</o>  </Button>
  </Link>
  <Link key={5} to={`${5}/details/`}>
  <Button style = { button_4} > <o style = { o}>4:00</o>  </Button>
  </Link>
  <Link key={6} to={`${6}/details/`}>
  <Button style = { button_5} > <o style = { o}>5:00</o>  </Button>
  </Link>
        
        
        
       
        </Col>
      </Row>
    </Container>
    </div>
    <Comments></Comments>
    </div>
  
   

  );
 }

export default connect(
  ({appointments}) => ({
    appointments,
  })
)(Appointment);
