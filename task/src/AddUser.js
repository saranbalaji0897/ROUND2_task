import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { useState, Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { connect } from "react-redux";
import {addUser} from './store/action'

export class AddUser extends Component{
    constructor(props){
       super(props);
       this.state={
         username:'',
         mobileNumber:'',
         address:''
       }
    }
     
     phoneNumberValidation=(event) =>{
        var key = event.which ? event.which : event.charCode;
        if(!(key >= 48 && key <= 57) && (key !== 8)){
            event.preventDefault();
        }  
    }
     submit =( )=>{
        if((this.state.username !== '') && (this.state.mobileNumber !== '') && (this.state.address !== '')){
            this.props.addUser(this.state.username,this.state.mobileNumber,this.state.address);
            this.props.hide();
        }else{
            alert('please fill the blank fields');
        }
    }
    render(){
    return (
        <div>
        <Modal show={this.props.show} onHide={this.props.hide}>
          <Modal.Body className="pt-5 d-flex justify-content-center">
              <Container>
                <div className="pb-2 d-flex justify-content-center">
                  <input type="text" id="username" placeholder="username" onChange={(e) => this.setState({username:e.target.value})}></input>
                </div>
              <div className="pb-2 d-flex justify-content-center">
                  <input type="text" id="mobileNumber" maxLength="10" placeholder="mobileNumber" onKeyDown={e => this.phoneNumberValidation(e)} onChange={(e) => this.setState({mobileNumber:e.target.value})}></input>
              </div>
              <div className="pb-2 d-flex justify-content-center">
                  <input type="text" id="address" placeholder="address" onChange={(e) => this.setState({address:e.target.value})}></input>
              </div>
              </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.props.hide()}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>this.submit()}>
                Add
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
    );
    }
  

}

export default connect(null,{addUser})(AddUser);