import React from 'react'
import styled from "styled-components";
import {Form} from 'react-bootstrap';



const Comments = () => {

const  form = { 
    position : "relative" ,
    top : "600px " , 
    color:" #00234B",
    position: "absolute",
width: "1078px",
height:"315px",

marginTop: "20px",
    marginBottom: "10px",
fontFamily: "Poppins !important ",
paddingLeft : "20px" ,
fontStyle: "normal",
fontWeight: "bold",
fontSize: "20px",
lineHeight: "122%",



}


  return (
<Form style = { form}>
  <Form.Group controlId="exampleForm.ControlInput1">
      <h1 style = {{marginButtom: "50px", paddingBottom:"25px"}}> Laissez un commentaire</h1>
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>

    
  


  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>votre commentaire</Form.Label>
    <Form.Control as="textarea" rows={4} />
  </Form.Group>
</Form>
  )
}

export default Comments


