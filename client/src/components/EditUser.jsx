import React from 'react';
import { useState, useEffect } from 'react';

import { Button, FormControl, FormGroup, Input,InputLabel, Typography, styled } from '@mui/material';
import { editUser, getUser } from '../service/Api';
import {useNavigate, useParams} from 'react-router-dom';


const Container = styled(FormGroup)`
    width:50%;
    margin: 5% auto 0 auto;
    & > div{
        margin-top:20px;
    }
`
const initialValue = {
    name: '',
    username: '',
    email: '',
    phoneno: ''
}
  

function Edituser() {
    const [user, setUser]= useState(initialValue);
   
    const {id} = useParams();
    let navigate = useNavigate();

     useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUser(id);
        setUser(response.data[0]);
        console.log(user.name);
    }
    function onvalueChange(e) {
        //console.log(e.target.name, e.target.value);
        setUser({...user, [e.target.name] : e.target.value})
        //console.log(user);
    }
    const editUserdetails = async() =>{
        await editUser(user,id);
        navigate('/all');
    }
 
    return (
       <Container>
            <Typography variant='h3'>Edit user</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onvalueChange(e)} name='name' value={user.name || ""} id="my-input" aria-describedby="my-helper-text"/>
            </FormControl>
         <FormControl>
                <InputLabel>User Name</InputLabel>
                <Input onChange={(e) => onvalueChange(e)} name='username' value={user.username || ""} id="my-input" aria-describedby="my-helper-text"/>
            </FormControl>
         <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onvalueChange(e)} name='email' value={user.email || ""} id="my-input" aria-describedby="my-helper-text"/>
            </FormControl>
         <FormControl>
                <InputLabel>PhoneNo.</InputLabel>
                <Input onChange={(e) => onvalueChange(e)} name='phoneno' value={user.phoneno || ""}  id="my-input" aria-describedby="my-helper-text"/>
            </FormControl>
         <FormControl>
               <Button variant='contained' onClick={()=> editUserdetails()}>Edit user</Button>
            </FormControl>
       </Container>    
    );
}

export default Edituser;
