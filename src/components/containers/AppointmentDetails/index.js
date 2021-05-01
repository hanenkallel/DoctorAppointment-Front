import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';

import {
  useParams,
  useHistory,
} from 'react-router-dom';

import { updateAppointment } from '../../../actions.js';
import './styles.scss';



import {
  Container,
  Button,
  Row,
  Form,
  Col,
  InputGroup,
  FormControl,
} from 'react-bootstrap';

const nom = "nom";
const prenom = "prenom";
const numTelephone = "numTelephone";
const emailPatient = "emailPatient"

const dateRdv = "dateRdv"

const AppointmentDetails = ({
  appointments,
  updateAppointment,
}) => { 
  let { date, month, year, timeFrom} = useParams();

  const currentDate = `${date}/${month}/${year}`;
  console.log(currentDate)
  const history = useHistory();
  const DATA = useMemo(
    () => (appointments && appointments[currentDate]) || {},
    [appointments, currentDate]
  );
  const [userDetails, setUserDetails] = useState(
    DATA[timeFrom] || {}
  );

  const updateFormData = (e) => {
    setUserDetails(
      {
        ...userDetails,
        [e.target.dataset.type]: e.target.value,
        dateRdv : currentDate ,
       
      }
    );
  } 

   
  const onClickSave = () => {
    console.log(currentDate)


  
    fetch ('http://localhost:61701/api/javainuse/savepatient', {
                method  : 'POST',
                headers : {'Content-Type': 'application/json' } , 
                body : JSON.stringify(userDetails),
            }).then(()=>{console.log('good')})
            console.log({userDetails})
    let error = false;
    let obj = {
      ...userDetails
    };

    [nom,  prenom, numTelephone,emailPatient].forEach(
      detail => { 
        if (!userDetails[detail]) {
          error = true;
          obj = {
              ...obj,
              [detail]: "",
          }
        }
      }
    )

    setUserDetails(
      obj
    );

    if (error) {
      return
    }

    updateAppointment(currentDate, timeFrom, obj);
        
    history.goBack();

    setUserDetails(
      {
    
       ...userDetails[nom]= " " , 
       nom:" ",
        prenom:" ",
        numTelephone:"",
        



       
      }
    );
  }
  const form = {
    position : " relative " ,
    top : "150px",
  }

  return (
    <div style ={form}>
    <Container>
      <Row>
        <Col>
          <h1 className="mt-5">
            Please Fill Your Details
          </h1>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <InputGroup className="mb-4">
            <FormControl
              placeholder="nom"
              aria-label="NOM"
              aria-describedby="NOM"
              data-type={nom}
              onChange={updateFormData}
              isInvalid={userDetails[nom] === ""}
              value={userDetails[nom]}
            />
            
            <Form.Control.Feedback className="error" type="invalid">
              Please enter your nom
            </Form.Control.Feedback>
          </InputGroup>
         
       
          <InputGroup className="mb-4">
            <FormControl
              placeholder="PRENOM"
              aria-label="prenom"
              aria-describedby="prenom"
              data-type={prenom}
              onChange={updateFormData}
              isInvalid={userDetails[prenom] === ""}
              value={userDetails[prenom]}
            />
            <Form.Control.Feedback className="error" type="invalid">
              Please enter your last name
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className="mb-4">
            <FormControl
              placeholder="EMAIL"
              aria-label="emailPatient"
              aria-describedby="emailPatient"
              data-type={emailPatient}
              onChange={updateFormData}
              isInvalid={userDetails[emailPatient] === ""}
              value={userDetails[emailPatient]}
            />
            
            <Form.Control.Feedback className="error" type="invalid">
              Please enter your email
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup>
            <FormControl
              placeholder="numTelephone "
              aria-label="numTelephone"
              aria-describedby="numTelephone"
              data-type={numTelephone}
              onChange={updateFormData}
              isInvalid={userDetails[numTelephone] === ""}
              value={userDetails[numTelephone]}
            />
            
            <Form.Control.Feedback className="error" type="invalid">
              Please enter your mobile number
            </Form.Control.Feedback>
          </InputGroup>
          
          
          
        </Col>
      </Row>
      <Row className="buttons">
        <Col>
          <Button
            onClick={() => history.goBack()}
            variant="secondary">
            Cancel
          </Button>
        </Col>
        <Col>
          <Button
            onClick={onClickSave}
          >
            Save
          </Button>
        </Col>
      </Row>
    </Container>
    </div>
  );
 }

export default connect(
  ({appointments}) => ({
    appointments,
  }),
  {
    updateAppointment,
  }
)(AppointmentDetails);
