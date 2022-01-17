import { useEffect } from "react";
import { Table } from 'react-bootstrap'

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../state-redux-toolkit/store';
import {fetchUsers} from '../state-redux-toolkit/features/userSlice'

const Users= () => {

    const dispatch = useDispatch();

    const users = useSelector((state: RootState) => state.users)
    const serachKey = useSelector((state: RootState) => state.tasks.searchKey)

    useEffect(() => {
        dispatch(fetchUsers())
        console.log(users);
        
      }, []);

  
    return (
      <div>
          <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                   {
                     serachKey ==="" ?
                       users.map(u =>
                        <tr key={u.id}>
                          <td>{u.id}</td>
                          <td>{u.first_name}</td>
                          <td>{u.last_name}</td>
                          <td>{u.email}</td> 
                        </tr>   
                        ) : users.filter(user => user.first_name.startsWith(serachKey)).map(u =>
                          <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.first_name}</td>
                            <td>{u.last_name}</td>
                            <td>{u.email}</td> 
                          </tr>   
                          )
                   }
                </tbody>
           </Table>
          
      </div>
    );
  }

export default Users;