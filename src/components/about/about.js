import React from 'react'
import styled from "styled-components";
import dispo from "../../assets/disponibilités.png";
import image from "../../assets/about.jpg";
import Prenezrendez from "../../assets/Prenezrendez.png";
import rappelsautomatiques from "../../assets/rappelsautomatiques.png"


const about = () => {
  const title = { 
    /* Qui somme nous ? */

position: "absolute",
width: "295px",
height: "29px",
top : "80px",

fontFamily: "Ruluko",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "25px",

marginTop: "25px ",

color: "#000000",

lineHeight: "30px",


  }
  const li1 = { 
    /* Un doute, une inquiétude, besoin d’un conseil santé ? Med.tn c’est la solution Med.tn est une plateforme innovante qui vous permet de trouver rapidement un médecin le plus proche de chez vous et de prendre rendez-vous en ligne gratuitement. Med.tn vous permet de poser vos questions en ligne directement aux médecins en respectant les termes de confidentialité. Med.tn vous donne l’information sur les symptômes de maladie les plus courants. */

position: "absolute",
width: "787px",
height: "283px",
top : "200px",

fontFamily: "Ruluko",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "13px",
lineHeight: "15px",
paddingTop : "50px",

color:" #000000",


  }
  const li2 = { 
    /* Un doute, une inquiétude, besoin d’un conseil santé ? Med.tn c’est la solution Med.tn est une plateforme innovante qui vous permet de trouver rapidement un médecin le plus proche de chez vous et de prendre rendez-vous en ligne gratuitement. Med.tn vous permet de poser vos questions en ligne directement aux médecins en respectant les termes de confidentialité. Med.tn vous donne l’information sur les symptômes de maladie les plus courants. */

position: "absolute",
width: "787px",
height: "283px",
top : "300px",

fontFamily: "Ruluko",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "13px",
lineHeight: "15px",
paddingTop : "50px",

color:" #000000",


  }
  const li3 = { 
    /* Un doute, une inquiétude, besoin d’un conseil santé ? Med.tn c’est la solution Med.tn est une plateforme innovante qui vous permet de trouver rapidement un médecin le plus proche de chez vous et de prendre rendez-vous en ligne gratuitement. Med.tn vous permet de poser vos questions en ligne directement aux médecins en respectant les termes de confidentialité. Med.tn vous donne l’information sur les symptômes de maladie les plus courants. */

position: "absolute",
width: "787px",
height: "283px",
top : "400px",
paddingTop : "50px",

fontFamily: "Ruluko",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "13px",
lineHeight: "15px",

color:" #000000",


  }
  const li4 = { 
    /* Un doute, une inquiétude, besoin d’un conseil santé ? Med.tn c’est la solution Med.tn est une plateforme innovante qui vous permet de trouver rapidement un médecin le plus proche de chez vous et de prendre rendez-vous en ligne gratuitement. Med.tn vous permet de poser vos questions en ligne directement aux médecins en respectant les termes de confidentialité. Med.tn vous donne l’information sur les symptômes de maladie les plus courants. */

position: "absolute",
width: "787px",
height: "283px",
top : "500px",
paddingTop : "50px",

fontFamily: "Ruluko",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "13px",
lineHeight: "15px",

color:" #000000",


  }
  const box =  { 
    background: "#EEF9FF",
    
  
    width: "1078px",
    height : "400px" ,
    
    border: "0.5px solid #dddddd",
    boxSizing: "border-box",
    boxShadow: "-10px -10px 30px #ffffff, 4px 4px 20px rgb(174 174 192 / 20%)",
    borderRadius: "10px",
    paddingLeft: "40px",
    paddingTop : "10px",
    marginTop : "200px"

  
}
const item = {
  paddingTop : "10px",
  marginTop : " 5px ",
  fontSize: "13px",
  paddingLeft : " 35px " ,
}
const allItem = {
  paddingTop : "30px",
  paddingLeft : " 10 px",
  background: "#EEF9FF",
    
  
  width: "1078px",
  height : "200px" ,
  
  border: "0.5px solid #dddddd",
  boxSizing: "border-box",
  boxShadow: "-10px -10px 30px #ffffff, 4px 4px 20px rgb(174 174 192 / 20%)",
  borderRadius: "10px",
  marginTop : "50px"

}
const background = { 
  background : " #EEF9FF",

  
}

 
  return (
    <div style  ={ background}>
    <div >
      <h1 style={ title}>Qui sommes nous ?</h1>
      <ul style = {box}> 
        <li style={ li1} >Un doute, une inquiétude, besoin d’un conseil santé ? Med.tn c’est la solution</li>
        <li style={ li2}>Medart.tn est une plateforme innovante qui vous permet de trouver rapidement un médecin le plus proche de chez vous et de prendre rendez-vous en ligne gratuitement.</li>
        <li style={ li3}>Medart.tn vous permet de poser vos questions en ligne directement aux médecins en respectant les termes de confidentialité.</li>
        <li style={li4}>Medart.tn vous donne l’information sur les symptômes de maladie les plus courants. </li>

          
      </ul>
      <div  style ={ allItem}>

        <p style ={item}>Le site www.medart.tn est édité par la Société enetcom.</p>
        <p style ={item}>Adresse:sfax , route ons km 10</p>   
        <p style ={item}> Email: contact@medart.tn</p>
        <p style ={item}>Juridique: email@med.tn</p>

     </div>

    </div>
    </div>
  );
};

export default about;
