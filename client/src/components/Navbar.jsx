import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header =styled(AppBar)`
    background: #111111;
`;

const Tabs = styled(NavLink)`
    font-size : 20px;
    color :inherit;
    margin: auto 10px;
    text-decoration: none
`;


function Navbar() {
    return (
        <div>
            <Header position='static'>
                <Toolbar>
                    <Tabs to='/'>CURD</Tabs>
                    <Tabs to='/all'>All user</Tabs>
                    <Tabs to='/add'>Add user</Tabs>
                </Toolbar>
            </Header>
            
        </div>
    );
}

export default Navbar;