
import  {useState, useEffect } from 'react';
import { Table, TableHead, TableCell,  TableRow, TableBody,  styled, Button } from '@mui/material'
import { getUsers,deleteUser} from "../service/Api.js";
import { Link } from 'react-router-dom';



const StyledTable = styled(Table)`
    width: 80%;
    margin: 50px 50px 50px 140px ;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #FFD9C0;
        color: #000000;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;


const AllUsers = () => {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        getAllUsers();
    }, []);

 const deleteUserDetails = async(id)=>{
    await deleteUser(id);
    getAllUsers();
 } 

    const getAllUsers = async () => {
        let response = await getUsers();
       setUsers(response.data);
        
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phoneno</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
               {
                users.map((user) =>(
                    <TRow key={user.userId}>
                        <TableCell> {user.userId} </TableCell>
                        <TableCell> {user.name} </TableCell>
                        <TableCell> {user.username} </TableCell>
                        <TableCell> {user.email} </TableCell>
                        <TableCell> {user.phoneno} </TableCell>
                        <TableCell> <Button color="primary" variant="contained" style={{marginRight:5}} component={Link} to={`/edit/${user.userId}`}>EDIT</Button> </TableCell>
                        <TableCell><Button color="secondary" variant="contained" onClick={()=> deleteUserDetails(user.userId)}>Delete</Button></TableCell>
                    </TRow>
                ))
               }
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers;