import React, {useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import  AddUser  from './AddUser';
import {
  Link
} from "react-router-dom";


export const LandingPage = props =>{
    const [show,setShow] = useState(false);
    return(
        <div>
              <AddUser show={show} hide={()=> setShow(false)}></AddUser>
                <Container className="pt-5 d-flex justify-content-center">
         
              <div className="p-5 d-flex justify-content-center">
                <Button onClick={() => setShow(true)} variant="primary">Add user</Button>
              </div>
              <div className="p-5 d-flex justify-content-center">
                <Link to="/list"> <Button variant="secondary">List</Button></Link>
             </div>
            
          </Container>
        </div>
    )
}

export default LandingPage;