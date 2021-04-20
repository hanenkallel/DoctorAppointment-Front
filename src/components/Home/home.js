import React from 'react'
import styled from "styled-components";
import dispo from "../../assets/disponibilités.png";
import image from "../../assets/about.jpg";
import Prenezrendez from "../../assets/Prenezrendez.png";
import rappelsautomatiques from "../../assets/rappelsautomatiques.png"



const Home = () => {
  const imageRappel = { 
    

position: "absolute",
width: "219px",
height: "212px",
left: "350px",
top: "510px"
/* 7062ba839841984630220fe782b10dd2 1 */





  }
  const imagePrenezrendez = {
position: "absolute",
width: "219px",
height: "212px",
left: "670px",
top: "510px"
  }
  const imagedispo= {

position: "absolute",
width: "219px",
height: "212px",
left: "50px",
top: "510px",






  }
  const imageStyle = {
 position: "absolute",
width: "797px",
height: "403px",
left: "100px",
top: "100px",



top: "10%",
bottom: "0%",



     

  }
  const mystyle = {
  /* Pourquoi prendre rendez-vous avec Doctolib ? */

position: "absolute",
width: "570px",
height: "44px",
left: "50px",
top: "490px",

fontFamily: "Montserrat",
fontStyle: "normal",
fontWeight: "normal",
fontSize: "24px",
lineHeight: "29px",

color: "#000000"


  };
  const parag1 = {
    /* Accédez aux disponibilités de dizaines de milliers de professionnels de santé. */

position: "absolute",
width: "219px",
height: "189px",
left: "80px",
top: "751px",

fontFamily: "Montserrat",
fontStyle: "normal",
fontWeight: "normal",
fontSize: "14px",
lineHeight: "17px",

color: "#000000"



  }
  const parag2 = {
    /* Accédez aux disponibilités de dizaines de milliers de professionnels de santé. */

position: "absolute",
width: "219px",
height: "189px",
left: "400px",
top: "751px",

fontFamily: "Montserrat",
fontStyle: "normal",
fontWeight: "normal",
fontSize: "14px",
lineHeight: "17px",

color: "#000000"
/* Prenez rendez vous en ligne, 24h/24 et 7j/7, pour une consultation physique */





  }
  const parag3 = {
    /* Accédez aux disponibilités de dizaines de milliers de professionnels de santé. */

position: "absolute",
width: "219px",
height: "189px",
left: "710px",
top: "751px",

fontFamily: "Montserrat",
fontStyle: "normal",
fontWeight: "normal",
fontSize: "14px",
lineHeight: "17px",

color: "#000000"




  }
  return (
    <div>
    <Image style={imageStyle} src={image} alt="Company Logo" />
    <p style={mystyle}>Pourquoi prendre rendez-vous avec MEDArt ?</p>
    <Image style ={imagedispo} src={dispo}/>
    <Image style = {imagePrenezrendez} src = {Prenezrendez}/>
    <Image style = {imageRappel} src = {rappelsautomatiques}/>
   <p style={parag1}>Accédez aux disponibilités de dizaines de milliers de professionnels de santé.</p>
  <p style={parag2}>Prenez rendez vous en ligne, 24h/24 et 7j/7, pour une consultation physique</p>
  <p style={parag3}>Recevez des rappels automatiques par SMS ou par email.</p>
    
    </div>
  )
}

export default Home


const Image = styled.img`

`;