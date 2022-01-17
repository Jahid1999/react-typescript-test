import { useEffect } from "react";
import { Table } from 'react-bootstrap'

import { useDispatch } from 'react-redux';
import {useSelectorTyped } from '../state-redux-toolkit/store';
import {actioUsers, fetchUsers} from '../state-redux-toolkit/features/userSlice'

const Users= () => {

    const dispatch = useDispatch();

    const store = useSelectorTyped((state) => ({users:state.users.users , searchKey:state.tasks.searchKey}))

    useEffect(() => {
        fetchUsers().then(res => {
          dispatch(actioUsers.fetchUsers(res))
        })
        console.log(store.users);
        
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
                     store.searchKey ==="" ?
                     store.users.map(u =>
                        <tr key={u.id}>
                          <td>{u.id}</td>
                          <td>{u.first_name}</td>
                          <td>{u.last_name}</td>
                          <td>{u.email}</td> 
                        </tr>   
                        ) : store.users.filter(user => user.first_name.startsWith(store.searchKey)).map(u =>
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