
import React from 'react';
import { useState } from 'react';

import { Button, FormControl, FormGroup, Input,InputLabel, Typography, styled } from '@mui/material';
import { addUser } from '../service/Api';
import {useNavigate} from 'react-router-dom';


const Container = styled(FormGroup)`
    width:50%;
    margin: 5% auto 0 auto;
    & > div{
        margin-top:20px;
    }
`
const defaultvalue = {
    name:"",
    username:"",
    email:"",
    phoneno:""
}
  

function Adduser() {
    const [user, setUser]= useState(defaultvalue);
    const navigate = useNavigate();
    function onvalueChange(e) {
        //console.log(e.target.name, e.target.value);
        setUser({...user, [e.target.name] : e.target.value})
        //console.log(user);
    }
    const addUserdetails = async() =>{
        await addUser(user);
        navigate('/all');
    }
 
    return (
       <Container>
            <Typography variant='h3'>Adduser</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onvalueChange(e)} name='name' />
            </FormControl>
         <FormControl>
                <InputLabel>User Name</InputLabel>
                <Input onChange={(e) => onvalueChange(e)} name='username'/>
            </FormControl>
         <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onvalueChange(e)} name='email'/>
            </FormControl>
         <FormControl>
                <InputLabel>PhoneNo.</InputLabel>
                <Input onChange={(e) => onvalueChange(e)} name='phoneno'/>
            </FormControl>
         <FormControl>
               <Button variant='contained' onClick={()=> addUserdetails()}>Adduser</Button>
            </FormControl>
       </Container>    
    );
}

export default Adduser;
