

export const types = {
    ADD_USER:'ADD_USER',
    LIST_USER:'LIST_USER'
}

export const addUser = (username,phoneNumber,address) =>{
    console.log('action');
    return{
    type:types.ADD_USER,
    payload:{username:username,phoneNumber:phoneNumber,address:address}
}
}

export const listUser = () =>({
    type:types.LIST_USER
})