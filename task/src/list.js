import React,{ useEffect } from "react";
import  Container  from 'react-bootstrap/Container';
import { listUser, types } from './store/action';

import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';

export const List = (props) =>{
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    console.log(users);
    useEffect(() => {   
        console.log('initt');
        dispatch({type:types.LIST_USER});
    }  )
    return (
        <Container >
            {users!== null && users.length > 0 ?
            users.map( (items,index) =>
            {
                return(
                    <div key={index}>
                    <div className="pb-2 d-flex justify-content-center" >
                    <h1>user-{index+1}</h1>
                    </div>
                        
                        <div className="pb-2 d-flex justify-content-center" >
                        <p>username :{items.username}</p>
                    </div>
                    <div className="pb-2 d-flex justify-content-center">
                <p>phone:{items.phoneNumber}</p>
                    </div>
                    <div className="pb-2 d-flex justify-content-center">
                <p>address:{items.address}</p>
                    </div>
            </div>
                )
            }):<p>no users</p>}
        </Container>
    )
}

export default List;