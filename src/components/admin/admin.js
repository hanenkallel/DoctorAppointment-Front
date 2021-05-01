import React, { Component ,State } from 'react';



import "bootstrap/dist/css/bootstrap.min.css";


import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

;

class admin extends Component {
  state = {
  data : " ",
  visited : false , 
  users: []
};

  async componentDidMount() {
    try { const response  = await  fetch ('http://localhost:61701/api/javainuse/patients')
   const  data = await  response.json() ;
   

this.setState({ users: data }
  )}
  

  

catch (error) {
   console.log(error);
 }
}


 del(idp) {
  
fetch('http://localhost:61701/api/javainuse/patient/del/'+idp, 
{
method: 'DELETE',
header : {'Content-type' : 'application/json'} 
} )
}


Email(idp) {
  this.state =  { visited : false}
 
  
  fetch('http://localhost:61701/sendingEmail/'+idp, 
  {
  method: 'POST',
  header : {'Content-type' : 'application/json'} 
  
  } ).then(res => res.json())
  this.setState({visited : true})
 
  }
 

  render(){
    const { users ,visited} = this.state;
    
    console.log(users);
   
  return (
    
     <div style = {{ position : 'absolute' , top : "100px"}}  >
      

<table className="table ">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>First Name</th>
          <th>E-Mail</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {this.state.users.map(user=>{
          return(
            <tr>
          <td>{user.idp}</td>
          <td>{user.nom}</td>
          <td>{user.prenom}</td>
          <td>{user.emailPatient}</td>

          <button className="btn btn-danger" onClick={()=>this.del(user.idp)}>delete</button>
         
          {visited ? <button className='btn btn-success pt-0 pb-0' disabled   >Accepted</button> : <button onClick={()=>this.Email(user.idp)} className='btn btn-danger pt-0 pb-0'>Not accepted</button>}
    
          </tr>
          )
        })}
      </tbody>

      </table>
     </div>
)}}
export default admin;
